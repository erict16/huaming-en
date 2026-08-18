#!/usr/bin/env python3
"""Mirror public pages and files from intl-huaming.com (and a few extra hosts)."""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import time
import urllib.error
import urllib.parse
import urllib.request
from collections import deque
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "mirror" / "raw"
MANIFEST = ROOT / "mirror" / "MANIFEST.md"
MISSING = ROOT / "mirror" / "MISSING.md"
INVENTORY = ROOT / "content" / "site-inventory.md"
STATE = ROOT / "mirror" / "crawl-state.json"

PRODUCT_SLUGS = [
    "1-cm",
    "14-cmd",
    "15-cv",
    "4-cv2",
    "16-cm2",
    "17-shzv",
    "18-chvt",
    "19-hwv",
    "20-hwdk",
    "5-cvt",
    "21-cz",
    "22-hmdk",
    "7-w_l",
    "6-w_g",
    "8-zwc",
    "11-shm-d",
    "9-cma7",
    "13-shm-x",
    "24-hmiet",
    "25-et-sz6",
    "26-hmc-3c",
    "27-hmjk-ii",
    "28-zxjy",
    "29-shgv",
    "32-shzv",
    "33-shzvg",
    "34-shm-kx",
]

SEEDS = [
    "https://www.intl-huaming.com/",
    "https://www.intl-huaming.com/about/introduction",
    "https://www.intl-huaming.com/about/history",
    "https://www.intl-huaming.com/about/why-us",
    "https://www.intl-huaming.com/tap-changer",
    "https://www.intl-huaming.com/renewable-energy/general-introduction",
    "https://www.intl-huaming.com/renewable-energy/project-references",
    "https://www.intl-huaming.com/investor-relations",
    "https://www.intl-huaming.com/newsroom",
    "https://www.intl-huaming.com/career",
    "https://www.intl-huaming.com/contact-us",
    "https://www.intl-huaming.com/products-page-for-categories-listing",
    "https://www.intl-huaming.com/products-page",
    "https://www.intl-huaming.com/images/00_HuaMing/logo/LOGO-01.png",
    "https://www.intl-huaming.com/images/00_HuaMing/product/Retrofit%20Leaflet%20En.pdf",
    "https://www.huaming.com/",
    "https://huaming.com.tr/",
    "https://huaming.com.br/",
] + [
    f"https://www.intl-huaming.com/products-page/product/{slug}"
    for slug in PRODUCT_SLUGS
] + [
    f"https://www.intl-huaming.com/products-page-for-categories-listing/product/{slug}"
    for slug in PRODUCT_SLUGS
]

ALLOWED_HOSTS = {
    "www.intl-huaming.com",
    "intl-huaming.com",
    "www.huaming.com",
    "huaming.com",
    "huaming.com.tr",
    "www.huaming.com.tr",
    "huaming.com.br",
    "www.huaming.com.br",
}

SKIP_EXT = {
    ".css",
    ".js",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".map",
    ".ico",
}
KEEP_EXT = {
    ".pdf",
    ".zip",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".ppt",
    ".pptx",
    ".mp4",
    ".webm",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".svg",
    ".tif",
    ".tiff",
}
HTML_RE = re.compile(r"""(?:href|src|content)=['"]([^'"]+)['"]""", re.I)
ABS_RE = re.compile(r"""url\((['"]?)([^'")]+)\1\)""", re.I)

UA = "HuamingStaffMirror/1.0 (eric.tan@huaming.com; official-site rebuild)"


def norm_url(url: str, base: str | None = None) -> str | None:
    if not url:
        return None
    url = url.strip()
    if url.startswith(("mailto:", "tel:", "javascript:", "data:", "#")):
        return None
    if base:
        url = urllib.parse.urljoin(base, url)
    parts = urllib.parse.urlsplit(url)
    if parts.scheme not in ("http", "https"):
        return None
    host = parts.netloc.lower()
    if host not in ALLOWED_HOSTS:
        return None
    # drop fragments; keep query (Joomla needs it sometimes)
    path = parts.path or "/"
    if host.endswith("intl-huaming.com"):
        host = "www.intl-huaming.com"
    cleaned = urllib.parse.urlunsplit(("https", host, path, parts.query, ""))
    return cleaned


def local_path(url: str) -> Path:
    parts = urllib.parse.urlsplit(url)
    path = urllib.parse.unquote(parts.path)
    if path.endswith("/") or path == "":
        path = path + "index.html"
    if "." not in Path(path).name and not parts.query:
        path = path.rstrip("/") + "/index.html"
    if parts.query:
        q = re.sub(r"[^A-Za-z0-9._-]+", "_", parts.query)[:80]
        p = Path(path)
        path = str(p.with_name(p.name + "__" + q))
    rel = Path(parts.netloc) / path.lstrip("/")
    return RAW / rel


def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()


def load_state() -> dict:
    if STATE.exists():
        return json.loads(STATE.read_text())
    return {"seen": [], "ok": [], "fail": []}


def save_state(state: dict) -> None:
    STATE.write_text(json.dumps(state, indent=2))


def should_skip(url: str) -> bool:
    path = urllib.parse.urlsplit(url).path.lower()
    ext = Path(path).suffix
    if ext in SKIP_EXT:
        return True
    if "/media/vendor/" in path or "/components/com_" in path and ext in {".css", ".js", ""}:
        if ext in {".css", ".js"}:
            return True
    return False


def fetch(url: str, dest: Path, retries: int = 5) -> tuple[int, str, int]:
    dest.parent.mkdir(parents=True, exist_ok=True)
    tmp = dest.with_suffix(dest.suffix + ".part")
    last_err = ""
    for attempt in range(retries):
        cmd = [
            "curl",
            "-sS",
            "-L",
            "--retry",
            "3",
            "--retry-delay",
            "2",
            "-C",
            "-",
            "-A",
            UA,
            "--connect-timeout",
            "20",
            "--max-time",
            "180",
            "-w",
            "\n%{http_code}\t%{content_type}",
            "-o",
            str(tmp),
            url,
        ]
        try:
            proc = subprocess.run(cmd, capture_output=True, text=True, check=False)
            tail = (proc.stdout or "").strip().splitlines()[-1] if proc.stdout else ""
            status_s, _, ctype = tail.partition("\t")
            try:
                status = int(status_s)
            except ValueError:
                status = 0
            if proc.returncode != 0 and status not in {200, 206}:
                last_err = proc.stderr.strip() or f"curl exit {proc.returncode} status {status}"
                if status in (404, 410, 403):
                    return status, ctype, 0
                time.sleep(1.5 * (attempt + 1))
                continue
            if tmp.exists() and tmp.stat().st_size > 0:
                tmp.replace(dest)
                return 200 if status in (0, 200, 206) else status, ctype, dest.stat().st_size
            last_err = f"empty body status={status}"
        except Exception as e:  # noqa: BLE001
            last_err = str(e)
        time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(last_err or "fetch failed")


def extract_links(html: str, base: str) -> list[str]:
    found: list[str] = []
    for match in HTML_RE.finditer(html):
        u = norm_url(match.group(1), base)
        if u:
            found.append(u)
    for match in ABS_RE.finditer(html):
        u = norm_url(match.group(2), base)
        if u:
            found.append(u)
    return found


def main() -> None:
    RAW.mkdir(parents=True, exist_ok=True)
    state = load_state()
    seen = set(state.get("seen", []))
    ok_rows: list[dict] = state.get("ok", [])
    fail_rows: list[dict] = state.get("fail", [])
    q: deque[str] = deque()
    for seed in SEEDS:
        u = norm_url(seed)
        if u and u not in seen:
            q.append(u)

    pages = 0
    files = 0
    while q:
        url = q.popleft()
        if url in seen:
            continue
        if should_skip(url):
            seen.add(url)
            continue
        dest = local_path(url)
        try:
            status, ctype, size = fetch(url, dest)
            digest = sha256_bytes(dest.read_bytes()) if dest.exists() else ""
            row = {
                "url": url,
                "path": str(dest.relative_to(ROOT)),
                "bytes": size,
                "sha256": digest,
                "content_type": ctype,
                "status": status,
            }
            ok_rows.append(row)
            seen.add(url)
            if dest.exists() and dest.suffix.lower() in {".html", ""} or "text/html" in (ctype or ""):
                pages += 1
                try:
                    html = dest.read_text(errors="ignore")
                except Exception:
                    html = ""
                for link in extract_links(html, url):
                    if link not in seen:
                        path = urllib.parse.urlsplit(link).path.lower()
                        ext = Path(path).suffix
                        # stay on-site; follow html + keep-ext assets
                        if ext in KEEP_EXT or ext == "" or ext == ".html" or "/product" in path or "/about" in path or "/news" in path or "/component/" in path or "/images/" in path:
                            q.append(link)
            else:
                files += 1
            print(f"OK {status} {size:8d} {url}", flush=True)
        except Exception as e:  # noqa: BLE001
            fail_rows.append({"url": url, "error": str(e)})
            # Leave un-seen so a later run can retry IncompleteRead / timeouts.
            print(f"FAIL {url} :: {e}", flush=True)
        state = {"seen": sorted(seen), "ok": ok_rows, "fail": fail_rows}
        if len(seen) % 8 == 0:
            save_state(state)
        time.sleep(0.35)

    save_state(state)
    write_reports(ok_rows, fail_rows)


def write_reports(ok_rows: list[dict], fail_rows: list[dict]) -> None:
    lines = [
        "# Mirror manifest",
        "",
        f"Generated from public crawl. Files: {len(ok_rows)}.",
        "",
        "| URL | local path | bytes | sha256 | content-type |",
        "|-----|------------|------:|--------|--------------|",
    ]
    for row in sorted(ok_rows, key=lambda r: r["url"]):
        lines.append(
            f"| {row['url']} | `{row['path']}` | {row['bytes']} | `{row['sha256'][:16]}…` | {row.get('content_type', '')} |"
        )
    MANIFEST.write_text("\n".join(lines) + "\n")

    miss = ["# Missing / failed downloads", "", f"Count: {len(fail_rows)}", ""]
    for row in fail_rows:
        miss.append(f"- {row['url']} — {row.get('error', 'unknown')}")
    MISSING.write_text("\n".join(miss) + "\n")

    products = []
    news = []
    pages = []
    for row in ok_rows:
        url = row["url"]
        if "/product/" in url or "/products-page" in url:
            products.append(url)
        elif "/article/" in url or "/newsroom" in url:
            news.append(url)
        elif row["path"].endswith(".html") or "text/html" in (row.get("content_type") or ""):
            pages.append(url)
    inv = [
        "# Site inventory (extracted from crawl)",
        "",
        f"- HTML-ish pages: {len(pages)}",
        f"- Product-ish URLs: {len(products)}",
        f"- News-ish URLs: {len(news)}",
        "",
        "## Pages",
        "",
    ]
    for u in sorted(set(pages)):
        inv.append(f"- {u}")
    inv += ["", "## Products", ""]
    for u in sorted(set(products)):
        inv.append(f"- {u}")
    inv += ["", "## News", ""]
    for u in sorted(set(news)):
        inv.append(f"- {u}")
    INVENTORY.parent.mkdir(parents=True, exist_ok=True)
    INVENTORY.write_text("\n".join(inv) + "\n")


if __name__ == "__main__":
    main()

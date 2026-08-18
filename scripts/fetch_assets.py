#!/usr/bin/env python3
"""Download known live-site PDFs and /images/00_HuaMing assets."""

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import time
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UA = "HuamingStaffMirror/1.0 (eric.tan@huaming.com; official-site rebuild)"
PUB = ROOT / "public" / "downloads"
IMG = ROOT / "public" / "images"
RAW = ROOT / "mirror" / "raw" / "www.intl-huaming.com"
LOG = ROOT / "mirror" / "asset-fetch.log"


def slug_name(url: str) -> str:
    name = Path(urllib.parse.unquote(urllib.parse.urlsplit(url).path)).name
    name = re.sub(r"[^\w.\-]+", "-", name).strip("-")
    return name or "file.bin"


def curl(url: str, dest: Path) -> tuple[bool, int]:
    dest.parent.mkdir(parents=True, exist_ok=True)
    tmp = dest.with_suffix(dest.suffix + ".part")
    cmd = [
        "curl",
        "-sS",
        "-L",
        "--retry",
        "5",
        "--retry-delay",
        "2",
        "-C",
        "-",
        "-A",
        UA,
        "--connect-timeout",
        "20",
        "--max-time",
        "240",
        "-o",
        str(tmp),
        "--write-out",
        "%{http_code}",
        url,
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    code = (proc.stdout or "").strip()[-3:]
    if proc.returncode == 0 and tmp.exists() and tmp.stat().st_size > 200 and code in {"200", "206"}:
        tmp.replace(dest)
        return True, dest.stat().st_size
    return False, tmp.stat().st_size if tmp.exists() else 0


def main() -> None:
    pdfs = []
    pfile = ROOT / "mirror" / "pdf-urls.txt"
    if pfile.exists():
        pdfs = [ln.strip() for ln in pfile.read_text().splitlines() if ln.strip().startswith("http")]
    imgs = []
    ifile = ROOT / "mirror" / "img-urls.txt"
    if ifile.exists():
        for ln in ifile.read_text().splitlines():
            ln = ln.strip().split(")")[0].split(";")[0]
            if ln.startswith("/images/00_HuaMing/") and re.search(r"\.(png|jpg|jpeg|gif|webp)$", ln, re.I):
                imgs.append("https://www.intl-huaming.com" + urllib.parse.quote(ln, safe="/:%"))

    rows = []
    for url in pdfs:
        dest = PUB / slug_name(url)
        raw_dest = RAW / urllib.parse.unquote(urllib.parse.urlsplit(url).path).lstrip("/")
        ok, size = curl(url, dest)
        if ok:
            raw_dest.parent.mkdir(parents=True, exist_ok=True)
            if not raw_dest.exists():
                raw_dest.write_bytes(dest.read_bytes())
        print(f"{'OK' if ok else 'FAIL'} {size:9d} {url}", flush=True)
        rows.append({"url": url, "ok": ok, "bytes": size, "path": str(dest.relative_to(ROOT))})
        time.sleep(0.25)

    # unique images, skip decorative hexagons if too many — still fetch all unique clean paths
    seen = set()
    for url in imgs:
        key = urllib.parse.unquote(urllib.parse.urlsplit(url).path)
        if key in seen:
            continue
        seen.add(key)
        dest = IMG / "site" / Path(key).name
        # keep folder structure under public/images/site
        rel = Path(key.lstrip("/"))
        dest = ROOT / "public" / rel
        ok, size = curl(url, dest)
        print(f"{'OK' if ok else 'FAIL'} {size:9d} {key}", flush=True)
        rows.append({"url": url, "ok": ok, "bytes": size, "path": str(dest.relative_to(ROOT))})
        time.sleep(0.2)

    (ROOT / "mirror" / "asset-fetch.json").write_text(json.dumps(rows, indent=2))
    print(f"done {sum(1 for r in rows if r['ok'])}/{len(rows)}", flush=True)


if __name__ == "__main__":
    main()

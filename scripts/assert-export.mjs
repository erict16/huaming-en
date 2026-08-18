import { existsSync, statSync, readdirSync } from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const routes = [
  "index.html",
  "learn/index.html",
  "products/index.html",
  "products/oltc/index.html",
  "products/octc/index.html",
  "products/accessories/index.html",
  "products/cv2/index.html",
  "downloads/index.html",
  "about/index.html",
  "about/history/index.html",
  "about/why/index.html",
  "projects/index.html",
  "renewable/index.html",
  "news/index.html",
  "careers/index.html",
  "investors/index.html",
  "contact/index.html",
  "legal/privacy/index.html",
  "legal/imprint/index.html",
];

let fail = 0;
for (const r of routes) {
  const p = path.join(root, r);
  const ok = existsSync(p) && statSync(p).size > 0;
  console.log(ok ? `OK ${r}` : `FAIL missing ${r}`);
  if (!ok) fail++;
}

const cv2 = path.join(root, "products/cv2/index.html");
if (existsSync(cv2)) {
  const html = (await import("node:fs")).readFileSync(cv2, "utf8");
  const hasPdf = html.includes("CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf");
  console.log(hasPdf ? "OK cv2 links technical data PDF" : "FAIL cv2 missing PDF href");
  if (!hasPdf) fail++;
}

const dl = path.join("public", "downloads");
const pdfs = readdirSync(dl).filter((f) => f.endsWith(".pdf"));
console.log(`OK public/downloads count=${pdfs.length}`);
if (pdfs.length < 20) {
  console.log("FAIL expected ≥20 PDFs");
  fail++;
}

const home = (await import("node:fs")).readFileSync(path.join(root, "index.html"), "utf8");
for (const phrase of ["Tap changers for power transformers", "Find a type", "What this is"]) {
  const ok = home.includes(phrase);
  console.log(ok ? `OK home has “${phrase}”` : `FAIL home missing “${phrase}”`);
  if (!ok) fail++;
}

process.exit(fail ? 1 : 0);

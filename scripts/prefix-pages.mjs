import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

if (process.env.GH_PAGES !== "true") process.exit(0);

const PREFIX = "/huaming-en";
const SITE = "https://erict16.github.io/huaming-en";

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) walk(p, files);
    else if (/\.(html|css|js|json|xml|txt|map)$/i.test(name)) files.push(p);
  }
  return files;
}

function rewrite(s) {
  s = s.replaceAll("https://huaming-en.vercel.app", SITE);
  s = s.replace(
    /(href|src|action|poster)=(["'])\/(?!\/|huaming-en\/)/g,
    `$1=$2${PREFIX}/`,
  );
  s = s.replace(/url\(\s*(['"]?)\/(?!\/|huaming-en\/)/g, `url($1${PREFIX}/`);
  return s;
}

const files = walk(path.join(process.cwd(), "dist"));
let n = 0;
for (const f of files) {
  const before = readFileSync(f, "utf8");
  const after = rewrite(before);
  if (after !== before) {
    writeFileSync(f, after);
    n++;
  }
}
console.log(`prefixed ${n} files for GitHub Pages`);

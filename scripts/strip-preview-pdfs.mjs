import { readdirSync, unlinkSync } from "node:fs";
import path from "node:path";

const env = process.env.VERCEL_ENV;
if (!env || env === "production") process.exit(0);

const dir = path.join(process.cwd(), "dist", "downloads");
let n = 0;
try {
  for (const name of readdirSync(dir)) {
    if (!name.toLowerCase().endsWith(".pdf")) continue;
    unlinkSync(path.join(dir, name));
    n++;
  }
} catch (e) {
  if (e && e.code === "ENOENT") process.exit(0);
  throw e;
}
console.log(`stripped ${n} PDFs from preview dist/downloads`);

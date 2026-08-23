import { existsSync } from "node:fs";
import path from "node:path";

const EXTS = [".png", ".jpg", ".jpeg", ".webp"] as const;
/** Same oil-selector leaflet as CV. No separate SV still on disk. */
const ALIAS: Record<string, string> = { sv: "cv" };

export function productImageSrc(slug: string): string | null {
  for (const key of [slug, ALIAS[slug]]) {
    if (!key) continue;
    for (const ext of EXTS) {
      const rel = `/images/products/${key}${ext}`;
      const abs = path.join(process.cwd(), "public", rel);
      if (existsSync(abs)) return rel;
    }
  }
  return null;
}

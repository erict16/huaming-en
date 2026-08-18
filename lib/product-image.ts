import { existsSync } from "node:fs";
import path from "node:path";

const EXTS = [".png", ".jpg", ".jpeg", ".webp"] as const;

export function productImageSrc(slug: string): string | null {
  for (const ext of EXTS) {
    const rel = `/images/products/${slug}${ext}`;
    const abs = path.join(process.cwd(), "public", rel);
    if (existsSync(abs)) return rel;
  }
  return null;
}

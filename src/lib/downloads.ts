import { statSync } from "node:fs";
import path from "node:path";
import { downloadRows, type Download } from "./catalog";

const PROD_PDF_ORIGIN = "https://huaming-en.vercel.app";

export function allDownloads(): Download[] {
  return downloadRows.map((d) => {
    const filePath = path.join(process.cwd(), "public", "downloads", d.file);
    let bytes = 0;
    try {
      bytes = statSync(filePath).size;
    } catch {
      bytes = 0;
    }
    return { ...d, bytes };
  });
}

/** Preview builds omit the PDF tree. Point those links at production. */
export function pdfHref(file: string): string {
  const env = process.env.VERCEL_ENV;
  if (env && env !== "production") {
    return `${PROD_PDF_ORIGIN}/downloads/${encodeURIComponent(file)}`;
  }
  return `/downloads/${file}`;
}

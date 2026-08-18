import { statSync } from "node:fs";
import path from "node:path";
import { downloadRows, type Download } from "./catalog";

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

/** Parse year / HM0 numbers already present in file or title. Never invent. */

const HM = /(HM[O0](?:[\.\-]\d+)+|HM\.0(?:\.\d+)+)/i;
const YEAR = /(?:^|[^\d])(20\d{2})(?:[^\d]|$)/;

export function parseDocMeta(file: string, title: string): { docNo: string | null; year: string | null } {
  const src = `${file} ${title}`;
  const yr = src.match(YEAR);
  let year = yr ? yr[1] : null;
  const hm = src.match(HM);
  let docNo = hm ? hm[1].replace(/-/g, ".") : null;
  if (docNo) {
    const trail = docNo.match(/^(.*)\.(20\d{2})$/);
    if (trail) {
      docNo = trail[1];
      year = year ?? trail[2];
    }
  }
  return { docNo, year };
}

export function formatKind(kind: string): string {
  return kind.replace(/-/g, " ");
}

export function padIndex(n: number): string {
  return String(n).padStart(2, "0");
}

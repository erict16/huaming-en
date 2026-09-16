/** Strip the GitHub Pages base so route checks still see `/products/...`. */
export function pagePath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (base && pathname.startsWith(base)) {
    return pathname.slice(base.length) || "/";
  }
  return pathname;
}

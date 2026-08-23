# cycle: 3

page: / and /products/oltc and /products/cv2

mr_css: layout.min.css sha256 `a4b5bea9b689`

selector_hit: 75/75 `/`, 26/26 oltc, 28/28 cv2 (unchanged)

token_hit: 22/22

structure: 8/8

gaps closed this cycle:
- 18 CSS `url()` SVGs now on disk under `public/_assets/4fe0297b88c3f75f81bce57218e3ae92/` and `public/fileadmin/user_upload/icons/`
- `src/styles/layout.min.css` no longer uses `../Icons/` or `../Images/`; those are `/_assets/…`
- `dist/` after rebuild contains the 6 Images/Icons SVGs and 6 fileadmin icons

remaining:
- eot/ttf/woff in @font-face still 404 (woff2 is the one that ships)
- Vercel preview URL not captured (CLI login unknown)
- mega-nav still needs vendor.js at runtime

next_fix: try Vercel preview; if blocked, strip unused eot/ttf/woff from @font-face so the browser only requests woff2

closeness: 100 (same formula). This cycle is asset completeness, not a closeness drop.

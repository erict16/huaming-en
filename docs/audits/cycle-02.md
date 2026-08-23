# cycle: 2

page: / and /products/oltc and /products/cv2

mr_css: layout.min.css sha256 `a4b5bea9b689` (857650 bytes)

selector_hit:
- `/`: 75/75 (chrome classes from MR-source present in `dist/index.html`)
- `/products/oltc`: 26/26 including `product-list-plugin`, `tabelle`, `table-gradient`, `product-box`
- `/products/cv2`: 28/28 including `product-detail-wrapper`, `keyfacts`, `downloadcenter-rows`

token_hit: 22/22 in `src/styles/layout.min.css` (Azo Sans families, `#002a55`, `#e5bb29`, `#075898`, `#56aad8`, `#535252`, `#f6f6f2`, `#edece5`, stage `min-height:37.5vw`, header pad `2.5rem`, `.top-nav` height `1.375rem`)

structure: 8/8
- utility bar `.top-nav`: pass
- mega nav `.dropdown-menu-products` + `.dropdown-third`: pass
- search `#searchModal`: pass
- stage `.stage`: pass
- teaser row `.teaser-module` / `.teaser_element`: pass
- product/news `.teaser_products` / `.teaser_newsimpulse`: pass
- footerUp: pass
- footerDown: pass

`npm run build` → 50 pages, static. Dist CSS still has Azo Sans (142) and `#002a55` (122). 12 woff2 in `dist/fonts`. 62 PDFs. No VACUTAP / OILTAP / ECOTAP / TESSA / THE POWER BEHIND POWER in dist HTML. CHVT: "No English technical data PDF for CHVT on the live shop."

gaps:
- CSS still points at MR `/fileadmin/` and `../Images/Icons/` SVGs (arrows, bullets). Chrome arrows 404 until we mirror those.
- leftover eot/ttf/woff urls (woff2 ships; others warn at build)
- mega-nav behaviour depends on `vendor.min.js` + `scripts.min.js`
- no Vercel preview URL yet this cycle

next_fix: curl CSS-referenced icon SVGs into `public/` so layout.min.css arrows resolve

closeness `/`: 0.5*100 + 0.3*100 + 0.2*100 = 100
closeness oltc / cv2: same token + selector formula = 100

Caveat: this is class/token identity, not computed-style identity. Missing icon files still break some chrome paint.

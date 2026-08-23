# cycle: 1

page: / and /products/oltc (not built yet)

mr_css: layout.min.css sha256 `a4b5bea9b689` (857650 bytes)

selector_hit: 0/70 (classes we ship that exist in MR HTML chrome — no Astro dist)

token_hit: 0/22 (hex/font/size rows in MR-source that match our CSS exactly — Next.js still on disk)

structure: 0/8
- utility bar `.top-nav`: miss
- mega nav `.dropdown-menu-products`: miss
- search `#searchModal`: miss
- stage `.stage`: miss
- teaser row `.teaser-module` / `.teaser_element`: miss
- product/news `.teaser_products` / `.teaser_newsimpulse`: miss
- footerUp: miss (CSS-only class; add on `<footer>`)
- footerDown: miss

gaps:
- `package.json` is Next, not Astro
- no shipped CSS with `Azo Sans` / `#002a55` / `#e5bb29`
- mirror is on disk (cycle 1 deliverable)

next_fix: scaffold Astro; paste adapted layout.min.css; Header/Footer/stage with MR class names

closeness: 0.5*0 + 0.3*0 + 0.2*0 = 0

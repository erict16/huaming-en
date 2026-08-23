# cycle: 8

page: / and /products/oltc and /products/cv2

mr_css: layout.min.css sha256 `a4b5bea9b689` (source mirror, unchanged)

selector_hit: 93/93 `/` (audit now counts `swiper-controls` / pagination / news+product buttons), 26/26 oltc, 28/28 cv2

token_hit: 22/22

structure: 9/9 (added `stage-controls`)

motion (code, not a screenshot):
- `dist/js/mr/stage.min.js` contains `initStageSlider`
- `dist/js/mr/vendor.min.js` contains `Swiper`
- `dist/js/mr/scripts.min.js` contains `product-swiper` and `newsimpulse-swiper`
- `src/styles/animate.min.css` contains `.fadeIn` (MR home HTML does not ship `.animated`; scripts use jQuery `.fadeIn()`)
- home stage slides: 3 (`data-swiper-autoplay="5000"`)
- news swiper `id=""` so `nextEl` is `.swiper-button-next-news`
- product swiper `id="1"` + `.swiper-button-next-product1` (scripts.min.js concatenates `attr("id")`)

this cycle:
- HEAD `src/pages/index.astro` called `stageSlides.map` with no `stageSlides` — build-broken. Defined the 3 Huaming slides (CV2 / SHZV / HWV).
- Inner stages (`about` `contact` `downloads` `news` `oltc` `products` PDP `404`) now include `swiper-controls` from `mirror/mr/home.html` 2329–2334.
- Vercel project framework preset is **astro** (was Next.js in `vercel project inspect`). SSO protection disabled. CLI preview is HTTP 200 without login.
- `.vercelignore` skips `mirror/` `sketches/` `docs/`.

preview:
- https://huaming-h1frophk4-eric-tans-projects.vercel.app
- curl `/` 200: `page-header` `dropdown-menu-products` `stage-slider` `swiper-pagination` `footerUp`
- `GET /fonts/AzoSans/AzoSans2-Regular.woff2` 200 42388
- `GET /js/mr/stage.min.js` 200 1395
- `/products/oltc/` has `product-list-plugin` + `tabelle`

gaps:
- leftover: footer `.socialMedia` omitted (no MR social)
- leftover: `/typo3conf/ext/powermail/` gif/png still 404
- leftover from LOOP 19: mobile `third-nav-toggler`, language modal

next_fix: powermail icons if contact chrome uses them; otherwise third-nav-toggler from home.html

closeness: 100

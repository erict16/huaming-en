# Page audit vs MR

Source of truth: `mirror/mr/` HTML+CSS. Formula scores in `docs/CLOSENESS.md` can be 100 while paint is still wrong.

Updated: 2026-08-24 02:34 Asia/Shanghai. Cycle 35: OLTC list three tables.

| # | Route | MR | Formula | Paint / taxonomy | Status |
|---|-------|----|---------|------------------|--------|
| 1 | `/` | home.html | 100/100 | Stage 1265×448 cover at 1280. Logo contain. Product-swiper 3:2. News cards 3:2 plates. `.mobileTopNav`. | **pass** |
| 2 | `/products/` | portfolio.html | 37/37 | Tabs + wordcloud + 12-col grid. Inner header animation + blue-nav. Mobile stills full-width 3:2. | **pass** |
| 3 | `/products/oltc/` | oltc.html | 37/37 | Three tables: vacuum / other on-load / oil. Grid of 15. Inner blue-nav. | **pass** |
| 4 | `/products/octc/` | oltc.html shape | 32/32 | 3 boxes (WSL/WDG/ZWC). | **pass** |
| 5 | `/products/accessories/` | oltc.html shape | 32/32 | 9 boxes (MDU+monitor+other). | **pass** |
| 6 | `/products/oltc-oil/` … `/products/other/` | oltc.html shape | oltc-oil 32/32 | One list per family. Header second-level 10/10. | **pass** |
| 7 | `/products/cv2/` (and 26 other PDPs) | vacutap-vi.html | cv2 39/39 | Facts + PDFs + related. Stage centered 3:2 contain. SV uses existing CV still. PDP `#productName`. | **pass** |
| 8 | `/downloads/` | downloadcenter.html | 42/42 | introtext + kind tabs + Search tab `downloadCenterInputWrapper`. | **pass** |
| 9 | `/about/` | company.html | 39/39 | introtext + numbers-module. No factory photo (we do not have one). | **pass** |
| 10 | `/news/` | impulses.html | 36/36 | introtext + teaser_articles. Lead is gradient (no product-still cover). Slider plates 3:2 contain. | **pass** |
| 11 | `/news/{slug}/` | impulse-article.html | 34/34 | articleIntro / blueBox. Navy 16:6 band. Indonesia 7-5.png only (article photo). No product-still cover. | **pass** |
| 12 | `/contact/` | contact.html | 49/49 | introtext + powermail + contactfinder. | **pass** |
| 13 | `/search/` | search.html | 47/47 | Client filter (static build has no query string). | **pass** |
| 14 | `/404` | 404.html | 35/35 | textmedia-parallax, no MR photo. | **pass** |
| 15 | `/legal/imprint/` | imprint.html | 31/31 | text-module, Shanghai + Singapore. | **pass** |
| 16 | `/legal/privacy/` | imprint.html | 31/31 | text-module. | **pass** |

## Header mega-nav (not a page, but it is the taxonomy)

| Item | Before | After |
|------|--------|-------|
| Products | `/products/` | `/products/` |
| All types | `/products/` | `/products/` |
| OLTC, oil arc | `/products/` | `/products/oltc-oil/` |
| OLTC, vacuum | `/products/` | `/products/oltc-vacuum/` |
| OLTC, air / dry | `/products/` | `/products/oltc-dry/` |
| OLTC, gas | `/products/` | `/products/oltc-gas/` |
| OLTC, reactive / compartment | `/products/` | `/products/oltc-reactive/` |
| Step voltage regulator | `/products/` | `/products/regulator/` |
| OCTC / DETC | `/products/` | `/products/octc/` |
| Motor drive / MDU | `/products/` | `/products/mdu/` |
| Monitor / oil filter | `/products/` | `/products/monitor/` |
| Other | `/products/` | `/products/other/` |
| Type names (CM, CV2, …) | `/products/{slug}/` | unchanged PDP |

## Header (home vs inner)

Home: `page-header-sticky`, no `.blue-nav`. Inner: `page-header-animation` + `.blue-nav` (slides in after 648px). `.mobileTopNav` on all pages. Skip language modal, myReinhausen.

## Next failing row (overnight)

None required. Leftover paint: PDP `keyfact-headline`. Language modal and `.socialMedia` skipped.

Skip: language modal, `.socialMedia`.

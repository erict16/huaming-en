# Page audit vs MR

Source of truth: `mirror/mr/` HTML+CSS. Formula scores in `docs/CLOSENESS.md` can be 100 while paint is still wrong.

Updated: 2026-08-24 04:05 Asia/Shanghai. Cycle 46: article quote + numbers.

| # | Route | MR | Formula | Paint / taxonomy | Status |
|---|-------|----|---------|------------------|--------|
| 1 | `/` | home.html | 111/111 | Stage, introtext, two teaser-modules, numbers, parallax, sticky contact. | **pass** |
| 2 | `/products/` | portfolio.html | 39/39 | Tabs + wordcloud + 12-col grid + teaser frame. Inner blue-nav. | **pass** |
| 3 | `/products/oltc/` | oltc.html | 44/44 | Grey text-module then three table frames. Grid of 15. | **pass** |
| 4 | `/products/octc/` | oltc.html shape | 32/32 | 3 boxes (WSL/WDG/ZWC). | **pass** |
| 5 | `/products/accessories/` | oltc.html shape | 32/32 | 9 boxes (MDU+monitor+other). | **pass** |
| 6 | `/products/oltc-oil/` … `/products/other/` | oltc.html shape | oltc-oil 32/32 | One list per family. Header second-level 10/10. | **pass** |
| 7 | `/products/cv2/` (and 26 other PDPs) | vacutap-vi.html | cv2 59/59 | Facts + registers + related types + grey related-services (Downloads/Contact) + All types button. | **pass** |
| 8 | `/downloads/` | downloadcenter.html | 46/46 | introtext + kind tabs + Search tab `downloadCenterInputWrapper`. downloadItem PDF icon + download-link. | **pass** |
| 9 | `/about/` | company.html | 48/48 | introtext + numbers + three textmedia (no factory photo) + news swiper. | **pass** |
| 10 | `/news/` | impulses.html | 36/36 | introtext + teaser_articles. Lead is gradient (no product-still cover). Slider plates 3:2 contain. | **pass** |
| 11 | `/news/{slug}/` | impulse-article.html | chvt 43/43 | articleIntro / quote / sourced numbers. Navy 16:6 band. No author photo. | **pass** |
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

None required. Language modal and `.socialMedia` skipped.

Skip: language modal, `.socialMedia`.

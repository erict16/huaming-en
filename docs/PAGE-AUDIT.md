# Page audit vs MR

Source of truth: `mirror/mr/` HTML+CSS. Formula scores in `docs/CLOSENESS.md` can be 100 while paint is still wrong.

Updated: 2026-08-24 00:49 Asia/Shanghai. Cycle 25: PDP still 3:2 contain; home banner still cover.

| # | Route | MR | Formula | Paint / taxonomy | Status |
|---|-------|----|---------|------------------|--------|
| 1 | `/` | home.html | 99/99 | Stage 1265×448 cover at 1280. Logo contain. Product-swiper 3:2. | **pass** |
| 2 | `/products/` | portfolio.html | 31/31 | Tabs + wordcloud + 12-col grid. Tabs filter in-page (MR does). | **pass** |
| 3 | `/products/oltc/` | oltc.html | 29/29 | Stage + table + grid. All 6 OLTC families. | **pass** |
| 4 | `/products/octc/` | oltc.html shape | 26/26 | 3 boxes (WSL/WDG/ZWC). | **pass** |
| 5 | `/products/accessories/` | oltc.html shape | 26/26 | 9 boxes (MDU+monitor+other). | **pass** |
| 6 | `/products/oltc-oil/` … `/products/other/` | oltc.html shape | oltc-oil 26/26 | One list per family. Header second-level 10/10. | **pass** |
| 7 | `/products/cv2/` (and 26 other PDPs) | vacutap-vi.html | cv2 33/33 | Facts + PDFs + related. Stage is centered 3:2 contain (768×512 at 1280), not the home cinema crop. | **pass** |
| 8 | `/downloads/` | downloadcenter.html | 36/36 | introtext + kind tabs + Search tab `downloadCenterInputWrapper`. | **pass** |
| 9 | `/about/` | company.html | 33/33 | introtext + numbers-module. No factory photo (we do not have one). | **pass** |
| 10 | `/news/` | impulses.html | 29/29 | introtext + teaser_articles. | **pass** |
| 11 | `/news/{slug}/` | impulse-article.html | 28/28 | articleIntro / blueBox. Navy 16:6 band. CHVT stills + Indonesia 7-5.png where we already had files. | **pass** |
| 12 | `/contact/` | contact.html | 43/43 | introtext + powermail + contactfinder. | **pass** |
| 13 | `/search/` | search.html | 41/41 | Client filter (static build has no query string). | **pass** |
| 14 | `/404` | 404.html | 29/29 | textmedia-parallax, no MR photo. | **pass** |
| 15 | `/legal/imprint/` | imprint.html | 25/25 | text-module, Shanghai + Singapore. | **pass** |
| 16 | `/legal/privacy/` | imprint.html | 25/25 | text-module. | **pass** |

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

## Next failing row (overnight)

None required. Formula at target. Language modal and `.socialMedia` skipped.

Skip: language modal, `.socialMedia`.

# Page audit vs MR

Source of truth: `mirror/mr/` HTML+CSS. Formula scores in `docs/CLOSENESS.md` can be 100 while paint is still wrong.

Updated: 2026-08-24 06:45 Asia/Shanghai. Cycle 62: PDP news + download icon.

| # | Route | MR | Formula | Paint / taxonomy | Status |
|---|-------|----|---------|------------------|--------|
| 1 | `/` | home.html | 114/114 | Stage, introtext, teasers, numbers, parallax, factory/HQ text-module, sticky contact. | **pass** |
| 2 | `/products/` | portfolio.html | 42/42 | Tabs + wordcloud + noHit line + 12-col grid + teaser frame. | **pass** |
| 3 | `/products/oltc/` | oltc.html | 51/51 | Lab textmedia with image column + tables + InnerTeaser. | **pass** |
| 4 | `/products/octc/` | oltc.html shape | 38/38 | 3 boxes + InnerTeaser. | **pass** |
| 5 | `/products/accessories/` | oltc.html shape | 38/38 | 9 boxes + InnerTeaser. | **pass** |
| 6 | `/products/oltc-oil/` … `/products/other/` | oltc.html shape | oltc-oil 38/38 | One list per family + InnerTeaser. | **pass** |
| 7 | `/products/cv2/` (and 26 other PDPs) | vacutap-vi.html | cv2 63/63 | Facts + registers + related + related-services + news impulse + InnerTeaser. | **pass** |
| 8 | `/downloads/` | downloadcenter.html | 52/52 | introtext + kind tabs + Search tab + dc-select + icon-placeholder + InnerTeaser. | **pass** |
| 9 | `/about/` | company.html | 59/59 | introtext + numbers + quote + textmedia image column + news + InnerTeaser. | **pass** |
| 10 | `/news/` | impulses.html | 47/47 | introtext + three topicteaser rows (left/right). Indonesia photo only. | **pass** |
| 11 | `/news/{slug}/` | impulse-article.html | chvt 45/45 | articleIntro / quote / sourced numbers + InnerTeaser. | **pass** |
| 12 | `/contact/` | contact.html | 63/63 | introtext + named fieldwraps + telephone + contactfinder + InnerTeaser. | **pass** |
| 13 | `/search/` | search.html | 50/50 | Client filter + InnerTeaser. | **pass** |
| 14 | `/404` | 404.html | 39/39 | parallax + text-module + InnerTeaser. No MR photo. | **pass** |
| 15 | `/legal/imprint/` | imprint.html | 36/36 | introtext + text-module + InnerTeaser. | **pass** |
| 16 | `/legal/privacy/` | imprint.html | 36/36 | introtext + text-module + InnerTeaser. | **pass** |

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

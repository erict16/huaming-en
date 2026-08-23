# Page audit vs MR

Source of truth: `mirror/mr/` HTML+CSS. Formula scores in `docs/CLOSENESS.md` can be 100 while paint is still wrong.

Updated: 2026-08-24 05:06 Asia/Shanghai. Cycle 52: 404 text-module.

| # | Route | MR | Formula | Paint / taxonomy | Status |
|---|-------|----|---------|------------------|--------|
| 1 | `/` | home.html | 114/114 | Stage, introtext, teasers, numbers, parallax, factory/HQ text-module, sticky contact. | **pass** |
| 2 | `/products/` | portfolio.html | 39/39 | Tabs + wordcloud + 12-col grid + teaser frame. Inner blue-nav. | **pass** |
| 3 | `/products/oltc/` | oltc.html | 48/48 | Lab textmedia + tables + InnerTeaser. | **pass** |
| 4 | `/products/octc/` | oltc.html shape | 36/36 | 3 boxes (WSL/WDG/ZWC). Table + stage frames. | **pass** |
| 5 | `/products/accessories/` | oltc.html shape | 36/36 | 9 boxes (MDU+monitor+other). | **pass** |
| 6 | `/products/oltc-oil/` … `/products/other/` | oltc.html shape | oltc-oil 36/36 | One list per family. Header second-level 10/10. | **pass** |
| 7 | `/products/cv2/` (and 26 other PDPs) | vacutap-vi.html | cv2 59/59 | Facts + registers + related types + grey related-services (Downloads/Contact) + All types button. | **pass** |
| 8 | `/downloads/` | downloadcenter.html | 49/49 | introtext + kind tabs + Search tab + InnerTeaser. | **pass** |
| 9 | `/about/` | company.html | 53/53 | introtext + numbers + quote (chairman letter, no photo) + three textmedia + news. | **pass** |
| 10 | `/news/` | impulses.html | 41/41 | introtext + teaser_articles + white teaser-module. No topicteaser graphic. | **pass** |
| 11 | `/news/{slug}/` | impulse-article.html | chvt 43/43 | articleIntro / quote / sourced numbers. Navy 16:6 band. No author photo. | **pass** |
| 12 | `/contact/` | contact.html | 55/55 | introtext + powermail + contactfinder + InnerTeaser. | **pass** |
| 13 | `/search/` | search.html | 50/50 | Client filter + InnerTeaser. | **pass** |
| 14 | `/404` | 404.html | 39/39 | parallax + text-module + InnerTeaser. No MR photo. | **pass** |
| 15 | `/legal/imprint/` | imprint.html | 34/34 | introtext + text-module, Shanghai + Singapore. | **pass** |
| 16 | `/legal/privacy/` | imprint.html | 34/34 | introtext + text-module. | **pass** |

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

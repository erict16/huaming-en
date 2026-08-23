# cycle: 14

page: PDP breadcrumb, /search icons, /products/oltc introtext

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- PDP breadcrumb vs `vacutap-vi.html` ~2336: `arrow-right.svg` between crumbs. News slug same. OLTC list uses `introtext bg-white` + `.breadcrumb.d-none` like `oltc.html` ~2463.
- Search: `SearchBox.astro` from `search.html` (close.svg + search_blue.svg, `#resultCounterInfo`, `.load-more`). Results are in dist HTML (`.result-list-item`); JS only shows/hides on `?q=`.
- PDP related row: `.product-related-products` `.width-small` `.icon-plus` `.collapse-mobile-spec-number` from `vacutap-vi.html` ~2567 / ~12675.

selector_hit: `/` 97/97, `/search` 41/41, `/products/cv2` 33/33, `/products/oltc` 29/29
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` still skipped.

next_fix: imprint / 404 inner chrome (`imprint.html`, `404.html` textmedia-parallax)

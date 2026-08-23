# cycle: 13

page: /search

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- `/search` vs `mirror/mr/search.html` ~2331–2455: pi1 form (`.searchbox-grid` `.kesearch_searchbox` `.kesearchbox` `#ke_search_sword` `.kesGreyButt` `#resultCounterInfo` `#countedResults`) then pi2 `#kesearch_results` `#kesearch_pagebrowser_bottom` `.load-more`.
- Static search cannot read `?q=` at build. Client catalog JSON filters types / PDFs / news into `.result-list-item` `.result-title` `.result-teaser` from `ke_search_pi1.css`.
- `<template id="kesearch_item_tpl">` keeps `.result-list-item` in dist HTML.

selector_hit: `/` 97/97, `/search` 29/29
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` still skipped.

next_fix: inner breadcrumbs (`vacutap-vi.html` ~2336, `arrow-right.svg`)

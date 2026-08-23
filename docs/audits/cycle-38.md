# cycle: 38

page: `/downloads` downloadItem chrome from downloadcenter.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- Same row tree as MR: `.downloadcenter-row` > `.row` > name col + `.download-set` > `.downloadItem-link`.
- PDF icon, `.download-name`, `.version` when the filename already has a year, `.download-link` + `.download-icon`.
- Kind-tab / search filter still uses `data-search` on the link. No MR language dropdown.

selector_hit:
- `/` 100/100
- `/products` 37/37
- `/products/oltc` 37/37
- `/products/octc` 32/32
- `/products/accessories` 32/32
- `/products/oltc-oil` 32/32
- `/products/cv2` 52/52
- `/contact` 49/49
- `/downloads` 46/46
- `/about` 39/39
- `/news` 36/36
- `/search` 47/47
- `/404` 35/35
- `/legal/imprint` 31/31
- `/legal/privacy` 31/31
- `/news/chvt-longdong-800kv` 34/34

token_hit: 22/22
structure: 9/9
closeness: 100
paint: 62 downloadItem rows with icon-pdf_20.svg.

gaps: language modal, `.socialMedia` skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints

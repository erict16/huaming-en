# cycle: 37

page: PDP product-registers from vacutap-vi.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- MR PDP `.product-registers-container` is accordion + vertical `nav-pills` (Technical Data / Downloads), not a Downloads headline.
- Desktop: `d-none d-md-flex` + `data-js-register` + `.tab-pane`. Mobile: `.card` + `.card-header` + `.a-open` / `.a-clos`.
- Technical Data table is the type's existing rating strings. Labels only when the string starts Um / Positions / Step voltage. No invented amps.
- Downloads tab: `.download-center` rows, PDF icon from MR `fileadmin/__fileicons/icon-pdf_20.svg`, `.download-link` arrow. No language select.
- `.show-more-keyfacts-js` / `.show-less-keyfacts-js` siblings of `.keyfacts-list` (scripts.min.js shows them only when width≤739 and count>5).
- CHVT still: no English technical data PDF.

selector_hit:
- `/` 100/100
- `/products` 37/37
- `/products/oltc` 37/37
- `/products/octc` 32/32
- `/products/accessories` 32/32
- `/products/oltc-oil` 32/32
- `/products/cv2` 52/52
- `/contact` 49/49
- `/downloads` 42/42
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

gaps: language modal, `.socialMedia` skipped.

next_fix: `/downloads` downloadItem icon + `.download-link` from downloadcenter.html

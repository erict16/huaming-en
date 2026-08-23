# cycle: 33

page: inner chrome `page-header-animation` + `.blue-nav` from oltc.html / company.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- Home stays `page-header page-header-sticky`. Inner routes use `page-header-animation`.
- Inner pages get `.blue-nav-pos-absolute` / `.blue-nav` / `.blue-nav-header` / `.blue-nav-body` / `.light-menu` from `mirror/mr/oltc.html`.
- PDP: `#productDetailPageLink` + hidden `#productName` (scripts.min.js fills the label).
- Skip language modal, myReinhausen, Career, 100 Years.
- JS already in `scripts.min.js`: slideDown after 648px, hover `.active`.

selector_hit:
- `/` 99/99
- `/products` 36/36
- `/products/oltc` 34/34
- `/products/octc` 31/31
- `/products/accessories` 31/31
- `/products/oltc-oil` 31/31
- `/products/cv2` 38/38
- `/contact` 48/48
- `/downloads` 41/41
- `/about` 38/38
- `/news` 35/35
- `/search` 46/46
- `/404` 34/34
- `/legal/imprint` 30/30
- `/legal/privacy` 30/30
- `/news/chvt-longdong-800kv` 33/33

token_hit: 22/22
structure: 9/9
closeness: 100
paint: home has no blue-nav. About header "About". CV2 header empty until JS. Downloads light-menu drops Downloads.

gaps: language modal, `.socialMedia` skipped.

next_fix: `mobileTopNav` from home.html (mobile utility list), or family `table-white` / `table-grey`

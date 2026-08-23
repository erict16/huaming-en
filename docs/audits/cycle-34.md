# cycle: 34

page: `/` mobileTopNav from home.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- After mega-nav `ul.items`, MR has `.mobileTopNav` (display:none until max-width 1199px).
- News / Downloads / Contact + 中文 link. Skip myReinhausen and language modal.
- CSS already in layout.min.css.

selector_hit:
- `/` 100/100
- `/products` 37/37
- `/products/oltc` 35/35
- `/products/octc` 32/32
- `/products/accessories` 32/32
- `/products/oltc-oil` 32/32
- `/products/cv2` 39/39
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
paint: mobile hamburger now lists the utility links under the mega items.

gaps: language modal, `.socialMedia` skipped.

next_fix: family list `table-white` / `table-grey` from oltc.html, or leftover PDP keyfact-headline

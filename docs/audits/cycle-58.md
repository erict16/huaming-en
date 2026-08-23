# cycle: 58

page: `/contact` + `/downloads` list frames

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- contact.html wraps `.contactfinder` in `frame-type-list`. downloadcenter.html wraps `.download-center` the same way.
- Empty `frame-type-text` after the MR contact form skipped (no copy).

selector_hit: `/contact` 56/56, `/downloads` 50/50, `/news` 47/47
token_hit: 22/22
structure: 15/15
closeness: 100

gaps: language modal, `.socialMedia` skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints

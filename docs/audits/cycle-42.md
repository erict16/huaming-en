# cycle: 42

page: `/about` news swiper + list table frames

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- company.html ends with `.teaser_newsimpulse`. About now reuses `NewsImpulse` with existing news rows. No invented stories.
- About numbers wrapped in `frame-type-sitereinhausen_articlenumbers`.
- Product list pages: stage / introtext / each `.tabelle` wrapped in MR frame types (`sitereinhausen_stage` / `_introtext` / `_table`). OLTC has three table frames.
- Products index white teaser wrapped in `sitereinhausen_teaser`.

selector_hit: `/about` 44/44, `/products/oltc` 41/41, `/products` 39/39, `/` 111/111
token_hit: 22/22
structure: 13/13
closeness: 100

gaps: language modal, `.socialMedia`, sticky login, news topicteaser graphic, MR awards quote skipped (no photo / no that copy).

next_fix: leftover chrome only if a mapped page still misses a class that paints

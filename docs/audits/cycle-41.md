# cycle: 41

page: `/` second teaser-module + teaserproduct frame from home.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- MR home has two `.teaser-module` (gradient then white). White row after products: downloads / events / newsroom.
- We now ship the white row: Downloads / Contact / News. No events page to invent.
- `.teaser_products` wrapped in `frame-type-sitereinhausen_teaserproduct`.
- News swiper extracted to `NewsImpulse.astro` (`frame-type-sitereinhausen_teasernewsimpulse`).

selector_hit:
- `/` 111/111
- `/products` 39/39
- `/products/oltc` 41/41
- `/products/octc` 33/33
- `/products/accessories` 33/33
- `/products/oltc-oil` 33/33
- `/products/cv2` 53/53
- `/contact` 50/50
- `/downloads` 47/47
- `/about` 40/40
- `/news` 37/37
- `/search` 48/48
- `/404` 36/36
- `/legal/imprint` 32/32
- `/legal/privacy` 32/32
- `/news/chvt-longdong-800kv` 35/35

token_hit: 22/22
structure: 13/13
closeness: 100
paint: home teaser-module count 2.

gaps: language modal, `.socialMedia`, sticky login skipped.

next_fix: about teaser_newsimpulse + articlenumbers frame from company.html

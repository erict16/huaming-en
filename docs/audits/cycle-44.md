# cycle: 44

page: PDP product-related-services + product-detail-btn from vacutap-vi.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- MR PDP ends with `.product-related-services` (`.teaser-module.bg-grey`, two-column service teasers) and `.product-detail-btn` “More Products”.
- We do not ship MR service pages. Two-column teasers: Downloads + Contact. Button: All types → `/products/`.
- Introtext now has `.subline` (family name) + `.intro` (one-liner). No intro-withImage gallery (stage already holds the still).

selector_hit: `/products/cv2` 59/59, `/products/oltc` 44/44, `/` 111/111
token_hit: 22/22
structure: 13/13
closeness: 100

gaps: language modal, `.socialMedia`, sticky login, news topicteaser graphic, MR awards quote skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints

# cycle: 57

page: `/news` topicteaser from impulses.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- News index was one teaser_articles row. MR impulses is repeating `frame-type-sitereinhausen_topicteaser` (left/right).
- Three topicteaser rows from the live newsroom list. Indonesia lead uses the existing 7-5.png. Other leads use `.image-placeholder` (`#075898`). No MR photos, no MR topic pages.
- Slider cards now use `news-overview-item-text` / `h4.product-title` / `p.intro` / `.link-download` plus `.anim-overlay.bg-secColor`.

selector_hit: `/news` 47/47
token_hit: 22/22
structure: 15/15
closeness: 100

gaps: language modal, `.socialMedia` skipped.

next_fix: wrap contactfinder and download-center in `frame-type-list`

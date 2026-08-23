# cycle: 30

page: `/news` article teasers

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle (file:selector from `impulses.html` ~2910):
- `.articleWrapper .articleImage.media-16-9` on slider cards. Lead `.blue-teaser` gets CHVT still when the first story is CHVT.
- 16:9 paper plate if we have no still. No invented photos.

selector_hit: `/news` 30/30
token_hit: 22/22
structure: 9/9
closeness: 100
paint: 11 `articleImage`, chvt.png on lead + one slider, 7-5.png on Indonesia.

gaps: language modal, `.socialMedia` skipped.

next_fix: none required unless paint regresses

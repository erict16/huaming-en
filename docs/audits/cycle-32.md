# cycle: 32

page: `/news/{slug}` articleIntro 16:6 cover

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- Cycle 31: product stills are not news photography. Article 16:6 band was still cover-cropping `chvt.png`.
- `newsArticlePhoto` is Indonesia `7-5.png` only. CHVT stories stay navy plate.
- 3:2 contain cards (home news, news slider) still use `newsBandSrc` (CHVT still OK there).

selector_hit: `/news/chvt-longdong-800kv` 28/28
token_hit: 22/22
structure: 9/9
closeness: 100
paint: CHVT article has no chvt.png; Indonesia has 7-5.png.

gaps: language modal, `.socialMedia` skipped.

next_fix: none required unless paint regresses

# cycle: 27

page: /products mobile card stills

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- MR `@media (max-width:575.98px)` sets `.product-box .swiper-image{width:50%;padding-bottom:50%}` for portrait shots.
- Huaming stills are 3:2. Override to `width:100%;padding-bottom:66.666%`.
- Chrome 390: wrap 359×239 r=1.5, contain, 15 OLTC boxes visible, no overflow-x.
- Home mobile stage already 390×320 cover (20rem), overlay 390×231 below the image.

selector_hit: unchanged
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` skipped. SV still has no photo (do not invent).

next_fix: none required unless paint regresses

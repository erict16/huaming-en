# cycle: 7

page: / and /products/oltc

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle: product cards use MR inner wrappers from `oltc.html` / `home.html`:
- `.product-image-wrapper`
- `.swiper-text-container`
- `.swiper-text`

selector_hit `/`: 85/85
token_hit: 22/22
structure: 8/8
closeness: 100

Still missing vs MR home (not shipped, TYPO3/language/mobile):
`frame-type-sitereinhausen_*`, `languageMenu`, `mobileTopNav`, `modalLogo`, `third-nav-toggler`, `swiper-button-*-product1852` (MR content id)

next_fix: optional third-nav-toggler for mobile mega; not a token miss

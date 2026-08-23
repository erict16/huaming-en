# cycle: 15

page: /legal/imprint, /legal/privacy, /404 (also inner breadcrumbs)

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle (file:selector from `mirror/mr/imprint.html` ~2217 and `404.html` ~2320):
- imprint/privacy: `.frame-type-sitereinhausen_text` `.text-module.bg-white` `.headline` `.text-wrapper`. Huaming factory + Singapore HQ from `content/offices.json`. No MR legal copy.
- 404: `.frame-type-sitereinhausen_mediaparallax` `.textmedia-parallax.color-blue` `.parallax-bg` `.media-content` `.copy-content` `.cta.cta-outline`
- inner pages: `.breadcrumb.d-none` + `arrow-right.svg` on about, contact, downloads, news, legal (same as company.html / contact.html hidden trail)

selector_hit: `/` 97/97, oltc 29/29, cv2 33/33, contact 32/32, downloads 27/27, about 27/27, news 27/27, search 41/41, `/404` 27/27, imprint 25/25, privacy 25/25
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` still skipped.

next_fix: none required for formula

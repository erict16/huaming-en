# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 08. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`. Motion from `dist/js/mr/*`. Live preview: curl 200 (SSO off).

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 93/93 | 22/22 | 9/9 | 100 |
| `/products/oltc` | 26/26 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 28/28 | 22/22 | (selector) | 100 |

Motion: `initStageSlider` + `Swiper` + product/news inits in dist JS. Home stage 3 slides.

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula at target.

Leftover (not in formula): `/typo3conf/ext/powermail/` images 404; footer `.socialMedia` omitted.

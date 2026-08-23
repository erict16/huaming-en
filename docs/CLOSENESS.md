# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 40. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 107/107 | 22/22 | 13/13 | 100 |
| `/products` | 38/38 | 22/22 | (selector) | 100 |
| `/products/oltc` | 38/38 | 22/22 | (selector) | 100 |
| `/products/octc` | 33/33 | 22/22 | (selector) | 100 |
| `/products/accessories` | 33/33 | 22/22 | (selector) | 100 |
| `/products/oltc-oil` | 33/33 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 53/53 | 22/22 | (selector) | 100 |
| `/contact` | 50/50 | 22/22 | (selector) | 100 |
| `/downloads` | 47/47 | 22/22 | (selector) | 100 |
| `/about` | 40/40 | 22/22 | (selector) | 100 |
| `/news` | 37/37 | 22/22 | (selector) | 100 |
| `/search` | 48/48 | 22/22 | (selector) | 100 |
| `/404` | 36/36 | 22/22 | (selector) | 100 |
| `/legal/imprint` | 32/32 | 22/22 | (selector) | 100 |
| `/legal/privacy` | 32/32 | 22/22 | (selector) | 100 |
| `/news/chvt-longdong-800kv` | 35/35 | 22/22 | (selector) | 100 |

Paint counts: `/products/oltc` 15 boxes, `/products/octc` 3, `/products/accessories` 9, `/products/oltc-oil` 4, `/products/oltc-vacuum` 6. Header family second-level 10/10.

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula at target.

Leftover (not in formula): language modal; footer `.socialMedia` omitted on purpose.

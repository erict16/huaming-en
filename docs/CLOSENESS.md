# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 26. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 99/99 | 22/22 | 9/9 | 100 |
| `/products` | 31/31 | 22/22 | (selector) | 100 |
| `/products/oltc` | 29/29 | 22/22 | (selector) | 100 |
| `/products/octc` | 26/26 | 22/22 | (selector) | 100 |
| `/products/accessories` | 26/26 | 22/22 | (selector) | 100 |
| `/products/oltc-oil` | 26/26 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 33/33 | 22/22 | (selector) | 100 |
| `/contact` | 43/43 | 22/22 | (selector) | 100 |
| `/downloads` | 36/36 | 22/22 | (selector) | 100 |
| `/about` | 33/33 | 22/22 | (selector) | 100 |
| `/news` | 29/29 | 22/22 | (selector) | 100 |
| `/search` | 41/41 | 22/22 | (selector) | 100 |
| `/404` | 29/29 | 22/22 | (selector) | 100 |
| `/legal/imprint` | 25/25 | 22/22 | (selector) | 100 |
| `/legal/privacy` | 25/25 | 22/22 | (selector) | 100 |
| `/news/chvt-longdong-800kv` | 28/28 | 22/22 | (selector) | 100 |

Paint counts: `/products/oltc` 15 boxes, `/products/octc` 3, `/products/accessories` 9, `/products/oltc-oil` 4, `/products/oltc-vacuum` 6. Header family second-level 10/10.

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula at target.

Leftover (not in formula): language modal; footer `.socialMedia` omitted on purpose.

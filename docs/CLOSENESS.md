# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 50. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 114/114 | 22/22 | 15/15 | 100 |
| `/products` | 39/39 | 22/22 | (selector) | 100 |
| `/products/oltc` | 46/46 | 22/22 | (selector) | 100 |
| `/products/octc` | 36/36 | 22/22 | (selector) | 100 |
| `/products/accessories` | 36/36 | 22/22 | (selector) | 100 |
| `/products/oltc-oil` | 36/36 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 59/59 | 22/22 | (selector) | 100 |
| `/contact` | 53/53 | 22/22 | (selector) | 100 |
| `/downloads` | 47/47 | 22/22 | (selector) | 100 |
| `/about` | 53/53 | 22/22 | (selector) | 100 |
| `/news` | 41/41 | 22/22 | (selector) | 100 |
| `/search` | 48/48 | 22/22 | (selector) | 100 |
| `/404` | 36/36 | 22/22 | (selector) | 100 |
| `/legal/imprint` | 34/34 | 22/22 | (selector) | 100 |
| `/legal/privacy` | 34/34 | 22/22 | (selector) | 100 |
| `/news/chvt-longdong-800kv` | 43/43 | 22/22 | (selector) | 100 |

Paint counts: `/products/oltc` 15 boxes, `/products/octc` 3, `/products/accessories` 9, `/products/oltc-oil` 4, `/products/oltc-vacuum` 6. Header family second-level 10/10.

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula at target.

Leftover (not in formula): language modal; footer `.socialMedia` omitted on purpose.

# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 35. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 100/100 | 22/22 | 9/9 | 100 |
| `/products` | 37/37 | 22/22 | (selector) | 100 |
| `/products/oltc` | 37/37 | 22/22 | (selector) | 100 |
| `/products/octc` | 32/32 | 22/22 | (selector) | 100 |
| `/products/accessories` | 32/32 | 22/22 | (selector) | 100 |
| `/products/oltc-oil` | 32/32 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 39/39 | 22/22 | (selector) | 100 |
| `/contact` | 49/49 | 22/22 | (selector) | 100 |
| `/downloads` | 42/42 | 22/22 | (selector) | 100 |
| `/about` | 39/39 | 22/22 | (selector) | 100 |
| `/news` | 36/36 | 22/22 | (selector) | 100 |
| `/search` | 47/47 | 22/22 | (selector) | 100 |
| `/404` | 35/35 | 22/22 | (selector) | 100 |
| `/legal/imprint` | 31/31 | 22/22 | (selector) | 100 |
| `/legal/privacy` | 31/31 | 22/22 | (selector) | 100 |
| `/news/chvt-longdong-800kv` | 34/34 | 22/22 | (selector) | 100 |

Paint counts: `/products/oltc` 15 boxes, `/products/octc` 3, `/products/accessories` 9, `/products/oltc-oil` 4, `/products/oltc-vacuum` 6. Header family second-level 10/10.

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula at target.

Leftover (not in formula): language modal; footer `.socialMedia` omitted on purpose.

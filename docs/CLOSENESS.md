# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 19. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 99/99 | 22/22 | 9/9 | 100 |
| `/products/oltc` | 29/29 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 33/33 | 22/22 | (selector) | 100 |
| `/contact` | 41/41 | 22/22 | (selector) | 100 |
| `/downloads` | 27/27 | 22/22 | (selector) | 100 |
| `/about` | 27/27 | 22/22 | (selector) | 100 |
| `/news` | 27/27 | 22/22 | (selector) | 100 |
| `/search` | 41/41 | 22/22 | (selector) | 100 |
| `/404` | 29/29 | 22/22 | (selector) | 100 |
| `/legal/imprint` | 25/25 | 22/22 | (selector) | 100 |
| `/legal/privacy` | 25/25 | 22/22 | (selector) | 100 |
| `/news/chvt-longdong-800kv` | 28/28 | 22/22 | (selector) | 100 |

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula at target.

Leftover (not in formula): language modal, footer `.socialMedia` omitted on purpose.

# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 02. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 75/75 | 22/22 | 8/8 | 100 |
| `/products/oltc` | 26/26 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 28/28 | 22/22 | (selector) | 100 |

Class names and hex/font rows match. CSS icon urls under `/fileadmin/` still 404 — that is the next slice, not a screenshot miss.

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula already at target; leftover is asset urls.

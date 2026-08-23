# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 07. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`. Live preview checked in cycle 05 via `vercel curl`.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 85/85 | 22/22 | 8/8 | 100 |
| `/products/oltc` | 26/26 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 28/28 | 22/22 | (selector) | 100 |

Class names and hex/font rows match. CSS icon urls under `/fileadmin/` still 404 — that is the next slice, not a screenshot miss.

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula already at target; leftover is asset urls.

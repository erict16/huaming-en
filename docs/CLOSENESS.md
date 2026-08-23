# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 11. Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`. Live CSS hashes unchanged.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 97/97 | 22/22 | 9/9 | 100 |
| `/products/oltc` | 26/26 | 22/22 | (selector) | 100 |
| PDP `/products/cv2` | 28/28 | 22/22 | (selector) | 100 |
| `/contact` | 31/31 | 22/22 | (selector) | 100 |
| `/downloads` | 26/26 | 22/22 | (selector) | 100 |

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75. Formula at target.

Leftover (not in formula): language modal, footer `.socialMedia` omitted on purpose.

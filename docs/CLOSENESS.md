# Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`

Last audit: cycle 01. No Astro dist yet, so hits are 0.

| page | selector | token | structure | closeness |
|------|----------|-------|-----------|----------:|
| `/` | 0/70 | 0/22 | 0/8 | 0 |
| `/products/oltc` | 0/40 | 0/22 | — | 0 |
| PDP `/products/cv2` | 0/30 | 0/22 | — | 0 |

Target by morning: `/` ≥ 85, OLTC list + one PDP ≥ 75.

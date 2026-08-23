# Overnight status — stopped

Stopped: 2026-08-24 07:03 Asia/Shanghai (hard stop 07:00).
Branch: `feat/mr-astro-lock`
HEAD: `9c68a41`
Last cycle: 62
Scheduler `01a02f00e2d6` deleted. No new cycle after 07:00.

## Preview

https://huaming-6efgya1z5-eric-tans-projects.vercel.app

Vercel project `huaming-en`, framework **astro**, SSO off. Repo stays private.

## Closeness

Formula: `0.5 * selector_hit% + 0.3 * token_hit% + 0.2 * structure_pass%`
Source: `dist/*.html` + `src/styles/layout.min.css` vs `mirror/mr`. Not screenshots.

| page | selector | closeness |
|------|----------|----------:|
| `/` | 114/114, structure 15/15 | 100 |
| `/products` | 42/42 | 100 |
| `/products/oltc` | 51/51 | 100 |
| PDP `/products/cv2` | 63/63 | 100 |
| `/contact` | 63/63 | 100 |
| `/downloads` | 52/52 | 100 |
| `/about` | 59/59 | 100 |
| `/news` | 47/47 | 100 |
| `/search` | 50/50 | 100 |
| `/404` | 39/39 | 100 |
| `/legal/imprint` `/legal/privacy` | 36/36 | 100 |
| `/news/chvt-longdong-800kv` | 45/45 | 100 |

Token hit 22/22 (Azo Sans, `#002a55`, `#e5bb29`, …). Morning target was `/` ≥ 85 and OLTC list + one PDP ≥ 75. Formula is at 100 on every mapped page.

## Shipped

Astro static site. Huaming copy and products. Chrome, type, color, nav, stage, teasers, lists, PDP, footer from MR HTML/CSS in `mirror/mr/`. 62 code-diff cycles. Family second-level nav goes to list URLs, not `/products/` dump.

## Skipped on purpose

Language modal. Footer `.socialMedia`. myReinhausen / sticky login. Captcha. MR trademarks (VACUTAP / OILTAP / ECOTAP / TESSA / “THE POWER BEHIND POWER”). News kompetenz graphic (no that photo). MR awards photos. PDP product-team VCF.

## Receipts

`docs/CLOSENESS.md`, `docs/PAGE-AUDIT.md`, `docs/LOOP.md`, `docs/audits/cycle-01.md` … `cycle-62.md`, `docs/MR-source.md`.

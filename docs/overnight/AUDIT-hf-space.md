# Audit — header/footer spacing

Spacing only. No homepage redesign, no logo recrop, no copy change.

## What was off

- Header `align-items:center` was already set. The lockup still sat 10px high: MR `a { margin-bottom: 1.25rem }` on `.hm-logo`. Nav/util/search did not have that leftover, so they sat on the bar mid and the mark did not.
- Inner `padding: .55rem 0` plus a 2.5rem search box made Contact-to-icon look airy vs Downloads-Contact.
- Primary gap was 1.85rem, util 1.35rem, bar column-gap 2rem. Uneven clusters.
- Footer labels already lined up. Body rhythm was loose (`p` margins plus the same `a` 1.25rem on catalogue links). Vertical padding 2.75 / 2.25 felt like a empty navy band.

## What changed

Header (`.hm-bar` / `.hm-bar-inner`):

- Dropped inner vertical padding. Bar inner is 4.75rem (4.5rem on ≤900). Steel 3px stays on `.hm-bar`.
- Logo, primary, util, search share a 3rem box, `line-height: 1`, `align-items: center`. Lockup stays `height: 3rem` of cropped ink.
- One gap: 1.75rem (28px) logo→Products, Products→About→News, Downloads→Contact→icon.
- Zeroed flex-child margins so MR `a { margin-bottom: 1.25rem }` cannot lift or drop the mark.

Footer (`.hm-foot` / `.hm-foot-grid`):

- Columns are flex column, `gap: .35rem`. Labels share a top y. Names (nth-child 2) share a y.
- Label keeps a 0.2rem extra before the name. `p` and `a` margins zeroed (`!important` on `p`) so catalogue links match address rhythm.
- Padding 2rem / 1.75rem. Steel top rule unchanged.

Playwright 1280: logo/nav/util/svg mid all 38px in a 76px inner (Δ 0). Gaps all 28px. Footer label y Δ 0, name y Δ 0. Logo 48px. 375: logo/search/menu mid 36px.

## Shots

- `docs/overnight/shots/hf-header-1280.png`
- `docs/overnight/shots/hf-footer-1280.png`
- `docs/overnight/shots/hf-header-375.png`

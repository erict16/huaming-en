# Audit — homepage 02 wired (`overnight-unclone`)

Shiloh pick: sketch 02. Not 03, not 04.

## What shipped

- Site chrome is the navy bar (`#00428C`, steel `#0071A9` rule). Products / About / News. Utility: News, Downloads, Contact. Mobile Menu. IBM Plex Sans.
- `/` first screen: CM2 still, 3:2 contain, whole unit, navy field, no cinema crop, no caption painted on the tank.
- Data ribbon: 4–6 weeks, PDF downloads, intl@huaming.com. Copy names Shanghai factory and Singapore headquarters.
- Type strip: CV2, CM2, SHZV, HWV, WSL, CMA7. 3:2 contain thumbs.
- News: numbered list (Longdong CHVT, Singapore HQ). Not MR teaser tiles. No gold.
- Footer: navy, Downloads / Contact / Imprint / Privacy.

## Fine

- Inner product stages still 3:2 contain (`8a679e6` rules left in place). CM2 PDP still shows the whole unit.
- `astro build`: 61 pages, no errors.
- No VACUTAP / gold / wave / generated photos.

## Small fixes while wiring

- `main { padding-top: 6.875rem }` from the old tall MR header left a white hole under the navy bar. Zeroed it.
- MR `ol li` rules stacked news titles one word per line. News is a `ul` now.
- Footer links inherited gold arrows. Stripped `::before` / `::after` on `.hm-foot`.

## Later

- Inner pages still use InnerTeaser (gold “Read more” tiles) and the old product-list chrome. Out of this turn.
- Header search icon is gone (02 did not have one). `/search/` still exists.
- Products mega-swiper is gone. Types are on `/products/` and the home strip.

## Worse?

- Inner pages lost the MR three-column footer and the blue overlay drawer. That is the unclone, not a functional loss. Types, PDFs, and contact still resolve.
- No inner product photo regression spotted on CM2.

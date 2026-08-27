# Audit — homepage UI pass (logo, Factory|HQ, header/footer)

Eric: logo too small, homepage arrangement, header/footer cheap, Factory|Singapore unreadable (dark text on navy).

## What was ugly

- Header printed the word “Huaming” next to a square PNG. The lockup only fills the middle third of that square, so `height:1.75rem` showed about 15px of ink. Tiny inverted stamp.
- MR `h2 { color:#002a55 }` beat our HQ styles. “Singapore” and the HQ label sat dark on `#00428C`. Body copy was already white. That is the circled fail.
- MR `p+h2` / `h2+p { margin-top:3.75rem !important }` opened a 60px hole between FACTORY and Shanghai (same on the navy card). Columns did not share a baseline.
- Welcome links wrapped 2+1 and inherited leftover link padding, so they sat indented under the lede.
- News rows were tall empty bands. Header was a thin leftover bar. Footer crop looked like addresses with no labels.

## What changed

- Cropped `public/brand/logo.png` to the lockup. Header mark is `height:3rem` of actual ink (~48×113). Word “Huaming” next to the mark is gone.
- HQ card: labels, H2, body, links are white (`!important`, scoped to `.hm-home-hq`). Factory stays ink on grey. Same padding on both columns. Beat `p+h2` so the city name sits on the label.
- Welcome acts on one row at 1280, stacked at ~375. Latest products still 6/3/2. News title sits on the summary.
- Header min-height 5.25rem, IBM Plex, steel 3px rule, heavier primary nav. Footer same steel rule, three labelled columns (Factory / International headquarters / Catalogue).

Homepage concept unchanged: Welcome + factory photo, Shanghai | Singapore, Latest products, news.

Playwright (1280): logo 48×113, no extra name span, HQ H2 `rgb(255,255,255)`, factory H2 `rgb(38,38,38)`, place-to-H2 gap 3px. `/products/` H1 still ink. About facts still four columns.

## Longshot paths

All under `docs/overnight/shots/`:

- `header-1280.png` — lockup, not a stamp
- `home-fold-1280.png` — welcome + Factory|Singapore
- `homes-1280.png` — white Singapore on navy
- `footer-1280.png` — three labelled columns
- `home-full-1280.png`
- `header-375.png`, `home-fold-375.png`, `home-375.png`

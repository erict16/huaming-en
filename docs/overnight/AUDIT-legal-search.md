# Audit — leftover pages (search, 404, imprint, privacy)

Homepage, products, family lists, PDPs, downloads, contact, about, and news not restyled this turn.

## What shipped

- `/search/`: catalogue intro, IBM Plex field, GET `?q=`. Same index as before (types, PDFs, news). Results as a list, show more after 10.
- `/404/` (`src/pages/404.astro`): “Page missing” plus Products · Downloads · Contact. No parallax.
- `/legal/imprint/`: Shanghai factory + Singapore HQ + credit code + intl@huaming.com. No Reinhausen names.
- `/legal/privacy/`: static-site notice, mail to Singapore. Copy kept.

## Fine

- `astro build`: 61 pages.
- InnerTeaser left at the foot of these pages.

## Leftover

- Astro still writes `/404.html`. Trailing-slash `/404/` is the catalogue page. Bare `/404` can hit the Astro default.

## Worse?

- Search still filters the same rows. Imprint still has factory and HQ.

# Audit — downloads and contact chrome

Homepage, `/products/`, family lists, and PDPs not restyled this turn. 3:2 contain not undone.

## What shipped

- `/downloads/`: catalogue intro, kind tabs (All / technical data / leaflet / manual / type test / Search), full PDF rows still listed, no email gate. MR subnav and kesearch chrome gone.
- `/contact/`: Singapore HQ and Shanghai factory on the first screen, `intl@huaming.com`, mailto form (name, email, about, office, company, phone, message, privacy). Other offices listed below. No “undefined” next to Send.
- InnerTeaser at the foot of both pages left as-is (already navy).

## Fine

- `astro build`: 61 pages.
- Download files still come from `allDownloads()`. Addresses still come from `offices.json` (Singapore Tai Seng, Shanghai Tongpu Road).

## Leftover

- PDF row markup is still ProductDownloadRows (icon + version + size). Painted, not rebuilt.
- InnerTeaser tiles.

## Worse?

- No missing PDFs. No missing factory/HQ. Form still opens mail to intl@huaming.com.

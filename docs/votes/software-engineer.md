# Software engineer

Date: 2026-08-19  
Role: Software engineer  
Independent. Read `docs/plans/index.md` and plan-01..06 only. Did not read other ballots. Did not start the Next app.

## Stack

Locked: Next.js App Router, TypeScript, Tailwind v4, `output: 'export'`.

No reason to change it. Tonight is a route tree, a static file table, a client filter, and crawl HTML turned into MDX or JSON. That does not need a server, a CMS, or a search API.

## Ranked top 3

Implementability tonight: routes, download library, search, crawl import.

1. **Plan 01 — Utility handbook** (`huaming-en`). Routes match the required job list with no extras. `/downloads` is a searchable table over files already in `public/downloads/`. Home is a static plate, so it does not wait on type metadata or crawl text. Motion is a 200ms fade.

2. **Plan 03 — Buyer console** (`huaming-types`). Same catalog can back home, the type table, and `/downloads`. Still static if search is a client filter. Higher cost: the home *is* the table, and the promised Iᵤ / mounting columns cannot be filled tonight without inventing ratings (forbidden). `/select` is a link. Fine as a second.

3. **Plan 02 — Industrial editorial** (`huaming-en`). Same route tree as 01. Ken-burns is optional CSS and off under `prefers-reduced-motion`. Search is only header → `/downloads`. One full-bleed photo is an asset, not software.

## Veto

**Plan 04 — Field story.** Scroll-linked captions plus `/projects/[slug]` that only exist if sourced stories exist. That is motion and a tiny CMS, and the home is empty if Longdong / North Sea / Singapore are all we can name. A map (even a real one) fights static export. “Video if yt-dlp works” is a night sink.

Not a veto, just slower: 05 (3-state SVG + extra `/learn/*` eats the clock), 06 (`/offices` and region-prefill do not help the file library; prefill is a select, not geo).

## How 01 serves every PDF in `public/downloads/`

One TypeScript module, `lib/downloads.ts` (or a JSON next to it), scanned from disk or written by hand. Each row: filename, title, type codes, family (`oltc` / `octc` / `accessory` / `type-test`), href `/downloads/<filename>`.

`/downloads` prints every row. A client component filters on code, family, title, and filename. Links are plain static files. No signed URLs, no API.

`/products/[slug]` joins the same rows by code. Header “Download brochures” is `/downloads`. Search `CV2` there is the plan’s 3-click alt.

All 20 files on disk get a row. None are decorative.

Type brochures: `CM-OLTC-Technical-Data--HM0-154-301.pdf`, `CM2-Vacuum-OLTC-Technical-Data-HM0-154-5701.pdf`, `CMD-OLTC-Technical-Data-HM0-154-1901.pdf`, `CV-SV-OLTC-Technical-Data-HM0.154.001.pdf`, `CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf`, `CVT-Vacuum-OLTC-Technical-Data-HM0.154.3301.pdf`, `CZ-vacuum-OLTC-technical-data-HM0-154-1102.pdf`, `HWV-Technical-Data.pdf`, `SHZV-Vacuum-OLTC-Technical-Data-HM0.154.3901-2025.pdf`, `SHZVG-Vacuum-OLTC-Technical-Data-2025.pdf`, `WD-L-S-G-Drum-Type-OCTC-Technical-Data-HM0.154.6001.pdf`.

Accessories / OM: `Controller-SHM-KX-HM.0.460.5901-ENG.pdf`, `MDU-CMA7-OM-HM0.460.302-EN-2025.pdf`, `MDU-SHM-D-OI-HM0-460-1381-ENG-2025.pdf`, `contact-electrical-life--SY.pdf`.

Type-test: `SHM-XE----EN.pdf`, `SHM-XE---.pdf`, `SHM-XE---_EN.pdf`, `SHM-XE-.pdf`, `SHM-XE-_EN.pdf`. Keep the files. Titles are smashed from CJK strip; rename after this vote, do not drop the rows.

Crawl import is a separate pass: Joomla HTML → MDX for about, news, projects. The file table does not wait on it.

## Contact

A form that builds `mailto:intl@huaming.com?subject=&body=`. If the browser blocks it, show the address and a copy control. No server action, no mail API. Mailto as the real submit path is fine.

# Plan 03 — Buyer console

## Stance

The site is a parts console: find a type, download the PDF, mail Singapore. A system, not a brochure.

## Proposed site name

Huaming Types

## Proposed repo slug

`huaming-types`

Official legal name stays Shanghai Huaming Power Equipment Co., Ltd. The site name can be the tool the buyer came for.

## Homepage first viewport

- Headline: Find a tap changer
- Sub: Search CV2, CM2, SHZV, HWV, WSL, CMA7. Filter on-load / de-energized / vacuum. Download the same technical data the factory uses.
- Primary CTA: the search field itself (placeholder: Type or family)
- Secondary: Contact Singapore
- Image / object: No hero photo. A working search and a compact type table (type, family, mounting, Um class) on graphite. First rows visible without scrolling on a 1440 desktop.

Header: wordmark, search, Downloads, Contact. Products live in the search. A small text link Learn sits last.

## Information architecture

Search is the home. Required jobs stay; extras are tools, not stories.

- `/` console (search + table)
- `/learn` short definition page, also as a 2-line strip under search
- `/about` `/about/history` `/about/why`
- `/products` same table, more columns
- `/products/oltc` `/products/octc` `/products/accessories` (pre-filtered tables)
- `/products/[slug]` type record: ratings, use-when, PDF, related MDU
- `/downloads` first-class, same search index
- `/select` outbound to https://erict16.github.io/oltc-selector/ (no prices, no coefficients)
- `/projects` `/renewable`
- `/news` `/news/[slug]`
- `/careers` `/contact` `/investors`
- `/legal/privacy` `/legal/imprint`

Docs link: https://erict16.github.io/huaming-hub/ in the footer as “Buyer docs (Hub)”. Do not restyle Hub.

## Visual system

Palette mood: shop-floor terminal. Graphite `#121417`, panel `#1C2024`, hairline `#2E343B`, text `#E8EAED`. Amber CTA `#D97706`. Not MR red. Not SaaS purple. Not navy-and-gold.

Type: IBM Plex Sans for UI. IBM Plex Mono for type strings (`CV2III-350Y/40.5`, `SHZVIII-1000Y/170`). No display serif on the home table.

Density: high. Filters, sticky result count, keyboard `/` to focus search. Rows, not cards.

Motion: 120 ms row highlight. No parallax. No ken-burns.

What this plan is not: a magazine, a paper book, a project essay, a classroom.

## How a buyer finds CV2 and downloads its PDF in ≤3 clicks

1. Type `CV2` in the home search (that is click 1, or just keystrokes).
2. Open the CV2 row (`/products/cv2`).
3. Download PDF (`CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf`).

Alt: header Downloads → `CV2`. Two steps.

## How a non-engineer learns what a tap changer is in ≤30 seconds

A persistent 2-line definition under the search, always visible on `/`:

A tap changer is the moving switch in a transformer that picks a winding tap. On-load types work while the transformer is live. De-energized types only when it is off.

Link: `/learn`. Engineers who already know never have to open it.

## Steal / refuse

Steal from:

1. McMaster-Carr findability (type the designation, get the file).
2. Digi-Key / Octopart table craft (filters, counts, download on the row). Linear’s dark dense chrome is allowed as UI, not as a product story.

Refuse:

1. The live home’s “Global Leader in Solar Products” second slide.
2. Fake metrics (“10,000+ engineers”). Any 27-card grid with identical “Product details” buttons.

## Biggest risk

Feels like an internal tool. Investors, journalists, and job candidates bounce. Also easy to leak selector DNA: no prices, no country coefficients, no Qu-ET, no “base price list”. About / news / careers must still exist as real pages, just not as the home.

If search is empty on day one because the type index is thin, the home is a dead box. Ship the 27 known types in the first table.

## Notes for build (if this plan wins)

- Known types from the live listing: CM, CMD, CV, CV2, CM2, SHZV, CHVT, HWV, HWDK, CVT, CZ, HMDK, WSL/WDL, WDG, ZWC, SHM-D, CMA7, SHM-X, HMIET, ET-SZ6, HMC-3C, HMJK-II, ZXJY, SHGV, SHZVG, SHM-KX.
- WSL cage brochure is missing on disk. List the type; do not invent a PDF.
- English only. Short labels. Second-language buyers scan tables better than paragraphs.

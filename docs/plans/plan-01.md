# Plan 01 — Utility handbook

## Stance

The site is a printed utility catalogue that happens to load in a browser: paper, type plates, specs, and the PDF as the product.

## Proposed site name

Huaming

## Proposed repo slug

`huaming-en`

## Homepage first viewport

- Headline: Tap changers for power transformers
- Sub: On-load (OLTC) and de-energized (OCTC). Vacuum and oil. Technical data as PDF. Standard lead time about 4–6 weeks.
- Primary CTA: Find a type
- Secondary: Download brochures
- Image / object: A catalogue plate of type CV2 (or CM2) on cream stock. Thin brass rule. Folio `HM / 01`. Cutaway or nameplate drawing, no sky, no glow, no solar farm.

Header on this screen: wordmark, Types, Downloads, Learn, Contact. Search sits in the header as a slim field, not a hero gimmick.

## Information architecture

Keep every required job. Paths stay close to the brief so a buyer can guess the URL.

- `/` handbook home (plate + 3-line definition + family columns)
- `/learn` one page: what a tap changer is
- `/about` `/about/history` `/about/why`
- `/products` family index (OLTC / OCTC / accessories). A typed list, not a shop grid
- `/products/oltc` `/products/octc` `/products/accessories`
- `/products/[slug]` type page (CV2, CM2, SHZV, HWV, WSL, CMA7, …)
- `/downloads` searchable file table (same index as the type pages)
- `/projects` `/renewable`
- `/news` `/news/[slug]`
- `/careers` `/contact` `/investors`
- `/legal/privacy` `/legal/imprint`

Footer always: Shanghai HQ address, Singapore intl HQ address, `intl@huaming.com`, outbound links to Huaming Hub and the OLTC selector. Those two stay external.

## Visual system

Palette mood: unbleached paper. Warm off-white `#F4EFE6`, carbon ink `#1A1714`, brass rule `#C4B8A4`. One oxide red `#9B2C2C` on the live CTA only. No navy field. No gold gradient. No glass cards.

Type: Source Serif 4 for titles and plate captions. IBM Plex Sans for UI, tables, and body. IBM Plex Mono for type strings such as `CV2III-350Y/40.5`. Measure about 62 characters. Captions sit under drawings the way a paper catalogue does.

Density: medium-low. Long pages. Tables beat tiles. A type page is a plate, a 6-row rating strip, a short use-when paragraph, then the PDF.

Motion: almost none. 200 ms page fade. Respect `prefers-reduced-motion`.

What this plan is not: a dark app, a magazine cover, a course, a map of offices.

## How a buyer finds CV2 and downloads its PDF in ≤3 clicks

1. Home → Find a type (or type `CV2` in the header search).
2. Land on `/products/cv2`.
3. Click Technical data (PDF). File on disk: `CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf`.

Alt path: `/downloads` → search `CV2` → file. That is two clicks if they already know the type.

CV2 page must say, in plain words: selector-switch vacuum OLTC, vacuum version of type CV, mechanical backup contacts, intended for primarily-delta transformers up to 132 kV. Do not invent ratings beyond the brochure.

## How a non-engineer learns what a tap changer is in ≤30 seconds

Home first screen names the job. Directly under the plate, three lines:

1. A transformer changes voltage.
2. A tap changer picks which winding tap is live, so the voltage stays in range.
3. On-load (OLTC) does this while the transformer is energised. De-energized (OCTC) only with the transformer off.

Then a text link to `/learn`. No animation. No comic on the home plate.

## Steal / refuse

Steal from:

1. McMaster-Carr: find the part, get the file, leave. Density without yellow.
2. A paper IEC / factory type catalogue (BBC Brown Boveri era plates, or any utility handbook that leads with the designation).

Refuse:

1. Maschinenfabrik Reinhausen red system, mark, copy, and type names used as teaching terms.
2. Inter-on-glow SaaS card grids and “Free / Product details” Joomla tiles.

## Biggest risk

Looks like internal docs or like Huaming Hub with a public nav. Buyers accept paper. Investors and journalists need a company, not a PDF dump. About, projects, and investors stay written pages, not an afterthought appendix.

## Notes for build (if this plan wins)

- Product index is a definition list + rating columns, never 27 identical cards.
- Downloads table columns: type, family, language, document no. (HM0…), year, file.
- No prices, no country coefficients, no Qu-ET language.
- English only. Short sentences. The live site’s Edison/Tesla chairman pastiche does not come over.

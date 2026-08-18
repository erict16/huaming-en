# Plan 04 — Field story

## Stance

The site is a commissioning ledger: country, HVDC, and offshore first; product family second.

## Proposed site name

Huaming Field

## Proposed repo slug

`huaming-field`

## Homepage first viewport

- Headline: Longdong ±800 kV. North Sea platforms. 150 countries.
- Sub: Huaming tap changers sit in converter transformers, offshore wind, and utility fleets. Start from a job, or go straight to the type.
- Primary CTA: Open the project log
- Secondary: Find a product
- Image / object: One sourced still from Longdong or a real converter hall. Caption bar, not a slogan: `Longdong ±800 kV · CHVT · commissioned 28 May 2025`. No stock sunset farm. No unlabelled map pins.

Header: wordmark, Projects, Products, Downloads, Contact. Products and Downloads stay one click away so a buyer is not forced to tour the field.

## Information architecture

Projects lead. Required jobs stay. Extra: a project slug.

- `/` field home (3–4 sourced stories, then a type strip)
- `/projects` index of sourced jobs only
- `/projects/[slug]` one job, types on that job, PDF links
- `/renewable` PV / EPC, quoted not inflated (~600 MW claimed on about; “nearly 1 GWp since 2016” on the live home)
- `/learn`
- `/about` `/about/history` `/about/why`
- `/products` `/products/oltc` `/products/octc` `/products/accessories` `/products/[slug]`
- `/downloads`
- `/news` `/news/[slug]`
- `/careers` `/contact` `/investors`
- `/legal/privacy` `/legal/imprint`

Every project page has a “Types on this job” rail. Every type page has a “Seen on” rail that only lists sourced jobs.

Sourced, usable facts (do not invent more): Longdong ±800 kV CHVT, May 2025; Singapore intl HQ, 29 Apr 2025; North Sea platforms / offshore wind (chairman letter); Indonesia plant 2025; Turkey plant 2016; Brazil and USA outlets 2019; products in 140–150+ countries. If a job cannot be named, it does not get a card.

## Visual system

Palette mood: field notebook + photo caption. Uncoated sand `#E8DCC8`, soot `#161410`, caption-slate yellow `#E3C14A` on bars only, rust CTA `#B45309`. Not corporate navy. Not gold foil. Not Reinhausen red.

Type: Geist or IBM Plex Sans for UI and captions. Source Serif only for pull-quotes on project pages. Captions are short and dated.

Density: medium. Home is a few long stories, then a compact product strip. No 27-tile shop.

Motion: still image. Caption may pin on scroll. No video unless an official short exists. Respect reduced motion.

What this plan is not: a parts terminal, a cream catalogue, a magazine cover with no place names.

## How a buyer finds CV2 and downloads its PDF in ≤3 clicks

1. Header Products.
2. Vacuum OLTC → CV2.
3. Technical data PDF.

Projects do not bury the type. The product strip on home also links CV2 in one click + PDF.

## How a non-engineer learns what a tap changer is in ≤30 seconds

First caption under the Longdong still:

This is a tap changer on a converter transformer. It changes winding taps so the voltage stays in range while the line is live.

Then a link to `/learn` for OLTC vs OCTC. The place name does the teaching: this thing runs at ±800 kV, so it is not a gadget.

## Steal / refuse

Steal from:

1. Siemens Energy project pages (job first, apparatus second).
2. Reuters / Magnum caption craft: date, place, what is in the frame.

Refuse:

1. Fake world-map pins and invented customer logos.
2. “Global Leader in Solar Products” as a home slide (the live site does this; we do not).

## Biggest risk

Thin sourced project list. Live `/renewable-energy/project-references` may be weak. If we cannot name real jobs beyond Longdong, North Sea, Singapore, Indonesia, the home collapses. Then this plan must lose. Do not fill gaps with stock.

## Notes for build (if this plan wins)

- News can feed the ledger (Longdong 28 May 2025; Singapore HQ 29 Apr 2025) but news ≠ a project page unless we have a place and a type.
- Renewable stays a quoted side book, not the brand.
- No prices. No competitor assets. English only.
- Outbound: Hub and selector in the footer.

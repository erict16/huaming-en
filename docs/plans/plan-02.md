# Plan 02 — Industrial editorial

## Stance

The site is a T&D house magazine: one object, large type, almost no cards.

## Proposed site name

Huaming

## Proposed repo slug

`huaming-en`

## Homepage first viewport

- Headline: The switch inside the transformer
- Sub: Huaming builds on-load and de-energized tap changers. Vacuum and conventional. In service in 150+ countries.
- Primary CTA: See the range
- Secondary: Talk to us
- Image / object: One full-bleed product photograph (CV2 or HWV), no colour wash, no kicker pill, no slider. Type sits in the negative space on the left. The object is the cover. Not a solar farm. Not a globe.

Header: wordmark, Products, Downloads (always one click), Learn, About, Contact. Downloads is not buried.

## Information architecture

Editorial home, then a typographic product index. Required jobs stay.

- `/` cover + short claim + one spec strip
- `/learn` 400–600 words, stills, no course chrome
- `/about` `/about/history` `/about/why`
- `/products` one long editorial index, not a shop
- `/products/oltc` `/products/octc` `/products/accessories`
- `/products/[slug]` one photo, short claim, rating strip, PDF
- `/downloads`
- `/projects` `/renewable`
- `/news` `/news/[slug]`
- `/careers` `/contact` `/investors`
- `/legal/privacy` `/legal/imprint`

Products page is a list: family name, one sentence, one photo per family. Types under each family are names, not tiles. Footer: both HQs, `intl@huaming.com`, Hub and selector outbound.

## Visual system

Palette mood: press white. True white `#FFFFFF`, near-black `#111111`, one steel accent `#3D5A73`. No cream. No green. No gold. No navy field behind the logo.

Type: Newsreader or Source Serif for H1 at 72–96 px on desktop. Geist or IBM Plex Sans for UI and body. Huge hierarchy. A type name on a product page can be larger than the paragraph.

Density: low. Sections are full-width bands. If you catch yourself drawing a card, delete it. Product index is type + one photograph per family.

Motion: still by default. Slow image drift only if `prefers-reduced-motion` is off. No parallax on copy.

What this plan is not: a parts console, a paper catalogue, a classroom, a map.

## How a buyer finds CV2 and downloads its PDF in ≤3 clicks

1. Home → See the range (`/products`).
2. Vacuum OLTC list → CV2 (`/products/cv2`).
3. Download technical data.

Header Downloads → search `CV2` is the impatient path (2 clicks). The first screen is a photograph, so the header download link is mandatory. If that link is missing, this plan fails the brief.

## How a non-engineer learns what a tap changer is in ≤30 seconds

The headline is the explainer. Under it, about 40 words:

A tap changer is the moving switch in a transformer. It selects a winding tap so the voltage stays in range. On-load types work while the transformer is live. De-energized types only with the transformer off.

Then a text link to `/learn`. No comic. No stepped animation on the cover.

## Steal / refuse

Steal from:

1. Hitachi Energy product pages: one photo, short claim, spec strip.
2. Siemens Energy product pages: the same craft, not their copy.

Refuse:

1. Joomla product tiles with “Free / Product details”.
2. Reinhausen red mark, red system, and any line that sounds like their house voice.

## Biggest risk

Pretty and slow. A buyer who wants a PDF in ten seconds will bounce if the first screen is only a photograph. Downloads must live in the first header row on every page. Do not add a 4-slide hero to “fix” this. That is the live site’s mistake.

## Notes for build (if this plan wins)

- One image per viewport. No carousels.
- News and project pages use the same band layout as products.
- Renewable is a quoted side business (~600 MW PV on the about page; “nearly 1 GWp since 2016” on the live home). Do not let it take the cover.
- No prices. English only. Easy words over house adjectives.

# Plan 06 — Singapore HQ / global maker

## Stance

The site is an international company with two headquarters, a service map, and a type list. It is not a Shanghai factory microsite.

## Proposed site name

Huaming International

## Proposed repo slug

`huaming-intl`

Legal names stay exact: Shanghai Huaming Power Equipment Co., Ltd. (works) and Huaming Power Equipment Singapore Pte. Ltd. (international HQ).

## Homepage first viewport

- Headline: International headquarters, Singapore. Works, Shanghai.
- Sub: Huaming makes tap changers for power transformers. Sold in 150+ countries. Talk to Singapore. Download the type data tonight.
- Primary CTA: Contact Singapore
- Secondary: Products
- Image / object: A quiet two-city pair. Tai Seng Exchange (TSX) Tower A and the Tongpu Road works, each with the real address under it. No flag collage. No stock globe. No animated counters rolling from zero.

Header: wordmark, Products, Downloads, Offices, Contact. Products and Downloads stay in the first row. This plan does not make a buyer tour offices first.

## Information architecture

Offices are first-class. Required jobs stay. Extra: `/offices`.

- `/` dual-HQ home
- `/offices` directory (not a toy map)
- `/learn`
- `/about` `/about/history` `/about/why`
- `/products` `/products/oltc` `/products/octc` `/products/accessories` `/products/[slug]`
- `/downloads`
- `/projects` `/renewable`
- `/news` `/news/[slug]`
- `/careers` `/contact` `/investors`
- `/legal/privacy` `/legal/imprint`

Office directory, addresses as published (fix typos only if we confirm):

- Shanghai HQ: No. 977 Tongpu Road, Putuo District, Shanghai 200333
- International HQ: Huaming Power Equipment Singapore Pte. Ltd, Tai Seng Exchange (TSX) Tower A #03-13, 1 Tai Seng Ave, Singapore 536464. Opened 29 Apr 2025; Singapore presence “over a decade”
- Turkey: Organize Sanayi Bölgesi 9. Cad. No.13/2 10020 Merkez Balikesir. Plant 2016
- Indonesia: PT Huaming Power Indonesia, Bekasi / Delta Silicon 5. `sujicheng@huaming.com`. Plant 2025
- Brazil: Gelásio Pimenta, 171 - Vila Antonina, São Paulo
- USA: Huaming USA Corporation, 4981 Irwindale Ave Ste 800, Irwindale, CA 91706
- Shandong FIN CNC: No. 2222 Century Avenue, Jinan (sister, not a tap-changer shop)

Contact form defaults to Singapore and `intl@huaming.com`. Optional region hint may prefill an office. Do not invent phone numbers.

## Visual system

Palette mood: airline / embassy HQ. Cool grey `#F3F4F6`, ink `#0A0A0A`, one 4 px home rule in Singapore teal `#0F766E`. Teal is a rule, not a wellness theme. No navy slab. No gold.

Type: Source Sans 3 (or Neue Haas if licensed). Corporate, not magazine, not mono-console. Addresses in a tabular figure style.

Density: medium. Office list is a real directory. Product grid is secondary and still a list, not 27 shop tiles.

Motion: none beyond link underline.

What this plan is not: a paper catalogue, a dark parts app, a field photo-essay, a classroom.

## How a buyer finds CV2 and downloads its PDF in ≤3 clicks

1. Header Products.
2. CV2.
3. PDF.

Always available. Home secondary CTA also goes to `/products`. Downloads in the header is the 2-click path.

## How a non-engineer learns what a tap changer is in ≤30 seconds

Under the two-city line, one sentence:

We make the switch inside a transformer that holds the voltage in range. On-load or off-circuit.

Link `/learn`. The HQ story does not replace the definition.

## Steal / refuse

Steal from:

1. ABB / Hitachi Energy location directories: real addresses, real entities.
2. A calm airline or shipping HQ site (Singapore Airlines corporate, Maersk). Two clocks, two cities, no flags.

Refuse:

1. “A World-wide Presence of Huaming's Technology and Innovation.”
2. Stock globe, fake pins without addresses, animated “0 → 1600 staff” counters copied from the live about page.

## Biggest risk

Sounds like a holding-company IR page. Buyers come for CV2, not Tai Seng. If Products and Downloads leave the first header row, this plan fails the primary audience. Renewable / CNC stay listed as other businesses, not the cover.

## Notes for build (if this plan wins)

- Imprint (`/legal/imprint`) carries credit code 913101076076323035, listed 002270.SZ, chairman Xiao Yi, both HQ addresses.
- Investors page is filings and the legal name, not a second about.
- Careers: English roles and the Singapore office, not a Shanghai-only microsite.
- No prices. No competitor assets. English only.
- Outbound: Hub and selector in the footer.

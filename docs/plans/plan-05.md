# Plan 05 — Explainer-first

## Stance

The site teaches what a tap changer is in plain English, then sells the range. Course energy, not a children’s comic.

## Proposed site name

Huaming

## Proposed repo slug

`huaming-en`

## Homepage first viewport

- Headline: A transformer has a moving switch. That switch is a tap changer.
- Sub: On-load (OLTC) works while the transformer is live. De-energized (OCTC) only when it is off. Huaming makes both, vacuum and oil, plus the motor drive.
- Primary CTA: How it works
- Secondary: Browse types
- Image / object: A 3-step diagram built in CSS/SVG: winding taps → selector → diverter / vacuum bottle. The live tap is marked. No mascot. No generated cartoon. No Reinhausen cutaway.

Header: wordmark, Types, Downloads, Learn, Contact. A known type must be one click from the header. If an OEM has to sit through the lesson, this plan fails.

## Information architecture

The lesson is the home. Required jobs stay. Extra learn pages for people who stay.

- `/` explainer home (30-second lesson + skip to types)
- `/learn` deeper: OLTC vs OCTC, vacuum vs oil, in-tank vs on-tank, MDU
- `/learn/vacuum` `/learn/octc` (optional extra; do not drop `/learn`)
- `/about` `/about/history` `/about/why`
- `/products` `/products/oltc` `/products/octc` `/products/accessories`
- `/products/[slug]` each page starts with “Use this when…”
- `/downloads`
- `/projects` `/renewable`
- `/news` `/news/[slug]`
- `/careers` `/contact` `/investors`
- `/legal/privacy` `/legal/imprint`

Product section after the lesson is a definition list, not 27 tiles. Footer: both HQs, `intl@huaming.com`, Hub, selector.

## Visual system

Palette mood: lab poster on paper. Paper white `#F7F4EC`, ink `#1B1916`, diagram yellow `#F5C518` only for the live tap, steel `#4B5563` for the rest. High contrast. Not navy. Not gold luxury. Not comic primary-blue.

Type: Source Serif for lesson text. IBM Plex Sans for chrome. IBM Plex Mono for type strings. Short paragraphs. Captions under every diagram.

Density: medium. White space around the diagram. Product list is tight once they choose to browse.

Motion: three diagram states, stepped, with a pause control. Reduced-motion shows all three stills at once. No confetti. No progress bar that treats a buyer like a student.

What this plan is not: a dark console, a field essay, a factory microsite.

## How a buyer finds CV2 and downloads its PDF in ≤3 clicks

1. Header Types, or home “Browse types”, or “Vacuum OLTC”.
2. CV2 (`/products/cv2`), labeled “vacuum version of CV, selector-switch”.
3. Technical data PDF.

The lesson never blocks the type. Skip is always visible.

## How a non-engineer learns what a tap changer is in ≤30 seconds

The first viewport is the 30-second lesson. Headline + 3-step diagram + two sentences (on-load vs de-energized). A second-language utility engineer can point at the yellow tap and understand the job.

`/learn` is for people who stay: vacuum bottle vs arcing in oil; why a motor drive exists; why OCTC is cheaper and when it is not allowed.

Do not use MR type names as teaching terms. Use: tap, winding, on-load, de-energized, vacuum interrupter, diverter, selector, motor drive.

## Steal / refuse

Steal from:

1. Stripe docs voice: short, exact, no cheerleading.
2. Transformer Magazine’s basic OLTC course structure (Huaming already ran a lesson with them). The live 14 Jan 2025 “comic” is an idea to steal, not the cute drawing.

Refuse:

1. Reinhausen product names as the vocabulary of the lesson.
2. Gamified progress, badges, and lines like “Reimagine voltage regulation.”

## Biggest risk

Talks down to OEM engineers. They skip, or they leave. Header search / Types must land a known designation in one click. If the home only teaches, the primary audience (buyer who already knows CV2) is insulted.

## Notes for build (if this plan wins)

- Diagram is code, not an image model. Label every part.
- CV2 “use this when”: primarily-delta transformers up to 132 kV; vacuum CV; wants backup contacts and less oil maintenance. Source: live CV2 page + 2025 technical data. Do not invent current ratings.
- News item about the comic can link here. Do not put the comic on the cover.
- No prices. English only. Easy words first.

# Iterate — handbook craft pass

Date: 2026-08-19 11:30 CST
Branch: `feat/overnight-v1`
Identity: Plan 01 Utility handbook (docs/identity.md untouched)

## What changed

Eric said the overnight ship looked cheap. Tokens were already right; the print was not. This pass keeps the locked handbook and raises craft on four surfaces.

### Home (`app/page.tsx`)
- Folio **HM / 01 · Technical catalogue** + double-weight rule as a title-page mast, not a leftover label.
- Headline *Tap changers for power transformers* with optical-size Source Serif 4 (~16ch measure).
- CV2 as a printed plate: paper field, inset rule, tab, designation, one-liner from `content/products.json`, Open CV2 + Technical data (PDF).
- Photo sits on stock (PNG black field knocked out; JPEGs multiply onto paper). Not a white card.
- 3-line what-this-is strip stays under the plate (Name the family / Open the type / Take the PDF). Not a course.
- Featured types (cv2, cm2, shzv, hwv, wsl, cma7) as a contents list: stamp + designation + ratings, not a divide-y dump.

### Product index (`app/products/page.tsx` + `components/FamilyList.tsx`)
- Definition-list rows with stamp, one-liner, and rating column. No 27 identical cards.
- Family headings as plate sections (01 / 02 / 03) with the existing family blurb.
- OLTC / OCTC / Accessories still linked. Vacuum stays a technology inside OLTC.

### Product plate (`app/products/[slug]/page.tsx`)
- Type page = plate + numbered rating strip from existing `product.ratings` + use-when from oneLiner/note + PDF ledger.
- CHVT (and any empty type) still says no English technical data and points to intl@huaming.com. No invented Iu/Um.
- Related types reuse the contents row.

### Downloads (`app/downloads/page.tsx` + `components/DownloadTable.tsx`)
- Paper ledger: Document / Type / Kind / Lang / Size.
- Year and HM0 doc no. parsed from existing file/title strings only (`lib/doc-meta.ts`). Nothing invented.
- Search field by type. File count as status. No email gate.
- Size is an em-dash when the PDF bytes are not on disk.

### Chrome
- Header is a catalogue masthead: wordmark + Technical catalogue, slim type search that jumps to `/downloads/?q=`, 中文 to huaming.com, Contact CTA.
- Nav still Products, Downloads, About, News, Contact.
- Footer is a colophon: legal, Shanghai, Singapore, intl@huaming.com.
- Shared plate / grain / rule / ledger / folio styles in `app/globals.css`.
- New: `components/Stamp.tsx` (object-on-paper), `lib/doc-meta.ts` (parse only).

## What did not change

- `docs/identity.md` — locked.
- `content/products.json`, `content/downloads.json` — no new specs, prices, or types.
- Contact remains mailto `intl@huaming.com`.
- `output: export`, trailingSlash, App Router + Tailwind v4.

## Recent.design refs (craft, not clone)

Required:
1. **Digital Stamp Site** — catalog-card metadata, monospaced archival labels, paper grain, one inspected object. SKIP shader loupe / WebGL.
2. **Stripe Press** (https://press.stripe.com/) — the plate/brochure treated as the object; quiet wordmark; serif title with real measure; paper, no chrome.
3. **Tiny Computer Co.** — one product at a time, type and rule do the work.
4. **Lightspark** (https://lightspark.com/) — numbered 01 / 02 / 03 sections, quiet metric strips. SKIP dark glow.

Two more actually opened and used:
5. **Schemas of Uncertainty** (https://schemasofuncertainty.com/) — editorial index / lecture catalogue. Used for the home contents list and product family rows.
6. **Teenage Engineering** (recent.design category=product) — object-first spec sheet. Used for the type plate (one machine on paper, caption like a rating strip). SKIP gadget animations.

SKIP (fight the handbook vote): ASMR portfolio, morphing dropdown, sphere idle, puzzle testimonials.

## Screenshots

Full-page longshot, width 1440:
- /tmp/huaming-home.png
- /tmp/huaming-products.png
- /tmp/huaming-cv2.png
- /tmp/huaming-downloads.png

Extra grok-pass shots live under /tmp as huaming-*-viewport.png, *-types.png, *-lower.png, *-filter.png, *-shzv-q.png, chvt-lower.png.

Typecheck: tsc --noEmit passed.

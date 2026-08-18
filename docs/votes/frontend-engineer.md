# Frontend engineer

Date: 2026-08-19  
Role: Frontend engineer  
Scope: visual system I can port faithfully tonight on Next + Tailwind v4, desktop + ≤640. No Inter-on-glow. No hero eyebrow unless the scheme already has one. Independent; other ballots unread.

## Ranked top 3

1. **Plan 01 — Utility handbook.** Paper, ink, hairline, one oxide CTA, Source Serif 4 + IBM Plex Sans. The system is CSS (`next/font`, `@theme`, rules, folio plate). Catalogue CM2/CV2 shots from the crawl sit on cream as a plate; they do not need cinematic negative space. Distinctive against Reinhausen red and the live Joomla tiles. No kicker pill in the scheme — folio “HM / 01” is a caption, not an eyebrow.

2. **Plan 03 — Buyer console.** Graphite / panel / amber is a closed token set. Home object is search + type table, no photo, no glow, Plex Sans + Plex Mono only. Rare in T&D (everyone else is white/blue/red). High density is a layout tax, not an art-direction tax.

3. **Plan 05 — Explainer-first.** Paper + ink + diagram yellow `#F5C518` + steel. Home object is a 3-state CSS/SVG (taps → selector → diverter), pause + reduced-motion stills. Code-native and distinctive if the drawing stays a labeled schematic, not a cartoon.

Not ranked: **02** needs a full-bleed still with quiet left type-room we do not have (mirror shots are catalogue-on-white). **06** is portable in two hours and generic (cool grey, Source Sans 3 stand-in for unlicensed Neue Haas, one teal rule).

## Veto

**Plan 04 — Field story.** Unportable tonight. The system *is* white type on a sourced night still plus scroll-linked captions. Repo has `public/brand/logo.png` and no Longdong / converter-hall plate; overlay contrast and caption motion will not survive ≤640 without becoming a stacked article. Do not ship a navy wash and call it the field.

## Token notes (#1 — Plan 01)

| Token | Value | Tailwind v4 |
|-------|--------|-------------|
| bg | `#F4EFE6` | `--color-paper` |
| ink | `#1A1714` | `--color-ink` |
| rule | `#C4B8A4` | `--color-rule` (1px hairlines, folio) |
| accent | `#9B2C2C` | `--color-cta` — live button only, never fills or glow |
| type display | Source Serif 4 | `next/font/google` — titles, measure ~38–42ch |
| type ui | IBM Plex Sans | UI, tables, captions |
| motion | 200ms page fade | none if `prefers-reduced-motion` |
| refuse | Inter, navy-on-glow, hero eyebrow, MR red | — |

No second accent. Plate is a bordered figure + folio, not a card shadow.

## Biggest responsive risk

Handbook tables (family index, downloads, type data) at ≤640: a 6-column catalogue row will either overflow or turn into an unreadable wrap. Tonight: 2–3 columns max on small, rest as a stacked definition list or one-axis scroll with a sticky first column — never a 27-tile fallback.

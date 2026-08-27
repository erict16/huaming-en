# Audit — hero waves

Top of `/` only. Featured Products, Latest news, teasers, header/footer, Shanghai|Singapore unchanged (they sit under the new hero).

## What each site does

**MR** (`reinhausen.com`): `.stage` is full-bleed + left `.stage-content.bg-gradient`. The teal/navy blobs are a looping muted autoplay **`<video>` WebM** (`head_mov.webm` / `header_mobile.webm`). `stage.min.js` only drives video/swiper. Not copied.

**Mintlify** (`mintlify.com`, “Built to scale with the agent web.”): **`<canvas>`**, no video. Module `drawRibbonFrame` / `generateLinePoints`: ~24 thin strokes, two sine packets, bulge in the middle, `quadraticCurveTo`, lime `#18e299` → `#baff24`, optional particles. `anim: "spin"`, speed 1.

## What we shipped

MR **layout**: full-bleed navy stage, left Welcome + lede + Products / Downloads / Contact (white). Factory still immediately under the hero, then Shanghai|Singapore.

Mintlify **motion**, navy: same ribbon math on a canvas (`src/components/HeroWaves.astro`). Changes so it is not a screenshot: 16 strokes (not 24), `flow` at speed 0.36, rotate −6°, steel `#7eb8d9` → `#e4f1fa` (no lime, no gold), no particles. `pointer-events: none`. `prefers-reduced-motion: reduce` draws one still frame.

No MR webm. No anniversary/100-years copy.

Playwright 1280: 0 `<video>`, 1 canvas, ~45k stroke pixels avg `rgb(177,212,233)`, H1 white.

Later polish, same ribbon: ends taper, stroke scaled by DPR (~1.22 CSS px at the belly), speed 0.36 → 0.26, `prefers-reduced-motion` listens for change. Ground on `/` is still `#001a3d`. Five other grounds are sketches; see `AUDIT-hero-ground.md`.

## Shots

- `docs/overnight/shots/hero-1280.png`
- `docs/overnight/shots/hero-fold-1280.png`
- `docs/overnight/shots/hero-375.png`

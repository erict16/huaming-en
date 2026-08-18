# Vote — Industrial / product

Date: 2026-08-19  
Role: Industrial / product  
Independent ballot. Did not read other votes.

## Ranked top 3

### 1. Plan 03 — Buyer console

A buyer finds a family by name, current class, mounting, and PDF — not by a photograph. Home search plus a compact type table (family, Iᵤ range, mounting) and filters for on-load / de-energized / vacuum is the only plan that treats the range as a range. Real strings already in the brief (`CV2`, `CM2`, `SHZV`, `HWV`, `WSL`, `CMA7`) land in one keystroke. Downloads share the same index. Outbound `/select` can point at the selector without putting prices, coefficients, or Qu-ET on this site.

Condition: vacuum is a technology filter *inside* OLTC, not a third top-level class equal to OLTC / OCTC. MDU (CMA7, SHM-D, SHM-XE, SHM-KX) is searchable as accessories, never as a tap-changer row next to CV2.

### 2. Plan 01 — Utility handbook

Correct top split: OLTC / OCTC / accessories. Tables beat tiles. “Find a type” and “Download brochures” match how OEM and utility buyers already work — they think in brochure plates, not in a console. Slower than a search field, but the family index will not flatten vacuum compound, vacuum resistor, and cage OCTC into one shop grid.

### 3. Plan 05 — Explainer-first

The only plan that teaches the distinctions a second-language engineer needs before they pick: OLTC ≠ OCTC, vacuum ≠ oil, in-tank ≠ on-tank, MDU ≠ tap changer. Type pages start with “use this when…”, and the CV2 line already says the right thing (vacuum CV, selector-switch, compound). Header “Browse types” must stay one click, or known buyers skip the lesson and bounce.

## Veto

**Plan 04 — Field story.** Wrong taxonomy. The site becomes a project ledger (Longdong, North Sea, HVDC) with product family second. The home object is CHVT, a real converter type, not the range. A buyer cannot tell CV2 from CM2 from SHZV from OCTC from a converter-hall caption. Application stories mix families and hide OLTC ≠ OCTC ≠ MDU. A “types on this job” rail does not fix a home that leads with one special type.

## How #1 places CV2 vs CM2 vs SHZV vs OCTC

Plan 03’s table and search must keep three *kinds*, then technology and mounting as columns.

| Kind | Family | What the row must say (brochure / designation only) |
|------|--------|------------------------------------------------------|
| OLTC, in-tank, vacuum compound | **CV2** | Vacuum CV. Selector-switch, compound. III **350 A and 600 A only**. No **CV2-500** (500 A oil compound is **SV**). No grade letter. Um 40.5 / 72.5 / 126 / 145. PDF: `CV2-OLTC-Technical-Data-HM0.154.4101-2025.pdf`. Oil counterpart: CV (same `CV-SV` brochure). |
| OLTC, in-tank, vacuum resistor | **CM2** | Vacuum CM. Not a compound switch. Grade letter. III/II 500 / 600 A; I also 800 / 1200 / 1500. Um 72.5 / 126 / 170 / 252. PDF: `CM2-Vacuum-OLTC-Technical-Data-HM0-154-5701.pdf`. Oil counterpart: CM. |
| OLTC, in-tank, vacuum diverter + selector | **SHZV** | Vacuum **CMD**. Grade letter. III 400 / 600 / 1000 A. Um 72.5…252 (brochure also 300 / 363). PDF: `SHZV-Vacuum-OLTC-Technical-Data-HM0.154.3901-2025.pdf`. Oil counterpart: CMD. **SHZVG** is a G variant, not a fourth vacuum family. |
| OCTC (de-energized) | **WSL / WDL / WDG / ZWC** | Not OLTC. Not vacuum-filtered as if they were on-load. **WSL / WDL** = cage. **WDG** = drum. **ZWC** = linear. Never “de-energized OLTC”. |

Also on the same console, never confused with the four above:

- **HWV** — on-tank OLTC. MDU is already on the HWV list; do not sell HWV as if the drive were a separate product.
- **CHVT** — HVDC / converter. Own row, own job. Not a sibling default next to CV2 / CM2 / SHZV.
- **MDU** — CMA7, SHM-D, SHM-XE, SHM-KX. Accessories. Not a tap changer.

No invented ratings. No prices.

## Brochure gaps (from `public/downloads/`)

On disk today: CM, CM2, CMD, CV&SV, CV2, CVT, CZ, HWV, SHZV, SHZVG, WDG drum OCTC (`WD-L-S-G-Drum-Type-OCTC-Technical-Data-HM0.154.6001.pdf`), MDU-CMA7, MDU-SHM-D, SHM-KX controller, contact-electrical-life, SHM-XE type-test pack (filenames smashed by CJK strip).

Missing, do not invent files or hide the hole:

- **WSL** cage OCTC — no PDF. List-only until a brochure is sourced. Do not point WSL at the drum file.
- **WDL** cage OCTC — same. The `WD-L-S-G` PDF is **drum (WDG)** L/S/G variants, not cage.
- **ZWC** linear OCTC — no PDF.
- **CHVT** — no technical data in the folder (live listing has the type).
- Live listing also has **HWDK**, **HMDK**, **SHGV**, retrofit leaflet (`/images/00_HuaMing/product/Retrofit Leaflet En.pdf`) with no matching download here.
- SHM-XE pack is type-test only, not an operation manual.

Until those PDFs exist, the console must show the type and mark “no English technical data yet” rather than drop the family or attach the wrong brochure.

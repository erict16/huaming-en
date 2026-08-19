# Cycle 3 — industrial

WSL, CMA7, CM, More types, HWV, and all preview PNGs against `content/products.json`. WSL = OCTC. CMA7 = MDU. CM = oil OLTC. No invented amps. HWV 400 / 800 / 1000 A — no 600.

## Must-fix

1. **`preview-mobile.png` HWV still says “Horizontal. Drive included.”** Cycle-1 #1. Next to SHZV `400 / 600 / 1000 A` that invents HWV-600 and the wrong geometry. Desk Home / Products / HWV already have the line. Re-export or fix the leftover frame.

   Replace: `On-tank vacuum. 400 / 800 / 1000 A. Drive included.`

2. **WSL spec Name prints catalogue meta.** Preview: `WSL / WDL. Live slug W_L.` That is `fromLive`, not buyer copy.

   Replace: `WSL / WDL. Cage OCTC.`

3. **WSL Type says “Cage. In tank oil, no separate compartment.”** Catalogue ratings are only *De-energized only* and *Cage*. “In tank oil” reads as oil-arc OLTC. WSL must stay OCTC.

   Replace: `Cage. De-energized only.`

4. **WSL siblings are CM, CMA7, CM2.** `products.json` siblings: `wdg`, `zwc`. An OCTC page must not teach an MDU and two OLTCs as the family. CMA7 is not how you change a de-energized cage.

   Teasers: `WDG` drum OCTC · `ZWC` linear OCTC. If one contrast card is needed: CM, “Oil OLTC. Transformer stays live.” — not CMA7.

5. **More types OCTC tile: `WDG · ZWC · SHM-D · monitors`.** SHM-D is `mdu`. LOOP: do not mix OCTC / MDU. Tile: `WDG · ZWC`. SHM-D stays under motor drive.

6. **CMA7 CTA “Technical data PDF”.** Downloads: `MDU-CMA7-OM-HM0.460.302-EN-2025.pdf` only (OI). Not a tap-changer TD. Label it operating instructions.

## Leave

**WSL** dek and Duty stay OCTC / DETC, transformer off, not an OLTC. Also: drum WDG · linear ZWC. No amps invented. Hero is `wsl.jpg` (cage), not an in-tank OLTC.

**CMA7** stays MDU: accessory, not a tap changer; turns the tap changer; family CMA7 · SHM-D · SHM-X; mount is the motor cabinet. HWV card: motor drive included — do not add CMA7 twice. No amps.

**CM** is oil-arc in-tank (diverter + selector), not vacuum. Current III/II 500 A and 600 A, I also 800 / 1200 / 1500 A. Um 72.5 / 126 / 170 / 252 kV. Selector B / C / D / DE, step 3300 V, positions 18 / 35. Hero is oil `cm.jpg`, not `cm2.png`.

**HWV** desk + Products + HWV PDP: on-tank vacuum, 400 / 800 / 1000 A — no 600 A, Um 17.5 / 40.5 / 72.5 kV, no selector letter, drive included. Not “Horizontal.”

No CV2-500. No CM2 III 800 / 1000. More-list one-liners match the catalogue (CMD, CV, SHZVG, CHVT, CVT, CZ, SHGV, HMDK, HWDK, WDG, ZWC). ZXJY is the oil filter (`monitor`), not a tap changer.

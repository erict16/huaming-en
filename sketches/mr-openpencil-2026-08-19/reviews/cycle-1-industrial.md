# Cycle 1 — industrial

Home, Products, CV2 vs `content/families.json` + `content/products.json` (CV2, CM2, SHZV, HWV, CM, WSL, CMA7).

No CV2-500. No CM2 III 800/1000. WSL is OCTC. CMA7 is MDU. HWV already includes the drive.

## Must-fix

1. **HWV is not “Horizontal vacuum.”** `products.json`: on-tank / external vacuum OLTC; 400 / 800 / 1000 A — no 600 A; no selector letter. Home latest, Home mobile, Products “All types” all say Horizontal and omit current. Next to SHZV 400 / 600 / 1000, that invents HWV-600.

   Replace: `On-tank vacuum OLTC. 400 / 800 / 1000 A. Motor drive included.`

2. **CV2 “Also look at” CV uses the CM photo.** `cm.jpg` is diverter + selector (oil CM). CV is selector-switch, oil ancestor of CV2. Wrong type on the CV card. Drop the card until a CV shot exists, or retitle it CM.

3. **SHZV on the CV2 page is not a bigger CV2.** Caption: “Higher current vacuum OLTC.” SHZV is vacuum CMD (diverter + selector), III/II 400 / 600 / 1000 A. CV2 is selector-switch, III 350 / 600 A only. Do not rank SHZV as the high-current CV2.

   Replace: `Vacuum CMD. Use when CM2 current does not cover.`

4. **CV2 current must stay III.** Home latest: “350 A and 600 A only.” Home mobile: “350 / 600 A.” Mobile spec: “III 350 A and 600 A” (drops only / no CV2-500). Catalogue: III 350 A and 600 A only — no CV2-500 (500 A oil compound is SV).

   Home / mobile dek: `Vacuum selector. III 350 A and 600 A only.`
   Mobile Current: `III 350 A and 600 A only. No CV2-500.`

5. **CM2 home/mobile never lock III/II 500 / 600.** Catalogue: III/II 500 A and 600 A only — no CM2 III 800 / 1000; I also 800 / 1200 / 1500. Home sits CM2 next to SHZV 1000 A with only “same envelope as CM.”

   Replace Home / mobile: `Vacuum CM. III/II 500 / 600 A only.`

6. **HWV is not an MDU SKU.** Motor-drive tile: “CMA7 · SHM-D. HWV already includes one.” HWV is oltc-vacuum (on-tank). CMA7 / SHM-D are mdu. The no-double-count line belongs on HWV only, not on the drive tile as a third name.

   Motor-drive sub: `CMA7 · SHM-D. Accessory, not a tap changer.`

## Leave

Family tiles (Vacuum OLTC / Oil OLTC / OCTC / Motor drive), WSL “Cage OCTC. Transformer off.”, CV2 desk spec table, CM/WSL/CMA7 rows on Products, CMA7 photo on the drive tile, HWV photo (chamber + drive). Those match the catalogue.

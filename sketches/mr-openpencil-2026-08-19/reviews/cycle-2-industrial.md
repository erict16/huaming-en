# Cycle 2 — industrial

Product pages CM2, SHZV, HWV (preview PNGs + the three `productType` calls in `build.mjs`) against `content/products.json` and `content/families.json`. Hero and sibling fills vs `assets/products/` (`cm2.png`, `shzv.png`, `hwv.png`, `cv2.png`, `cma7.jpg`; oil `cm.jpg` as the wrong-photo check). Cycle 1 industrial notes.

## Must-fix

None.

## Leave

CM2 is vacuum CM (diverter + selector, vacuum bottles). Hero is `cm2.png`, not oil CM. Dek locks III/II 500 A and 600 A only; Current adds I 800 / 1200 / 1500 A — no CM2 III 800 / 1000. Um 72.5 / 126 / 170 / 252 kV, selector B / C / D / DE, 18 / 35. SHZV card is vacuum CMD when CM2 current does not cover, not a bigger CV2.

SHZV is vacuum CMD, in-tank combined. Hero is `shzv.png`. III/II 400 / 600 / 1000 A. Um commercial 72.5–252 kV, selector B / C / D / DE, step 4000 V, 18 / 35. Dek does not rank it as a high-current CV2; the CV2 card on that page is selector-switch, III 350 A and 600 A only.

HWV is on-tank / external vacuum OLTC (`oltc-vacuum`, not an MDU SKU). Hero is `hwv.png` (chamber + drive). Oil chamber separate from the main tank. 400 / 800 / 1000 A — no 600 A. Um 17.5 / 40.5 / 72.5 kV, no selector grade letter. Commercial type includes the motor drive; CMA7 sits as “Motor drive. Accessory, not a tap changer.” — do not add CMA7 twice. No WSL on these three pages.

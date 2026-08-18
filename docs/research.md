# Research notes (opened 2026-08-19)

Sources were opened as local HTML (web_fetch blocked these hosts as 198.18.*). Files live under `mirror/research-raw/` and `mirror/raw/`.

## intl-huaming.com (the site we replace)

Joomla + Helix Ultimate + HikaShop. Heavy page-builder CSS. Nav: Home, About (Introduction / History / Why Choose Us), Tap-Changer, Renewable Energy, Investor, Newsroom, Career, Contact.

Home first screen today: “A World-wide Presence of Huaming's Technology and Innovation.” Founded 1989, “one of the leaders in the world tap changer industry.” Second band is solar/EPC, which crowds the actual product.

Product shop: 27 types across On-Load / De-Energized / Accessories. PDFs sit on `/images/00_HuaMing/product/PDF/...`. Joomla copy is stiff. Brochure wins if they disagree.

Steal: IA (type pages + downloads + offices in the footer). Do not steal the Joomla look, hexagon chrome, or “cornerstone of modern civilization” chairman windup.

Facts kept from live pages:

- Legal name + credit code 913101076076323035
- Shanghai HQ 977 Tongpu Road; Singapore TSX Tower A #03-13
- Turkey / Indonesia / Brazil / USA / Shandong FIN CNC in the footer
- History milestones 1995–2025 including Longdong ±800 kV (2025) and Indonesia plant
- About claims ~600 MW PV; keep only as “current about page says”
- Chairman Xiao Yi letter: 150 countries, North Sea / offshore wind, listed company

## reinhausen.com

Opened `mirror/research-raw/reinhausen.html` + `reinhausen-oltc.html`. Category leader. Clear family split (vacuum vs conventional vs DETC) and a direct path to a type + PDF.

Steal: clarity, family split, short product sentences. Refuse: the mark, the red system, any copy, any photo.

## Hitachi Energy / Siemens Energy

Hitachi URL in the brief 404’d from this network (`mirror/research-raw/hitachi.html` is a 404 shell). Public Hitachi tap-changer IA (fetched via search index, 2026-08-17 crawl): T-Sync, vacuum OLTC, conventional OLTC, motor-drive, DETC. Product pages lead with what the device is, then the range.

Siemens Energy `mirror/research-raw/siemens.html` used for craft notes: large type, one machine photo, almost no card grid.

Steal: one-device-one-page, ratings after the one-liner. Refuse: their marks and product names.

## Huaming Hub + oltc-selector

Local apps. Hub is buyer document packs (EN default). Selector is type designation, no prices, no Huaming chrome.

Link out. Do not restyle. Do not fold in.

- https://erict16.github.io/huaming-hub/
- https://erict16.github.io/oltc-selector/

## Linear / catalogue craft

Not a T&D peer. Useful only as “calm industrial density without SaaS glow.” If the winning plan is handbook or editorial, take the restraint, not the product UI.

## ui-ux-pro-max --design-system

Query `industrial energy equipment B2B manufacturer tap changer` returned Organic Biophilic + mint green + Syncopate. Wrong industry. Persisted as a rejected tool output under `docs/design-system-rejected.md`. Vote picks the visual system.

## Country sites

- huaming.com: HTTP 500 (retry recorded)
- huaming.com.tr: 200, ~40 KB
- huaming.com.br: 200, partial

## YouTube

Channel https://www.youtube.com/@hmtcusa8262 — record links only unless files stay small.

## Design takeaway for the vote

The live site hides the product behind solar and slogan English. The new site must say “Huaming makes tap changers for transformers” in the first viewport, then get a buyer to CV2 + PDF in three clicks.

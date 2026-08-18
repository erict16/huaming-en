# Content conflicts (brochure vs Joomla / other)

Rule: brochure wins. Unknown stays unknown. No invented Iu / Um.

Checked 2026-08-19 against `mirror/research-text/`, `mirror/research-raw/`, OneDrive technical PDFs in `public/downloads/` + `mirror/brochures/`, `~/.grok/skills/huaming-oltc-selection/references/type-designation.md`, and read-only `~/Github/oltc-selector/docs/catalog-source.md`.

## Hard catalogue (do not regress)

| Item | Truth | Wrong |
|------|--------|--------|
| CV2 III current | 350 A and 600 A only | CV2-500. 500 A oil compound is **SV**. |
| CM / CM2 III current | 500 A and 600 A | CM2 III 800 / 1000 |
| SHZV III current | 400 / 600 / 1000 A | Treating SHZVG 1300 / 1500 as SHZV |
| SHZVG III current | 1300 / 1500 A (after SHZV max) | Ranking SHZVG before SHZV 1000 is exhausted |
| HWV III current | 400 / 800 / 1000 A | HWV 600 A |
| HWV drive | MDU is part of the HWV oil chamber | Adding CMA7 again on an HWV line |
| Families | OLTC ≠ OCTC ≠ MDU ≠ accessory | Mixing WSL into OLTC ranking; mixing ZXJY into OLTC |

## Brochure vs live shop / tap-changer page

| Type | Live / Joomla | Brochure | Use |
|------|----------------|----------|-----|
| CV | “Ideal solution for medium power transformers (up to 110 kV)” | Um **40.5 / 72.5 kV** only | Brochure. 110 kV system is Um 126 — not a CV rating. |
| CV2 | “Most economic solution for primarily-delta transformer up to 132 kV system.” Marketing tone + “innovative / extreme reliability.” | Um **40.5 / 72.5 / 126 / 145**; 132 kV system ≈ Um 145, so the voltage class is consistent; the sales language is not a rating. | Brochure numbers. Drop brochure-speak. |
| CVT structure | Tap-changer page: “air-insulated tap changer of **selector switch** design.” | Cover/general: “**combined** structure… diverter switch and tap selector.” Commercial designation (catalog-source) treats CVT as **compound** (no grade letter). | Do not put B/C/D/DE on CVT. Call it air-insulated / dry-type. Do not invent a grade letter to “fix” the wording. |
| CVT current | catalog-source.md lists 160 / **200** A | Table 1: **160 A** only. 2025 sales calibration also 160 A. | **160 A**. 200 A is unknown in this brochure. |
| CVT controller name | — | General text: HMJK-10Z. Table 1: **HMBK-10Z**. | Unknown which spelling is current. Do not pick. |
| CZ current | catalog-source.md lists 500 / **600** A | Table + model example: **CZ 500** / `3×CZ 500`. 2025 sales: often 3×I-500. | **500 A** from this brochure. 600 A unknown here. |
| CM / CMD shop copy | “state-of-the-art”, “most reliable”, “natural choice”, furnace “over 1,000 daily operations” | Numbers only | Brochure numbers. Furnace duty is shop text, not a catalogue current. |
| SHZV shop copy | “extremely robust and big capacity” | Table 2-1 currents / Um | Brochure numbers. |
| SHZV live URL | Listed twice: `17-shzv` and `32-shzv` (page 2 of 27 results) | One type | One product. `17-shzv` is the used URL. |
| W_L / W_G slugs | Shop names `W_L`, `W_G` | Brochures / designation: **WSL** (cage), **WDG / WLG / WSG** (drum) | Keep both: name `WSL / W_L`, `WDG / W_G`. WSL is cage; WDG is drum. Do not treat W_G as WSL. |

## Brochure vs catalog-source / 2025 sales notes

These are not Joomla, but they disagree with the PDF tables. Brochure table wins on the public site.

| Type | catalog-source / 2025 sales | Brochure table | Use |
|------|-----------------------------|----------------|-----|
| SHZV I extra currents | catalog-source: I +1200 / 1500 / 1600 / 2400. 2025 sales: I +1500 / 1600 / 2400 | I **400 / 600 / 1000 / 1600 / 2400** | Public ratings: brochure table. 1200 / 1500 I = unknown in this brochure. |
| CMD I 1200 | 2025 sales: CMDI-1200 ships | Table: I **400 / 600 / 1000 / 1600 / 2400** | Public ratings: brochure table. 1200 = sales-only, not in this brochure. |
| SHZVG I extras | 2025 sales highlight III 1300 / 1500 (and some I 1300 / 3000) | I also **2000 / 2400 / 3000 / 3600** | Public ratings include the brochure I row. |
| SHZVG selector | Combined types usually B / C / D / DE | Brochure adds size **E** | Public: B / C / D / DE / E. |
| CV2 doc number | Filename / site copy **HM0.154.4101-2025** | Extracted cover also shows **HM 0.154.5601-08.15/2024** | Keep filename 4101-2025 as the file id. Doc-number clash is unresolved. |
| HWV doc number | Filename `HWV Technical Data.pdf` | Cover HM0.154.5001; running footer **HM0.460.5001** | Same file. 0.154 vs 0.460 clash is unresolved. |
| CVT doc number | Filename HM0.154.3301 | Extract page 1 also prints HM0.154.001 (that number is the CV & SV book) | Use **3301**. |

## Missing brochures (ratings unknown unless noted)

No technical-data PDF in `public/downloads/` or `mirror/brochures/` for:

| Type | What we have | What stays unknown |
|------|----------------|--------------------|
| CHVT | Live one-liner + Longdong ±800 kV news | Iu, Um, positions, step voltage |
| HWDK | Live one-liner; catalog-source 1500 / 2000 / 2500 A and 35 / 69 kV | Confirm against a brochure; positions; step voltage |
| HMDK | Live one-liner only | All numbers |
| SHGV | Live one-liner only | All numbers |
| WSL / W_L | Live one-liner; catalog-source cage axes | Cage technical-data PDF (OneDrive folder had drum WDG only) |
| ZWC | Live one-liner only | All numbers |
| SHM-X | Shop listing + SHM-KX support list | Electrical data. Disk has **SHM-XE** type-test, not SHM-X TD |
| HMJK-II | Live function list | Sensor ranges, protocols |
| ZXJY | Live function list | Flow, power, vessel size |
| HMIET | Shop tile only | **Function unknown** |
| ET-SZ6 | Shop tile; Turkey site marks it AVR | English ratings |
| HMC-3C | Named as position indicator in CV2 / SHZV / SHZVG books | Its own I/O sheet |

## Other live-site problems (not ratings)

- Home slide “Global Leader in Solar Products” — tap changers are the company. Do not copy.
- Shop shows “Free / Product details” and mixes `products-page` with `products-page-for-categories-listing`.
- News article permalinks were not crawled; titles are known, slugs are unknown.
- Type-test EN/CN filenames in `public/downloads/` lost CJK characters (`SHM-XE-.pdf` …). Originals remain under `mirror/brochures/Type-test Report/`. Mapping of smashed names is best-effort.

## Not used (on purpose)

- Prices, country coefficients, QS/OS customer names.
- Invented currents (especially CV2-500, CM2 III 800/1000).
- SV as a live shop type (it is in the CV brochure, not in the 27-item shop).

## Added after live-shop PDF pull (same night)

- WSL / ZWC / HWDK / HMDK / SHGV now have live-shop leaflets or OI in `public/downloads/`. Ratings above still treat those as shop text unless a technical-data book exists.
- CHVT live shop: 1500 A three-phase, 6000 V step. No technical-data PDF. Printed as “live shop”.
- SHM-X live body pastes the SHM-D paragraph. Ignore that paste.
- About founding year: home 1989, history 1995. Print both.
- Solar numbers: about ~600 MW PV; home ~1 GWp EPC since 2016. Quoted only.

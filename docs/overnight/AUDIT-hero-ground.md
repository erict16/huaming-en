# Audit — hero ground

Eric: page feels weird, deep navy may be too dark, maybe white. Five grounds, same wave. He picks.

Shots: `sketches/overnight-unclone/hero-ground/01.png` … `05.png` at 1280. Same freeze (`data-time="2.1"`) so the ribbon pose matches.

## What did not change

Wave math is the live ribbon (16 strokes, `flow`, rotate −6°). No gold, no VACUTAP, no 100-years copy. IBM Plex. Factory still under the stage.

Live `/` still sits on `#001a3d`. These files are sketches.

Live ribbon polish (on `/`, not a new motion): ends taper, stroke scaled by DPR, speed 0.36 → 0.26, `prefers-reduced-motion` listens for change and holds a still.

## File by file

**01 — white paper.** Pass, and the one that answers “maybe white.” Navy/steel ink on `#fff`. Type is navy, readable without a dark scrim. The ribbon still reads as the live wave, just inverted onto Mintlify’s ground. Risk: a buyer who only knows the current navy fold may think the site went “docs / SaaS.” If the complaint is the cave, this is the fix.

**02 — light steel / #eef1f4.** Pass. Same type and ribbon as 01, cooler industrial paper, not cream. Closest pair to 01 (hero mean RGB distance ~23). Pick this if 01 feels like a blank website and you still want paper. Do not pick both; they are one idea with different stock.

**03 — current deep navy.** Control. `#001a3d`, white type, light ribbon. This is live, with the taper polish only. Do not pick it if “too dark” is the brief. Keep it as the before.

**04 — softer navy.** Pass as a compromise. Field lifted to `#15548c` (near brand `#00428C`), white type kept. Header and stage sit closer, so the fold is less of a hole. Waves still show. Pick this only if you want to keep the night-theatre layout and just raise the lights. It will not feel like paper.

**05 — split.** Pass, with a caveat. White paper left for type, navy only under the waves. The ribbon is the live one, fitted to the right panel, faded at the join (not chopped). Type never fights a dark field. Caveat: it reads as two panels glued at 48%. Some will like that (MR left-column, honestly). Some will call it a brochure cover. The wave is a bit denser because the canvas is half-width.

## Stretch / clone check

No MR webm, no gold strip, no anniversary copy. Stills are the Putuo factory photo, cover, caption underneath. Header is the live navy bar.

## What to pick

If the page feels too dark: **01**. Runner-up **05** if you want the motion to keep its navy field.

If white feels cheap: **02**.

If you only wanted the lights up, not a paper site: **04**.

Do not pick **03** unless you decide the dark fold was fine.

Do not ship two. Wire one into `src/` after Eric says which.

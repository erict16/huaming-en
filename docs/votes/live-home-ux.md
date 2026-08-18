# Live vote — home first viewport

Role: UI/UX  
Date: 2026-08-19

## Vote

**iterate**

Same handbook as `sketches/home-2026-08-19/01-handbook.html`. Tokens, type, nouns, and CTAs are locked and present. Not scrap: this is not 05’s course-home, not 03’s graphite console, not Inter-on-glow. Not keep: the first viewport lost the object I voted for.

Identity: home is a catalogue plate. Shipped home is a catalogue headline. The plate sits after `mt-16` with no min-height and no drawing. On a short laptop or a phone it is below the fold.

## First viewport (as shipped)

`out/index.html`

- Paper `#F4EFE6`, ink `#1A1714`, rule `#C4B8A4`, CTA `#9B2C2C`. Source Serif 4 / IBM Plex Sans. Correct.
- Folio `HM / 01 · Technical catalogue`. H1 `Tap changers for power transformers`. Sub and both CTAs match the sketch and the lock.
- Header: wordmark + Products / Downloads / About / News + oxide Contact. Heavier than the sketch (32px logo, 中文, extra mobile nav row).
- Then type stack, then a 2-col text card labeled `Plate · CV2`. Equal columns, no `min-height: 280px`, no cutaway. Extra sentence and `Open CV2` / PDF links inside the card.

The 3-step strip and “Types on the plate” are below-fold. They are 01, not the first screen.

## Vs the sketch

Sketch first screen is folio + H1 + sub + CTAs, then a **40px** drop into a **1.2 / 0.8** row, plate `min-height: 280px`, aligned to the baseline of “What this is.” That bordered field *is* the designed object.

Shipped: **64px** (`mt-16`) plus a top rule before an equal grid. The plate is a padded paragraph, not a nameplate. Plan 01 asked for “cutaway or nameplate drawing, no sky, no glow.” The sketch left that field empty on purpose so it would read as a plate. The ship filled it with card copy. Without the mass, cream type is just a cover sentence.

Mobile (≤640): sketch hides nav so the plate can stack. Shipped adds a second header strip. I already flagged this on the first ballot — folio + H1 + two CTAs + strip will miss one screen; the extra nav makes it certain.

Do not average 05 back in to “fix” this. Do not add a photo-hero from 02. Pull the plate up, restore the 280px field, put a line drawing or leave the field empty, slim the mobile chrome. Then it is keep.

## CV2 type page (`out/products/cv2/index.html`)

Not the first viewport. Handbook-correct: folio, serif H1, rating strip, PDF list. Sketch product page used oxide PDF buttons; shipped uses an underline list plus one `Talk to us` CTA. Leave. Ratings as `sr-only` dt/dd is a bit thin next to the sketch’s labeled table — iterate later, not this vote.

## Vetoes

None on the locked 01 surface.

Would veto a keep that treats this type stack as the finished plate. Would scrap if the next pass puts a motion lesson or a dark console on `/`.

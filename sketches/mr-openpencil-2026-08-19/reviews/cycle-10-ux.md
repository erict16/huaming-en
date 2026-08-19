# Cycle 10 — UX

Vs LOOP lock: chrome → stage (photo or dark band, type bottom-left, one CTA) → photo teasers (full-bleed + shade or empty dark) → list last. Veto polaroid. Veto white + H1 + table.

Read: leftover 390s (Projects, News, SHZV, HWV, CM) + About 390 legal-name dek + Contact desk/390 Write to us.

## Must-fix

None. Every frame has a stage. Teasers are full-bleed + shade or empty dark, not polaroid. No white + H1 + table. Spec after teasers on the PDPs.

## Should-fix

1. About 390 numbers are white key-value rows, before HQ teasers. Desk is the dark numbers band. Paint ink; keep teasers before any list.

2. Projects 390 numbers: same white rows (order is after teasers). Desk is ink.

3. Contact desk teasers still the short custom row (220h, no kicker), not `photoTeaser`. Stage CTA `Write to us` is in. Write tile reuses the factory crop.

## Pass / fail vs MR

| Page | Verdict | Why |
|------|---------|-----|
| Projects 390 | **Pass** | Photo stage, type BL, one CTA (`Find a type`). 3 photo teasers, numbers last. |
| News 390 | **Pass** | Solar stage, type BL, one CTA (`About`). 3 teasers; Singapore empty dark. |
| SHZV 390 | **Pass** | Dark product stage, type BL, one CTA. 3 sibling photo tiles, spec last. |
| HWV 390 | **Pass** | Product stage, type BL, one CTA. CV2 / CM2 / CMA7 photo tiles, spec last. |
| CM 390 | **Pass** | Studio split (legal). Type + one CTA. 3 photo tiles, spec last. |
| About 390 | **Pass** | Factory stage, legal-name dek, one CTA. Shanghai photo; Singapore empty dark. Numbers leftover. |
| Contact | **Pass** | Factory stage, type BL, one CTA (`Write to us`). 3 photo teasers, form after. |
| Contact 390 | **Pass** | Factory stage, dek, one CTA. 3 job teasers, form is Send. |

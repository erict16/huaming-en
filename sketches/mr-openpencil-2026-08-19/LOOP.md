# Overnight draft loop

Hard stop: **2026-08-20 07:00 +08** (this morning). If `date` is at or past that, write `docs/DRAFT-STATUS.md`, commit, stop. Do not start a new cycle.

Rhythm each cycle:

1. Read this file + `NOTES.md` + last `reviews/cycle-N.md`.
2. Build the next undone slice in `build.mjs` (OpenPencil `.fig`, not Next.js).
3. Eval: `node /tmp/op-cli/node_modules/@open-pencil/cli/dist/index.mjs eval huaming-mr-draft.fig --write --stdin < build.mjs`
4. Export PNG previews of new frames.
5. Spawn 3 reviewers (UX, copy, industrial). They only write `reviews/cycle-N-<role>.md`.
6. Parent applies **must-fix** items only. Skip taste nits if time is short.
7. Update the queue below. Commit + push `feat/overnight-v1`.
8. Stop the cycle. Next fire continues.

## Tokens (locked)

White `#FFFFFF`, ink `#1D1D1B`, Huaming blue `#0057B8`. No cream paper. No MR red. No serif kicker. Inter. Facts from `content/` only.

## Visual lock — Reinhausen.com, every page

The site is a Huaming clone of **MR page architecture**, not a catalogue list and not last night’s paper handbook.

Every new page must have, in this order unless the MR page itself is a tool:

1. Same chrome (dark utility + white header).
2. A **stage**: full-bleed photo or dark band, type bottom-left, one primary action. Not an H1 sitting on empty white.
3. **Photo teasers** (2×2 or 3-col) before any long list.
4. A denser table/list only after the teasers, if the buyer still needs names.
5. Dark numbers or contact band, then ink footer.

Veto and rebuild if a page is mostly white + type + a table. That is the Joomla/handbook leak.

Steal: stage slider, `teaser_products`, impulse cards, numbers strip, Curious/Questions/Customer.  
Refuse: MR red, MR mark, MR sentences, cream paper, serif kickers.

## Queue

| Slice | Surfaces | Status |
|-------|----------|--------|
| 0 | Home + CV2 desk/mobile | cycle-1 review applied 2026-08-20 00:38 |
| 1 | Products index, Downloads, About, Contact | cycle-1 review applied 2026-08-20 00:38 |
| 2 | Projects, News, Careers, Learn | done 2026-08-20 00:29; copy strings still need pass |
| 3 | Product pages CM2, SHZV, HWV | done 2026-08-20 00:46; cycle-2 review no must-fix |
| 4 | Product pages WSL, CMA7, CM | done 2026-08-20 |
| 5 | Remaining types as compact rows + mobile for slice 1–2 | done 2026-08-20 (`16 More types` desk + 390 `more-types-mobile`; other 390: Products, Downloads, About, Contact, Projects, Learn) |
| 6 | Polish from reviews, nav consistency, empty/error | done 2026-08-20 01:38; product 390 for CM2 SHZV HWV WSL CMA7 CM (x:1528) |
| 7 | Visual-lock nits (cycle-4 should-fix) | done 2026-08-20 02:15; cycle-5 no must-fix. Search field, studio split, photo tiles, SG dark HQ, WSL WDG/ZWC |
| 8 | White-JPEG teaser tiles + more-types 390 preview | done 2026-08-20 03:03. Knockout tiles for CM/CMA7/WSL teasers. PDP studio split unchanged. |
| 9 | Copy nits + stale previews | done 2026-08-20 03:16. WSL Name = WSL / WDL. CV2 spec hyphen. Re-exported About Contact Projects Learn CV2 CM2 SHZV. |

## Do not

- Recode the Next.js app until Eric says the draft is the spec.
- Invent ratings (no CV2-500, no CM2 III 800/1000).
- Mix OLTC / OCTC / MDU.
- Copy Reinhausen marks, red, or sentences.
- Touch huaming-hub, oltc-selector, TypeBooks.

## Paths

```
~/Github/huaming-en/sketches/mr-openpencil-2026-08-19/
fig: huaming-mr-draft.fig
```

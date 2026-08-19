# Cycle 1 — UX (vs Reinhausen.com architecture)

Lock: dark utility + white header → **stage** (photo or dark band, type bottom-left, one primary action) → **photo teasers** → optional list → numbers/contact band → ink footer.  
Veto: white + H1 + table (Joomla/handbook).

## Must-fix (6)

1. **Downloads — veto.** Black H1 slab, then search, then a full zebra file table. No photo teasers. Rebuild: stage (photo preferred) → tiles by family or kind (Technical data / Leaflet / OI) → table last.
2. **CV2 — veto.** White page, H1 on empty white, boxed studio shot, spec rows first, “Also look at” after. That is a handbook PDP. Rebuild: product **stage** (type in the photo, one primary CTA) → related photo tiles → spec list last.
3. **Contact — still a form page.** Black H1 + three text cards + form/address. No photo stage, no photo teasers. Stage (factory or people) → photo tiles for the three jobs → form after.
4. **Stage type on Downloads / Contact** sits top-left in a black rectangle. Lock is type **bottom-left** in the stage, with one primary action — same as Home, not a title bar.
5. **Chrome drift.** Home has a full ink footer (two companies + mail). Inner pages get a thin strip. Same utility / header / footer on every frame.
6. **CV2 related tiles are in the wrong slot.** Photo teasers must come **before** the dense spec list, not after it.

## Should-fix

- **Products stage:** gray mid-band overlay. Put type on the photo with a bottom gradient, like Home.
- **Oil OLTC tile** is a weak outdoor crop; the other three are product stills. One language of teaser photo.
- **About:** Shanghai / Singapore are white address cards. Use photo teasers (factory / HQ). Drop the leftover Xiao Yi sentence under the cards — it reads as handbook residue.
- Header **Search** is a label, not a control. Either a real field or kill it.
- Downloads zebra rows still look like the old catalogue CMS. After teasers, a quieter list is enough.
- Contact’s three cards duplicate Home’s “We are here for you.” On Contact they should go deeper (photo + one action), not repeat the same white boxes.
- CV2 spec line “There is no CV2-500” is draft-meta, not buyer UI.

## Pass / fail vs MR

| Page | Verdict | Why |
|------|---------|-----|
| Home | **Pass** | Stage photo, 3 project teasers, 2×2 families, photo type row, numbers, 3-col close. This is the lock. |
| Products | **Pass** | Stage → 2×2 photo families → type list. Order is correct. Overlay + Oil tile are should-fix only. |
| About | **Pass** | Factory stage + numbers. Not a table page. Location tiles need photos (should-fix). |
| CV2 | **Fail** | White + H1 + table. Teasers last. |
| Downloads | **Fail** | Dark H1 + table. No teasers. Classic veto. |
| Contact | **Fail** | Dark H1 + form. Tool-page exception does not cover missing stage photography. |

Slice 1 restyle landed on Products / About only. Downloads, Contact, CV2 are still handbook. Do not ship those three until must-fix 1–3 and 6 are in the `.fig`.

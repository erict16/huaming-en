# Overnight status

Updated: 2026-08-19 01:15 CST
SHA: pending this commit

## Clock

- Started: 00:15 CST 2026-08-19
- Hard stop: **07:00 CST 2026-08-19**
- Scheduler `01a015a8d8ee` every **30m**. After 07:00 it must no-op.

## Repo

- Workdir: `~/Github/huaming-en` (vote locked; `_huaming-en-wip` is an empty leftover)
- GitHub: https://github.com/erict16/huaming-en (private)
- Preview: https://huaming-en.vercel.app
- Branch: `feat/overnight-v1`
- Plan winner: **01 Utility handbook**
- Live home vote: marketing keep, copy keep, UX iterate (plate + now a real CV2 still)

## File counts

- 62 PDFs in `public/downloads/` (catalog rows match disk)
- 27 product types; **CHVT is the only type with no PDF**
- 60 static routes
- Product photos in `public/images/products/` for most types

## Done this fire

- Rechecked live CHVT page: no PDF, only shop text + `chvt.png`
- CHVT note on the type page; conflict recorded
- Home plate uses the CV2 photograph
- Assert script now checks every `downloads.json` row exists and CHVT has honest empty copy

## Not finished

- CHVT technical PDF (does not exist on the live shop)
- Full `/images/` tree
- Chinese huaming.com still 500
- Some mirrored HTML still truncated from the first urllib pass
- YouTube: links only

## Blockers

- `web_fetch` blocked (Clash 198.18.*)
- No git-lfs

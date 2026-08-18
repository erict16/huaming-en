# Huaming English site

Official English catalogue rebuild for Shanghai Huaming Power Equipment Co., Ltd. Replaces [intl-huaming.com](https://www.intl-huaming.com/). Private until HQ takes it.

This is not [Huaming Hub](https://erict16.github.io/huaming-hub/) and not the [OLTC selector](https://erict16.github.io/oltc-selector/). Those stay separate. This site links out.

## Stance

Utility handbook (plan 01). Paper, specs, PDF first. Vote record: `docs/identity.md`.

## Stack

Next.js App Router, TypeScript, Tailwind v4. `output: "export"`.

```
npm install
npm run dev
npm run build
```

Static files land in `out/`.

## Content

Product facts live in `content/`. Do not invent Iᵤ / Um. No prices. Brochure wins over the old shop text (`docs/content-conflicts.md`).

Downloads: `public/downloads/`. Mirror dump: `mirror/`.

## Contact

`intl@huaming.com`. The form opens a mailto; it does not post to a server.

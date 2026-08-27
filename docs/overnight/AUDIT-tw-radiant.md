# Audit — Tailwind + Radiant on `/`

Template: **Radiant** (https://tailwindcss.com/plus/templates/radiant). Public preview measured at https://radiant.tailwindui.com/ (1280). Plus source zip needs a signed-in catalog; this slice copied **scale**, not the Next.js zip, not SaaS copy, not app screenshots, not Sanity, not cream.

## What we copied from Radiant

- Container: `max-w-7xl` + `px-6 lg:px-8`
- Section air: `py-16 lg:py-24` (Radiant marketing bands use `py-32`; we took the air, not the 128px display hero)
- Section headings: `text-4xl sm:text-5xl` (Radiant section titles are `text-4xl sm:text-6xl`)
- Product / blog card scale: ~380px columns, `gap-8`, large 3/2 stills. Featured is a 3-col grid, not a tight carousel.
- News: two large paper cards, `p-8`, `gap-8` (Radiant blog-row scale without the rounded-3xl product shot)

Did not copy: “Close every deal” 128px display type, animated bento-as-product, cream, Switzer, Series A banner, Login/Pricing.

## Hero still 02

Ground `#eef1f4`, navy type, steel acts, steel-palette waves. Ribbon math unchanged (16 strokes, flow, −6°, speed 0.26, taper, DPR, reduced-motion). Type/padding lifted so the 02 field sits in Radiant air. Factory photo still under the stage. Header is the live navy bar + Hm logo.

## Tailwind

Astro 5 + `@tailwindcss/vite` (Tailwind v4). Tokens in `src/styles/app.css`: navy `#00428C`, steel `#0071A9`, ink `#262626`, paper `#eef1f4`. IBM Plex stays. Homepage uses `src/layouts/Home.astro`. Inner pages keep `Base.astro` + `huaming.css` + `layout.min.css` + MR jQuery.

## Deleted

`mirror/` — 175 tracked TYPO3 HTML files, not in the Astro build.

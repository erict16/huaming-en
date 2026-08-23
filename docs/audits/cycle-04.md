# cycle: 4

page: / and /products/oltc and /products/cv2

mr_css: layout.min.css sha256 `a4b5bea9b689` (source mirror, unchanged)

selector_hit: 75/75 `/`, 26/26 oltc, 28/28 cv2

token_hit: 22/22 (Azo Sans + hex + geometry still in `src/styles/layout.min.css` and dist CSS)

structure: 8/8

this cycle:
- `@font-face` for Azo Sans is woff2-only. Dist CSS: 12 `.woff2`, 0 `.eot`
- `vercel.json` sets `framework: astro`, `buildCommand: npm run build`, `outputDirectory: dist`
- previous CLI deploy failed: Vercel still treated the project as Next.js ("No Next.js version detected")

gaps:
- preview URL from failed Next build: https://huaming-q4ashzz1z-eric-tans-projects.vercel.app (that build is broken)
- need a new deploy after vercel.json

next_fix: `npx vercel --yes` again so Astro builds on Vercel

closeness: 100

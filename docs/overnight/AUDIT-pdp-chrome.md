# Audit — product detail chrome

Homepage 02, `/products/` listing, and family tables not restyled this turn. 3:2 contain not undone. InnerTeaser not rebuilt.

## What shipped

- All PDPs that use `products/[slug].astro` share one shell: navy bar, ink title, 3:2 contain still, facts table, Product Information / Downloads, related types, PDF / Singapore / All types.
- Facts table: Parameter / Value from the existing ratings. No “Show all” MR accordion on the hero facts.
- Related types: same ProductBox stills in a grid, not an MR swiper.
- Gold outline “Also” tiles replaced with text links. InnerTeaser at the bottom stays (already navy).
- Spot-check: **CV2**, **CM2**, **WSL**. Whole unit visible. Ratings present. PDF path still on the Downloads tab / footer links.

## Fine

- `astro build`: 61 pages.
- Type names unchanged. No VACUTAP / OILTAP copy.
- CM2 still lists III/II 500/600 A only; CV2 lists 350/600 A, Um, step voltage, positions.

## Leftover

- Product Information still uses the old pill tabs (Technical Data / Downloads). Painted, not rebuilt.
- InnerTeaser tiles at the foot of every PDP.
- Breadcrumb may fight leftover `display:none` in layout CSS; forced visible on `.hm-pdp`.

## Worse?

- No missing facts vs the old keyfact list (same `product.ratings`). PDFs still in ProductRegisters. Stills still contain.

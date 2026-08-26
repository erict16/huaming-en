# Audit — inner gold + search icon

Homepage 02 left in place. Inner product layouts not rewritten. 3:2 contain not touched.

## What shipped

- InnerTeaser tiles (Downloads / Products / Contact) stay the same three-column component. Gold hover fill `#e5bb29` is navy `#00428C` / `#00356f`. Headlines and links are white. Arrow glyphs inverted to white.
- Leftover Reinhausen gold on inner chrome (link hover, outline CTA hover, gradient CTA overlay, breadcrumb hover) is steel `#0071A9`.
- Navy bar has a Lucide search mark that goes to `/search/`. No new search UI. Mobile menu also lists Search.

## Fine

- `/` still sketch 02 (navy bar, CM2 still, type strip, numbered news).
- Product stills still 3:2 contain.
- InnerTeaser links unchanged.

## Small leftover

- Some MR SVG arrows in `layout.min.css` bake `#e5bb29` into the data-URI. Filter invert covers the teaser arrows; a few download-row hovers may still flash gold if they use a different class. Not a layout change this turn.

## Worse?

- No. Inner pages keep their tiles and links. They are just not gold.

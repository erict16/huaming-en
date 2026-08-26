# Audit — leftover gold in SVG data-URIs

Homepage 02 and inner product layouts not rewritten. 3:2 contain not touched.

## What shipped

Reinhausen gold `#e5bb29` is gone from live CSS, JS, and public SVG that a buyer can load.

| File | Was | Now |
|---|---|---|
| `src/styles/layout.min.css` | 96 gold hits (arrow data-URIs, link hover, CTA overlay) | `#0071A9` / `%230071A9` |
| `public/js/mr/scripts.min.js` | Hover script painted object SVG fill/stroke gold | steel `#0071A9` |
| `public/fileadmin/.../icon_arrow-link-yellow.svg` and the `_assets` copies | stroke `#e5bb29` | steel |
| play / plus / keyfact placeholder SVGs | same gold | steel |

Download-row arrows that used the yellow link SVG now hover steel, not gold.

## Fine

- `/` still navy bar + CM2 still + type strip.
- Inner product pages keep their structure.
- `mirror/` archive still has gold. It is not served.

## Small leftover

- Bootstrap `#ffc107` remains in `layout.min.css` (framework warning yellow, not MR gold). Not used as a brand arrow.
- Filenames still say `icon_arrow-link-yellow.svg`. The paint is steel.

## Worse?

- No. Arrows are the same shapes. Only the hex changed.

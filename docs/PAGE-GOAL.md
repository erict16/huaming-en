# Goal — page-by-page MR match

Eric 2026-08-24: audit every route vs Maschinenfabrik Reinhausen (`mirror/mr/` HTML+CSS). Product taxonomy included. Paint must match, not only the class formula.

Hard stop still 2026-08-24 07:00 Asia/Shanghai.

## Pass / fail

A page passes when:

1. Landmark classes from the mapped MR HTML are present (existing `scripts/audit-mr.mjs`).
2. The page paints: no empty full-bleed stage, no postage-stamp hero, product stills ~3:2 contain, cards in `#portfolio-overview-products.grid`.
3. Nav second-level family labels go to a **list** URL that only shows that family. Type names go to the PDP.
4. Copy stays Huaming. No VACUTAP / OILTAP / ECOTAP / TESSA / “THE POWER BEHIND POWER”.

Skip on purpose: language modal, footer `.socialMedia`, MR analytics/CMP.

## Route map

| Huaming | MR file | Must have |
|---------|---------|-----------|
| `/` | `home.html` | stage full-bleed cover, teasers, product-swiper, footer |
| `/products/` | `portfolio.html` | introtext, tabs OLTC/OCTC/accessories, wordcloud, product grid |
| `/products/oltc/` | `oltc.html` | stage + intro + table + grid (all OLTC families) |
| `/products/octc/` | `oltc.html` shape | same list chrome, WSL/WDG/ZWC only |
| `/products/accessories/` | `oltc.html` shape | MDU + monitor + other |
| `/products/{family}/` | `oltc.html` shape | one family: oltc-oil, oltc-vacuum, oltc-dry, oltc-gas, oltc-reactive, regulator, mdu, monitor, other |
| `/products/{type}/` | `vacutap-vi.html` | PDP facts + PDFs + related. Breadcrumb includes family list. |
| `/downloads/` | `downloadcenter.html` | introtext, kind tabs, rows. Next: `downloadCenterInputWrapper` search. |
| `/about/` | `company.html` | introtext (no empty stage), text-module, numbers-module |
| `/news/` | `impulses.html` | introtext + teaser_articles |
| `/news/{slug}/` | `impulse-article.html` | articleIntro + blueBox |
| `/contact/` | `contact.html` | introtext (no empty stage), powermail, contactfinder |
| `/search/` | `search.html` | ke_search form + client results |
| `/404` | `404.html` | textmedia-parallax |
| `/legal/imprint/` `/legal/privacy/` | `imprint.html` | text-module |

## Taxonomy (source: `content/products.json`)

10 families, 27 types. Groups:

- **oltc** → oil / vacuum / dry / gas / reactive / regulator
- **octc** → octc
- **accessories** → mdu / monitor / other

Mega-nav:

- Products → `/products/`
- Second level (family name) → `/products/{family id}/` or group URL for accessories
- Third level (CM, CV2, …) → `/products/{type slug}/`

Do not point family labels at `/products/` or at a PDP.

## Cycle rule

Each overnight cycle: pick the first failing row in `docs/PAGE-AUDIT.md`, fix it from the MR HTML, rewrite the audit row, run `node scripts/audit-mr.mjs`, commit, push. Do not idle. Do not ask Eric.

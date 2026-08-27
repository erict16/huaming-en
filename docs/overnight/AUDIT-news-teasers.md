# Audit — Latest news cards + navy teasers

Homepage concept unchanged (Welcome, Factory|Singapore, Latest products, header, footer). `/news/` index still uses the list.

## 1. Latest news

Bars (01 | title | date) are gone on `/`. Heading is **Latest news**. Two white cards on `#eef1f4`, 2-up at 1280, stacked at ~375. Each card: date, title link, summary. Same two stories (`chvt-longdong-800kv`, `singapore-international-hq`). No 01/02.

## 2. InnerTeaser tiles

Replaced leftover MR `.textteaser-gradient` markup. Failures were 8px rim padding, empty middle (space-between), and steel `#0071A9` links on navy (`a.link:hover` won).

Now three equal navy tiles (`#00428C`), padding 1.5rem / 1.6rem, content stacked from the top. Links white. Copy as specified:

- Need a type PDF? → Downloads → `/downloads/`
- The catalogue → Products → `/products/`
- International headquarters, Singapore → Contact → `/contact/`

Playwright 1280: heading Latest news, 2 cards, hrefs match, card bg white, 2-up. Tiles: 3, heights 152px, pad ≥22px, link `rgb(255,255,255)`. 375 stacks both.

## Shots

- `docs/overnight/shots/news-blocks-1280.png`
- `docs/overnight/shots/news-blocks-375.png`
- `docs/overnight/shots/teasers-1280.png`
- `docs/overnight/shots/teasers-375.png`

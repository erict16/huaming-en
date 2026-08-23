# cycle: 21

page: /products vs `portfolio.html`

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- curled `https://www.reinhausen.com/portfolio` → `mirror/mr/portfolio.html` (315975 bytes, sha256 `4c24d224ec6b`)
- `/products`: `.introtext` `.h1ToIntro` `.subnavi-big` `.wordcloud-container` `.wordcloud` `.teaser-module` from that page. Tabs are Huaming families (OLTC / OCTC / accessories), not MR solutions/service-finder. Wordcloud items are Huaming type names. Teasers: Search / Downloads / News.

selector_hit: `/products` 31/31, `/` 99/99
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` still skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints

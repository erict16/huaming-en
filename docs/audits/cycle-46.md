# cycle: 46

page: `/news/{slug}` quote + numbers from impulse-article.html

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- MR article has `.quote` + `.numbers-module.bg-grey`. We skip author photos and invented mm ratings.
- Quote text is the existing summary. Author line: “Live newsroom, {date}”.
- Figures only when the article already names them (CHVT 800 kV / 2025; Singapore HQ 2025 / subsidiary 2022).

selector_hit: `/news/chvt-longdong-800kv` 43/43, `/about` 48/48
token_hit: 22/22
structure: 13/13
closeness: 100

gaps: language modal, `.socialMedia`, sticky login, news topicteaser graphic skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints

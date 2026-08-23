# cycle: 22

page: /downloads and /news

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- `/downloads` vs `downloadcenter.html` ~2307: drop empty `.stage`. Ship `.introtext` `.h1ToIntro` `.subnavi-big` `#downloadTabs` `.tab-content`. Tabs are Huaming kinds (technical-data / leaflet / manual / type-test), not MR Career/Suppliers.
- `/news` vs `impulses.html` ~2626: same introtext swap. `.teaser_articles` stays.

selector_hit: `/downloads` 33/33, `/news` 29/29, `/` 99/99
token_hit: 22/22
structure: 9/9
closeness: 100

gaps: language modal, `.socialMedia` still skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints

# cycle: 9

page: /

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle (file:selector from `mirror/mr/home.html` ~812–824):
- `.list-parent` mobile duplicate of the Products mega
- `.third-nav-toggler-li` / `.third-nav-toggler` / `.mobile-menu-third`
- 10 family rows, product children same as desktop `.dropdown-third`
- `scripts.min.js` already binds `.third-nav-toggler`

selector_hit `/`: 97/97
token_hit: 22/22
structure: 9/9 (unchanged)
closeness: 100

preview: cycle 8 URL still live until this commit deploys.

gaps:
- language modal (`languageMenu`) still omitted (中文 is a link to huaming.com)
- `/typo3conf/ext/powermail/` gif/png still in Basic.css
- no `.socialMedia`

next_fix: drop unused powermail image urls from Basic.css so the build warning goes, or leave them

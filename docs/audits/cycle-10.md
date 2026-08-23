# cycle: 10

page: /

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle: `src/styles/Basic.css` `url("/typo3conf/ext/powermail/...")` → `none` (4 urls). Build no longer warns those 404s. Contact form still uses `.powermail` classes; icons were MR TYPO3 assets we do not ship.

selector_hit `/`: 97/97
token_hit: 22/22
structure: 9/9
closeness: 100

preview (cycle 9 chrome, pre-this CSS): https://huaming-bjswmgzp8-eric-tans-projects.vercel.app

gaps: language modal, `.socialMedia`. Skip.

next_fix: none required for formula. Optional languageSelect modal chrome.

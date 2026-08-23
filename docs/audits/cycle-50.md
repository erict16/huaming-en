# cycle: 50

page: `/about` quote + `/products/oltc` textmedia

mr_css: layout.min.css sha256 `a4b5bea9b689`

this cycle:
- company.html has `.quote`. We skip MR awards copy and photos. Quote text is the chairman-letter figure already on the numbers module: “Tap changers in 150+ countries.”
- oltc.html has textmedia before the tables (quality + test-chamber photo). Photo skipped. Laboratory textmedia uses CNAS/ISO already on /about.

selector_hit: `/about` 53/53, `/products/oltc` 46/46, `/` 114/114
token_hit: 22/22
structure: 15/15
closeness: 100

gaps: language modal, `.socialMedia`, news topicteaser graphic skipped.

next_fix: leftover chrome only if a mapped page still misses a class that paints

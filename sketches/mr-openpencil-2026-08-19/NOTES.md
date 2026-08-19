# Huaming EN — OpenPencil draft (MR layout)

Open `huaming-mr-draft.fig` in OpenPencil. Desktop 1440 + mobile 390. Home + CV2.

Layout stolen from [reinhausen.com](https://www.reinhausen.com/) (stage slider, impulse teasers, portfolio tiles, numbers, 3-col contact). Not their mark, not their red, not their copy.

## Map

| MR | Huaming |
|---|---|
| Utility: Newsroom / Downloads / Contact / myReinhausen | News / Downloads / Contact / Hub |
| Mega nav: Impulses / Portfolio / Career / Company | Projects / Products / Careers / About |
| Stage slider + gradient | Full-bleed substation photo, type bottom-left |
| Exciting impulses | Three project / fact cards |
| Our portfolio. Your solution. | Four family tiles |
| Latest products + 10-week OLTC promise | CV2 CM2 SHZV HWV + 4–6 weeks |
| Reinhausen in numbers | 150+ countries, 4–6 weeks, ISO 17025, 002270.SZ |
| Curious / Questions / Customer | Find a type / Take a PDF / Talk to sales |

Tokens: white `#FFFFFF`, ink `#1D1D1B`, Huaming blue `#0057B8`. No cream paper. No serif kicker.

## Rebuild

```
~/.bun/bin/bun /tmp/op-cli/node_modules/@open-pencil/cli/dist/index.mjs eval huaming-mr-draft.fig --write --stdin < build.mjs
open -a OpenPencil huaming-mr-draft.fig
```

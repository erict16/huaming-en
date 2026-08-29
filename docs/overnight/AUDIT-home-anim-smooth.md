# Audit — homepage ribbon, keep playing

Branch `home-anim-smooth` from `main` (`edc2c51`). Does not pause on scroll.

PR `#1` (`home-scroll-perf`) froze the rAF loop for 120ms after each scroll event. That saved compositor work. It also froze the 02 ribbon. Eric wants the ribbon to keep moving.

## What janked on live `main`

The 02 ribbon on `/` paints 16 filled ribbons every vsync while the hero is on screen. Canvas backing store at 1280×800, DPR 2: **2560×1152**. IntersectionObserver already stops it off-screen. `prefers-reduced-motion: reduce` already stills it.

Homepage does **not** load `layout.min.css` or `/js/mr/vendor.min.js`.

## What we measured

Playwright Chromium (system Chrome, headless), viewport 1280×800, DPR 2. Preview of `astro build` vs live `https://huaming-en.vercel.app/`.

| | live `main` | this branch |
| --- | --- | --- |
| Canvas backing | 2560×1152 | 1280×576 |
| Path points / ribbon | 80 | 48 |
| Idle | 61 draw/s, 16 fills/draw, cb p50 0.6ms | 59 draw/s, 16 fills/draw, cb p50 0.3ms |
| Scroll, hero still on screen (180px / 1s) | 61 draw/s, 16 fills/draw | 60 draw/s, 16 fills/draw |
| Hero scrolled off | 0 rAF | 0 rAF |
| `prefers-reduced-motion: reduce` | 0 rAF, one still | 0 rAF, one still |
| Longtasks (idle + on-screen scroll) | 0 | 0 |
| Pixel fill vs live | 1× | 0.25× |

CDP `mouse.wheel` while scrolling the hero off-screen dropped live to ~21 rAF/s. That mixed two things: compositor wheel, and the IO pause once the canvas left the viewport. The fair test is scroll **while the ribbon is still visible**: both builds stay at ~60 draw/s on this box. The remaining cost on phones is the 2560×1152 bitmap. This branch cuts that to 1280×576 and drops 16 `createLinearGradient` calls per frame.

## What we changed

- `HeroWaves.astro`: backing store is 1× CSS, width capped at 1280 (CSS-scaled). Path resolution 48. Solid fills. Edge fade is a CSS mask. Own compositor layer (`contain-paint`, `transform-gpu`, `will-change-transform`). No pause-on-scroll. Off-screen and reduced-motion stills unchanged. Wave math unchanged (16 ribbons, flow, −6°, speed 0.26, taper, navy `#00428C` → steel `#3d86b3`).
- Factory + product `<img>`: real width/height, `decoding="async"`, product stills `loading="lazy"`.

Shot: `docs/overnight/shots/home-anim-smooth-1280.png`.

## Verify

1. `npm run build && npm run preview`
2. `/` still looks like 02 (light steel, navy/steel ribbons).
3. Scroll the homepage. The ribbon keeps moving while the hero is on screen. Scroll should not hitch.
4. Scroll past the hero: rAF stops. Scroll back: it continues.
5. `prefers-reduced-motion: reduce` holds a still.
6. Product / about / news pages were not restyled.

# Audit — homepage scroll vs wave

Branch `home-scroll-perf`. Main untouched.

## What janked

The 02 ribbon on `/` keeps a `requestAnimationFrame` loop going while the hero is on screen. IntersectionObserver already pauses when the canvas leaves the viewport. It does **not** pause while the user is scrolling the fold, so the 16 filled ribbons still paint every frame on a DPR-2 canvas (measured 2560×1152 at 1280×800). That is the only continuous paint on `/`.

Homepage does **not** load `layout.min.css` or `/js/mr/vendor.min.js`. `Home.astro` is Tailwind + chrome only. Inner pages still use `Base.astro`.

## What we measured (preview of `astro build`, Playwright Chromium 1280, DPR 2)

- Idle: 16 `fill()` calls per rAF, ~60fps.
- During scroll (before fix): still 16 fills per rAF.
- Headless raster was cheap here (fill p50 ~0ms, no `longtask` entries). The fight is still real: scroll compositor + a 16-ribbon canvas invalidating every vsync on a 2560×1152 bitmap. JS path build ~0.5ms/frame on this box; phones will pay more for the fills.
- Images: factory JPEG 712KB 1227×765 (displayed ~1216×448, no width/height). Six product stills 80–233KB. Total ~1.4MB. No decode longtasks in this trace. Not converted to WebP this slice.

## What we changed

- `HeroWaves.astro`: passive `scroll` / `wheel` / `touchmove` pause the rAF loop, last frame stays on the canvas, resume 120ms after the last scroll event. Off-screen and `prefers-reduced-motion` stills are unchanged. Ribbon math is unchanged (16, flow, −6°, 0.26, taper, DPR cap 2).
- Factory + product `<img>`: real width/height, `decoding="async"`, product stills `loading="lazy"`.
- Canvas `contain-paint`.

After fix: idle 16 fills/frame; during scroll mean 0.5 fills/frame; back at top, 16 again. Reduced-motion: 0 rAF.

## Verify

1. `npm run build && npm run preview`
2. Open `/`. Wave should move like 02 (light steel, navy/steel strokes).
3. Scroll the page. Scroll should not hitch; the ribbon holds a still while the finger/wheel is moving, then continues.
4. `prefers-reduced-motion: reduce` still holds a still.
5. Product / about / news pages were not restyled.

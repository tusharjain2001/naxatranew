# Naxatra Labs website

React 19 + Vite + Tailwind CSS v4 build of the Naxatra Labs 2026 Figma file. Only the home page exists so far.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint
```

## How the layout maps to Figma

The design ships two artboards: 1920px desktop and 402px mobile. The code uses the Figma numbers directly.

- **One spacing unit is one Figma pixel.** `--spacing` is `1/16rem`, so `px-100`, `h-116` or `top-702` mean the same pixels as in Figma.
- **The root font size scales the artboard.** A small script in `index.html` sets it. From 1280px up, the 1920 artboard scales to the viewport width, capped at 1920. Below 1280px, the 402 artboard scales, capped at 18px per rem.
- **`xl:` classes are the desktop artboard.** Unprefixed classes are the mobile artboard.
- **Some cards use `em` units.** The application cards, testimonials and journey timeline set a font size equal to one design pixel. The mobile versions of those cards are scaled copies of the desktop ones, so one set of numbers drives both.

Design tokens such as colours, type sizes and radii live in `src/index.css`. All page copy and image paths live in `src/data/home.js`.

## Structure

```
src/
  data/home.js            content for every section
  components/layout/      Navbar (Industry dropdown, mobile menu), Footer
  components/ui/          Button, ArrowUpRight, SliderArrows, Dots, SectionHeader
  hooks/useScrollTrack.js arrows and dots for horizontal carousels
  sections/               one file per home page section
public/assets/            images and SVGs exported from Figma (m/ holds mobile-only exports)
```

## Open items

- **Fonts:** the design uses Helvetica Neue in Light, Regular, Medium and Bold. It renders correctly on macOS and iOS. Windows and Android have no Helvetica Neue, so they fall back to Arial, which has no light weight. To match everywhere, add licensed Helvetica Neue web fonts with `@font-face` in `src/index.css`.
- **Factory video:** Figma marks the manufacturing image as a video placeholder. Set `manufacturing.videoSrc` in `src/data/home.js` and the play button will start playback.
- **Links:** navigation, "Read More" and product cards point to on-page anchors until the other pages exist.
- **Newsletter:** the Join form does not submit anywhere yet.

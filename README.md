# Naxatra Labs website

React 19 + Vite + Tailwind CSS v4 build of the Naxatra Labs 2026 Figma file. Five pages exist so far: Home (`/`), About Us (`/about`), Careers (`/careers`), Contact Us (`/contact`) and Blogs (`/blogs`).

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

Design tokens such as colours, type sizes and radii live in `src/index.css`. Page copy and image paths live in `src/data/home.js`, `about.js`, `careers.js`, `contact.js` and `blogs.js`.

## Structure

```
src/
  App.jsx                 picks the page from the URL path (no router needed for two pages)
  pages/                  Home, About, Careers, Contact and Blogs, each a list of sections
  data/                   content for every section, one file per page
  components/layout/      Navbar (Industry dropdown, mobile menu), Footer
  components/ui/          Button, ArrowUpRight, SliderArrows, Dots, SectionHeader, PageHero, FormFields, PersonCard, TabBar
  hooks/useScrollTrack.js arrows and dots for horizontal carousels
  sections/               one file per home page section; Journey, Ideas and Testimonials are shared
  sections/about/         sections only used on the About page
  sections/careers/       sections only used on the Careers page
  sections/contact/       sections only used on the Contact page
  sections/blogs/         sections only used on the Blogs page
public/assets/            images and SVGs exported from Figma (m/ mobile-only, about/, careers/, contact/ and blogs/ per page)
```

## Open items

- **Hosting:** `/about`, `/careers`, `/contact` and `/blogs` are served by the same `index.html`. `vite dev` and `vite preview` handle that already; on the live host, rewrite unknown paths to `/index.html`.
- **About, Careers, Contact and Blogs on mobile:** Figma only has desktop artboards for these pages, so their mobile layouts follow the home page's mobile patterns.
- **Careers content:** job summaries (shown when a card is expanded) and job description files are empty in `src/data/careers.js`; experience reads `x years` as in Figma. The position count comes from the number of jobs listed.
- **Blog posts:** posts live in `articles.posts` in `src/data/blogs.js`; there are no article pages yet, so posts are not links. The featured fundraise image is a single export of the Figma poster.
- **Forms:** the careers application and the contact enquiry validate required fields but do not submit anywhere yet.
- **Contact form fields:** the Figma artboard reuses the careers fields (role, resume, LinkedIn). They are built as designed; their labels live in `enquiry.fields` in `src/data/contact.js`.
- **LinkedIn badges:** founders and investors show the LinkedIn icon from Figma, but no profile URLs were provided, so they are not links yet.

- **Fonts:** the design uses Helvetica Neue in Light, Regular, Medium and Bold. It renders correctly on macOS and iOS. Windows and Android have no Helvetica Neue, so they fall back to Arial, which has no light weight. To match everywhere, add licensed Helvetica Neue web fonts with `@font-face` in `src/index.css`.
- **Factory video:** Figma marks the manufacturing image as a video placeholder. Set `manufacturing.videoSrc` in `src/data/home.js` and the play button will start playback.
- **Links:** navigation, "Read More" and product cards point to on-page anchors until the other pages exist.
- **Newsletter:** the Join form does not submit anywhere yet.

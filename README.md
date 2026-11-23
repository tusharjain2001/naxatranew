# Naxatra Labs website

React 19 + Vite + Tailwind CSS v4 build of the Naxatra Labs 2026 Figma file. Pages: Home (`/`), About Us (`/about`), Careers (`/careers`), Contact Us (`/contact`), Blogs (`/blogs`) and four industry pages opened from the navbar's Industry menu: `/industry/cleaning`, `/industry/agriculture`, `/industry/2-wheeler` and `/industry/3-wheeler`. The footer links to Privacy Policy (`/privacy-policy`) and Terms of Use (`/terms-of-use`), whose text lives in `src/data/legal.js`.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/, with every page pre-rendered (see "Search engines" below)
npm run lint
```

Build for the live site with the form backend's address set, or the forms post to `/api` on the site itself: `VITE_API_URL=https://api.naxatralabs.com npm run build`.

## Search engines

`npm run build` runs `scripts/prerender.mjs` after the normal build. For every address in `src/routes.js` it writes an HTML file (`dist/index.html` for the home page, `dist/_pages/...` for the rest) holding the page's text, title, meta description, canonical link, Open Graph tags and schema.org data (`src/lib/structuredData.js`). Crawlers and link previews read that file without running JavaScript. In the browser the copy stays hidden and `src/main.jsx` drops it before the app renders, so visitors see exactly what they saw before.

It also writes `robots.txt`, `sitemap.xml`, `404.html` and `.htaccess`. The `.htaccess` (Apache/LiteSpeed, as on Hostinger) serves each page's file, redirects `www.` to the bare domain and answers unknown addresses with status 404. Upload the whole of `dist/`, including the dot-files.

- **Page titles:** each page sets its own with `usePageTitle` (`src/lib/pageTitle.js`), which the build reads too.
- **Meta descriptions:** add them per address in `descriptions` in `src/data/seo.js`; pages without one use the description in `index.html`.
- **Search Console / Bing:** paste the verification codes into `verification` in `src/data/seo.js`.
- **New pages:** add them to `src/routes.js`, or they are not pre-rendered and the server answers 404.

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
  pages/                  Home, About, Careers, Contact, Blogs and Industry (one template for all four industry pages)
  data/                   content for every section, one file per page
  components/layout/      Navbar (Industry dropdown, mobile menu), Footer
  components/ui/          Button, ArrowUpRight, SliderArrows, Dots, SectionHeader, PageHero, FormFields, PersonCard, TabBar
  hooks/useScrollTrack.js arrows and dots for horizontal carousels
  sections/               one file per home page section; Journey, Ideas and Testimonials are shared
  sections/about/         sections only used on the About page
  sections/careers/       sections only used on the Careers page
  sections/contact/       sections only used on the Contact page
  sections/blogs/         sections only used on the Blogs page
  sections/industry/      sections of the industry template; each page's data in src/data/industry/ lists which it uses
public/assets/            images and SVGs exported from Figma (m/ mobile-only, about/, careers/, contact/, blogs/ and industry/ per page)
```

## Open items

- **Hosting:** the live site is on Hostinger, served by the `.htaccess` the build writes. `vercel.json` and `public/_redirects` still send every address to `index.html` (now the pre-rendered home page), so before moving to Vercel or Netlify, replace them with rewrites to the `_pages/` files.
- **About, Careers, Contact and Blogs on mobile:** Figma only has desktop artboards for these pages, so their mobile layouts follow the home page's mobile patterns.
- **Careers content:** job summaries (shown when a card is expanded) and job description files are empty in `src/data/careers.js`; experience reads `x years` as in Figma. The position count comes from the number of jobs listed.
- **Blog posts:** posts live in `articles.posts` in `src/data/blogs.js`; there are no article pages yet, so posts are not links. The featured fundraise image is a single export of the Figma poster.
- **Industry artwork:** the vehicle tiles, the drive-train render and the three-wheeler axle render are composed from Figma's separate layers into single transparent PNGs; the annotated drive diagrams and the challenge cards are exported from Figma as they appear.
- **Forms:** the careers application, the contact enquiry and the industry spec form validate required fields but do not submit anywhere yet.
- **Contact form fields:** Name, email, company, application type and message, as on the desktop artboard. The phone artboard still shows the careers fields; the site uses the enquiry fields on both. The application list is `enquiry.applications` in `src/data/contact.js`.
- **LinkedIn badges:** founders and investors show the LinkedIn icon from Figma, but no profile URLs were provided, so they are not links yet.

- **Fonts:** the design uses Helvetica Neue in Light, Regular, Medium and Bold. It renders correctly on macOS and iOS. Windows and Android have no Helvetica Neue, so they fall back to Arial, which has no light weight. To match everywhere, add licensed Helvetica Neue web fonts with `@font-face` in `src/index.css`.
- **Factory video:** Figma marks the manufacturing image as a video placeholder. Set `manufacturing.videoSrc` in `src/data/home.js` and the play button will start playback.
- **Links:** navigation, "Read More" and product cards point to on-page anchors until the other pages exist.
- **Newsletter:** the Join form does not submit anywhere yet.

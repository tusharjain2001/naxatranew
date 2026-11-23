// Search-engine settings the build uses when it writes each page's HTML (scripts/prerender.mjs).

export const site = {
  url: 'https://naxatralabs.com',
  name: 'Naxatra Labs',
  // Organization logo, and the picture link previews (LinkedIn, WhatsApp, X) show for every page.
  logo: { src: '/favicon-512.png', width: 512, height: 512 },
  xHandle: '@naxatralabs',
}

// Meta description per page address, e.g. '/products/rf15': '...'. A page without one keeps the site-wide
// description in index.html. Only add wording the client has supplied or approved.
export const descriptions = {}

// Ownership codes from Google Search Console and Bing Webmaster Tools ("HTML tag" method: just the content
// value). Each one set here is added to the home page.
export const verification = { google: '', bing: '' }

// Runs after the client and server builds (`npm run build`). For every address in src/routes.js it writes an
// HTML file holding that page's text, title, description, canonical address, link-preview tags and structured
// data, so search engines and link previews can read the page without running JavaScript. Visitors' browsers
// still render the page with the app as before: the copy stays hidden and src/main.jsx replaces it.
// Also writes robots.txt, sitemap.xml, 404.html and the Apache/LiteSpeed .htaccess (Hostinger) that serves
// each file and answers 404 for unknown addresses.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const server = await import(pathToFileURL(join(ssrDir, 'entry-server.js')).href)
const { paths, site, descriptions, verification, structuredData, render } = server

const template = await readFile(join(dist, 'index.html'), 'utf8')
const descriptionTag = /<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/
const siteTitle = template.match(/<title>([^<]*)<\/title>/)[1]
const siteDescription = unescape(template.match(descriptionTag)[1])
if (!template.includes('<div id="root"></div>')) throw new Error('index.html: expected an empty <div id="root"></div>')

function escape(text) {
  return String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
function unescape(text) {
  return text.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
}

const url = (path) => site.url + (path === '/' ? '/' : path)
const fileFor = (path) => (path === '/' ? 'index.html' : `_pages${path}.html`)

// What the app reads from the browser while rendering: the address, and media queries (answered "no match").
function pointWindowAt(path) {
  const media = { matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }
  globalThis.window = { location: { pathname: path, search: '', hash: '', href: url(path) }, matchMedia: () => media, devicePixelRatio: 1 }
}

// The hidden copy must not start downloads of its own: images and frames wait (lazy images inside a hidden
// block never load), videos neither play nor preload, and React's image preload hints are dropped.
function quiet(html) {
  return html
    .replace(/<link rel="preload"[^>]*>/g, '')
    .replace(/<(img|iframe)\b(?![^>]*\sloading=)/g, '<$1 loading="lazy"')
    .replace(/<video\b[^>]*>/g, (tag) => tag.replace(/\s(autoplay|preload)(="[^"]*")?/g, '').replace('<video', '<video preload="none"'))
}

function head(path, title, description) {
  const image = new URL(site.logo.src, site.url).href
  const tags = [
    `<link rel="canonical" href="${url(path)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escape(site.name)}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url(path)}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="${site.logo.width}" />`,
    `<meta property="og:image:height" content="${site.logo.height}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:site" content="${escape(site.xHandle)}" />`,
  ]
  if (path === '/' && verification.google) tags.push(`<meta name="google-site-verification" content="${escape(verification.google)}" />`)
  if (path === '/' && verification.bing) tags.push(`<meta name="msvalidate.01" content="${escape(verification.bing)}" />`)
  const data = structuredData(path, siteDescription)
  if (data) tags.push(`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`)
  tags.push(`<style>#root[data-prerendered]{display:none}</style>`, `<noscript><style>#root[data-prerendered]{display:block}</style></noscript>`)
  return tags.map((tag) => `    ${tag}\n`).join('')
}

function page(path, markup, title, description) {
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`)
    .replace(descriptionTag, `<meta name="description" content="${escape(description)}" />`)
    .replace('</head>', `${head(path, title, description)}  </head>`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered>${markup}</div>`)
}

for (const path of paths) {
  pointWindowAt(path)
  const { html, title } = render()
  const file = join(dist, fileFor(path))
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, page(path, quiet(html), title ?? unescape(siteTitle), descriptions[path] ?? siteDescription))
}
delete globalThis.window

// Unknown addresses: the plain app shell, sent with status 404. The app shows the home page there, as before.
await writeFile(join(dist, '404.html'), template.replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>'))

await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`)

await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${url(path)}</loc></url>\n`).join('')}</urlset>\n`,
)

const pattern = (path) => path.slice(1).replace(/[.+*?^$()[\]{}|\\]/g, '\\$&')
await writeFile(
  join(dist, '.htaccess'),
  [
    '# Written by scripts/prerender.mjs on every build. Change the script, not this file.',
    '# Each page address serves its pre-rendered file from /_pages/; any other address that is not a real file',
    '# gets status 404 with 404.html (the app shell, which shows the home page as before).',
    'ErrorDocument 404 /404.html',
    'RewriteEngine On',
    '',
    '# One address per page: http:// and www. redirect (in one step) to https:// on the bare domain.',
    'RewriteCond %{HTTPS} off [OR]',
    'RewriteCond %{HTTP_HOST} ^www\\. [NC]',
    'RewriteCond %{HTTP_HOST} ^(?:www\\.)?(.+)$ [NC]',
    'RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]',
    '',
    ...paths.filter((path) => path !== '/').map((path) => `RewriteRule ^${pattern(path)}/?$ /${fileFor(path)} [L]`),
    '',
    '<IfModule mod_headers.c>',
    '  # /assets/ mixes two kinds of file. The build\'s own JS/CSS carry a content hash in the name',
    '  # (index-<hash>.js), so they are cached for a year. Images and PDFs copied from public/assets keep',
    '  # their plain names and can be replaced in place, so they get a week.',
    '  SetEnvIf Request_URI "^/assets/" SITE_ASSET',
    '  Header set Cache-Control "public, max-age=604800" env=SITE_ASSET',
    '  SetEnvIf Request_URI "^/assets/[^/]+-[A-Za-z0-9_-]{8}\\.(js|css)$" HASHED_ASSET',
    '  Header set Cache-Control "public, max-age=31536000, immutable" env=HASHED_ASSET',
    '  # Pages are re-checked on every visit, so a new upload shows up at once.',
    '  <FilesMatch "\\.html$">',
    '    Header set Cache-Control "no-cache"',
    '  </FilesMatch>',
    '</IfModule>',
    '',
  ].join('\n'),
)

await rm(ssrDir, { recursive: true, force: true })
console.log(`prerender: ${paths.length} pages, 404.html, robots.txt, sitemap.xml, .htaccess`)

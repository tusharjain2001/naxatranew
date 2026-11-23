import { renderToString } from 'react-dom/server'
import App from './App'
import { rendered } from './lib/pageTitle'
import { structuredData } from './lib/structuredData'
import { site, descriptions, verification } from './data/seo'

// Build-time entry (see scripts/prerender.mjs): renders one page to HTML for its pre-rendered file.
export { paths } from './routes'
export { site, descriptions, verification, structuredData }

// The caller points the `window` stand-in at `path` first, since the app reads the address from it.
export function render() {
  rendered.title = null
  const html = renderToString(<App />)
  return { html, title: rendered.title }
}

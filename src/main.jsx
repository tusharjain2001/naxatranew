import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')
// Pre-rendered pages arrive with a copy of the page in #root for search engines and link previews, kept hidden
// by a style in the page head (scripts/prerender.mjs). The app renders the page itself, as it always has, so
// drop that copy first.
if (container.hasAttribute('data-prerendered')) {
  container.replaceChildren()
  container.removeAttribute('data-prerendered')
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

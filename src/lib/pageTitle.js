import { useEffect } from 'react'

// The title of the page being rendered on the server. The build's pre-render (src/entry-server.jsx) reads it
// after rendering a page, so the page's HTML file carries the same title the browser sets.
export const rendered = { title: null }

function rememberOnServer(title) {
  if (typeof document === 'undefined') rendered.title = title
}

// Sets the page's title: document.title in the browser, `rendered.title` during the build's server render.
export function usePageTitle(title) {
  rememberOnServer(title)
  useEffect(() => {
    document.title = title
  }, [title])
}

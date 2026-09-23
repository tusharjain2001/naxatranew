// Current route, without a trailing slash. The site is two static pages, so no router is needed.
export const currentPath = () => window.location.pathname.replace(/\/+$/, '') || '/'

import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Products from './pages/Products'
import Drone from './pages/Drone'
import Technology from './pages/Technology'
import Others from './pages/Others'
import MediaKit from './pages/MediaKit'
import { industryPages, industryPath } from './data/industry'
import { productFamilies, productPath } from './data/products'
import { legalPages } from './data/legal'

// Every address the site serves. App.jsx picks the page for the current address from these; the build
// (scripts/prerender.mjs) writes one HTML file per address, and the server answers 404 for anything else.
export const pages = { '/': Home, '/about': About, '/careers': Careers, '/contact': Contact, '/blogs': Blogs, '/products': Products, '/industry/drone': Drone, '/industry/others': Others, '/technology': Technology, '/media-kit': MediaKit }
export const industryBySlug = Object.fromEntries(industryPages.map((page) => [industryPath(page.slug), page]))
export const legalByPath = Object.fromEntries(legalPages.map((page) => [page.path, page]))
export const productBySlug = Object.fromEntries(productFamilies.map((family) => [productPath(family.slug), family]))

export const paths = [...new Set([...Object.keys(pages), ...Object.keys(productBySlug), ...Object.keys(industryBySlug), ...Object.keys(legalByPath)])]

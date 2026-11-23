import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Industry from './pages/Industry'
import ProductDetail from './pages/ProductDetail'
import Legal from './pages/Legal'
import { pages, industryBySlug, legalByPath, productBySlug } from './routes'
import { currentPath } from './lib/currentPath'
import { startReveal } from './lib/reveal'

export default function App() {
  const path = currentPath()
  const industry = industryBySlug[path]
  const product = productBySlug[path]
  const legal = legalByPath[path]
  const Page = pages[path] ?? Home

  // Links such as /#products arrive from another page before the section exists; scroll once it renders.
  useEffect(() => {
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView()
  }, [])

  // Quiet fade-up of each section's content as it scrolls into view.
  useEffect(() => startReveal(), [])

  return (
    <>
      <Navbar />
      {industry ? (
        <Industry page={industry} />
      ) : product ? (
        <ProductDetail family={product} />
      ) : legal ? (
        <Legal page={legal} />
      ) : (
        <Page />
      )}
      <Footer />
    </>
  )
}

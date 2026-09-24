import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Industry from './pages/Industry'
import { industryPages, industryPath } from './data/industry'
import { currentPath } from './lib/currentPath'

const pages = { '/': Home, '/about': About, '/careers': Careers, '/contact': Contact, '/blogs': Blogs }
const industryBySlug = Object.fromEntries(industryPages.map((page) => [industryPath(page.slug), page]))

export default function App() {
  const path = currentPath()
  const industry = industryBySlug[path]
  const Page = pages[path] ?? Home

  // Links such as /#products arrive from another page before the section exists; scroll once it renders.
  useEffect(() => {
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView()
  }, [])

  return (
    <>
      <Navbar />
      {industry ? <Industry page={industry} /> : <Page />}
      <Footer />
    </>
  )
}

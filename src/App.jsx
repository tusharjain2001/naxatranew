import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import { currentPath } from './lib/currentPath'

const pages = { '/': Home, '/about': About, '/careers': Careers, '/contact': Contact }

export default function App() {
  const Page = pages[currentPath()] ?? Home

  // Links such as /#products arrive from another page before the section exists; scroll once it renders.
  useEffect(() => {
    if (window.location.hash) document.querySelector(window.location.hash)?.scrollIntoView()
  }, [])

  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  )
}

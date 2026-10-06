import { useEffect } from 'react'
import AboutHero from '../sections/about/AboutHero'
import Values from '../sections/about/Values'
import Goal from '../sections/about/Goal'
import Founders from '../sections/about/Founders'
import Recognition from '../sections/about/Recognition'
import Vision from '../sections/about/Vision'
import Investors from '../sections/about/Investors'
import Journey from '../sections/Journey'
import Ideas from '../sections/Ideas'
import Testimonials from '../sections/Testimonials'

export default function About() {
  useEffect(() => {
    document.title = 'About Us | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <AboutHero />
      <Values />
      <Goal />
      <Founders />
      <Investors />
      {/* Shared with the home page; only the vertical rhythm differs on this artboard. */}
      <Journey spacing="py-56 xl:py-100" />
      <Recognition />
      <Vision />
      <Ideas spacing="gap-28 py-56 xl:gap-100 xl:pt-96 xl:pb-93" />
      <Testimonials />
    </main>
  )
}

import { useEffect } from 'react'
import { quality, techAbout, techBanner, techHero, techLayers, whyNaxatra } from '../data/technology'
import TechHero from '../sections/technology/TechHero'
import TechAbout from '../sections/technology/TechAbout'
import WhyNaxatra from '../sections/technology/WhyNaxatra'
import TechBanner from '../sections/technology/TechBanner'
import TechLayers from '../sections/technology/TechLayers'
import Quality from '../sections/technology/Quality'

// Technology page (Figma "technology page"), sections in artboard order.
export default function Technology() {
  useEffect(() => {
    document.title = 'Technology | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <TechHero hero={techHero} />
      <TechAbout data={techAbout} />
      <WhyNaxatra data={whyNaxatra} />
      <TechBanner data={techBanner} />
      <TechLayers data={techLayers} />
      <Quality data={quality} />
    </main>
  )
}

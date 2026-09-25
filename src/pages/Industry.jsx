import { useEffect } from 'react'
import IndustryHero from '../sections/industry/IndustryHero'
import Challenges from '../sections/industry/Challenges'
import Applications from '../sections/industry/Applications'
import DifferentApplication from '../sections/industry/DifferentApplication'
import Advantages from '../sections/industry/Advantages'
import Features from '../sections/industry/Features'
import Process from '../sections/industry/Process'
import SpecForm from '../sections/industry/SpecForm'
import Testimonials from '../sections/Testimonials'

// One template for the four industry pages; each page's data lists its sections in artboard order.
const sections = {
  challenges: (page) => <Challenges data={page.challenges} />,
  applications: (page) => <Applications data={page.applications} />,
  cta: (page) => (
    <DifferentApplication image={page.cta.image} imageClass={page.cta.imageClass} mobileImage={page.cta.mobileImage} mobileButton={page.cta.mobileButton} />
  ),
  advantages: (page) => <Advantages data={page.advantages} />,
  features: (page) => <Features data={page.features} />,
  process: () => <Process />,
  testimonials: (page) => (
    <Testimonials
      spacing={page.testimonials.spacing ?? 'gap-60 py-100 xl:gap-100 xl:pt-164 xl:pb-165'}
      desktopArrows={page.testimonials.desktopArrows}
    />
  ),
  spec: (page) => <SpecForm applications={page.applications.items.map((item) => item.label)} />,
}

export default function Industry({ page }) {
  useEffect(() => {
    document.title = page.title
  }, [page])

  return (
    <main className="flex flex-col">
      <IndustryHero hero={page.hero} />
      {page.sections.map((key) => (
        <div key={key} className="contents">
          {sections[key](page)}
        </div>
      ))}
    </main>
  )
}

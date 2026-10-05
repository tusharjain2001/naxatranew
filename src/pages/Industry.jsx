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
import { clientTestimonials } from '../data/home'

// One template for the four industry pages; each page's data lists its sections in artboard order.
const sections = {
  challenges: (page) => <Challenges data={page.challenges} />,
  applications: (page) => <Applications data={page.applications} />,
  cta: (page) => (
    <DifferentApplication
      image={page.cta.image}
      imageClass={page.cta.imageClass}
      mobileImage={page.cta.mobileImage}
      mobileButton={page.cta.mobileButton}
      mobileTop={page.cta.mobileTop}
      mobileBottom={page.cta.mobileBottom}
    />
  ),
  advantages: (page) => <Advantages data={page.advantages} />,
  features: (page) => <Features data={page.features} />,
  process: (page) => <Process centered={page.process?.centered} />,
  // Every industry artboard (e.g. 15504:1882) now carries the real client quotes, laid out as on the home page.
  testimonials: () => (
    <Testimonials
      title="What Our Clients Say About Us?"
      subtitle="What our partners say about working with us."
      items={clientTestimonials}
      spacing="gap-60 py-56 xl:gap-48 xl:pt-60 xl:pb-80"
    />
  ),
  spec: (page) => <SpecForm applications={page.applications.items.map((item) => item.label)} spacing={page.spec?.spacing} />,
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

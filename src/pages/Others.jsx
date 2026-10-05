import { useEffect } from 'react'
import others from '../data/others'
import OthersHero from '../sections/others/OthersHero'
import Emerging from '../sections/others/Emerging'
import CustomerChallenges from '../sections/others/CustomerChallenges'
import WhereElse from '../sections/others/WhereElse'
import RightFit from '../sections/others/RightFit'
import WhyUs from '../sections/others/WhyUs'
import DifferentApplication from '../sections/industry/DifferentApplication'
import Process from '../sections/industry/Process'
import Testimonials from '../sections/Testimonials'
import SpecForm from '../sections/industry/SpecForm'

// "Other applications" page (Figma node 15421:59799), the Industry menu's OTHERS tile. The banner, timeline,
// testimonials and form are the shared industry sections.
export default function Others() {
  useEffect(() => {
    document.title = others.title
  }, [])

  return (
    <main className="flex flex-col">
      <OthersHero hero={others.hero} />
      <Emerging data={others.emerging} />
      <CustomerChallenges data={others.challenges} />
      <WhereElse data={others.whereElse} />
      <DifferentApplication image="/assets/industry/shared/cta.png" mobileImage="/assets/industry/cleaning/m/cta.jpg" mobileButton="cta" />
      <RightFit data={others.rightFit} />
      <Process centered />
      <WhyUs data={others.whyUs} />
      <Testimonials
        title={others.testimonials.title}
        subtitle={others.testimonials.subtitle}
        items={others.testimonials.items}
        spacing="gap-60 py-56 xl:gap-48 xl:pt-60 xl:pb-80"
      />
      <SpecForm applications={others.whereElse.items.map((item) => item.title)} spacing="xl:py-100" />
    </main>
  )
}

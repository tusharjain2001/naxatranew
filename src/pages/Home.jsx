import Hero from '../sections/Hero'
import Commitment from '../sections/Commitment'
import Applications from '../sections/Applications'
import Manufacturing from '../sections/Manufacturing'
import Deployment from '../sections/Deployment'
import Products from '../sections/Products'
import Testimonials from '../sections/Testimonials'
import Journey from '../sections/Journey'
import Ideas from '../sections/Ideas'
import DifferentApplication from '../sections/industry/DifferentApplication'
import { engineerBanner } from '../data/home'

export default function Home() {
  return (
    // The mobile artboard moves "Our Journey" up to follow "Engineered Here"; flex order handles both.
    <main className="flex flex-col">
      <Hero />
      <Commitment />
      <Applications />
      <DifferentApplication
        content={engineerBanner}
        href={engineerBanner.href}
        image="/assets/industry/shared/cta.png"
        mobileImage="/assets/industry/cleaning/m/cta.jpg"
        mobileButton="cta"
        mobileBottom="pb-0"
        mobileHeight="h-560"
        spacing="xl:py-50"
      />
      <Manufacturing />
      <Deployment />
      <div className="order-2">
        <Products />
      </div>
      <div className="order-2">
        <Testimonials />
      </div>
      <div className="order-1 xl:order-2">
        <Journey />
      </div>
      <div className="order-3">
        <Ideas />
      </div>
    </main>
  )
}

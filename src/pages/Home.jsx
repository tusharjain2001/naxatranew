import Hero from '../sections/Hero'
import Commitment from '../sections/Commitment'
import Applications from '../sections/Applications'
import Manufacturing from '../sections/Manufacturing'
import Deployment from '../sections/Deployment'
import Products from '../sections/Products'
import Testimonials from '../sections/Testimonials'
import Journey from '../sections/Journey'
import Ideas from '../sections/Ideas'

export default function Home() {
  return (
    // The mobile artboard moves "Our Journey" up to follow "Engineered Here"; flex order handles both.
    <main className="flex flex-col">
      <Hero />
      <Commitment />
      <Applications />
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

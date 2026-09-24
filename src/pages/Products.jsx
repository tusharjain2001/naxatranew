import { useEffect } from 'react'
import ProductsHero from '../sections/products/ProductsHero'
import MotorListing from '../sections/products/MotorListing'
import FindByApplications from '../sections/products/FindByApplications'
import SpecForm from '../sections/industry/SpecForm'

// /products — Figma listing artboard 14051-1426: dark hero, filterable motor-family grid, the
// Find-By-Applications explorer, then the reused enquiry form ("Need Help Finding The Right Motor?").
const motorApplications = ['Cleaning', 'Agriculture', '2 Wheeler', '3 Wheeler', 'Industrial Tools']

export default function Products() {
  useEffect(() => {
    document.title = 'Motors & Controllers | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <ProductsHero />
      <MotorListing />
      <FindByApplications />
      <SpecForm applications={motorApplications} wide title={['Need Help Finding', 'The Right Motor?']} text="Our team can help you choose or customise a solution for your application." />
    </main>
  )
}

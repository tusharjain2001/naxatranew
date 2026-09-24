import { useEffect } from 'react'
import { productFamilies, productPath } from '../data/products'
import SpecForm from '../sections/industry/SpecForm'

// SCAFFOLD — routing + reuse wiring only. The Figma-exact listing (node 14051-1426: hero, left
// filter panel Voltage/Continuous Power/Peak Torque + Industrial Applications checkboxes + RF/AF/PT
// series tabs over a filterable family grid, then Find-By-Applications explorer) replaces this body
// once the artboards are accessible. The SpecForm reuse ('Need Help Finding The Right Motor?') stays.
const motorApplications = ['Cleaning', 'Agriculture', '2 Wheeler', '3 Wheeler', 'Industrial Tools']

export default function Products() {
  useEffect(() => {
    document.title = 'Motors & Controllers | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <section className="mx-auto flex w-full max-w-1920 flex-col gap-40 px-16 py-80 xl:px-100 xl:py-120">
        <h1 className="text-32 leading-36 tracking-display xl:text-72 xl:leading-88">Our Motors</h1>
        <div className="grid grid-cols-2 gap-16 xl:grid-cols-4 xl:gap-24">
          {productFamilies.map((family) => (
            <a
              key={family.slug}
              href={productPath(family.slug)}
              className="flex h-160 flex-col justify-end rounded-12 border border-silver bg-card p-16 transition-colors hover:border-primary xl:h-320 xl:p-24"
            >
              <span className="text-12 text-grey uppercase xl:text-16">{family.series} Series</span>
              <span className="text-20 leading-24 xl:text-32 xl:leading-40">{family.name}</span>
            </a>
          ))}
        </div>
      </section>

      <SpecForm applications={motorApplications} />
    </main>
  )
}

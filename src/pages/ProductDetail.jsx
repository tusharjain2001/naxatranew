import { useEffect } from 'react'
import { productPath } from '../data/products'
import SpecForm from '../sections/industry/SpecForm'

// SCAFFOLD — routing + reuse wiring only. The Figma-exact detail (nodes 14394-2054/2055, 14378-3788,
// 14389-4682, 14393-7232, 14394-2056, 14394-3022) replaces this body once the artboards are accessible:
// breadcrumb -> title -> subtitle -> 3 spec boxes -> hero render + thumb gallery + View In Motion ->
// Choose-The-Variant panel (swaps subtitle / spec boxes / technical sketch + table / datasheet link /
// applications heading / spec modal / hero image IN PLACE) -> Technical Sketch -> Download Data-Sheet ->
// <variant> Motor Applications -> Browse Our Other Motors carousel -> enquiry form.
const motorApplications = ['Cleaning', 'Agriculture', '2 Wheeler', '3 Wheeler', 'Industrial Tools']

export default function ProductDetail({ family }) {
  useEffect(() => {
    document.title = `${family.name} | Naxatra Labs`
  }, [family])

  return (
    <main className="flex flex-col">
      <section className="mx-auto flex w-full max-w-1920 flex-col gap-24 px-16 py-80 xl:px-100 xl:py-120">
        <nav className="text-12 text-grey xl:text-16" aria-label="Breadcrumb">
          <a href="/products" className="hover:text-primary">
            Products
          </a>
          <span> / </span>
          <span className="text-black">{family.name}</span>
        </nav>
        <h1 className="text-32 leading-36 tracking-display xl:text-72 xl:leading-88">{family.name}</h1>
        <a href={productPath(family.slug)} className="sr-only">
          {family.name}
        </a>
      </section>

      <SpecForm applications={motorApplications} />
    </main>
  )
}

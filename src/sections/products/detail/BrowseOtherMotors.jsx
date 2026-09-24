import { useRef } from 'react'
import { productFamilies, productPath } from '../../../data/products'
import SliderArrows from '../../../components/ui/SliderArrows'

// "Browse Our Other Motors" carousel — the other families as compact cards linking to their detail page.
export default function BrowseOtherMotors({ currentSlug }) {
  const track = useRef(null)
  const others = productFamilies.filter((f) => f.slug !== currentSlug)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })

  return (
    <section className="w-full bg-[#fafafa]">
      <div className="mx-auto flex max-w-1920 flex-col gap-32 px-16 py-60 xl:gap-40 xl:px-100 xl:py-100">
        <div className="flex items-center justify-between gap-10">
          <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">Browse Our Other Motors</h2>
          <SliderArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="shrink-0" />
        </div>

        <div ref={track} className="no-scrollbar flex snap-x gap-24 overflow-x-auto pb-2 xl:gap-28">
          {others.map((f) => (
            <a key={f.slug} href={productPath(f.slug)} className="group relative flex h-360 w-260 shrink-0 snap-start flex-col overflow-hidden border-[0.85px] border-black/10 bg-black/[0.02] xl:h-420 xl:w-360">
              <span className="relative block h-200 w-full xl:h-250">
                <span className="absolute inset-x-16 top-16 bottom-8 bg-white" />
                <img src={f.card.image} alt={f.name} loading="lazy" className="absolute inset-0 size-full object-contain p-16 transition-transform duration-500 group-hover:scale-105" />
              </span>
              <div className="flex flex-col gap-4 px-16 pb-16">
                <span className="text-24 leading-none capitalize xl:text-32">{f.name}</span>
                <span className="text-14 font-light capitalize text-grey xl:text-16">{f.tagline}</span>
                <span className="mt-4 text-16 text-primary underline underline-offset-2 group-hover:no-underline xl:text-20">View Product →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

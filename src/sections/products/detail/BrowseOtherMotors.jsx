import { useRef } from 'react'
import { productFamilies } from '../../../data/products'
import FamilyCard from '../FamilyCard'
import SliderArrows from '../../../components/ui/SliderArrows'

// "Browse Our Other Motors" carousel (Figma node 14394:1746) — the other families as the SAME cards the
// listing grid uses (render plate + name + tagline + Industries chips + View Product), in a horizontal
// scroller. Heading is 36px on desktop per the artboard.
export default function BrowseOtherMotors({ currentSlug }) {
  const track = useRef(null)
  const others = productFamilies.filter((f) => f.slug !== currentSlug)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 440, behavior: 'smooth' })

  return (
    <section className="w-full border-[0.5px] border-black/10 bg-white xl:border-0 xl:bg-[#fafafa]">
      <div className="mx-auto flex max-w-1920 flex-col gap-24 px-16 py-100 xl:gap-24 xl:px-100 xl:py-156">
        <div className="flex items-center justify-between gap-10">
          <h2 className="text-24 leading-32 capitalize xl:text-36 xl:leading-[78px] xl:tracking-display">Browse Our Other Motors</h2>
          <SliderArrows set="small" onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="shrink-0 xl:hidden" />
          <SliderArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="hidden shrink-0 xl:flex" />
        </div>

        {/* mobile: compact 179px cards (2 visible side by side); desktop: 415px cards */}
        <div ref={track} className="no-scrollbar flex snap-x gap-[calc(var(--spacing)*11.729)] overflow-x-auto pb-2 xl:gap-27">
          {others.map((f) => (
            <FamilyCard key={f.slug} family={f} className="w-[calc(var(--spacing)*179.136)] shrink-0 snap-start self-stretch xl:w-415" />
          ))}
        </div>
      </div>
    </section>
  )
}

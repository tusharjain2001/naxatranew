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
    <section className="w-full bg-[#fafafa]">
      <div className="mx-auto flex max-w-1920 flex-col gap-24 px-16 py-60 xl:gap-40 xl:px-100 xl:py-100">
        <div className="flex items-center justify-between gap-10">
          <h2 className="text-24 leading-none tracking-display capitalize xl:text-36">Browse Our Other Motors</h2>
          <SliderArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="shrink-0" />
        </div>

        {/* mobile: compact ~172px cards (2 visible side by side); desktop: 415px cards */}
        <div ref={track} className="no-scrollbar flex snap-x gap-12 overflow-x-auto pb-2 xl:gap-27">
          {others.map((f) => (
            <FamilyCard key={f.slug} family={f} className="w-172 shrink-0 snap-start self-stretch xl:w-415" />
          ))}
        </div>
      </div>
    </section>
  )
}

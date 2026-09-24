import { useRef } from 'react'
import Button from '../../../components/ui/Button'
import SliderArrows from '../../../components/ui/SliderArrows'

// Technical Sketch (line drawings) + the spec table, the datasheet CTA, then the "<variant> Motor
// Applications" carousel. All of it swaps when the parent changes the selected variant.
export default function TechnicalSpecs({ variant, sketch }) {
  const track = useRef(null)
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 200, behavior: 'smooth' })

  return (
    <section className="w-full bg-[#fafafa]">
      <div className="mx-auto flex max-w-1920 flex-col gap-40 px-16 py-60 xl:gap-60 xl:px-100 xl:py-100">
        {/* Sketch + table */}
        <div key={variant.id + '-tech'} className="flex animate-[fade-in_0.3s_ease-out] flex-col gap-16 xl:flex-row xl:gap-26">
          <div className="flex flex-col gap-24 border border-black/25 bg-white px-16 py-20 xl:px-32 xl:py-24">
            <h2 className="text-28 tracking-display xl:text-40">Technical Sketch</h2>
            <div className={`grid items-center gap-8 xl:w-1172 ${sketch.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {sketch.map((src) => (
                <img key={src} src={src} alt="Technical drawing" className="h-auto w-full object-contain opacity-90" />
              ))}
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-14 xl:gap-15">
            {variant.table.map((row) => (
              <div key={row.label} className="flex flex-1 flex-col justify-center gap-4 border-[0.5px] border-black/25 bg-white px-20 pt-10 pb-3">
                <span className="text-16 font-light capitalize xl:text-20">{row.label}</span>
                <span className="h-px w-full bg-black/25" />
                <span className="text-28 xl:text-36">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Datasheet */}
        <div className="mx-auto flex max-w-676 flex-col items-center gap-24 text-center">
          <p className="text-20 xl:text-32">{variant.datasheetNote}</p>
          <Button as="a" href={variant.datasheet} download variant="primary" size="sm" className="xl:hidden">
            Download data-sheet
          </Button>
          <Button as="a" href={variant.datasheet} download variant="primary" size="hero" className="hidden xl:inline-flex">
            Download data-sheet
          </Button>
        </div>

        {/* Applications */}
        <div className="flex flex-col gap-24 border border-black/25 bg-white px-16 py-24 xl:px-48 xl:py-36">
          <div className="flex items-center justify-between gap-10">
            <h3 className="text-24 tracking-display capitalize xl:text-36">{variant.displayName ?? variant.code} Motor Applications</h3>
            <SliderArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="shrink-0" />
          </div>
          <div ref={track} className="no-scrollbar flex gap-16 overflow-x-auto pb-2">
            {variant.applications.map((app, i) => (
              <div key={app.label + i} className="flex w-140 shrink-0 flex-col items-center gap-3 xl:w-182">
                <span className="grid h-140 w-full place-items-center bg-[#f9f9f9] p-16 xl:h-182">
                  <img src={app.image} alt="" className="max-h-full max-w-full object-contain" />
                </span>
                <span className="text-16 xl:text-22">{app.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

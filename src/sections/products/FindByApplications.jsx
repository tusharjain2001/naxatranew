import { useRef, useState } from 'react'
import { findByApplications } from '../../data/products/applications'
import { productPath } from '../../data/products'
import SliderArrows from '../../components/ui/SliderArrows'

const motorHref = (m) => `${productPath(m.slug)}${m.variant ? `?variant=${m.variant}` : ''}`

export default function FindByApplications() {
  const [active, setActive] = useState(0)
  const app = findByApplications[active]
  const track = useRef(null)

  const scroll = (dir) => track.current?.scrollBy({ left: dir * 268, behavior: 'smooth' })

  return (
    <section id="find-by-applications" className="mx-auto flex w-full max-w-1920 scroll-mt-80 flex-col gap-32 bg-white px-16 py-60 xl:gap-40 xl:px-100 xl:py-100">
      <div className="flex items-center justify-between gap-10">
        <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80 xl:tracking-[-1.28px]">Find by applications</h2>
        <SliderArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="shrink-0" />
      </div>

      <div className="flex flex-col gap-24 xl:flex-row xl:gap-32">
        {/* Selected application feature card */}
        <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-8 border border-black/25 xl:size-680">
          <img src={app.image} alt={app.name} className="absolute inset-x-0 top-[8%] mx-auto h-[62%] object-contain" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-24 xl:p-33">
            <span className="text-28 capitalize xl:text-40">{app.name}</span>
            <span className="text-16 capitalize text-black xl:text-24">Industry : {app.industry}</span>
          </div>
        </div>

        {/* Thumbnails + relevant motors */}
        <div className="flex min-w-0 flex-1 flex-col gap-32 xl:gap-40">
          {/* Tiles show the OTHER applications — the selected one appears only in the big card (per artboard). */}
          <div ref={track} className="no-scrollbar flex snap-x gap-16 overflow-x-auto pb-2 xl:gap-28">
            {findByApplications.map((a, i) => ({ a, i })).filter(({ i }) => i !== active).map(({ a, i }) => (
              <button
                key={a.key}
                type="button"
                onClick={() => setActive(i)}
                className="relative aspect-square w-150 shrink-0 snap-start overflow-hidden rounded-[4.8px] border border-black/25 bg-white transition-colors hover:border-primary/50 xl:w-240"
              >
                <img src={a.image} alt="" className="absolute inset-x-0 top-[14%] mx-auto h-[52%] object-contain" />
                <span className="absolute bottom-14 left-14 text-14 capitalize text-grey xl:bottom-24 xl:left-19 xl:text-24">{a.name}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-24 xl:gap-40">
            <h3 className="text-24 capitalize xl:text-40">Relevant Motors</h3>
            <div className="grid grid-cols-1 gap-x-24 gap-y-20 sm:grid-cols-2 xl:gap-x-24 xl:gap-y-32">
              {app.motors.map((m, i) => (
                <a key={`${m.code}-${m.use}-${i}`} href={motorHref(m)} className="group flex flex-col gap-12 border-b border-black/15 pb-12 xl:gap-20">
                  <span className="flex flex-col">
                    <span className="text-28 leading-tight text-primary group-hover:underline xl:text-40">{m.code}</span>
                    <span className="text-16 capitalize xl:text-24">{m.use}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

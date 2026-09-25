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
    <section id="find-by-applications" className="mx-auto flex w-full max-w-1920 scroll-mt-80 flex-col gap-40 bg-white px-16 py-60 xl:gap-60 xl:px-100 xl:pt-103 xl:pb-157">
      <div className="flex items-center justify-between gap-10">
        <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80 xl:tracking-[-1.28px]">Find by applications</h2>
        <SliderArrows set="mobile" onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="shrink-0 xl:hidden" />
        <SliderArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} className="hidden shrink-0 xl:flex" />
      </div>

      <div className="flex flex-col gap-40 xl:flex-row xl:gap-32">
        {/* Selected application feature card */}
        <div className="relative order-2 h-388 w-full shrink-0 overflow-hidden rounded-[calc(var(--spacing)*4.458)] border-[calc(var(--spacing)*0.557)] border-black/25 xl:order-none xl:size-680 xl:rounded-8 xl:border">
          {/* Images are trimmed to the vehicle, so every application fills the same area at the same scale. */}
          <img
            key={app.key}
            src={app.image}
            alt={app.name}
            className={`absolute top-[17.8%] left-[12.7%] h-[57%] w-[71.6%] object-contain xl:top-[10%] xl:left-[10%] xl:h-[60%] xl:w-[80%] ${app.flip ? '-scale-x-100' : ''}`}
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-18 pb-16 xl:p-33">
            <span className="text-[length:calc(var(--spacing)*22.288)] leading-30 capitalize xl:text-40 xl:leading-normal">{app.name}</span>
            <span className="text-14 capitalize text-black xl:text-24">Industry : {app.industry}</span>
          </div>
        </div>

        {/* Thumbnails + relevant motors */}
        <div className="contents xl:flex xl:min-w-0 xl:flex-1 xl:flex-col xl:gap-40">
          {/* Tiles show the OTHER applications — the selected one appears only in the big card (per artboard). */}
          <div ref={track} className="no-scrollbar order-1 -mr-16 flex snap-x gap-14 overflow-x-auto pr-16 xl:order-none xl:mr-0 xl:gap-28 xl:pr-0 xl:pb-2">
            {findByApplications.map((a, i) => ({ a, i })).filter(({ i }) => i !== active).map(({ a, i }) => (
              <button
                key={a.key}
                type="button"
                onClick={() => setActive(i)}
                className="relative aspect-square w-120 shrink-0 snap-start overflow-hidden rounded-[calc(var(--spacing)*2.4)] border-[0.3px] border-black/25 bg-white transition-colors hover:border-primary/50 xl:w-240 xl:rounded-[4.8px] xl:border"
              >
                <img src={a.image} alt="" className="absolute top-[15%] left-[15%] h-[50%] w-[70%] object-contain" />
                <span className="absolute bottom-7 left-[calc(var(--spacing)*9.6)] text-12 leading-10 capitalize text-grey xl:bottom-24 xl:left-19 xl:text-24 xl:leading-normal">{a.name}</span>
              </button>
            ))}
          </div>

          <div className="order-3 flex flex-col gap-40 xl:order-none">
            <h3 className="text-32 leading-[calc(var(--spacing)*52.025)] tracking-display capitalize xl:text-40 xl:leading-normal xl:tracking-normal">Relevant Motors</h3>
            <div className="grid grid-cols-2 gap-x-[6.26%] gap-y-35 xl:gap-x-24 xl:gap-y-32">
              {app.motors.map((m, i) => (
                <a key={`${m.code}-${m.use}-${i}`} href={motorHref(m)} className="group flex flex-col gap-12 border-b-[0.88px] border-black/15 pb-12 xl:gap-20 xl:border-b">
                  <span className="flex flex-col">
                    <span className="text-24 leading-[calc(var(--spacing)*21.183)] text-primary group-hover:underline xl:text-40 xl:leading-tight">{m.code}</span>
                    <span className="text-16 leading-[calc(var(--spacing)*21.183)] capitalize xl:text-24 xl:leading-normal">{m.use}</span>
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

import { useState } from 'react'
import { process, sharedAssets } from '../../data/industry/shared'
import SliderArrows from '../../components/ui/SliderArrows'
import useScrollTrack from '../../hooks/useScrollTrack'

// Engagement timeline: six columns on desktop, a swipeable 240px-step strip with arrows on mobile.
// The step in view is highlighted. `centered` is the 2- and 3-wheeler phone layout: a one-line centred
// title with the arrows only under the strip, 33px between the blocks.
export default function Process({ centered = false }) {
  const [trackRef, track] = useScrollTrack()
  // Hovering a step turns it blue; otherwise the step in view (the first on desktop, where the row does
  // not scroll) stays highlighted.
  const [hovered, setHovered] = useState(-1)
  const active = hovered >= 0 ? hovered : track.canPrev || track.canNext ? track.index : 0
  const arrows = { onPrev: track.prev, onNext: track.next, canPrev: track.canPrev, canNext: track.canNext }

  return (
    <section className={`flex w-full flex-col px-16 py-56 xl:items-center xl:gap-100 xl:px-0 xl:py-100 ${centered ? 'gap-33' : 'gap-60'}`}>
      <div className="flex items-center gap-10 xl:w-1920 xl:justify-center xl:px-100">
        <h2 className={`min-w-0 flex-1 text-32 tracking-display capitalize xl:w-1168 ${centered ? 'text-center leading-37' : 'leading-[calc(var(--spacing)*35.6)]'} xl:flex-none xl:text-center xl:text-72 xl:leading-88 xl:tracking-normal`}>
          {process.title}
        </h2>
        {!centered && <SliderArrows set="mobile" {...arrows} className="xl:hidden" />}
      </div>

      <div className="w-full xl:px-64">
        <img src={process.image} alt="Exploded technical drawing of a BLDC motor" loading="lazy" className="h-215 w-full object-cover xl:h-400 xl:rounded-8" />
      </div>

      <div ref={trackRef} className="no-scrollbar relative -mx-16 overflow-x-auto xl:mx-0 xl:w-full xl:overflow-visible">
        <ol className="relative flex w-max px-16 xl:w-full xl:px-64" onMouseLeave={() => setHovered(-1)}>
          <img src={sharedAssets.line} alt="" aria-hidden className="pointer-events-none absolute top-[calc(var(--spacing)*35.8)] left-0 h-px w-full" />
          {process.steps.map((step, i) => {
            const current = i === active
            // The hovered step turns fully blue; the default highlight keeps only the blue dot and icon.
            const lit = i === hovered
            return (
              <li
                key={step.title}
                data-track-item
                onMouseEnter={() => setHovered(i)}
                className="flex w-240 shrink-0 cursor-default flex-col px-8 pt-24 xl:w-auto xl:flex-1 xl:px-16"
              >
                <div className={`flex flex-col gap-24 border-b px-16 transition-colors duration-300 ${lit ? 'border-primary' : 'border-silver'}`}>
                  <div className="flex flex-col gap-10">
                    <img src={current ? sharedAssets.dotBlue : sharedAssets.dotBlack} alt="" className="relative size-24" />
                    <p className={`flex h-24 items-center text-16 transition-colors duration-300 xl:h-35 xl:text-28 ${lit ? 'text-primary' : ''}`}>{step.week}</p>
                  </div>
                  <span className={`flex size-40 items-center justify-center rounded-4 transition-colors ${current ? 'bg-[rgba(168,200,238,0.4)]' : 'bg-[#f0f0f0]'}`}>
                    <img src={current ? step.activeIcon : step.icon} alt="" className={`object-contain ${step.iconBox}`} />
                  </span>
                  <h3 className={`flex h-32 items-center text-20 font-medium transition-colors duration-300 xl:h-44 xl:text-28 ${lit ? 'text-primary' : ''}`}>{step.title}</h3>
                </div>
                <p className={`px-8 py-16 text-20 leading-28 transition-colors duration-300 xl:px-16 xl:py-32 xl:text-24 xl:leading-32 ${lit ? 'text-primary' : ''}`}>{step.text}</p>
              </li>
            )
          })}
        </ol>
      </div>

      <SliderArrows set="mobile" {...arrows} className="justify-center gap-8 xl:hidden" />
    </section>
  )
}

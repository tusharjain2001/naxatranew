import { process, sharedAssets } from '../../data/industry/shared'
import SliderArrows from '../../components/ui/SliderArrows'
import useScrollTrack from '../../hooks/useScrollTrack'

// Engagement timeline: six columns on desktop, a swipeable 240px-step strip with arrows on mobile.
// The step in view is highlighted.
export default function Process() {
  const [trackRef, track] = useScrollTrack()
  // On desktop the row does not scroll, so the first step stays highlighted.
  const active = track.canPrev || track.canNext ? track.index : 0
  const arrows = { onPrev: track.prev, onNext: track.next, canPrev: track.canPrev, canNext: track.canNext }

  return (
    <section className="flex w-full flex-col gap-60 px-16 py-100 xl:items-center xl:gap-100 xl:px-0 xl:py-200">
      <div className="flex items-center gap-10 xl:w-1920 xl:justify-center xl:px-100">
        <h2 className="min-w-0 flex-1 text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:w-1168 xl:flex-none xl:text-center xl:text-72 xl:leading-88 xl:tracking-normal">
          {process.title}
        </h2>
        <SliderArrows set="mobile" {...arrows} className="xl:hidden" />
      </div>

      <div className="w-full xl:px-64">
        <img src={process.image} alt="Exploded technical drawing of a BLDC motor" loading="lazy" className="h-215 w-full object-cover xl:h-600 xl:rounded-8" />
      </div>

      <div ref={trackRef} className="no-scrollbar relative -mx-16 overflow-x-auto xl:mx-0 xl:w-full xl:overflow-visible">
        <ol className="relative flex w-max px-16 xl:w-full xl:px-64">
          <img src={sharedAssets.line} alt="" aria-hidden className="pointer-events-none absolute top-[calc(var(--spacing)*35.8)] left-0 h-px w-full" />
          {process.steps.map((step, i) => {
            const current = i === active
            return (
              <li key={step.title} data-track-item className="flex w-240 shrink-0 flex-col px-8 pt-24 xl:w-auto xl:flex-1 xl:px-16">
                <div className="flex flex-col gap-24 border-b border-silver px-16">
                  <div className="flex flex-col gap-10">
                    <img src={current ? sharedAssets.dotBlue : sharedAssets.dotBlack} alt="" className="size-24" />
                    <p className="flex h-24 items-center text-16 xl:h-35 xl:text-28">{step.week}</p>
                  </div>
                  <span className={`flex size-40 items-center justify-center rounded-4 transition-colors ${current ? 'bg-[rgba(168,200,238,0.4)]' : 'bg-[#f0f0f0]'}`}>
                    <img src={step.icon} alt="" className={`object-contain ${step.iconBox}`} />
                  </span>
                  <h3 className="flex h-32 items-center text-20 font-medium xl:h-44 xl:text-28">{step.title}</h3>
                </div>
                <p className="px-8 py-16 text-20 leading-28 xl:px-16 xl:py-32 xl:text-24 xl:leading-32">{step.text}</p>
              </li>
            )
          })}
        </ol>
      </div>

      <SliderArrows set="mobile" {...arrows} className="justify-center gap-8 xl:hidden" />
    </section>
  )
}

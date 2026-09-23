import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import { deployment } from '../data/home'

// Each tab owns one photo, in the same left-to-right order: Design, Performance, Technology.
// Every photo sits in a fixed 720x400 box (288x160 on mobile) and fills it, centred.

// The set is repeated on both sides so neighbouring photos always fill the screen edges.
const COPIES = 3
const MIDDLE = Math.floor(COPIES / 2)

export default function Deployment() {
  const [active, setActive] = useState(0)
  const viewportRef = useRef(null)
  const stripRef = useRef(null)
  const animate = useRef(false)

  const count = deployment.images.length
  const strip = Array.from({ length: COPIES }, () => deployment.images).flat()

  // Slide the strip so the active tab's photo (in the middle copy) sits in the centre of the screen.
  const centre = useCallback(() => {
    const viewport = viewportRef.current
    const card = stripRef.current?.children[MIDDLE * count + active]
    if (!viewport || !card) return
    const x = viewport.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2)
    stripRef.current.style.transform = `translate3d(${x}px, 0, 0)`
  }, [active, count])

  useLayoutEffect(() => {
    const strip = stripRef.current
    // No slide on first paint, a smooth slide on every tab change after that.
    strip.style.transitionDuration = animate.current ? '' : '0ms'
    centre()
    animate.current = true
    window.addEventListener('resize', centre)
    return () => window.removeEventListener('resize', centre)
  }, [centre])

  return (
    <section className="flex w-full flex-col items-center gap-48 overflow-hidden py-100 xl:gap-0 xl:pt-263 xl:pb-0">
      <div className="flex w-full flex-col items-center gap-10 px-15.25 text-center capitalize xl:translate-x-3 xl:gap-24 xl:px-0">
        <h2 className="w-337 text-32 leading-[calc(var(--spacing)*33.42)] tracking-display xl:w-1340 xl:text-64 xl:leading-80">
          {deployment.title}
        </h2>
        <p className="flex h-[calc(var(--spacing)*23.87)] items-center justify-center text-14 leading-[calc(var(--spacing)*18.15)] text-grey xl:h-32 xl:w-800 xl:text-24 xl:leading-32">
          {deployment.subtitle}
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Deployment focus"
        className="flex w-full items-center justify-center gap-8 px-9.5 xl:mt-64 xl:w-auto xl:translate-x-3 xl:gap-24 xl:px-0"
      >
        {deployment.tabs.map((tab, i) => {
          const isActive = i === active
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              id={`deploy-tab-${i}`}
              aria-selected={isActive}
              aria-controls="deploy-strip"
              onClick={() => setActive(i)}
              className={`flex h-[calc(var(--spacing)*37.93)] min-w-0 flex-1 cursor-pointer items-center justify-center rounded-2 border-[calc(var(--spacing)*0.6)] p-9.5 text-14-2 leading-[calc(var(--spacing)*18.97)] capitalize transition-colors duration-200 xl:h-64 xl:w-200 xl:flex-none xl:rounded-4 xl:border xl:p-16 xl:text-24 xl:leading-32 ${
                isActive ? 'border-primary bg-primary/10 font-medium text-primary' : 'border-silver text-black hover:border-primary/50'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      <div ref={viewportRef} id="deploy-strip" role="tabpanel" aria-labelledby={`deploy-tab-${active}`} className="w-full xl:mt-66">
        <div
          ref={stripRef}
          className="flex w-max items-center gap-8 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform xl:gap-32"
        >
          {strip.map((img, i) => {
            const index = i % count
            const isMiddle = Math.floor(i / count) === MIDDLE
            return (
              <button
                key={i}
                type="button"
                tabIndex={-1}
                aria-hidden={!isMiddle}
                onClick={() => setActive(index)}
                className="relative h-160 w-288 shrink-0 cursor-pointer overflow-hidden rounded-5 xl:h-400 xl:w-720 xl:rounded-12"
              >
                <img
                  src={img.src}
                  alt={isMiddle ? img.alt : ''}
                  className="absolute inset-0 size-full object-cover"
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

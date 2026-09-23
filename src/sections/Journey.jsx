import { useEffect, useRef, useState } from 'react'
import { journey } from '../data/home'
import Dots from '../components/ui/Dots'
import SectionHeader from '../components/ui/SectionHeader'

// Artboard px in `em`: 1 design px on desktop, 0.5174 on mobile (the mobile timeline is a scaled copy).
const ITEM = 240
const ACTIVE = 360
const GAP = 32
const PAD = 24

function Photo({ item }) {
  if (item.inset) {
    const { fade, aspect, top, fit } = item.inset
    return (
      <div className="relative aspect-square w-full overflow-hidden rounded-[8em]">
        <img src={item.image} alt="" loading="lazy" className={`absolute inset-0 size-full object-cover ${fade}`} />
        <span className="absolute inset-0 bg-black/20" />
        <img
          src={item.image}
          alt=""
          loading="lazy"
          className={`absolute left-0 w-full ${aspect} ${fit}`}
          style={{ top: `${top}em` }}
        />
      </div>
    )
  }
  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-[8em]">
      <img
        src={item.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
        style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
      />
    </div>
  )
}

export default function Journey({ spacing = 'py-100 xl:pt-265 xl:pb-0' }) {
  const [active, setActive] = useState(1)
  const trackRef = useRef(null)
  const last = journey.length - 1

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const unit = parseFloat(getComputedStyle(el).fontSize)
    // Keep one earlier milestone in view so the timeline reads left to right.
    const left = Math.max(0, (active - 1) * (ITEM + GAP) * unit)
    el.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  const controls = {
    prev: () => setActive((i) => Math.max(0, i - 1)),
    next: () => setActive((i) => Math.min(last, i + 1)),
    canPrev: active > 0,
    canNext: active < last,
  }

  return (
    <section className={`w-full bg-white ${spacing}`}>
      <div className="mx-auto flex max-w-1920 flex-col gap-60 xl:gap-64">
        <SectionHeader
          title="Our Journey So Far"
          mobileTitle={
            <>
              Our Journey
              <br />
              So Far
            </>
          }
          mobileSubtitle="And Many More To Come..."
          track={controls}
          desktopArrows
        />

        <div className="flex flex-col items-center gap-28 xl:gap-0">
          <div
            ref={trackRef}
            className="no-scrollbar w-full overflow-x-auto text-[length:calc(var(--spacing)*0.5174)] xl:text-[length:var(--spacing)]"
          >
            <div className="relative w-max">
              <img
                src="/assets/journey-line.svg"
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-0 h-[1em] w-full"
                style={{ top: `${PAD + 12}em` }}
              />
              <ol className="relative flex items-start" style={{ gap: `${GAP}em`, padding: `${PAD}em` }}>
              {journey.map((item, i) => {
                const isActive = i === active
                return (
                  <li
                    key={item.title}
                    className="relative flex shrink-0 cursor-pointer flex-col gap-[24em] transition-[width] duration-500 ease-out"
                    style={{ width: `${isActive ? ACTIVE : ITEM}em` }}
                    aria-current={isActive ? 'step' : undefined}
                    onClick={() => setActive(i)}
                  >
                    <div className="flex w-full flex-col gap-[16em]">
                      <img
                        src={isActive ? '/assets/dot-blue.svg' : '/assets/dot-black.svg'}
                        alt=""
                        className="size-[24em]"
                      />
                      <span className="flex h-[24em] items-center font-medium text-grey">
                        <span style={{ fontSize: '20em' }}>{item.year}</span>
                      </span>
                      <Photo item={item} />
                    </div>
                    <div className="flex w-full flex-col gap-[8em] capitalize">
                      <h3
                        className={`font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-black'}`}
                        style={{ fontSize: '30em', lineHeight: item.titleLeading ? 1.333 : 1.2 }}
                      >
                        {item.title}
                      </h3>
                      <p className="font-light text-grey normal-case" style={{ fontSize: '16em', lineHeight: 1.25 }}>
                        {item.text}
                      </p>
                    </div>
                  </li>
                )
              })}
              </ol>
            </div>
          </div>
          <Dots count={journey.length} active={active} onSelect={setActive} className="xl:hidden" />
        </div>
      </div>
    </section>
  )
}

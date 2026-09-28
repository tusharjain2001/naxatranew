import { useEffect, useRef, useState } from 'react'
import { journey } from '../data/home'
import Dots from '../components/ui/Dots'
import SectionHeader from '../components/ui/SectionHeader'

// Artboard px in `em`: 1 design px on desktop, 0.5174 on mobile (the mobile timeline is a scaled copy).
const ITEM = 240
const ACTIVE = 360
const GAP = 32
const PAD = 24
const STEP_MS = 2000 // autoplay: highlight the next milestone every 2 s
const GLIDE_MS = 600

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

export default function Journey({ spacing = 'py-56 xl:pt-92 xl:pb-92' }) {
  const [active, setActive] = useState(1)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const listRef = useRef(null)
  const railRef = useRef(null)
  // Track state lives in a ref so the animation loop never restarts: `pos` is the float offset, `glide` an
  // in-flight move to a milestone, `hold` a pointer resting on the cards, `drag` a swipe in progress.
  const drift = useRef({ pos: 0, glide: null, hold: false, drag: null, moved: false, inView: false })

  // The track moves by a GPU transform (sub-pixel smooth; scrollLeft is rounded to whole pixels). The
  // milestones are rendered twice, so when the offset passes one copy's width it jumps back by that width
  // and stepping forward past the last milestone carries on seamlessly into the first.
  useEffect(() => {
    const track = trackRef.current
    const list = listRef.current
    const rail = railRef.current
    const section = sectionRef.current
    if (!track || !list || !rail || !section) return
    const d = drift.current

    const io = new IntersectionObserver(([entry]) => (d.inView = entry.isIntersecting), { threshold: 0.1 })
    io.observe(section)

    const loopWidth = () => {
      const items = list.children
      return items[journey.length].offsetLeft - items[0].offsetLeft
    }
    const wrap = (x, w) => ((x % w) + w) % w

    let raf = 0
    const tick = (now) => {
      const w = loopWidth()
      if (d.drag) {
        // Swiping: `pos` is set by the pointer handlers.
      } else if (d.glide) {
        const t = Math.min((now - d.glide.start) / GLIDE_MS, 1)
        const ease = 1 - Math.pow(1 - t, 3)
        d.pos = d.glide.from + (d.glide.to - d.glide.from) * ease
        if (t === 1) d.glide = null
      }
      if (w > 0 && !d.glide) d.pos = wrap(d.pos, w)
      rail.style.transform = `translate3d(${-d.pos}px, 0, 0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])

  // Glide the track to `target`. A glide back past the start is shifted forward
  // by one copy's width so it still has cards to show.
  const glideTo = (target) => {
    const d = drift.current
    const items = listRef.current.children
    const w = items[journey.length].offsetLeft - items[0].offsetLeft
    let from = d.pos % w
    let to = target
    if (to < 0) {
      from += w
      to += w
    }
    d.glide = { from, to, start: performance.now() }
  }
  // Arrows and dots move the highlight to the neighbouring milestone and glide it into view, keeping one
  // earlier milestone showing so the timeline reads left to right. The copy of that milestone nearest the
  // current offset is used, so "next" on the last one carries on forward into the repeat.
  const goTo = (i) => {
    setActive(i)
    const unit = parseFloat(getComputedStyle(trackRef.current).fontSize)
    const items = listRef.current.children
    const w = items[journey.length].offsetLeft - items[0].offsetLeft
    const pos = drift.current.pos
    const t = (i - 1) * (ITEM + GAP) * unit
    glideTo([t - w, t, t + w].reduce((best, c) => (Math.abs(c - pos) < Math.abs(best - pos) ? c : best)))
  }
  const n = journey.length

  // Autoplay: every STEP_MS the next milestone is highlighted and glides into view, looping after the last.
  // Any change of highlight (arrows, dots, a click) restarts the wait; while the pointer rests on the cards,
  // a swipe is in progress, or the section is off screen, it waits another round instead.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let id
    const wait = () => {
      id = setTimeout(() => {
        const d = drift.current
        if (d.hold || d.drag || !d.inView || document.hidden) wait()
        else goTo((active + 1) % n)
      }, STEP_MS)
    }
    wait()
    return () => clearTimeout(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const controls = { prev: () => goTo((active - 1 + n) % n), next: () => goTo((active + 1) % n), canPrev: true, canNext: true }
  const hold = (on) => () => (drift.current.hold = on)

  // Drag / swipe to move the timeline by hand (vertical page scrolling still passes through).
  const onPointerDown = (e) => {
    const d = drift.current
    d.drag = { x: e.clientX, pos: d.pos, id: e.pointerId }
    d.glide = null
    d.moved = false
  }
  const onPointerMove = (e) => {
    const d = drift.current
    if (!d.drag || d.drag.id !== e.pointerId) return
    const dx = e.clientX - d.drag.x
    if (!d.moved && Math.abs(dx) > 6) {
      d.moved = true
      e.currentTarget.setPointerCapture(e.pointerId)
    }
    if (d.moved) d.pos = d.drag.pos - dx
  }
  const onPointerUp = (e) => {
    const d = drift.current
    if (d.drag?.id === e.pointerId) d.drag = null
  }
  // A drag should not also count as a click on the card under the pointer.
  const onClickCapture = (e) => {
    if (drift.current.moved) {
      e.stopPropagation()
      drift.current.moved = false
    }
  }

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-white ${spacing}`}
    >
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
            onMouseEnter={hold(true)}
            onMouseLeave={hold(false)}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onClickCapture={onClickCapture}
            className="w-full touch-pan-y overflow-hidden select-none text-[length:calc(var(--spacing)*0.5174)] xl:text-[length:var(--spacing)]"
          >
            <div ref={railRef} className="relative w-max will-change-transform [&_img]:pointer-events-none">
              {/* Dashed rail: 12 on / 12 off at any track length (a stretched SVG would stretch the dashes). */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 h-[1em] w-full bg-[linear-gradient(to_right,#515151_50%,transparent_50%)] bg-size-[24em_1em] bg-repeat-x"
                style={{ top: `${PAD + 12}em` }}
              />
              <ol ref={listRef} className="relative flex items-start" style={{ gap: `${GAP}em`, padding: `${PAD}em` }}>
              {[...journey, ...journey].map((item, n) => {
                const i = n % journey.length
                const isActive = i === active
                return (
                  <li
                    key={item.title + n}
                    aria-hidden={n >= journey.length || undefined}
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
                      <p className="text-12 leading-16 font-light text-grey normal-case xl:text-[length:16em] xl:leading-[1.25]">
                        {item.text}
                      </p>
                    </div>
                  </li>
                )
              })}
              </ol>
            </div>
          </div>
          <Dots count={journey.length} active={active} onSelect={goTo} className="xl:hidden" />
        </div>
      </div>
    </section>
  )
}

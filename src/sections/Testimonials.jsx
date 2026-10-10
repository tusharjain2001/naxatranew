import { useEffect, useRef } from 'react'
import { clientTestimonials } from '../data/home'
import SectionHeader from '../components/ui/SectionHeader'

// Card lengths are artboard px in `em`: 1 design px on desktop, 0.41 on the mobile artboard.
const CARD = 439
const GAP = 32
const SPEED = 40 // drift, in design px per second
const GLIDE_MS = 600

// Figma card (15421:31802): the photo + logo row, the quote mark 32px below it, then the quote. On desktop the
// card is a fixed 568px with the short rule at 422px (on phones the quote box fits the longest quote), so the
// names line up whatever the quote's length.
// The header picture is cut 6px wider and 12px taller than its 391x80 box (the placeholder avatars overhang
// it), hence the negative margins.
function TestimonialCard({ item, hidden }) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="flex w-[439em] shrink-0 flex-col items-start rounded-[12em] bg-card p-[24em] xl:h-[568em]"
    >
      <img src={item.header} alt={hidden ? '' : item.headerAlt} loading="lazy" className="-mx-[6em] -my-[12em] h-[104em] w-[400em] max-w-none" />
      <img src="/assets/quote.svg" alt="" className="mt-[32em] h-[48em] w-[56em] xl:h-[40em] xl:w-[47em]" />
      <blockquote className="mt-[32em] h-[260em] w-[391em] xl:h-[214em]">
        <p className="text-[length:24em] leading-[1.333] xl:text-[length:20em] xl:leading-[1.4]">{item.quote}</p>
      </blockquote>
      <img src="/assets/testimonial-line.svg" alt="" className="mt-[32em] h-[max(1em,1px)] w-[135em] xl:mt-0" />
      <figcaption className="mt-[32em] w-[391em] xl:mt-[22em]">
        <span className="block" style={{ fontSize: '24em', lineHeight: 1.333 }}>
          <span className="block font-bold">{item.name}</span>
          <span className="block">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

// The cards drift left in an endless loop (rendered twice; the offset wraps by one copy's width) and stop while
// the pointer is over them, while a finger drags them, or while the section is off screen. The arrows glide one
// card along; reduced motion keeps the arrows but drops the drift.
// `subtitle` and `arrowsClass` let a page follow its own artboard; `items` and `title` swap in a page's own quotes.
export default function Testimonials({
  spacing = 'gap-60 py-56 xl:gap-48 xl:pt-60 xl:pb-80',
  title = 'A Few Words From Our Clients',
  subtitle = 'What our partners say about working with us.',
  items = clientTestimonials,
  arrowsClass,
  mobileLeading = 'leading-20',
}) {
  const trackRef = useRef(null)
  const railRef = useRef(null)
  const state = useRef({ pos: 0, glide: null, drag: null, moved: false, hover: false, inView: false })

  const loopWidth = () => {
    const cards = railRef.current?.children
    return cards ? cards[items.length].offsetLeft - cards[0].offsetLeft : 0
  }
  const unit = () => parseFloat(getComputedStyle(trackRef.current).fontSize)

  useEffect(() => {
    const track = trackRef.current
    const rail = railRef.current
    if (!track || !rail) return
    const s = state.current
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([entry]) => (s.inView = entry.isIntersecting), { threshold: 0.1 })
    io.observe(track)

    let raf = 0
    let last = performance.now()
    const tick = (now) => {
      const dt = Math.min(now - last, 100) / 1000
      last = now
      const w = loopWidth()
      if (s.glide) {
        const t = Math.min((now - s.glide.start) / GLIDE_MS, 1)
        s.pos = s.glide.from + (s.glide.to - s.glide.from) * (1 - Math.pow(1 - t, 3))
        if (t === 1) s.glide = null
      } else if (!s.drag && !s.hover && s.inView && !still && !document.hidden) {
        s.pos += SPEED * unit() * dt
      }
      if (w > 0 && !s.glide) s.pos = ((s.pos % w) + w) % w
      rail.style.transform = `translate3d(${-s.pos}px, 0, 0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items])

  // Glide to the next / previous card edge. A glide back past the start is shifted on by one copy's width.
  const step = (dir) => {
    const s = state.current
    const w = loopWidth()
    const size = (CARD + GAP) * unit()
    let from = s.pos
    let to = dir > 0 ? (Math.floor(from / size + 0.01) + 1) * size : (Math.ceil(from / size - 0.01) - 1) * size
    if (to < 0) {
      from += w
      to += w
    }
    s.glide = { from, to, start: performance.now() }
  }
  const controls = { prev: () => step(-1), next: () => step(1), canPrev: true, canNext: true }

  // Drag / swipe by hand (vertical page scrolling still passes through).
  const onPointerDown = (e) => {
    const s = state.current
    s.drag = { x: e.clientX, pos: s.pos, id: e.pointerId }
    s.glide = null
    s.moved = false
  }
  const onPointerMove = (e) => {
    const s = state.current
    if (!s.drag || s.drag.id !== e.pointerId) return
    const dx = e.clientX - s.drag.x
    if (!s.moved && Math.abs(dx) > 6) {
      s.moved = true
      e.currentTarget.setPointerCapture(e.pointerId)
    }
    if (s.moved) s.pos = s.drag.pos - dx
  }
  const onPointerUp = (e) => {
    const s = state.current
    if (s.drag?.id === e.pointerId) s.drag = null
  }

  return (
    <section className={`mx-auto flex w-full max-w-1920 flex-col ${spacing}`}>
      <SectionHeader
        title={title}
        // Sentence case, unlike the other section subtitles.
        subtitle={subtitle}
        subtitleClass="normal-case"
        mobileLeading={mobileLeading}
        desktopGap="xl:gap-11"
        track={controls}
        desktopArrows
        arrowsClass={arrowsClass}
      />
      <div
        ref={trackRef}
        onPointerEnter={(e) => e.pointerType === 'mouse' && (state.current.hover = true)}
        onPointerLeave={() => (state.current.hover = false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="w-full touch-pan-y overflow-hidden select-none text-[length:calc(var(--spacing)*0.4098)] xl:text-[length:var(--spacing)]"
      >
        <div ref={railRef} className="flex w-max gap-[32em] px-16 will-change-transform xl:px-100 [&_img]:pointer-events-none">
          {[...items, ...items].map((item, n) => (
            <TestimonialCard key={item.id + n} item={item} hidden={n >= items.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

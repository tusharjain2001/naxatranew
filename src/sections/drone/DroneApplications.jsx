import { useEffect, useRef, useState } from 'react'
import { ArrowButton } from '../../components/ui/SliderArrows'

const chevron = '/assets/industry/drone/chevron.svg'
const CARD = 440 // card width and gap, in design px
const GAP = 24
const SPEED = 60 // drift speed, design px per second
const GLIDE_MS = 600
const COPIES = 3 // the row is repeated so the loop never shows a gap, however few cards a group has

// Cards are sized in `em`: 1 design px on desktop, 0.3 on the phone (a 440px card becomes 132px).
function Card({ card, hidden }) {
  return (
    <li aria-hidden={hidden || undefined} className="relative h-[596em] w-[440em] shrink-0 overflow-hidden rounded-[10.059em] bg-tile">
      <img src={card.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-linear-to-t from-black from-[19.466%] to-transparent px-3 py-[7.2px] xl:px-10 xl:py-24">
        <span className="bg-linear-to-b from-white from-[32.692%] to-[#e7f0ff] bg-clip-text text-center text-10 leading-12 text-transparent uppercase xl:text-24 xl:leading-64 xl:whitespace-nowrap">
          {card.label}
        </span>
      </div>
    </li>
  )
}

// Endless row: the cards drift left on their own and loop, pausing while the pointer rests on them, while a
// swipe is in progress, or while the row is off screen or closed. The arrows glide one card either way
// (forever, in both directions) and a drag moves the row by hand. It is moved by a GPU transform; the cards
// are repeated so when the offset passes one set's width it jumps back by that width without a seam.
// `loop` false makes it a plain row instead: the cards once, still until the arrows or a swipe move it, and
// stopping at either end (the arrows grey out there).
function useMarquee(open, loop = true) {
  const viewRef = useRef(null)
  const railRef = useRef(null)
  const d = useRef({ pos: 0, glide: null, drag: null, moved: false, hover: false, inView: false })
  const [edges, setEdges] = useState({ canPrev: true, canNext: true })
  const copies = loop ? COPIES : 1

  useEffect(() => {
    const view = viewRef.current
    const rail = railRef.current
    if (!open || !view || !rail) return
    const s = d.current
    const still = !loop || window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(([entry]) => (s.inView = entry.isIntersecting))
    io.observe(view)
    const loopWidth = () => {
      if (!loop) return 0
      const items = rail.children
      const n = items.length / COPIES
      return n ? items[n].offsetLeft - items[0].offsetLeft : 0
    }
    const maxPos = () => Math.max(0, rail.scrollWidth - view.clientWidth)
    let shown = ''
    let raf = 0
    let last = performance.now()
    const tick = (now) => {
      const dt = Math.min(now - last, 100) / 1000
      last = now
      const w = loopWidth()
      const unit = parseFloat(getComputedStyle(view).fontSize)
      if (s.drag) {
        // Dragging: `pos` follows the pointer handlers.
      } else if (s.glide) {
        const t = Math.min((now - s.glide.start) / GLIDE_MS, 1)
        s.pos = s.glide.from + (s.glide.to - s.glide.from) * (1 - Math.pow(1 - t, 3))
        if (t === 1) s.glide = null
      } else if (!still && !s.hover && s.inView && !document.hidden) {
        s.pos += SPEED * unit * dt
      }
      if (loop) {
        if (w > 0 && !s.glide) s.pos = ((s.pos % w) + w) % w
      } else {
        const max = maxPos()
        s.pos = Math.min(Math.max(s.pos, 0), max)
        const next = { canPrev: s.pos > 1, canNext: s.pos < max - 1 }
        const key = `${next.canPrev}${next.canNext}`
        if (key !== shown) {
          shown = key
          setEdges(next)
        }
      }
      rail.style.transform = `translate3d(${-s.pos}px, 0, 0)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [open, loop])

  // Glide one card forward (1) or back (-1); a step back past the start continues from the repeat.
  const step = (dir) => {
    const s = d.current
    const view = viewRef.current
    const rail = railRef.current
    if (!view || !rail) return
    const unit = parseFloat(getComputedStyle(view).fontSize)
    if (!loop) {
      const max = Math.max(0, rail.scrollWidth - view.clientWidth)
      s.glide = { from: s.pos, to: Math.min(Math.max(s.pos + dir * (CARD + GAP) * unit, 0), max), start: performance.now() }
      return
    }
    const n = rail.children.length / COPIES
    const w = rail.children[n].offsetLeft - rail.children[0].offsetLeft
    let from = s.pos
    if (from + dir * (CARD + GAP) * unit < 0) from += w
    s.glide = { from, to: from + dir * (CARD + GAP) * unit, start: performance.now() }
  }

  const handlers = {
    // Only a mouse pauses it: a tap on a phone would otherwise leave the row "hovered" and stopped.
    onPointerEnter: (e) => (d.current.hover = e.pointerType === 'mouse'),
    onPointerLeave: () => (d.current.hover = false),
    onPointerDown: (e) => {
      const s = d.current
      s.drag = { x: e.clientX, pos: s.pos, id: e.pointerId }
      s.glide = null
      s.moved = false
    },
    onPointerMove: (e) => {
      const s = d.current
      if (!s.drag || s.drag.id !== e.pointerId) return
      const dx = e.clientX - s.drag.x
      if (!s.moved && Math.abs(dx) > 6) {
        s.moved = true
        e.currentTarget.setPointerCapture(e.pointerId)
      }
      if (s.moved) s.pos = s.drag.pos - dx
    },
    onPointerUp: (e) => {
      if (d.current.drag?.id === e.pointerId) d.current.drag = null
    },
  }
  handlers.onPointerCancel = handlers.onPointerUp

  return { viewRef, railRef, handlers, copies, edges: loop ? { canPrev: true, canNext: true } : edges, prev: () => step(-1), next: () => step(1) }
}

function Group({ group, open, onToggle, id }) {
  const { viewRef, railRef, handlers, copies, edges, prev, next } = useMarquee(open, group.autoScroll !== false)
  return (
    <div className={`flex w-full flex-col ${open ? 'gap-40 xl:gap-80' : ''}`}>
      <div
        className={`flex w-full items-end border-b-[0.5px] border-grey px-16 pb-24 xl:items-center xl:justify-between xl:border-y-[0.5px] xl:border-black/50 xl:px-100 ${
          open ? 'xl:pt-100 xl:pb-50' : 'xl:py-100'
        }`}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex min-w-0 flex-1 cursor-pointer flex-col items-start text-left xl:flex-none xl:gap-16"
        >
          <span className={`text-14 leading-28 font-light text-grey-dark xl:text-24 xl:leading-29 xl:font-normal xl:tracking-display xl:text-grey ${open ? '' : 'hidden xl:block'}`}>
            Industries
          </span>
          <span className={`flex items-center gap-4 xl:gap-88 ${open ? '' : 'text-grey xl:text-black xl:opacity-50'}`}>
            <span className="text-20 leading-26 tracking-display capitalize xl:w-auto xl:text-56 xl:leading-64">
              <span className="xl:hidden">{group.mobileTitle}</span>
              <span className="hidden xl:inline">{group.title}</span>
            </span>
            <span className="flex size-24 items-center justify-center xl:size-[calc(var(--spacing)*62.5)]">
              <img
                src={chevron}
                alt=""
                className={`h-12 w-6 transition-transform duration-300 xl:h-36 xl:w-18 ${open ? '-rotate-90' : 'rotate-90'}`}
              />
            </span>
          </span>
        </button>
        {open && (
          <div className="flex shrink-0 gap-5 xl:gap-10">
            <ArrowButton direction="prev" set="drone" onClick={prev} disabled={!edges.canPrev} />
            <ArrowButton direction="next" set="drone" onClick={next} disabled={!edges.canNext} />
          </div>
        )}
      </div>
      <div id={id} hidden={!open}>
        <div
          ref={viewRef}
          {...handlers}
          className="touch-pan-y overflow-hidden text-[length:calc(var(--spacing)*0.3)] select-none xl:pb-100 xl:text-[length:var(--spacing)] [&_img]:pointer-events-none"
        >
          <ul ref={railRef} className="flex w-max gap-[24em] px-16 will-change-transform xl:px-100">
            {Array.from({ length: copies }, (_, copy) => group.cards.map((card) => <Card key={`${copy}-${card.label}`} card={card} hidden={copy > 0} />))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// "Industries" accordion, each group an endless row of application cards. Groups start open unless they set
// `startClosed`, and stay open or closed until the visitor toggles them (opening one doesn't close the others).
export default function DroneApplications({ groups }) {
  const [openSet, setOpenSet] = useState(() => new Set(groups.flatMap((group, i) => (group.startClosed ? [] : [i]))))
  const toggle = (i) =>
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (!next.delete(i)) next.add(i)
      return next
    })
  return (
    <section id="applications" className="flex w-full scroll-mt-56 flex-col gap-40 pt-48 pb-60 xl:scroll-mt-80 xl:gap-0 xl:py-0">
      {groups.map((group, i) => (
        <Group
          key={group.title}
          id={`drone-applications-${i}`}
          group={group}
          open={openSet.has(i)}
          onToggle={() => toggle(i)}
        />
      ))}
    </section>
  )
}

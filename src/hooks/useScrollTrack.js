import { useCallback, useEffect, useRef, useState } from 'react'

// Drives a horizontally scrolling track: arrow buttons, dots and edge state.
// Returns [ref for the track element, controls].
export default function useScrollTrack() {
  const ref = useRef(null)
  const [state, setState] = useState({ index: 0, count: 0, canPrev: false, canNext: true })

  const items = () => Array.from(ref.current?.querySelectorAll('[data-track-item]') ?? [])

  const measure = useCallback(() => {
    const el = ref.current
    if (!el) return
    const list = items()
    const start = el.getBoundingClientRect().left + parseFloat(getComputedStyle(el).paddingLeft || 0)
    let index = 0
    let best = Infinity
    list.forEach((item, i) => {
      const d = Math.abs(item.getBoundingClientRect().left - start)
      if (d < best) {
        best = d
        index = i
      }
    })
    const max = el.scrollWidth - el.clientWidth
    if (el.scrollLeft >= max - 2) index = list.length - 1
    setState({ index, count: list.length, canPrev: el.scrollLeft > 2, canNext: el.scrollLeft < max - 2 })
  }, [])

  const scrollTo = useCallback((i) => {
    const el = ref.current
    const list = items()
    const target = list[Math.max(0, Math.min(i, list.length - 1))]
    if (!el || !target) return
    // The track is `relative`, so offsetLeft is measured from its padding edge.
    const pad = parseFloat(getComputedStyle(el).paddingLeft || 0)
    el.scrollTo({ left: target.offsetLeft - pad, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    measure()
    el.addEventListener('scroll', measure, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      el.removeEventListener('scroll', measure)
      window.removeEventListener('resize', measure)
    }
  }, [measure])

  return [
    ref,
    {
      ...state,
      scrollTo,
      prev: () => scrollTo(state.index - 1),
      next: () => scrollTo(state.index + 1),
    },
  ]
}

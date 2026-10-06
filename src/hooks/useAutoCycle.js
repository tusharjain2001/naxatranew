import { useEffect, useRef, useState } from 'react'

// Moves the selection through `count` items every `ms` while the section is on screen. A mouse over the
// section pauses it, and picking an item restarts the wait from that item. Reduced motion turns it off.
// `run` changes every time a new wait starts, so a progress bar keyed on it restarts in step.
// Pass `ms = null` to drive it from outside instead (e.g. a bar's animationend calling `next`).
export default function useAutoCycle(count, ms = 3000) {
  const ref = useRef(null)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [run, setRun] = useState(0)
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const running = visible && !hovered && !still

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!running || !ms) return
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % count)
      setRun((r) => r + 1)
    }, ms)
    return () => clearTimeout(timer)
  }, [running, run, count, ms])

  const next = () => {
    setIndex((i) => (i + 1) % count)
    setRun((r) => r + 1)
  }

  const select = (i) => {
    setIndex(i)
    setRun((r) => r + 1)
  }

  const hover = {
    onPointerEnter: (e) => {
      if (e.pointerType === 'mouse') setHovered(true)
    },
    onPointerLeave: () => {
      if (hovered) setRun((r) => r + 1)
      setHovered(false)
    },
  }

  return { ref, index, select, next, running, run, hover }
}

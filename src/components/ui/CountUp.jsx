import { useEffect, useRef, useState } from 'react'

// Counts the number inside `value` ("10%", "2x", "4.5 kW") up from 0 the first time it scrolls into view.
// The final text stays in the layout (invisible) so the width never jumps while the digits change.
export default function CountUp({ value, duration = 3000 }) {
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  const ref = useRef(null)
  const [shown, setShown] = useState(match ? 0 : null)

  useEffect(() => {
    const el = ref.current
    if (!match || !el) return
    const target = parseFloat(match[2])
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || typeof IntersectionObserver === 'undefined') {
      setShown(target)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          setShown(target * (1 - Math.pow(1 - t, 3)))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  if (!match) return value
  const [, prefix, number, suffix] = match
  const decimals = number.split('.')[1]?.length ?? 0
  return (
    <span ref={ref} className="relative inline-block">
      <span className="invisible">{value}</span>
      <span className="absolute inset-0 whitespace-nowrap" aria-hidden>
        {prefix}
        {shown.toFixed(decimals)}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  )
}

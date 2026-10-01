import { useEffect, useRef } from 'react'

// The client's "scroll down" Lottie (three chevrons over the words), near the foot of every hero; a click
// glides to the next section. The animation is the client's file with its grey preview background removed
// and trimmed to its 420×320 content box. It is drawn in `em` units: 0.3 design px on desktop and 0.161 on
// the phone, so it matches the Figma group (154px wide on desktop, 83px on the phone).
// It sits 42px above the hero's bottom edge on desktop and 568px from the top on the phone (just under the
// home slider's bars at 548); `className` overrides that and `left` moves it off centre.
// The player loads after the page, and reduced motion shows a still frame.
export default function ScrollDown({ className = 'top-568 xl:top-auto xl:bottom-42', left = 'left-1/2' }) {
  const ref = useRef(null)

  useEffect(() => {
    let anim
    let cancelled = false
    Promise.all([import('lottie-web/build/player/lottie_light'), fetch('/assets/scroll-down.json').then((r) => r.json())]).then(([{ default: lottie }, data]) => {
      if (cancelled || !ref.current) return
      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      anim = lottie.loadAnimation({ container: ref.current, renderer: 'svg', loop: !still, autoplay: !still, animationData: data })
    })
    return () => {
      cancelled = true
      anim?.destroy()
    }
  }, [])

  // Glide to just past the hero, clear of the sticky header (some pages wrap their sections, so the next
  // element is not always a scroll target).
  const onClick = (e) => {
    const header = document.querySelector('header')?.offsetHeight ?? 0
    const bottom = e.currentTarget.closest('section').getBoundingClientRect().bottom
    window.scrollTo({ top: window.scrollY + bottom - header, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Scroll down"
      className={`absolute z-10 h-[320em] w-[420em] -translate-x-1/2 cursor-pointer text-[length:calc(var(--spacing)*0.161)] xl:text-[length:calc(var(--spacing)*0.3)] ${left} ${className}`}
    >
      <span ref={ref} aria-hidden className="block size-full" />
    </button>
  )
}

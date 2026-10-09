import { useEffect, useRef, useState } from 'react'
import { manufacturing } from '../data/home'
import Button from '../components/ui/Button'

// The company film plays in Figma's video frame, with no controls. It loads only once the section is near the screen
// (desktop or phone file), then plays muted on a loop while in view (browsers only autoplay silent video) and pauses
// when scrolled away. It stays on the poster for reduced motion.
export default function Manufacturing() {
  const ref = useRef(null)
  const [src, setSrc] = useState(null)
  const [desktop] = useState(() => window.matchMedia('(min-width: 1280px)').matches)
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrc(desktop ? manufacturing.video : manufacturing.mobileVideo)
          if (!still) video.play().catch(() => {})
        } else if (!video.paused) {
          video.pause()
        }
      },
      { rootMargin: '300px 0px' },
    )
    io.observe(video)
    return () => io.disconnect()
  }, [desktop, still])

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col items-center gap-48 py-56 xl:gap-40 xl:px-100 xl:pt-71 xl:pb-71">
      <div className="flex flex-col items-center gap-16 px-16 xl:gap-16 xl:px-0">
        <h2 className="text-center text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">
          {manufacturing.title}
        </h2>
        <Button variant="outline" size="xs" href="/about" className="xl:hidden">
          {manufacturing.cta}
        </Button>
        <Button variant="outline" href="/about" className="hidden xl:inline-flex">
          {manufacturing.cta}
        </Button>
      </div>

      <div className="w-full px-16 xl:w-[calc(var(--spacing)*1296.83)] xl:px-0">
        <video
          ref={ref}
          src={src ?? undefined}
          poster={desktop ? manufacturing.poster : manufacturing.mobilePoster}
          autoPlay={!still}
          muted
          loop
          playsInline
          preload="none"
          aria-label="Naxatra Labs company film"
          className="block aspect-[370/179.79] w-full rounded-3 bg-black object-cover xl:aspect-[1296.83/630] xl:rounded-16"
        />
      </div>
    </section>
  )
}

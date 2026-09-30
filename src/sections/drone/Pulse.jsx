import { useEffect, useRef, useState } from 'react'

// "Motor and ESC, engineered as one." over the ESC-to-motor animation, a looping 1920×1080 video on the
// section's off-white. It sits 142px up so its links line up with the artboard's (y ≈ 440 of 880); the phone
// draws it at 0.2105× (404px wide), 27px down. The video loads only once the section is near the screen, at
// the size for the screen (desktop or phone), and does not autoplay for reduced motion.
export default function Pulse({ data }) {
  const ref = useRef(null)
  const [src, setSrc] = useState(null)
  const [still, setStill] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        setStill(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        setSrc(window.matchMedia('(min-width: 1280px)').matches ? data.video : data.mobileVideo)
      },
      { rootMargin: '400px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [data.video, data.mobileVideo])

  return (
    <section ref={ref} className="relative mt-72 h-336 w-full overflow-hidden bg-[#fdfdfd] xl:mt-0 xl:h-880">
      <video
        src={src ?? undefined}
        poster={src ? (src === data.video ? data.poster : data.mobilePoster) : undefined}
        autoPlay={!still}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        className="absolute top-27 left-[calc(50%+var(--spacing)*0.96)] h-227 w-404 max-w-none -translate-x-1/2 xl:-top-142 xl:left-1/2 xl:h-1080 xl:w-1920"
      />
      <div className="relative mx-auto h-full max-w-1920 text-center">
        <p className="absolute top-15 left-68 w-269 text-[length:calc(var(--spacing)*6.812)] leading-[calc(var(--spacing)*6.94)] capitalize xl:top-171 xl:left-1/2 xl:w-948 xl:-translate-x-1/2 xl:text-24 xl:leading-[calc(var(--spacing)*24.452)]">
          {data.eyebrow}
        </p>
        <h2 className="absolute top-34 left-68 w-269 text-24 leading-28 capitalize xl:top-212 xl:left-1/2 xl:w-948 xl:-translate-x-1/2 xl:text-64 xl:leading-72">
          <span className="block text-grey">{data.title[0]}</span>
          <span className="block">{data.title[1]}</span>
        </h2>
        <p className="absolute top-239 left-51 w-319 text-10 leading-15 text-grey xl:top-534 xl:left-[calc(50%+var(--spacing)*0.5)] xl:w-893 xl:-translate-x-1/2 xl:text-24 xl:leading-32 xl:text-black">
          {data.text}
        </p>
      </div>
    </section>
  )
}

import { useCallback, useEffect, useState } from 'react'
import { heroSlides } from '../data/home'
import Button from '../components/ui/Button'
import { ArrowButton } from '../components/ui/SliderArrows'
import ScrollDown from '../components/ui/ScrollDown'

const AUTOPLAY_MS = 3000

function Overlay({ type }) {
  if (type === 'bridge')
    return (
      <>
        <span className="absolute inset-0 hidden bg-[linear-gradient(148.16deg,rgba(13,53,116,0.5)_16.18%,rgba(13,53,116,0)_45.48%)] xl:block" />
        <span className="absolute inset-0 bg-linear-to-b from-[#2a689e] to-[rgba(24,99,218,0)] to-61% xl:hidden" />
      </>
    )
  if (type === 'vehicles')
    return (
      <span className="absolute inset-0 hidden bg-[linear-gradient(93.75deg,#000_1.42%,rgba(183,183,183,0)_98.58%)] opacity-30 xl:block" />
    )
  return null
}

export default function Hero() {
  const [active, setActive] = useState(0)
  // Only the first slide's photo loads with the page (it is also preloaded from index.html); the rest
  // wait until the page has finished loading so they don't compete with it for bandwidth.
  const [warm, setWarm] = useState(false)
  const count = heroSlides.length

  useEffect(() => {
    const on = () => setWarm(true)
    if (document.readyState === 'complete') on()
    else window.addEventListener('load', on, { once: true })
    return () => window.removeEventListener('load', on)
  }, [])

  const go = useCallback((i) => setActive((i + count) % count), [count])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setTimeout(() => go(active + 1), AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [active, go])

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative h-720 overflow-hidden bg-black xl:h-hero"
    >
      <h1 className="sr-only">Naxatra Labs: advanced motors and controllers, all made in India</h1>
      {heroSlides.map((slide, i) => {
        const isActive = i === active
        return (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${isActive ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
          >
            {(i === 0 || isActive || warm) && (
            <picture>
              {slide.mobileImage && <source media="(max-width: 1279px)" srcSet={slide.mobileImage} />}
              <img
                src={slide.image}
                alt=""
                fetchPriority={i === 0 ? 'high' : 'auto'}
                decoding={i === 0 ? 'sync' : 'async'}
                className={`absolute inset-0 size-full object-cover transition-transform duration-[7000ms] ease-out ${
                  slide.imageClass ?? ''
                } ${isActive ? 'scale-100' : 'scale-105'}`}
              />
            </picture>
            )}
            <Overlay type={slide.overlay} />

            <div className="relative mx-auto h-full max-w-1920">
              {/* Desktop copy */}
              <div
                className={`absolute hidden w-1422 flex-col text-white xl:flex ${slide.subtitleGap ?? ''} transition-all delay-200 duration-700 ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                }`}
                style={{ top: `${slide.top / 16}rem`, left: `${(slide.left ?? 103) / 16}rem` }}
              >
                <h2 className={`w-1391 text-88 leading-96 font-normal tracking-display ${slide.titleClass ?? ''}`}>
                  {slide.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                {slide.subtitle && (
                  <p className="text-32 leading-44 tracking-display">
                    {slide.subtitle.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                )}
              </div>

              {/* Mobile copy */}
              <div
                className={`absolute inset-x-0 top-0 flex flex-col items-start gap-18 px-16 pt-80 text-white transition-all delay-200 duration-700 xl:hidden ${
                  isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
              >
                <h2 className={`text-40 leading-48 font-normal ${slide.mobileTitleClass ?? ''}`}>
                  {/* The phone artboards let most headlines wrap to their box instead of keeping the desktop breaks. */}
                  {slide.mobileLines
                    ? slide.title.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))
                    : slide.title.join(' ')}
                </h2>
                {slide.subtitle && <p className="text-20 leading-28 capitalize">{slide.subtitle.join(' ')}</p>}
                <Button variant="white" size="heroM" href="#products" tabIndex={isActive ? 0 : -1}>
                  Explore Now
                </Button>
              </div>

              <Button
                variant="white"
                size="hero"
                href="#products"
                tabIndex={isActive ? 0 : -1}
                className="absolute top-448 left-103 hidden xl:inline-flex"
              >
                Explore Now
              </Button>
            </div>
          </div>
        )
      })}

      <div className="pointer-events-none absolute inset-0 z-20 mx-auto max-w-1920">
        {/* Mobile arrows */}
        <div className="pointer-events-auto absolute inset-x-0 top-359 flex items-center justify-between px-16 xl:hidden">
          <ArrowButton set="hero" direction="prev" onClick={() => go(active - 1)} label="Previous slide" />
          <ArrowButton set="hero" direction="next" onClick={() => go(active + 1)} label="Next slide" />
        </div>

        {/* Progress bars */}
        <div className="pointer-events-auto absolute top-610 left-1/2 flex -translate-x-1/2 items-center gap-5 xl:tx-737 xl:gap-8">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
              className="relative h-5.75 w-36 cursor-pointer overflow-hidden rounded-[calc(var(--spacing)*2.5)] bg-silver/34 xl:h-9 xl:w-57 xl:rounded-4"
            >
              <span
                className={`absolute inset-0 origin-left bg-white ${
                  i === active ? 'animate-[hero-progress_linear_forwards]' : 'scale-x-0'
                }`}
                style={i === active ? { animationDuration: `${AUTOPLAY_MS}ms` } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
      <ScrollDown className="top-626 xl:top-auto xl:bottom-42" />
    </section>
  )
}

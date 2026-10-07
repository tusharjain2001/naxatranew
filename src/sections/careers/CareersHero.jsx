import { useState } from 'react'
import { careersHero } from '../../data/careers'
import Button from '../../components/ui/Button'

// Black hero: headline, line and Apply Now on the left, the hiring film on the right (stacked under the
// text on phones). The film plays muted on a loop (browsers only autoplay silent video); its own controls
// show on hover or tap, so visitors can turn the sound on. It stays on the poster for reduced motion.
export default function CareersHero() {
  // Pick the desktop or phone file once, so a phone never downloads the full-size film.
  const [desktop] = useState(() => window.matchMedia('(min-width: 1280px)').matches)
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  return (
    <section className="relative h-718 w-full overflow-hidden bg-black xl:h-hero">
      <div className="mx-auto flex h-full max-w-1920 flex-col justify-center gap-24 px-16 py-80 xl:flex-row xl:items-center xl:gap-25 xl:px-100 xl:py-0">
        <div className="flex flex-col items-start gap-24 text-white xl:w-715 xl:shrink-0 xl:gap-25">
          <h1 className="text-40 leading-48 xl:text-80 xl:leading-96">
            {careersHero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-20 leading-28 capitalize xl:w-536 xl:text-32 xl:leading-42 xl:font-light xl:normal-case">{careersHero.subtitle}</p>
          <Button href={careersHero.cta.href} variant="white" size="heroM" className="xl:hidden">
            {careersHero.cta.label}
          </Button>
          <Button href={careersHero.cta.href} variant="white" size="hero" className="hidden xl:inline-flex">
            {careersHero.cta.label}
          </Button>
        </div>
        <video
          src={desktop ? careersHero.video : careersHero.mobileVideo}
          poster={desktop ? careersHero.poster : careersHero.mobilePoster}
          autoPlay={!still}
          muted
          loop
          playsInline
          controls
          aria-label="Life at Naxatra Labs"
          className="aspect-1972/958 w-full rounded-[calc(var(--spacing)*3.733)] border-[0.2px] border-grey object-cover xl:w-979 xl:shrink-0 xl:rounded-[calc(var(--spacing)*9.877)] xl:border-[0.5px]"
        />
      </div>
    </section>
  )
}

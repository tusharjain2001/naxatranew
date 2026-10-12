import { useState } from 'react'
import { careersHero } from '../../data/careers'
import Button from '../../components/ui/Button'

// Black hero: headline, line and Apply Now on the left, the hiring film on the right (stacked under the
// text on phones). The film is the client's Cloudinary MP4 in a 16:9 frame; the poster sits behind it while
// it loads. It plays muted on a loop (browsers only autoplay silent video) with controls so visitors can
// unmute; it doesn't autoplay for reduced motion.
export default function CareersHero() {
  const [desktop] = useState(() => window.matchMedia('(min-width: 1280px)').matches)
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const { video, videoTitle } = careersHero

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
        <div
          className="relative aspect-video w-full overflow-hidden rounded-[calc(var(--spacing)*3.733)] border-[0.2px] border-grey bg-black bg-cover bg-center xl:w-979 xl:shrink-0 xl:rounded-[calc(var(--spacing)*9.877)] xl:border-[0.5px]"
          style={{ backgroundImage: `url(${desktop ? careersHero.poster : careersHero.mobilePoster})` }}
        >
          <video
            src={video}
            poster={desktop ? careersHero.poster : careersHero.mobilePoster}
            autoPlay={!still}
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label={videoTitle}
            className="absolute inset-0 size-full border-0 object-cover"
          />
        </div>
      </div>
    </section>
  )
}

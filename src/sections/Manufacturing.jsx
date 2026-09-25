import { useState } from 'react'
import { manufacturing } from '../data/home'
import Button from '../components/ui/Button'

export default function Manufacturing() {
  const [playing, setPlaying] = useState(false)
  const hasVideo = Boolean(manufacturing.videoSrc)

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col items-center gap-48 py-100 xl:gap-40 xl:px-100 xl:pt-326 xl:pb-0">
      <div className="flex flex-col items-center gap-16 px-16 xl:gap-24 xl:px-0">
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

      <div className="w-full px-16 xl:w-[calc(var(--spacing)*1457.39)] xl:px-0">
        <div className="relative aspect-[370/179.79] w-full overflow-hidden rounded-3 bg-black xl:aspect-[1457.39/708] xl:rounded-16">
          {playing ? (
            <video src={manufacturing.videoSrc} poster={manufacturing.image} controls autoPlay className="size-full object-cover" />
          ) : (
            <>
              <img
                src={manufacturing.image}
                alt="Technician measuring a motor stator lamination with a digital caliper"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <span className="absolute inset-0 bg-linear-to-l from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.8)]" />
              {hasVideo ? (
                <button
                  type="button"
                  aria-label="Play factory video"
                  onClick={() => setPlaying(true)}
                  className="absolute top-1/2 left-1/2 size-22 -translate-1/2 cursor-pointer transition-transform duration-300 hover:scale-110 xl:size-87"
                >
                  <img src="/assets/play.svg" alt="" className="size-full" />
                </button>
              ) : (
                <img
                  src="/assets/play.svg"
                  alt=""
                  className="absolute top-1/2 left-1/2 size-22 -translate-1/2 xl:size-87"
                />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

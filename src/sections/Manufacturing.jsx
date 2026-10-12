import { useState } from 'react'
import { manufacturing } from '../data/home'
import Button from '../components/ui/Button'

// Vimeo player options: no title, byline, avatar or badge over the film, no tracking cookies (`dnt`); it plays
// muted on a loop (browsers only autoplay silent video). It doesn't autoplay for reduced motion.
const vimeoSrc = (id, autoplay) =>
  `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&muted=1&loop=1&autoplay=${autoplay ? 1 : 0}`

// The company film plays in Figma's video frame — the client's Vimeo embed. It doesn't autoplay for reduced motion.
export default function Manufacturing() {
  const [still] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const { vimeo } = manufacturing

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
        <div className="relative aspect-[370/179.79] w-full overflow-hidden rounded-3 bg-black xl:aspect-[1296.83/630] xl:rounded-16">
          <iframe
            src={vimeoSrc(vimeo.id, !still)}
            title={vimeo.title}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>
    </section>
  )
}

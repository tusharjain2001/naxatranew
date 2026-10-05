import { ideas } from '../data/home'
import Dots from '../components/ui/Dots'
import SectionHeader from '../components/ui/SectionHeader'
import useScrollTrack from '../hooks/useScrollTrack'

// Each card links out to its post (LinkedIn or EVreporter), so it opens in a new tab.
function ReadMore({ href, className = '' }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`group inline-flex w-fit items-center gap-13 font-light text-primary ${className}`}>
      <span className="underline underline-offset-2">Read More</span>
      <img src="/assets/read-more-arrow.svg" alt="" className="h-11.25 w-11.75 transition-transform duration-200 group-hover:translate-x-4" />
    </a>
  )
}

export default function Ideas({ spacing = 'gap-28 py-56 xl:gap-64 xl:pt-74 xl:pb-[calc(var(--spacing)*70.5)]' }) {
  const [trackRef, track] = useScrollTrack()

  return (
    <section id="ideas" className={`mx-auto flex w-full max-w-1920 flex-col ${spacing}`}>
      <SectionHeader title="Ideas. Innovation. Impact" subtitle="And many more to come..." subtitleClass="xl:normal-case" mobileLeading="leading-20" track={track} className="xl:px-98" />

      <div className="flex flex-col items-center gap-28">
        <div
          ref={trackRef}
          className="no-scrollbar relative flex w-full snap-x snap-mandatory scroll-px-16 gap-16 overflow-x-auto px-16 xl:grid xl:snap-none xl:grid-cols-3 xl:gap-[calc(var(--spacing)*30.66)] xl:overflow-visible xl:px-98"
        >
          {ideas.map((item) => (
            <article
              key={item.id}
              data-track-item
              className="group flex w-full shrink-0 snap-start flex-col gap-11 xl:gap-[calc(var(--spacing)*16.4)]"
            >
              <div className="relative h-202 overflow-hidden rounded-6 xl:h-[calc(var(--spacing)*306.63)]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-11 xl:gap-[calc(var(--spacing)*11.56)]">
                <p className="text-14 leading-15 font-light text-muted xl:text-19 xl:leading-[calc(var(--spacing)*29.29)] xl:font-normal">
                  <time>{item.date}</time>
                </p>
                <h3 className="text-20 leading-normal tracking-display capitalize xl:flex xl:min-h-[calc(var(--spacing)*46.23)] xl:items-center xl:text-31">
                  {item.title}
                </h3>
                <p className="text-14 leading-20 font-light tracking-display xl:text-19 xl:text-grey xl:leading-[calc(var(--spacing)*26.97)]">{item.text}</p>
                <ReadMore href={item.href} className="text-14 leading-[calc(var(--spacing)*29.29)] xl:text-[length:calc(var(--spacing)*18.9)]" />
              </div>
            </article>
          ))}
        </div>
        <Dots count={track.count} active={track.index} onSelect={track.scrollTo} className="xl:hidden" />
      </div>
    </section>
  )
}

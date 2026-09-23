import { ideas } from '../data/home'
import Dots from '../components/ui/Dots'
import SectionHeader from '../components/ui/SectionHeader'
import useScrollTrack from '../hooks/useScrollTrack'

function ReadMore({ className = '' }) {
  return (
    <a href="#ideas" className={`group inline-flex items-center gap-13 font-light text-primary ${className}`}>
      <span className="underline underline-offset-2">Read More</span>
      <img src="/assets/read-more-arrow.svg" alt="" className="h-11.25 w-11.75 transition-transform duration-200 group-hover:translate-x-4" />
    </a>
  )
}

export default function Ideas() {
  const [trackRef, track] = useScrollTrack()

  return (
    <section id="ideas" className="mx-auto flex w-full max-w-1920 flex-col gap-28 py-100 xl:gap-64 xl:pt-177 xl:pb-200">
      <SectionHeader title="Ideas. Innovation. Impact" subtitle="And Many More To Come..." mobileLeading="leading-20" track={track} />

      <div className="flex flex-col items-center gap-28">
        <div
          ref={trackRef}
          className="no-scrollbar relative flex w-full snap-x snap-mandatory scroll-px-16 gap-16 overflow-x-auto px-16 xl:grid xl:snap-none xl:grid-cols-3 xl:gap-[calc(var(--spacing)*30.66)] xl:overflow-visible xl:px-100"
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
                  alt="Naxatra Labs team at National Technology Week"
                  loading="lazy"
                  className={`absolute inset-x-0 top-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 xl:h-[calc(var(--spacing)*311.34)] ${
                    item.mobileImageClass ?? ''
                  } xl:object-center`}
                />
                <img src={item.mark} alt="" className="absolute right-[5.09%] bottom-[6.51%] hidden h-[5.95%] w-[4.95%] xl:block" />
              </div>

              <div className="flex flex-col gap-11 xl:gap-[calc(var(--spacing)*11.56)]">
                <p className="text-14 leading-15 font-light text-muted xl:text-19 xl:leading-[calc(var(--spacing)*29.29)] xl:font-normal">
                  <time>{item.date}</time>
                </p>
                <h3 className="text-20 leading-normal tracking-display capitalize xl:flex xl:h-[calc(var(--spacing)*46.23)] xl:items-center xl:text-31">
                  {item.title}
                </h3>
                <p className="text-14 leading-20 font-light tracking-display xl:text-19 xl:leading-[calc(var(--spacing)*26.97)]">{item.text}</p>
                <ReadMore className="text-14 leading-[calc(var(--spacing)*29.29)] xl:text-[length:calc(var(--spacing)*18.9)]" />
              </div>
            </article>
          ))}
        </div>
        <Dots count={track.count} active={track.index} onSelect={track.scrollTo} className="xl:hidden" />
      </div>
    </section>
  )
}

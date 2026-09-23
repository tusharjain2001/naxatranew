import { testimonials } from '../data/home'
import Dots from '../components/ui/Dots'
import SectionHeader from '../components/ui/SectionHeader'
import useScrollTrack from '../hooks/useScrollTrack'

// Card lengths are artboard px in `em`: 1 design px on desktop, 0.41 on the mobile artboard.
function TestimonialCard({ item }) {
  return (
    <figure
      data-track-item
      className="flex w-[439em] shrink-0 snap-start flex-col items-start gap-[32em] rounded-[12em] bg-card p-[24em]"
    >
      <div className="flex w-full items-center justify-between">
        <img src="/assets/avatar.svg" alt="" className="size-[80em]" />
        <span className="flex items-center justify-center rounded-[48em] border-[1em] border-grey px-[32em] py-[8em]">
          <span className="text-center font-bold" style={{ fontSize: '24em', lineHeight: 1.333 }}>
            {item.logo}
          </span>
        </span>
      </div>
      <img src="/assets/quote.svg" alt="" className="h-[48em] w-[56em] xl:h-[40em] xl:w-[47em]" />
      <blockquote className="w-[391em]">
        <p className="text-[length:24em] leading-[1.333] xl:text-[length:20em] xl:leading-[1.4]">{item.quote}</p>
      </blockquote>
      <img src="/assets/testimonial-line.svg" alt="" className="h-[max(1em,1px)] w-[135em]" />
      <figcaption className="w-[391em]">
        <span className="block" style={{ fontSize: '24em', lineHeight: 1.333 }}>
          <span className="block font-bold">{item.name}</span>
          <span className="block">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

export default function Testimonials({ spacing = 'gap-60 py-100 xl:gap-100 xl:pt-293 xl:pb-0' }) {
  const [trackRef, track] = useScrollTrack()

  return (
    <section className={`mx-auto flex w-full max-w-1920 flex-col ${spacing}`}>
      <SectionHeader
        title="What Innovators Say About Us?"
        subtitle="These Are Our Client Testimonials..."
        mobileLeading="leading-32"
        desktopGap="xl:gap-11"
        track={track}
      />
      <div className="flex flex-col items-center gap-28">
        <div
          ref={trackRef}
          className="no-scrollbar relative flex w-full snap-x snap-mandatory scroll-px-16 gap-[32em] overflow-x-auto px-16 text-[length:calc(var(--spacing)*0.4098)] xl:scroll-px-100 xl:px-100 xl:text-[length:var(--spacing)]"
        >
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
        <Dots count={track.count} active={track.index} onSelect={track.scrollTo} className="xl:hidden" />
      </div>
    </section>
  )
}

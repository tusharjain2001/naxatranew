import { useState } from 'react'
import useScrollTrack from '../../hooks/useScrollTrack'
import { ArrowButton } from '../../components/ui/SliderArrows'

const chevron = '/assets/industry/drone/chevron.svg'

// Cards are sized in `em`: 1 design px on desktop, 0.3 on the phone (a 440px card becomes 132px).
function Card({ card }) {
  return (
    <li
      data-track-item
      className="relative h-[596em] w-[440em] shrink-0 snap-start overflow-hidden rounded-[10.059em] bg-tile"
    >
      <img src={card.image} alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-linear-to-t from-black from-[19.466%] to-transparent px-3 py-[7.2px] xl:px-10 xl:py-24">
        <span className="bg-linear-to-b from-white from-[32.692%] to-[#e7f0ff] bg-clip-text text-center text-10 leading-12 text-transparent uppercase xl:text-24 xl:leading-64 xl:whitespace-nowrap">
          {card.label}
        </span>
      </div>
    </li>
  )
}

function Group({ group, open, onToggle, id }) {
  const [trackRef, track] = useScrollTrack()
  return (
    <div className={`flex w-full flex-col ${open ? 'gap-40 xl:gap-80' : ''}`}>
      <div
        className={`flex w-full items-end border-b-[0.5px] border-grey px-16 pb-24 xl:items-center xl:justify-between xl:border-y-[0.5px] xl:border-black/50 xl:px-100 ${
          open ? 'xl:pt-100 xl:pb-50' : 'xl:py-100'
        }`}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex min-w-0 flex-1 cursor-pointer flex-col items-start text-left xl:flex-none xl:gap-16"
        >
          <span className={`text-14 leading-28 font-light text-grey-dark xl:text-24 xl:leading-normal xl:font-normal xl:tracking-display xl:text-grey ${open ? '' : 'hidden xl:block'}`}>
            Industries
          </span>
          <span className={`flex items-center gap-4 xl:gap-16 ${open ? '' : 'text-grey xl:text-black xl:opacity-50'}`}>
            <span className="text-20 leading-26 tracking-display capitalize xl:w-auto xl:text-56 xl:leading-64">
              <span className="xl:hidden">{group.mobileTitle}</span>
              <span className="hidden xl:inline">{group.title}</span>
            </span>
            <span className="flex size-24 items-center justify-center xl:size-[calc(var(--spacing)*62.5)]">
              <img
                src={chevron}
                alt=""
                className={`h-12 w-6 transition-transform duration-300 xl:h-36 xl:w-18 ${open ? '-rotate-90' : 'rotate-90'}`}
              />
            </span>
          </span>
        </button>
        {open && (
          <div className="flex shrink-0 gap-5 xl:gap-10">
            <ArrowButton direction="prev" set="drone" onClick={track.prev} disabled={!track.canPrev} />
            <ArrowButton direction="next" set="drone" onClick={track.next} disabled={!track.canNext} />
          </div>
        )}
      </div>
      <div id={id} hidden={!open}>
        <ul
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory scroll-px-16 gap-[24em] overflow-x-auto px-16 text-[length:calc(var(--spacing)*0.3)] xl:scroll-px-100 xl:px-100 xl:pb-100 xl:text-[length:var(--spacing)]"
        >
          {group.cards.map((card) => (
            <Card key={card.label} card={card} />
          ))}
        </ul>
      </div>
    </div>
  )
}

// "Industries" accordion: one group open at a time, each a swipeable row of application cards.
export default function DroneApplications({ groups }) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="applications" className="flex w-full scroll-mt-56 flex-col gap-40 pt-48 pb-60 xl:scroll-mt-80 xl:gap-0 xl:py-0">
      {groups.map((group, i) => (
        <Group
          key={group.title}
          id={`drone-applications-${i}`}
          group={group}
          open={i === openIndex}
          onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
        />
      ))}
    </section>
  )
}

import { investors } from '../../data/about'
import PersonCard from '../../components/ui/PersonCard'

const px = (n) => `calc(var(--spacing) * ${n})`

// Logos are cropped out of larger exports; each artboard frames them differently, so mobile and
// desktop get their own box. Mobile boxes sit centred, nudged right as on the artboard.
function PartnerLogo({ partner }) {
  const { box, crop, mobile } = partner
  const image = (c) => (
    <img
      src={partner.src}
      alt={partner.name}
      loading="lazy"
      className="absolute"
      style={{ width: `${c.w}%`, height: `${c.h}%`, left: `${c.l}%`, top: `${c.t}%` }}
    />
  )
  return (
    <div className="relative h-[calc(var(--spacing)*82.138)] rounded-[calc(var(--spacing)*4.41)] bg-[#f4f5f6] xl:h-149 xl:rounded-8">
      <div
        className="absolute top-1/2 overflow-hidden xl:hidden"
        style={{ left: `calc(50% + ${px(mobile.dx)})`, width: px(mobile.w), height: px(mobile.h), transform: 'translate(-50%, -50%)' }}
      >
        {image(mobile.crop)}
      </div>
      <div
        className="absolute left-1/2 hidden -translate-x-1/2 overflow-hidden text-[length:var(--spacing)] xl:block"
        style={{ top: `${box.t}em`, width: `${box.w}em`, height: `${box.h}em` }}
      >
        {image(crop)}
      </div>
    </div>
  )
}

export default function Investors() {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-[calc(var(--spacing)*33.076)] px-16 py-100 xl:gap-100 xl:px-100 xl:py-200">
      <h2 className="text-32 leading-37 tracking-display capitalize xl:text-64 xl:leading-80">{investors.title}</h2>

      <div className="flex flex-col gap-[calc(var(--spacing)*33.076)] xl:gap-118">
        <div className="flex flex-col gap-[calc(var(--spacing)*17.64)] xl:gap-32">
          <div className="flex h-[calc(var(--spacing)*115.765)] items-center justify-center bg-[rgba(0,101,225,0.08)] xl:h-210">
            <img
              src={investors.lead.src}
              alt={investors.lead.name}
              loading="lazy"
              className="h-[calc(var(--spacing)*56.78)] w-[calc(var(--spacing)*171.443)] translate-x-[calc(var(--spacing)*14.5)] object-fill xl:h-155 xl:w-465 xl:translate-x-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-[calc(var(--spacing)*15.987)] xl:gap-29">
            {investors.partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-[calc(var(--spacing)*14.884)] gap-y-[calc(var(--spacing)*33.076)] xl:grid-cols-5 xl:gap-x-27 xl:gap-y-60">
          {investors.people.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

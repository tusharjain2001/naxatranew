import { investors } from '../../data/about'
import PersonCard from '../../components/ui/PersonCard'

// Logo panels are sized in `em`: 1 design px on desktop, 0.45 on mobile.
const panelScale = 'text-[length:calc(var(--spacing)*0.45)] xl:text-[length:var(--spacing)]'

function PartnerLogo({ partner }) {
  const { box, crop } = partner
  return (
    <div className={`relative h-[149em] rounded-8 bg-[#f4f5f6] ${panelScale}`}>
      <div
        className="absolute left-1/2 -translate-x-1/2 overflow-hidden"
        style={{ top: `${box.t}em`, width: `${box.w}em`, height: `${box.h}em` }}
      >
        <img
          src={partner.src}
          alt={partner.name}
          loading="lazy"
          className="absolute"
          style={{ width: `${crop.w}%`, height: `${crop.h}%`, left: `${crop.l}%`, top: `${crop.t}%` }}
        />
      </div>
    </div>
  )
}

export default function Investors() {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-40 px-16 py-80 xl:gap-100 xl:px-100 xl:py-200">
      <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">{investors.title}</h2>

      <div className="flex flex-col gap-60 xl:gap-118">
        <div className="flex flex-col gap-12 xl:gap-32">
          <div className={`flex h-[210em] items-center justify-center bg-[rgba(0,101,225,0.08)] ${panelScale}`}>
            <img src={investors.lead.src} alt={investors.lead.name} loading="lazy" className="h-[155em] w-[465em] object-fill" />
          </div>
          <div className="grid grid-cols-2 gap-12 xl:gap-29">
            {investors.partners.map((partner) => (
              <PartnerLogo key={partner.name} partner={partner} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-32 xl:grid-cols-5 xl:gap-x-27 xl:gap-y-60">
          {investors.people.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}

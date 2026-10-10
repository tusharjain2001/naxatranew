import { industries, productPath } from '../../data/products'

const TORQUE_ICON = '/assets/products/listing/spec-torque.svg'

// Industry chip row (icon tile + label) shared by the listing grid and the detail "Browse Our Other
// Motors" carousel — both render the same Figma card (node 14394:1755: render plate, name + tagline +
// Industries chips + View Product).
function IndustryChips({ keys }) {
  return (
    <div className="flex flex-wrap gap-4 xl:gap-10">
      {keys.map((key) => {
        const ind = industries[key]
        if (!ind) return null
        return (
          <span key={key} className="flex w-[calc(var(--spacing)*48.5)] items-center gap-[calc(var(--spacing)*3.296)] whitespace-nowrap xl:w-auto border-[0.4px] border-black/10 bg-black/5 p-[calc(var(--spacing)*2.93)] xl:gap-8 xl:p-7">
            <span className="grid size-[calc(var(--spacing)*8.775)] place-items-center bg-white xl:size-20">
              <img src={ind.icon} alt="" className="size-[calc(var(--spacing)*6.6)] object-contain xl:size-14" />
            </span>
            <span className="text-[length:calc(var(--spacing)*5.859)] leading-[calc(var(--spacing)*8.436)] font-light capitalize xl:text-13 xl:leading-normal">{ind.label}</span>
          </span>
        )
      })}
    </div>
  )
}

// Flow-based card (render plate on top, content stacked below) so the same card scales cleanly from the
// full-width listing cell down to the ~172px compact carousel card. `className` sets the outer sizing/snap.
// `listing` is the listing artboard's card (node 15651:3372): the variants line under the name, then the key spec
// ("Torque upto 6.5 Nm", "IP67 Sealing") in a grey pill with its icon, instead of the tagline.
export default function FamilyCard({ family, className = 'w-full', listing = false }) {
  const line = family.cardTagline
  return (
    <a href={productPath(family.slug)} className={`group flex flex-col overflow-hidden border-[calc(var(--spacing)*0.367)] border-black/10 xl:border-[0.85px] bg-black/[0.02] ${className}`}>
      {/* Render plate. The Figma card render is a large square centred on the plate that overflows it
          (clipped by the card); its width per family is card.scale (% of the plate width). */}
      <span className="relative mx-[6.35%] mt-[6.35%] block aspect-[360/197] bg-white xl:mx-[6.5%] xl:mt-[6.5%]">
        <img
          src={family.card.image}
          alt={family.name}
          loading="lazy"
          style={{ width: `${family.card.scale ?? 90}%` }}
          className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </span>
      {/* Content — Figma card content (node 14314:20585) is 253px tall with gap-27 between blocks
          and ~34px line-height on the name/tagline/label, giving the ~500px card. */}
      <div
        className={`flex flex-1 flex-col gap-[calc(var(--spacing)*5.864)] p-[6.35%] pt-[calc(var(--spacing)*10.27)] xl:p-[6.5%] ${
          listing ? 'xl:gap-[calc(var(--spacing)*13.586)] xl:pt-24' : 'xl:gap-22 xl:pt-20'
        }`}
      >
        {listing ? (
          <>
            <div className={`flex flex-col gap-[calc(var(--spacing)*1.466)] ${family.variantsLine ? 'xl:gap-6' : ''}`}>
              <span className="text-18 leading-[calc(var(--spacing)*17.593)] capitalize xl:text-[length:calc(var(--spacing)*40.758)] xl:leading-[calc(var(--spacing)*40.758)]">
                {family.cardName ?? family.name}
              </span>
              {family.variantsLine && (
                <span className="text-[length:calc(var(--spacing)*8)] leading-[calc(var(--spacing)*12.828)] font-light text-black xl:text-[length:calc(var(--spacing)*16.982)] xl:leading-[calc(var(--spacing)*29.719)]">
                  {family.variantsLine}
                </span>
              )}
            </div>
            <span className="flex items-center gap-6 bg-[rgba(137,148,166,0.05)] px-6 py-3 xl:gap-8 xl:px-8 xl:py-4">
              <img src={family.cardIcon ?? TORQUE_ICON} alt="" className="size-8 shrink-0 object-contain xl:size-16" />
              <span className="text-[length:calc(var(--spacing)*8)] leading-11 font-light capitalize xl:text-16 xl:leading-24">{family.cardTagline}</span>
            </span>
          </>
        ) : (
          <div className="flex flex-col gap-[calc(var(--spacing)*1.466)] xl:gap-3">
            <span className="text-18 leading-[calc(var(--spacing)*17.593)] capitalize xl:text-40 xl:leading-[44px]">{family.cardName ?? family.name}</span>
            <span className="text-[length:calc(var(--spacing)*8)] leading-[calc(var(--spacing)*12.828)] font-light capitalize text-black xl:text-16 xl:leading-[30px]">{line}</span>
          </div>
        )}
        <div className={`flex flex-col gap-[calc(var(--spacing)*1.466)] ${listing ? 'xl:gap-[calc(var(--spacing)*3.396)]' : 'xl:gap-6'}`}>
          <span
            className={`text-[length:calc(var(--spacing)*8)] leading-[calc(var(--spacing)*12.828)] font-light capitalize ${
              listing ? 'xl:text-[length:calc(var(--spacing)*16.982)] xl:leading-[calc(var(--spacing)*29.719)]' : 'xl:text-16 xl:leading-[30px]'
            }`}
          >
            Industries
          </span>
          <IndustryChips keys={family.industries} />
        </div>
        <span
          className={`mt-auto pt-[calc(var(--spacing)*5.865)] text-[length:calc(var(--spacing)*8.797)] leading-[calc(var(--spacing)*15.027)] text-primary capitalize underline underline-offset-2 group-hover:no-underline xl:text-20 xl:leading-[35px] ${
            listing ? 'xl:pt-[calc(var(--spacing)*13.586)]' : 'xl:pt-0'
          }`}
        >
          View Product →
        </span>
      </div>
    </a>
  )
}

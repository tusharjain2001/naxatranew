import { industries, productPath } from '../../data/products'

// Industry chip row (icon tile + label) shared by the listing grid and the detail "Browse Our Other
// Motors" carousel — both render the same Figma card (node 14394:1755: render plate, name + tagline +
// Industries chips + View Product).
function IndustryChips({ keys }) {
  return (
    <div className="flex flex-wrap gap-5 xl:gap-10">
      {keys.map((key) => {
        const ind = industries[key]
        if (!ind) return null
        return (
          <span key={key} className="flex items-center gap-3 border-[0.4px] border-black/10 bg-black/5 p-4 xl:gap-8 xl:p-7">
            <span className="grid size-13 place-items-center bg-white xl:size-20">
              <img src={ind.icon} alt="" className="size-8 object-contain xl:size-14" />
            </span>
            <span className="text-9 font-light capitalize xl:text-13">{ind.label}</span>
          </span>
        )
      })}
    </div>
  )
}

// Flow-based card (render plate on top, content stacked below) so the same card scales cleanly from the
// full-width listing cell down to the ~172px compact carousel card. `className` sets the outer sizing/snap.
export default function FamilyCard({ family, className = 'w-full' }) {
  return (
    <a href={productPath(family.slug)} className={`group flex flex-col overflow-hidden border-[0.85px] border-black/10 bg-black/[0.02] ${className}`}>
      {/* Render plate */}
      <span className="relative mx-[6.5%] mt-[6.5%] block aspect-[360/197] bg-white">
        <img
          src={family.card.image}
          alt={family.name}
          loading="lazy"
          className="absolute inset-0 size-full scale-[1.12] object-contain p-6 transition-transform duration-500 group-hover:scale-[1.18]"
        />
      </span>
      {/* Content */}
      <div className="flex flex-1 flex-col gap-8 p-[6.5%] pt-14 xl:gap-14 xl:pt-20">
        <div className="flex flex-col gap-2 xl:gap-3">
          <span className="text-20 leading-none capitalize xl:text-40">{family.cardName ?? family.name}</span>
          <span className="text-11 font-light capitalize text-black xl:text-16">{family.tagline}</span>
        </div>
        <div className="flex flex-col gap-5 xl:gap-6">
          <span className="text-11 font-light capitalize xl:text-16">Industries</span>
          <IndustryChips keys={family.industries} />
        </div>
        <span className="mt-auto text-13 text-primary capitalize underline underline-offset-2 group-hover:no-underline xl:text-20">View Product →</span>
      </div>
    </a>
  )
}

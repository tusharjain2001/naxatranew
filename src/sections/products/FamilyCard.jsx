import { industries, productPath } from '../../data/products'

// Industry chip row (icon tile + label) shared by the listing grid and the detail "Browse Our Other
// Motors" carousel — both render the same Figma card (node 14394:1755: h500/w415, white render plate,
// name + tagline + Industries chips + View Product).
function IndustryChips({ keys }) {
  return (
    <div className="flex flex-wrap gap-10">
      {keys.map((key) => {
        const ind = industries[key]
        if (!ind) return null
        return (
          <span key={key} className="flex items-center gap-8 border-[0.4px] border-black/10 bg-black/5 p-7">
            <span className="grid size-20 place-items-center bg-white">
              <img src={ind.icon} alt="" className="size-14 object-contain" />
            </span>
            <span className="text-13 font-light capitalize">{ind.label}</span>
          </span>
        )
      })}
    </div>
  )
}

// `className` sets the outer sizing/snap so the same card works as a grid cell (listing) or a
// fixed-width carousel item (Browse Our Other Motors).
export default function FamilyCard({ family, className = 'h-440 w-full xl:h-500 xl:w-415' }) {
  return (
    <a href={productPath(family.slug)} className={`group relative block overflow-hidden border-[0.85px] border-black/10 bg-black/[0.02] ${className}`}>
      {/* White plate + render */}
      <span className="absolute top-20 left-1/2 h-190 w-[86%] -translate-x-1/2 bg-white xl:top-26 xl:left-26 xl:h-197 xl:w-360 xl:translate-x-0" />
      <img
        src={family.card.image}
        alt={family.name}
        loading="lazy"
        className="pointer-events-none absolute top-14 left-1/2 h-215 w-[92%] -translate-x-1/2 object-contain transition-transform duration-500 group-hover:scale-[1.04] xl:top-6 xl:left-26 xl:h-235 xl:w-360 xl:translate-x-0"
      />
      {/* Content */}
      <div className="absolute top-215 left-20 flex w-[88%] flex-col gap-14 xl:top-247 xl:left-26 xl:w-360">
        <div className="flex flex-col gap-3">
          <span className="text-28 leading-none capitalize xl:text-40">{family.name}</span>
          <span className="text-14 font-light capitalize text-black xl:text-16">{family.tagline}</span>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-14 font-light capitalize xl:text-16">Industries</span>
          <IndustryChips keys={family.industries} />
        </div>
        <span className="text-18 text-primary capitalize underline underline-offset-2 group-hover:no-underline xl:text-20">View Product →</span>
      </div>
    </a>
  )
}

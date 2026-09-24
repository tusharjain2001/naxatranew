import Button from '../../../components/ui/Button'

// Breadcrumb -> title -> subtitle ("- <variant> Variant") -> VIEW SPECIFICATIONS -> 3 spec boxes,
// hero render + thumbnail gallery + View In Motion, and the Choose-The-Variant panel. Selecting a
// variant swaps the subtitle, spec boxes and hero render in place (the parent swaps the rest).
function SpecBox({ label, value }) {
  return (
    <div className="flex flex-col gap-6 border-[0.5px] border-black/25 bg-white px-20 pt-10 pb-3">
      <span className="text-16 font-light capitalize xl:text-20">{label}</span>
      <span className="h-px w-full bg-black/25" />
      <span className="text-28 xl:text-36">{value}</span>
    </div>
  )
}

function VariantRow({ variant, selected, onSelect }) {
  return (
    <button type="button" onClick={onSelect} aria-pressed={selected} className="flex w-full items-center gap-12 text-left">
      <span className={`relative grid h-160 flex-1 place-items-center overflow-hidden bg-[#f9f9f9] p-12 xl:h-240 ${selected ? 'border border-black' : ''}`}>
        {selected && <span className="pointer-events-none absolute inset-0 border-2 border-white" />}
        <img src={variant.hero} alt="" className="max-h-full max-w-full object-contain" />
        {selected && (
          <svg viewBox="0 0 24 24" aria-hidden className="absolute top-9 right-8 size-32 text-black">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="flex w-160 shrink-0 flex-col gap-4 xl:w-280">
        <span className="text-20 xl:text-28">{variant.code}</span>
        <span className="text-14 font-light leading-tight xl:text-20">{variant.note}</span>
      </span>
    </button>
  )
}

export default function DetailHero({ family, detail, variant, onSelectVariant, onOpenSpec }) {
  const multi = detail.variants.length > 1
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa]">
      <div className="relative mx-auto flex max-w-1920 flex-col gap-24 px-16 py-40 xl:block xl:h-880 xl:px-0 xl:py-0">
        {/* Hero render (desktop: centred behind the copy) */}
        <img
          key={variant.id + '-hero'}
          src={variant.hero}
          alt={family.name}
          className="mx-auto h-260 w-full animate-[fade-in_0.3s_ease-out] object-contain xl:absolute xl:top-150 xl:left-260 xl:mx-0 xl:h-560 xl:w-720"
        />

        {/* Heading block */}
        <div className="flex flex-col gap-12 xl:absolute xl:top-40 xl:left-100 xl:w-949">
          <nav className="text-16 font-light text-grey xl:text-20" aria-label="Breadcrumb">
            <a href="/products" className="hover:text-primary">
              {detail.breadcrumb.split('/')[0]}
            </a>
            <span>{detail.breadcrumb.slice(detail.breadcrumb.indexOf('/'))}</span>
          </nav>
          <h1 className="text-40 leading-none xl:text-80 xl:leading-88">{family.name}</h1>
          <p key={variant.id + '-sub'} className="animate-[fade-in_0.3s_ease-out] text-18 font-light xl:text-32">
            {family.tagline} - {variant.label ?? variant.code} Variant
          </p>
          <div className="py-8 xl:py-40">
            <Button as="button" type="button" onClick={onOpenSpec} variant="outline" size="sm" className="cursor-pointer xl:hidden">
              View Specifications
            </Button>
            <Button as="button" type="button" onClick={onOpenSpec} variant="outline" size="hero" className="hidden cursor-pointer xl:inline-flex">
              View Specifications
            </Button>
          </div>
        </div>

        {/* Spec boxes */}
        <div key={variant.id + '-specs'} className="grid animate-[fade-in_0.3s_ease-out] grid-cols-3 gap-12 xl:absolute xl:top-468 xl:left-100 xl:flex xl:w-260 xl:flex-col xl:gap-16">
          {variant.specBoxes.map((s) => (
            <SpecBox key={s.label} label={s.label} value={s.value} />
          ))}
        </div>

        {/* Thumbnail gallery + View In Motion */}
        <div className="flex gap-6 xl:absolute xl:top-709 xl:left-405">
          {detail.gallery.map((src) => (
            <span key={src} className="grid h-90 w-120 place-items-center bg-[#f1f1f1] xl:h-102 xl:w-138">
              <img src={src} alt="" className="max-h-[86%] max-w-[86%] object-contain" />
            </span>
          ))}
          <span className="grid h-90 w-120 place-items-center bg-[#f1f1f1] xl:h-102 xl:w-138">
            <button type="button" className="text-14 capitalize underline underline-offset-2 hover:no-underline xl:text-18" title="Video coming soon">
              view in motion
            </button>
          </span>
        </div>

        {/* Choose the Variant */}
        {multi && (
          <div className="flex flex-col gap-24 bg-white p-16 xl:absolute xl:top-183 xl:left-1079 xl:w-740 xl:px-32 xl:py-24">
            <h2 className="text-24">Choose the Variant</h2>
            <div className="flex flex-col gap-24">
              {detail.variants.map((v) => (
                <VariantRow key={v.id} variant={v} selected={v.id === variant.id} onSelect={() => onSelectVariant(v.id)} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

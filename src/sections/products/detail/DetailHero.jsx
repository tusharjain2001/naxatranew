import Button from '../../../components/ui/Button'

// Breadcrumb -> title -> subtitle ("- <variant> Variant") -> VIEW SPECIFICATIONS -> 3 spec boxes,
// hero render + thumbnail gallery + View In Motion, and the Choose-The-Variant panel. Selecting a
// variant swaps the subtitle, spec boxes and hero render in place (the parent swaps the rest).
// The mobile (< xl) and desktop (xl) layouts are built separately — the 402 mobile artboard stacks
// title -> render+gallery -> horizontal variant thumbnails, with the spec figures in the technical grid.
function SpecBox({ label, value }) {
  return (
    <div className="flex flex-col gap-6 border-[0.5px] border-black/25 bg-white px-20 pt-10 pb-3">
      <span className="text-16 font-light capitalize xl:text-20">{label}</span>
      <span className="h-px w-full bg-black/25" />
      <span className="text-28 xl:text-36">{value}</span>
    </div>
  )
}

// Desktop variant row: thumbnail (left) + code/note (right), stacked vertically in the panel.
function VariantRow({ variant, selected, onSelect }) {
  return (
    <button type="button" onClick={onSelect} aria-pressed={selected} className="flex w-full items-center gap-12 text-left">
      <span className={`relative grid h-160 flex-1 place-items-center overflow-hidden bg-[#f9f9f9] p-12 xl:h-192 xl:w-307 xl:flex-none ${selected ? 'border border-black' : ''}`}>
        {selected && <span className="pointer-events-none absolute inset-0 border-2 border-white" />}
        <img src={variant.hero} alt="" className="absolute inset-0 size-full object-contain p-12" />
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

// Mobile variant card: thumbnail on top, code/note below, laid out as a horizontal row of equal columns.
function MobileVariantCard({ variant, selected, onSelect }) {
  return (
    <button type="button" onClick={onSelect} aria-pressed={selected} className="flex flex-1 flex-col gap-8 text-left">
      <span className={`relative grid h-106 place-items-center overflow-hidden rounded-[2px] bg-[#f9f9f9] ${selected ? 'border border-black' : ''}`}>
        {selected && <span className="pointer-events-none absolute inset-0 border-2 border-white" />}
        <img src={variant.hero} alt="" className="absolute inset-0 size-full object-contain p-8" />
        {selected && (
          <svg viewBox="0 0 24 24" aria-hidden className="absolute top-4 right-4 size-18 text-black">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 12l3 3 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="flex flex-col gap-2">
        <span className="text-15">{variant.code}</span>
        <span className="text-10 font-light leading-tight">{variant.note}</span>
      </span>
    </button>
  )
}

export default function DetailHero({ family, detail, variant, onSelectVariant, onOpenSpec }) {
  const multi = detail.variants.length > 1
  // The Choose-The-Variant panel shows whenever a page uses the RF-series layout — including RF 55, which
  // has a single variant but the artboard still shows the panel (one row). AF 58 / PT-500 hide it and put
  // the gallery top-right instead. Gallery placement follows the same switch.
  const showPanel = detail.showPanel ?? multi
  // The artboards place the panel at a fixed top per row count (its bottom stays ~812 in the 880 hero):
  // 3 rows -> top-63, 2 rows -> top-183, 1 row -> top-447 (verified on RF 22/33, RF 15/66, RF 55).
  const panelTop = { 1: 'xl:top-447', 2: 'xl:top-183', 3: 'xl:top-63' }[detail.variants.length] ?? 'xl:top-183'
  const galleryPos = showPanel ? 'xl:top-709 xl:left-405' : 'xl:top-337 xl:left-1647 xl:flex-col xl:gap-8'
  const tileSize = showPanel ? 'xl:h-102 xl:w-138' : 'xl:h-128 xl:w-172'
  const vimText = showPanel ? 'text-14 xl:text-18' : 'text-14 xl:absolute xl:top-1/2 xl:left-15 xl:-translate-y-1/2 xl:text-22'
  const subtitle = `${family.tagline} - ${!multi && variant.displayName ? variant.displayName : `${variant.label ?? variant.code} Variant`}`
  return (
    <section className="relative w-full overflow-hidden bg-[#fafafa]">
      {/* ---------- MOBILE (< xl) ---------- */}
      <div className="flex flex-col gap-16 px-16 py-24 xl:hidden">
        <div className="flex flex-col gap-8">
          <nav className="text-12 font-light text-grey" aria-label="Breadcrumb">
            <a href="/products" className="hover:text-primary">{detail.breadcrumb.split('/')[0]}</a>
            <span>{detail.breadcrumb.slice(detail.breadcrumb.indexOf('/'))}</span>
          </nav>
          <h1 className="text-40 leading-none">{family.name}</h1>
          <p key={variant.id + '-msub'} className="animate-[fade-in_0.3s_ease-out] text-14 font-light">{subtitle}</p>
          <div className="pt-8">
            <Button as="button" type="button" onClick={onOpenSpec} variant="outline" size="sm" className="cursor-pointer">
              View Specifications
            </Button>
          </div>
        </div>

        {/* render (right) + gallery column (left) */}
        <div className="flex items-center gap-12">
          <div className="flex w-84 shrink-0 flex-col gap-8">
            {detail.gallery.map((src, i) => (
              <span key={src + i} className="grid h-72 place-items-center bg-[#f1f1f1]">
                <img src={src} alt="" className="max-h-[80%] max-w-[80%] object-contain" />
              </span>
            ))}
            <span className="grid h-56 place-items-center bg-[#f1f1f1]">
              <button type="button" className="text-12 capitalize underline underline-offset-2 hover:no-underline" title="Video coming soon">
                view in motion
              </button>
            </span>
          </div>
          <img key={variant.id + '-mhero'} src={variant.hero} alt={family.name} className="h-300 min-w-0 flex-1 animate-[fade-in_0.3s_ease-out] object-contain" />
        </div>

        {showPanel && (
          <div className="flex flex-col gap-16 rounded bg-white p-12">
            <h2 className="text-16">Choose the Variant</h2>
            <div className="flex gap-12">
              {detail.variants.map((v) => (
                <MobileVariantCard key={v.id} variant={v} selected={v.id === variant.id} onSelect={() => onSelectVariant(v.id)} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ---------- DESKTOP (xl) ---------- */}
      <div className="relative mx-auto hidden max-w-1920 xl:block xl:h-880">
        {/* Hero render (centred behind the copy; per-detail position via detail.heroClass) */}
        <img
          key={variant.id + '-hero'}
          src={variant.hero}
          alt={family.name}
          className={`animate-[fade-in_0.3s_ease-out] object-contain xl:absolute ${detail.heroClass ?? 'xl:top-150 xl:left-260 xl:h-560 xl:w-720'}`}
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
          <p key={variant.id + '-sub'} className="animate-[fade-in_0.3s_ease-out] text-18 font-light xl:text-32">{subtitle}</p>
          <div className="py-8 xl:py-40">
            <Button as="button" type="button" onClick={onOpenSpec} variant="outline" size="hero" className="hidden cursor-pointer xl:inline-flex">
              View Specifications
            </Button>
          </div>
        </div>

        {/* Spec boxes */}
        <div key={variant.id + '-specs'} className="grid animate-[fade-in_0.3s_ease-out] gap-12 xl:absolute xl:top-468 xl:left-100 xl:flex xl:w-260 xl:flex-col xl:gap-16">
          {variant.specBoxes.map((s) => (
            <SpecBox key={s.label} label={s.label} value={s.value} />
          ))}
        </div>

        {/* Thumbnail gallery + View In Motion — placement per layout (see galleryPos above) */}
        <div className={`flex gap-6 xl:absolute ${galleryPos}`}>
          {detail.gallery.map((src, i) => (
            <span key={src + i} className={`grid place-items-center bg-[#f1f1f1] ${tileSize}`}>
              <img src={src} alt="" className="max-h-[86%] max-w-[86%] object-contain" />
            </span>
          ))}
          <span className={`relative grid place-items-center bg-[#f1f1f1] ${tileSize}`}>
            <button type="button" className={`capitalize underline underline-offset-2 hover:no-underline ${vimText}`} title="Video coming soon">
              view in motion
            </button>
          </span>
        </div>

        {/* Choose the Variant — fixed top per row count (see panelTop), matching each artboard. */}
        {showPanel && (
          <div className={`flex flex-col gap-24 bg-white xl:absolute xl:left-1079 xl:w-740 xl:px-32 xl:py-24 ${panelTop}`}>
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

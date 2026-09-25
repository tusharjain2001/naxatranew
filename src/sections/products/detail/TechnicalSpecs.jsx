import Button from '../../../components/ui/Button'

// Technical Sketch (line drawings) + the spec table, the datasheet CTA, then the "<variant> Motor
// Applications" carousel. All of it swaps when the parent changes the selected variant.
export default function TechnicalSpecs({ variant, sketch, mobile = {} }) {
  return (
    <section className="w-full bg-[#fafafa]">
      <div className={`mx-auto flex max-w-1920 flex-col gap-32 px-16 pt-60 xl:gap-46 xl:px-100 xl:py-100 ${mobile.techPad ?? 'pb-33'}`}>
        {/* Sketch + table */}
        <div key={variant.id + '-tech'} className="flex animate-[fade-in_0.3s_ease-out] flex-col gap-16 xl:flex-row xl:gap-26">
          <div className="flex flex-col gap-[calc(var(--spacing)*7.506)] border-[0.5px] border-black/25 bg-white p-12 xl:gap-24 xl:border xl:px-32 xl:py-24">
            <h2 className="text-16 leading-[calc(var(--spacing)*16.27)] tracking-[-0.02em] xl:text-40 xl:leading-[52px] xl:tracking-display">Technical Sketch</h2>
            <div className={`grid items-center ${mobile.sketch ?? 'h-188'} gap-8 opacity-75 xl:h-600 xl:w-1172 xl:opacity-100 ${sketch.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {sketch.map((src) => (
                <img key={src} src={src} alt="Technical drawing" className="h-full w-full object-contain opacity-90" />
              ))}
            </div>
          </div>

          {/* mobile: 3-col × 2-row grid (per the mobile artboard); desktop: full-height stacked column */}
          <div className="grid grid-cols-3 gap-x-[calc(var(--spacing)*7.956)] gap-y-8 xl:flex xl:flex-1 xl:flex-col xl:gap-15">
            {variant.table.map((row) => (
              <div key={row.label} className="flex h-[calc(var(--spacing)*54.363)] flex-col justify-center gap-[calc(var(--spacing)*2.652)] border-[0.5px] border-black/25 bg-white px-[calc(var(--spacing)*10.607)] pt-[calc(var(--spacing)*5.304)] xl:h-auto xl:flex-1 xl:gap-4 xl:px-20 xl:pt-10 xl:pb-3">
                <span className="text-[length:calc(var(--spacing)*10.41)] font-light capitalize max-xl:leading-[calc(var(--spacing)*10.607)] xl:text-20">
                  {row.mobileLabel ? (
                    <>
                      <span className="xl:hidden">{row.mobileLabel}</span>
                      <span className="hidden xl:inline">{row.label}</span>
                    </>
                  ) : (
                    row.label
                  )}
                </span>
                <span className="h-px w-full bg-black/25" />
                <span className="text-16 max-xl:leading-[calc(var(--spacing)*23.9)] xl:text-36">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Datasheet */}
        <div className="mx-auto flex max-w-676 flex-col items-center gap-16 text-center xl:gap-24">
          <p className="max-xl:w-294 max-xl:leading-28 text-20 xl:whitespace-nowrap xl:text-32">{variant.datasheetNote}</p>
          <Button as="a" href={variant.datasheet} download variant="primary" size="spec" className="xl:hidden">
            Download data-sheet
          </Button>
          <Button as="a" href={variant.datasheet} download variant="primary" size="hero" className="hidden xl:inline-flex">
            Download data-sheet
          </Button>
        </div>

        {/* Applications (Figma sits it ~99px below the datasheet, vs 46px above it) */}
        <div className={`mt-16 flex flex-col ${mobile.apps ?? 'min-h-230'} gap-24 border-[0.5px] border-black/10 bg-white px-8 py-12 xl:mt-53 xl:min-h-0 xl:border xl:border-black/25 xl:px-48 xl:py-36`}>
          <div className="flex items-center justify-between gap-10">
            <h3 className="text-24 leading-32 capitalize xl:text-36 xl:leading-[78px] xl:tracking-display">{variant.displayName ?? variant.code} Motor Applications</h3>
          </div>
          {/* mobile: 3-col grid (per the mobile artboard); desktop: horizontal carousel */}
          <div className="no-scrollbar grid grid-cols-3 gap-12 xl:flex xl:gap-16 xl:overflow-x-auto xl:pb-2">
            {variant.applications.map((app, i) => (
              <div key={app.label + i} className="flex w-full flex-col items-center gap-[calc(var(--spacing)*1.688)] xl:min-h-228 xl:w-182 xl:shrink-0 xl:gap-3">
                <span className="relative grid h-110 w-full place-items-center bg-[#f9f9f9] p-10 xl:h-182 xl:p-16">
                  <img src={app.image} alt="" className="max-h-full max-w-full object-contain max-xl:absolute max-xl:top-[10%] max-xl:left-[10%] max-xl:size-[80%]" />
                </span>
                <span className="text-12 leading-14 max-xl:text-center xl:text-22 xl:leading-[43px]">{app.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

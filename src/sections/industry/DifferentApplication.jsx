import { differentApplication } from '../../data/industry/shared'
import Button from '../../components/ui/Button'

// Full-bleed black banner. Mobile stacks the copy over the drive-train render.
// `imageClass` lets a page's render overhang its 500×320 slot (the 3-wheeler axle does).
// `mobileImage` swaps in a page's own phone render and `mobileButton` its phone button size.
export default function DifferentApplication({ image, imageClass, mobileImage, mobileButton = 'xs' }) {
  return (
    <section className="w-full pb-100 xl:py-100">
      <div className="mx-auto flex h-603 w-full max-w-1920 flex-col rounded-[calc(var(--spacing)*1.675)] bg-black py-54 pr-27 pl-26 xl:h-[calc(var(--spacing)*485.251)] xl:flex-row xl:items-center xl:rounded-8 xl:p-0">
        <div className="flex flex-col items-center gap-86 xl:ml-[calc(var(--spacing)*119.44)] xl:w-[calc(var(--spacing)*1681.116)] xl:flex-row xl:justify-center xl:gap-80">
          <div className="flex flex-col items-center gap-16 text-center text-white xl:items-start xl:gap-32 xl:text-start">
            <h2 className="flex h-89 w-349 items-center justify-center text-32 leading-38 capitalize xl:block xl:h-auto xl:w-auto xl:text-56 xl:leading-72 xl:whitespace-nowrap">
              {differentApplication.title}
            </h2>
            <p className="w-306 text-14 leading-18 xl:w-926 xl:text-28 xl:leading-36">{differentApplication.text}</p>
            <Button href="#spec" size={mobileButton} className="xl:hidden">
              {differentApplication.cta}
            </Button>
            <Button href="#spec" className="hidden xl:inline-flex">
              {differentApplication.cta}
            </Button>
          </div>
          <picture className="contents">
            {mobileImage && <source media="(max-width: 1279px)" srcSet={mobileImage} className="hidden" />}
            <img
              src={image}
              alt="Naxatra motor, controller and gearbox"
              loading="lazy"
              className={`shrink-0 ${imageClass ?? 'h-209 w-[calc(var(--spacing)*326.18)] xl:h-[calc(var(--spacing)*320.372)] xl:w-500'}`}
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

import { differentApplication } from '../../data/industry/shared'
import Button from '../../components/ui/Button'

// Full-bleed black banner. Mobile stacks the copy over the drive-train render.
// `imageClass` lets a page's render overhang its 500×320 slot (the 3-wheeler axle does).
// `mobileImage` swaps in a page's own phone render and `mobileButton` its phone button size; `mobileTop`
// adds space above the banner on the phone (the drone artboard leaves ~100px) and `mobileBottom` sets the
// space under it. `content` swaps in another banner's copy (the home page's two-line "Don't see your
// application here?" with no paragraph), `href` its button link and `spacing` the desktop padding.
export default function DifferentApplication({
  image,
  imageClass,
  mobileImage,
  mobileButton = 'xs',
  mobileTop = '',
  mobileBottom = 'pb-100',
  content = differentApplication,
  href = '#spec',
  spacing = 'xl:py-100',
  mobileHeight = 'h-603',
}) {
  const lines = Array.isArray(content.title)
  return (
    <section className={`w-full ${spacing} ${mobileBottom} ${mobileTop}`}>
      <div className={`mx-auto flex ${mobileHeight} w-full max-w-1920 flex-col rounded-[calc(var(--spacing)*1.675)] bg-black py-54 pr-27 pl-26 xl:h-[calc(var(--spacing)*485.251)] xl:flex-row xl:items-center xl:rounded-8 xl:p-0`}>
        <div className="flex flex-col items-center gap-86 xl:ml-[calc(var(--spacing)*119.44)] xl:w-[calc(var(--spacing)*1681.116)] xl:flex-row xl:justify-center xl:gap-80">
          <div className="flex flex-col items-center gap-16 text-center text-white xl:items-start xl:gap-32 xl:text-start">
            <h2
              className={`flex w-349 items-center justify-center text-32 leading-38 capitalize xl:block xl:h-auto xl:w-auto xl:text-56 xl:leading-72 xl:whitespace-nowrap ${lines ? '' : 'h-89'}`}
            >
              {lines ? (
                <>
                  {content.title[0]} <br />
                  {content.title[1]}
                </>
              ) : (
                content.title
              )}
            </h2>
            {content.text && <p className="w-306 text-14 leading-18 xl:w-926 xl:text-28 xl:leading-36">{content.text}</p>}
            <Button href={href} size={mobileButton} className="xl:hidden">
              {content.cta}
            </Button>
            <Button href={href} className="hidden xl:inline-flex">
              {content.cta}
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

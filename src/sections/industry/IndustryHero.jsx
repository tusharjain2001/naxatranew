import Button from '../../components/ui/Button'

// Two artboard treatments:
// - 'strip' (Cleaning): mobile shows a blue sky gradient with the photo along the bottom edge.
// - 'cover' (2W, 3W, Agriculture): the photo fills the hero on both artboards under blue washes.
// `hero.mobile` ({ image, wash, title, text }) gives a page its own phone photo, wash, headline and padding.
function Photo({ hero }) {
  if (hero.variant === 'cover')
    return (
      <>
        {hero.mobile && <img src={hero.mobile.image} alt={hero.alt} className="absolute inset-0 size-full object-cover xl:hidden" />}
        <div className={`absolute top-0 -right-53 h-717 w-1424 xl:top-auto ${hero.mobile ? 'hidden xl:block' : ''} xl:right-auto xl:left-1/2 xl:-translate-x-1/2 ${hero.frameClass ?? 'xl:-bottom-13 xl:h-967 xl:w-1920'}`}>
          <img src={hero.image} alt={hero.alt} className={`absolute inset-0 size-full object-cover ${hero.imageClass ?? ''}`} />
          <span className={`absolute inset-0 ${hero.washClass ?? 'bg-linear-to-b from-[rgba(11,78,183,0.4)] to-[rgba(24,99,218,0)] to-[63.603%]'}`} />
        </div>
        <span className={`absolute inset-0 bg-linear-to-b xl:hidden ${hero.mobile?.wash ?? 'from-[#2a689e] to-[rgba(24,99,218,0)] to-[82.724%]'}`} />
        {hero.angleClass !== false && (
          <span className={`absolute inset-x-0 top-0 hidden opacity-40 xl:block ${hero.angleClass ?? 'h-502 bg-[linear-gradient(197.34deg,#1863da_18.598%,rgba(24,99,218,0)_43.806%)]'}`} />
        )}
      </>
    )
  return (
    <>
      <div className="absolute bottom-0 left-[calc(50%-var(--spacing)*61.5)] h-297 w-593 -translate-x-1/2 overflow-hidden xl:right-0 xl:left-auto xl:h-963 xl:w-1921 xl:translate-x-0">
        <img src={hero.image} alt={hero.alt} className="absolute top-[-2.77%] left-[-3.09%] h-[111.25%] w-[104.65%]" />
        <span className="absolute inset-0 bg-linear-to-b from-[rgba(11,78,183,0.6)] to-[rgba(24,99,218,0)] to-[63.603%] xl:from-10% xl:to-[74.818%]" />
      </div>
      {hero.mobileStrip && <img src={hero.mobileStrip} alt="" className="absolute top-408 left-0 h-43 w-full object-cover xl:hidden" />}
    </>
  )
}

function Lines({ lines, className }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </span>
  )
}

export default function IndustryHero({ hero }) {
  const cover = hero.variant === 'cover'
  return (
    <section
      className={`relative h-717 w-full overflow-hidden xl:h-880 xl:bg-none ${
        cover ? 'bg-[#2a689e]' : 'bg-linear-to-b from-[#2973b3] to-[#2e75cc] to-[50.07%]'
      }`}
    >
      <div className="relative mx-auto h-full max-w-1920">
        <Photo hero={hero} />

        <div
          className={`relative flex flex-col items-start gap-18 px-16 text-white xl:absolute xl:w-1919 ${hero.stacked ? 'xl:flex-col xl:items-start xl:gap-112' : 'xl:flex-row xl:items-center xl:justify-between xl:gap-0'} xl:px-100 xl:py-0 ${
            hero.mobile?.text ?? (cover ? 'py-72' : 'py-80')
          } ${hero.textTop ?? 'xl:top-100'}`}
        >
          <h1 className={`text-36 leading-40 xl:text-88 xl:leading-96 ${hero.titleClass ?? 'xl:w-1097'}`}>
            {hero.mobile?.title ? (
              <>
                {Array.isArray(hero.mobile.title) ? (
                  <Lines lines={hero.mobile.title} className="normal-case xl:hidden" />
                ) : (
                  <span className="normal-case xl:hidden">{hero.mobile.title}</span>
                )}
                <Lines lines={hero.title} className="hidden xl:inline" />
              </>
            ) : (
              <>
                <Lines lines={hero.title} className={hero.desktopTitle ? 'xl:hidden' : ''} />
                {hero.desktopTitle && <Lines lines={hero.desktopTitle} className="hidden xl:inline" />}
              </>
            )}
          </h1>
          <p className={`text-20 leading-28 capitalize xl:text-24 xl:leading-32 ${hero.subtitleClass ?? 'xl:w-448'}`}>
            {hero.subtitle.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <Button href="#applications" variant="white" size="sm" className="xl:hidden">
            Learn more
          </Button>
        </div>
        <Button href="#applications" variant="white" size="hero" className="absolute top-717 left-100 hidden xl:inline-flex">
          Learn more
        </Button>
      </div>
    </section>
  )
}

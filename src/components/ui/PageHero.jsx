// Inner-page hero: a photo, a blue wash, then a cut-out layered above the wash so only the sky is tinted.
// `frame` places both photos (they share one box unless `foregroundFrame` is given) and `wash` sizes the
// gradient; `washStyle` swaps in a page's own gradient.
export default function PageHero({
  title,
  subtitle,
  background,
  foreground,
  foregroundAlt,
  frame,
  foregroundFrame = frame,
  wash = 'xl:inset-0',
  washStyle,
  textTop = 'xl:pt-86',
  rowClass = 'xl:gap-25',
  titleClass = 'xl:min-w-0 xl:flex-1',
  subtitleClass = 'xl:w-602 xl:shrink-0',
}) {
  return (
    <section className="relative h-460 w-full overflow-hidden xl:h-880">
      <div className="relative mx-auto h-full max-w-1920">
        <img src={background} alt="" className={`absolute object-cover ${frame}`} />
        <span
          className={`absolute inset-0 ${washStyle ? '' : 'bg-linear-to-b from-[#2a689e] to-[rgba(24,99,218,0)] to-[82.724%]'} ${wash}`}
          style={washStyle}
        />
        <img src={foreground} alt={foregroundAlt} className={`absolute object-cover ${foregroundFrame}`} />

        <div className={`relative flex flex-col gap-12 px-16 pt-40 text-white xl:flex-row xl:items-center xl:px-100 ${rowClass} ${textTop}`}>
          <h1 className={`text-32 leading-36 xl:text-88 xl:leading-96 ${titleClass}`}>
            {Array.isArray(title) ? (
              <>
                {title[0]}
                <br />
                {title[1]}
              </>
            ) : (
              title
            )}
          </h1>
          <p className={`text-16 leading-20 font-light capitalize xl:text-32 xl:leading-42 ${subtitleClass}`}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

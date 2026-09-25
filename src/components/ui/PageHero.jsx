// Inner-page hero: a photo, a blue wash, then a cut-out layered above the wash so only the sky is tinted.
// `frame` places both photos (they share one box unless `foregroundFrame` is given) and `wash` sizes the
// gradient; `washStyle` swaps in a page's own gradient.
// A page with its own phone artboard passes `mobile` ({ image, height, wash, text, title, subtitle }): the
// phone then shows that single composed photo, and the class strings replace the phone defaults.
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
  mobile,
}) {
  const desktopOnly = mobile ? 'hidden xl:block' : ''
  return (
    <section className={`relative w-full overflow-hidden xl:h-880 ${mobile?.height ?? 'h-460'}`}>
      <div className="relative mx-auto h-full max-w-1920">
        {mobile && <img src={mobile.image} alt={foregroundAlt} className="absolute inset-0 size-full object-cover xl:hidden" />}
        <img src={background} alt="" className={`absolute object-cover ${desktopOnly} ${frame}`} />
        <span
          className={`absolute inset-0 ${washStyle ? '' : 'bg-linear-to-b from-[#2a689e] to-[rgba(24,99,218,0)] to-[82.724%]'} ${mobile?.wash ?? ''} ${wash}`}
          style={washStyle}
        />
        <img src={foreground} alt={mobile ? '' : foregroundAlt} className={`absolute object-cover ${desktopOnly} ${foregroundFrame}`} />

        <div className={`relative flex flex-col px-16 text-white xl:flex-row xl:items-center xl:px-100 ${mobile?.text ?? 'gap-12 pt-40'} ${rowClass} ${textTop}`}>
          <h1 className={`xl:text-88 xl:leading-96 ${mobile?.title ?? 'text-32 leading-36'} ${titleClass}`}>
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
          <p className={`capitalize xl:text-32 xl:leading-42 xl:font-light ${mobile?.subtitle ?? 'text-16 leading-20 font-light'} ${subtitleClass}`}>{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

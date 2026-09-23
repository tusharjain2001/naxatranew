// Inner-page hero: a photo, a blue wash, then a cut-out layered above the wash so only the sky is tinted.
// `frame` places both photos (they share one box) and `wash` sizes the gradient, as on each artboard.
export default function PageHero({ title, subtitle, background, foreground, foregroundAlt, frame, wash = 'xl:inset-0', textTop = 'xl:pt-86' }) {
  return (
    <section className="relative h-460 w-full overflow-hidden xl:h-880">
      <div className="relative mx-auto h-full max-w-1920">
        <img src={background} alt="" className={`absolute object-cover ${frame}`} />
        <span className={`absolute inset-0 bg-linear-to-b from-[#2a689e] to-[rgba(24,99,218,0)] to-[82.724%] ${wash}`} />
        <img src={foreground} alt={foregroundAlt} className={`absolute object-cover ${frame}`} />

        <div className={`relative flex flex-col gap-12 px-16 pt-40 text-white xl:flex-row xl:items-center xl:gap-25 xl:px-100 ${textTop}`}>
          <h1 className="text-32 leading-36 xl:min-w-0 xl:flex-1 xl:text-88 xl:leading-96">
            {title[0]}
            <br />
            {title[1]}
          </h1>
          <p className="text-16 leading-20 font-light capitalize xl:w-602 xl:shrink-0 xl:text-32 xl:leading-42">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

import { aboutHero } from '../../data/about'

export default function AboutHero() {
  return (
    <section className="relative h-460 w-full overflow-hidden xl:h-880">
      {/* The sky photo is taller than the section and anchored to its bottom edge, as in Figma. */}
      <img
        src={aboutHero.background}
        alt=""
        className="absolute inset-x-0 bottom-0 h-[111.48%] w-full object-cover"
      />
      <span className="absolute inset-0 bg-linear-to-b from-[#2a689e] to-[rgba(24,99,218,0)] to-[82.724%]" />

      <div className="relative mx-auto h-full max-w-1920">
        <div className="relative z-10 flex flex-col gap-12 px-16 pt-40 text-white xl:gap-25 xl:px-100 xl:pt-100">
          <h1 className="text-32 leading-36 xl:w-1207 xl:text-88 xl:leading-96">{aboutHero.title}</h1>
          <p className="text-16 leading-20 capitalize xl:w-448 xl:text-32 xl:leading-32">{aboutHero.subtitle}</p>
        </div>

        <div className="absolute -right-60 bottom-0 h-250 w-486 overflow-hidden xl:right-auto xl:left-612 xl:h-628 xl:w-1220">
          <img
            src={aboutHero.team}
            alt="Naxatra Labs founders Abhilash Maurya, Piyush Verma and Arnav Biswas"
            className="absolute top-[-14.52%] left-[3.42%] h-[125.07%] w-[96.58%]"
          />
        </div>
      </div>
    </section>
  )
}

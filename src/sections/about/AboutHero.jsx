import { aboutHero } from '../../data/about'

export default function AboutHero() {
  return (
    <section className="relative h-717 w-full overflow-hidden xl:h-880">
      {/* Desktop: the sky photo is taller than the section and anchored to its bottom edge. Mobile has its own portrait crop. */}
      <picture>
        <source media="(max-width: 1279px)" srcSet={aboutHero.mobileBackground} />
        <img
          src={aboutHero.background}
          alt=""
          className="absolute inset-0 size-full object-cover xl:inset-auto xl:inset-x-0 xl:bottom-0 xl:h-[111.48%] xl:w-full"
        />
      </picture>
      <span className="absolute inset-0 bg-linear-to-b from-[#2a689e] to-[rgba(24,99,218,0)] to-[82.724%]" />
      {/* Mobile cut-out of the founders, layered above the wash like the other page heroes. */}
      <img
        src={aboutHero.mobileTeam}
        alt="Naxatra Labs founders Abhilash Maurya, Piyush Verma and Arnav Biswas"
        className="absolute inset-0 size-full object-cover xl:hidden"
      />

      <div className="relative mx-auto h-full max-w-1920">
        <div className="relative z-10 flex flex-col gap-18 px-16 pt-100 text-center text-white xl:gap-25 xl:px-100 xl:pt-100 xl:text-start">
          <h1 className="text-40 leading-48 xl:w-1207 xl:text-88 xl:leading-96">{aboutHero.title}</h1>
          <p className="text-20 leading-28 capitalize xl:w-448 xl:text-32 xl:leading-32">{aboutHero.subtitle}</p>
        </div>

        <div className="absolute bottom-0 hidden overflow-hidden xl:left-612 xl:block xl:h-628 xl:w-1220">
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

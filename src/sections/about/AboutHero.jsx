import { aboutHero } from '../../data/about'
import ScrollDown from '../../components/ui/ScrollDown'

export default function AboutHero() {
  return (
    <section className="relative h-717 w-full overflow-hidden xl:h-hero">
      {/* Mobile: its own portrait crop, the blue wash, then a cut-out of the founders above it. */}
      <img src={aboutHero.mobileBackground} alt="" className="absolute inset-0 size-full object-cover xl:hidden" />
      <span className="absolute inset-0 bg-linear-to-b from-[#2a689e] to-[rgba(24,99,218,0)] to-[82.724%] xl:hidden" />
      <img
        src={aboutHero.mobileTeam}
        alt="Naxatra Labs founders Abhilash Maurya, Piyush Verma and Arnav Biswas"
        className="absolute inset-0 size-full object-cover xl:hidden"
      />
      {/* Desktop: one flattened picture of the sky photo, the wash and the founders. */}
      <img
        src={aboutHero.image}
        alt="Naxatra Labs founders Abhilash Maurya, Piyush Verma and Arnav Biswas"
        fetchPriority="high"
        className="absolute inset-0 hidden size-full object-cover xl:block"
      />

      <div className="relative mx-auto h-full max-w-1920">
        <div className="relative z-10 flex flex-col gap-18 px-16 pt-100 text-center text-white xl:gap-25 xl:px-100 xl:pt-100 xl:text-start">
          <h1 className="text-40 leading-48 xl:w-1207 xl:text-88 xl:leading-96">{aboutHero.title}</h1>
          <p className="text-20 leading-28 capitalize xl:w-448 xl:text-32 xl:leading-32">{aboutHero.subtitle}</p>
        </div>
      </div>
      <ScrollDown />
    </section>
  )
}

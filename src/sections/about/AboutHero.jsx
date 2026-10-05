import { aboutHero } from '../../data/about'
import ScrollDown from '../../components/ui/ScrollDown'

export default function AboutHero() {
  return (
    <section className="relative h-717 w-full overflow-hidden xl:h-hero">
      {/* Mobile: the phone artboard's own crop of the same flattened team picture. */}
      <img
        src={aboutHero.mobileImage}
        alt="The Naxatra Labs team on the factory roof"
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover xl:hidden"
      />
      {/* Desktop: one flattened picture of the team photo, the wash and a cut-out of the team above it. */}
      <img
        src={aboutHero.image}
        alt="The Naxatra Labs team on the factory roof"
        fetchPriority="high"
        className="absolute inset-0 hidden size-full object-cover xl:block"
      />

      <div className="relative mx-auto h-full max-w-1920">
        <div className="relative z-10 flex flex-col gap-18 px-16 pt-80 text-center text-white xl:gap-25 xl:px-100 xl:pt-86 xl:text-start">
          <h1 className="text-40 leading-48 xl:w-1207 xl:text-88 xl:leading-96">{aboutHero.title}</h1>
          <p className="text-20 leading-28 capitalize xl:w-448 xl:text-32 xl:leading-32">{aboutHero.subtitle}</p>
        </div>
      </div>
      <ScrollDown className="top-626 xl:top-auto xl:bottom-42" />
    </section>
  )
}

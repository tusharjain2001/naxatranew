import Button from '../../components/ui/Button'
import ScrollDown from '../../components/ui/ScrollDown'

// Lakeshore photo hero (node 15421:59840). Desktop: the title and button on the left, the bold line and
// copy right-aligned beside them. The phone stacks everything over its own crop on a blue sky.
// The photo files already carry Figma's dark corner wash.
export default function OthersHero({ hero }) {
  return (
    <section className="relative h-717 w-full overflow-hidden bg-[#27517b] xl:h-hero">
      <picture>
        <source media="(max-width: 1279px)" srcSet={hero.mobileImage} />
        <img src={hero.image} alt={hero.alt} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
      </picture>
      <div className="relative mx-auto flex max-w-1920 flex-col items-start gap-18 px-16 py-60 text-white xl:flex-row xl:items-center xl:gap-100 xl:p-100">
        <div className="contents xl:flex xl:flex-col xl:items-start xl:gap-25">
          <h1 className="text-36 leading-40 capitalize xl:w-844 xl:text-88 xl:leading-96">{hero.title}</h1>
          <Button href="/contact" variant="white" size="hero" className="hidden h-60 xl:inline-flex">
            Connect now
          </Button>
        </div>
        <div className="flex flex-col gap-24 text-20 leading-24 capitalize xl:flex-1 xl:gap-25 xl:text-right xl:text-28 xl:leading-40 xl:normal-case">
          <p className="font-bold">{hero.heading}</p>
          <p>{hero.text}</p>
        </div>
        <Button href="/contact" variant="white" size="heroM" className="xl:hidden">
          Connect now
        </Button>
      </div>
      <ScrollDown />
    </section>
  )
}

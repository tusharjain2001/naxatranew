import Button from '../../components/ui/Button'
import ScrollDown from '../../components/ui/ScrollDown'

// Black hero: the headline at the top left over the lit drone, the line and button lower down at 576 and a
// "scroll down" cue at the foot. The desktop photo is the 1920×982 artboard, pinned to the top (the 880 hero
// trims its foot). The phone artboard has its own crop with the drone under the copy.
export default function DroneHero({ hero }) {
  return (
    <section className="relative h-717 w-full overflow-hidden bg-black xl:h-hero">
      <picture>
        <source media="(max-width: 1279px)" srcSet={hero.mobileImage} />
        <img src={hero.image} alt={hero.alt} fetchPriority="high" className="absolute inset-0 size-full object-cover xl:object-top" />
      </picture>
      <div className="relative mx-auto flex h-full max-w-1920 flex-col items-start gap-24 px-20 pt-60 text-white xl:h-auto xl:justify-between xl:gap-0 xl:px-100 xl:pt-100">
        <h1 className="text-36 leading-36 xl:h-191 xl:text-88 xl:leading-96 xl:tracking-display">
          {hero.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div className="flex flex-col items-start gap-24 xl:absolute xl:top-576 xl:left-100 xl:gap-40">
          <p className="text-20 leading-28 font-light xl:w-570 xl:capitalize xl:text-24 xl:leading-32">{hero.subtitle}</p>
          <Button href="#applications" variant="white" size="spec" className="xl:hidden">
            Learn more
          </Button>
          <Button href="#applications" variant="white" size="hero" className="hidden h-60 xl:inline-flex">
            Learn more
          </Button>
        </div>
      </div>
      <ScrollDown />
    </section>
  )
}

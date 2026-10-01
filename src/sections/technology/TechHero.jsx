import Button from '../../components/ui/Button'
import ScrollDown from '../../components/ui/ScrollDown'

// Photo hero; the phone crops to the right-hand side of the same photo (the utility vehicle and drone). On
// desktop the photo is 1936×989, overhanging the 880 frame by 109 at the top, with a "scroll down" cue below.
export default function TechHero({ hero }) {
  return (
    <section className="relative h-717 w-full overflow-hidden bg-[#1b2a3a] xl:h-hero">
      <img
        src={hero.image}
        alt={hero.alt}
        fetchPriority="high"
        className="absolute top-0 -left-967 h-full w-1404 max-w-none object-cover xl:top-auto xl:bottom-0 xl:left-1/2 xl:hx-989 xl:w-1936 xl:-translate-x-1/2"
      />
      <div className="relative mx-auto flex max-w-1920 flex-col items-start gap-24 px-20 pt-60 text-white xl:gap-48 xl:px-100 xl:pt-100">
        <div className="flex flex-col gap-24 xl:gap-25">
          <h1 className="text-36 leading-36 xl:w-1207 xl:text-88 xl:leading-96 xl:capitalize">{hero.title}</h1>
          <p className="w-285 text-20 leading-28 font-light xl:w-736 xl:text-32 xl:leading-32 xl:font-normal xl:capitalize">{hero.subtitle}</p>
        </div>
        <Button href="/contact" variant="white" size="spec" className="xl:hidden">
          Connect now
        </Button>
        <Button href="/contact" variant="white" size="hero" className="hidden h-60 xl:inline-flex">
          Connect now
        </Button>
      </div>
      <ScrollDown />
    </section>
  )
}

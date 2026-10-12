import { mediaKitHero, mediaKitPdf } from '../../data/mediaKit'
import Button from '../../components/ui/Button'

// Black hero: title, line and Download Kit on the left, the glass render bleeding off the right edge
// (Figma 15886:9492). Phone (15886:9387): the copy at the top, the render along the foot.
export default function MediaKitHero() {
  return (
    <section className="relative h-717 w-full overflow-hidden bg-black xl:h-hero">
      <div className="relative mx-auto h-full max-w-1920">
        <img
          src={mediaKitHero.mobileImage}
          alt=""
          fetchPriority="high"
          className="absolute bottom-0 left-0 h-[calc(var(--spacing)*470.5)] w-full object-cover object-top xl:hidden"
        />
        <img
          src={mediaKitHero.image}
          alt=""
          fetchPriority="high"
          className="absolute top-0 left-786 hidden h-full w-1134 object-cover object-left-top xl:block"
        />

        <div className="relative flex flex-col items-start gap-24 px-20 pt-60 text-white xl:absolute xl:top-[calc(50%-var(--spacing)*45.5)] xl:left-0 xl:w-full xl:-translate-y-1/2 xl:gap-48 xl:px-100 xl:pt-0">
          <div className="flex flex-col gap-24 xl:gap-25">
            <h1 className="text-40 leading-40 capitalize xl:text-88 xl:leading-96">
              {mediaKitHero.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="w-285 text-20 leading-24 font-light xl:w-619 xl:text-32 xl:leading-32 xl:font-normal">{mediaKitHero.subtitle}</p>
          </div>
          <Button href={mediaKitPdf.href} download={mediaKitPdf.filename} variant="white" size="spec" className="xl:hidden">
            {mediaKitHero.cta}
          </Button>
          <Button href={mediaKitPdf.href} download={mediaKitPdf.filename} variant="white" size="hero" className="hidden h-60 xl:inline-flex">
            {mediaKitHero.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

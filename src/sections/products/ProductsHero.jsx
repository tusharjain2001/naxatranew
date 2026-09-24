import Button from '../../components/ui/Button'

// Products landing hero (node 14051-1428): near-black stage, a large motor render bleeding off the right,
// title + subtitle at the left, and two CTAs. Desktop is placed to the 1920 artboard; mobile stacks.
const heroMotor = '/assets/products/listing/hero-motor.png'

export default function ProductsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#040403]">
      <div className="relative mx-auto h-620 max-w-1920 xl:h-880">
        <img
          src={heroMotor}
          alt="Antarix radial-flux motor"
          className="pointer-events-none absolute -right-40 top-30 h-460 w-620 object-cover xl:top-[-339px] xl:right-auto xl:left-890 xl:h-1219 xl:w-1499"
        />
        {/* Keep the left-hand copy legible over the render on small screens. */}
        <span className="absolute inset-0 bg-linear-to-r from-[#040403] from-30% to-[rgba(4,4,3,0)] xl:hidden" />

        <div className="relative z-10 flex flex-col gap-18 px-16 pt-64 text-white xl:contents">
          <h1 className="text-36 leading-40 xl:absolute xl:top-138 xl:left-100 xl:w-1097 xl:text-88 xl:leading-96">
            Motors for a more
            <br />
            capable world
          </h1>
          <p className="max-w-360 text-16 leading-24 font-light capitalize xl:absolute xl:top-624 xl:left-100 xl:w-427 xl:max-w-none xl:-translate-y-1/2 xl:text-24 xl:leading-32">
            High performance motors designed and developed in india for mobility, industrial and next-generation applications.
          </p>
          <div className="flex flex-wrap gap-12 xl:absolute xl:top-717 xl:left-100 xl:gap-16">
            <Button href="#motor-listing" variant="white" size="sm" className="xl:hidden">
              Browse all products
            </Button>
            <Button href="#find-by-applications" variant="outlineWhite" size="sm" className="xl:hidden">
              Find by application
            </Button>
            <Button href="#motor-listing" variant="white" size="hero" className="hidden xl:inline-flex">
              Browse all products
            </Button>
            <Button href="#find-by-applications" variant="outlineWhite" size="hero" className="hidden xl:inline-flex">
              Find by application
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

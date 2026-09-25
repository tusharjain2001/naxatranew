import Button from '../../components/ui/Button'

// Products landing hero (node 14051-1428): near-black stage, a large motor render bleeding off the right,
// title + subtitle at the left, and two CTAs. Desktop is placed to the 1920 artboard; mobile stacks.
const heroMotor = '/assets/products/listing/hero-motor.png'

export default function ProductsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#040403]">
      <div className="relative mx-auto h-717 max-w-1920 xl:h-880">
        <img
          src={heroMotor}
          alt="Antarix radial-flux motor"
          className="pointer-events-none absolute top-114 left-77 h-412 w-506 max-w-none object-cover xl:top-[-339px] xl:left-890 xl:h-1219 xl:w-1499"
        />

        {/* Phone (402 artboard): title at the top, the render in the middle, copy and buttons at the foot. */}
        <div className="relative z-10 flex h-full flex-col justify-between px-20 pt-60 pb-48 text-white xl:contents">
          <h1 className="text-36 leading-36 xl:absolute xl:top-138 xl:left-100 xl:w-1097 xl:text-88 xl:leading-96">
            Motors Engineered For Every Application.
          </h1>
          <div className="flex flex-col gap-24 xl:contents">
            <p className="text-20 leading-28 font-light xl:absolute xl:top-578 xl:left-100 xl:w-450 xl:-translate-y-1/2 xl:text-24 xl:leading-32 xl:capitalize">
              High performance motors designed and developed in india for mobility, industrial and next-generation applications.
            </p>
            <div className="flex gap-8 xl:absolute xl:top-661 xl:left-100 xl:gap-24">
              <Button href="#motor-listing" variant="white" size="spec" className="xl:hidden">
                Browse all products
              </Button>
              <Button href="#find-by-applications" variant="outlineWhite" size="spec" className="border-[0.5px]! xl:hidden">
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
      </div>
    </section>
  )
}

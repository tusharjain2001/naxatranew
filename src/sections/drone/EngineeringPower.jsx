// "Engineering the power / that move us." over the motor photo (its blurred trail baked into the image).
export default function EngineeringPower({ data }) {
  return (
    <section className="relative h-453 w-full overflow-hidden xl:h-960">
      <picture>
        <source media="(max-width: 1279px)" srcSet={data.mobileImage} />
        <img src={data.image} alt={data.alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
      </picture>
      <div className="relative mx-auto h-full max-w-1920 capitalize">
        <h2 className="absolute top-43 left-14 w-372 text-24 leading-[calc(var(--spacing)*31.304)] xl:top-105 xl:left-128 xl:w-592 xl:text-88 xl:leading-96">
          Engineering
          <br />
          <span className="text-[#767676]">the power</span>
        </h2>
        <p className="absolute top-371 right-14 w-[calc(var(--spacing)*140)] text-right text-24 leading-[calc(var(--spacing)*31.304)] text-[#767676] xl:top-667 xl:right-131 xl:w-386 xl:text-88 xl:leading-96">
          That Move Us.
        </p>
      </div>
    </section>
  )
}

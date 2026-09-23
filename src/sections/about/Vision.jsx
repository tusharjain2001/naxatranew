import { vision } from '../../data/about'

export default function Vision() {
  return (
    <section className="w-full py-100 xl:py-[calc(var(--spacing)*96.5)]">
      <div className="relative h-601 w-full overflow-hidden xl:h-531">
        <picture>
          <source media="(max-width: 1279px)" srcSet={vision.mobileImage} />
          <img
            src={vision.image}
            alt="Electric scooter, auto-rickshaw and charger on a waterfront terrace overlooking a city"
            loading="lazy"
            className="absolute top-[-13.83%] left-0 h-[118.85%] w-full object-cover xl:top-0 xl:h-full xl:object-center"
          />
        </picture>
        <div className="relative mx-auto h-full max-w-1920">
          <div className="absolute top-[calc(var(--spacing)*96.5)] left-40 flex w-320 flex-col gap-10 text-white xl:top-106 xl:left-100 xl:w-1506 xl:flex-row xl:items-start xl:gap-0 xl:p-0">
            <h2 className="text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:w-572 xl:shrink-0 xl:text-64 xl:leading-80">
              {vision.title}
            </h2>
            <p className="text-14 leading-18 xl:min-w-0 xl:flex-1 xl:text-justify xl:text-24 xl:leading-[calc(var(--spacing)*33.74)]">
              {vision.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

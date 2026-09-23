import { vision } from '../../data/about'

export default function Vision() {
  return (
    <section className="w-full py-40 xl:py-[calc(var(--spacing)*96.5)]">
      <div className="relative h-400 w-full overflow-hidden xl:h-531">
        <img
          src={vision.image}
          alt="Electric scooter, auto-rickshaw and charger on a waterfront terrace overlooking a city"
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-[78%_50%] xl:object-center"
        />
        <div className="relative mx-auto h-full max-w-1920">
          <div className="flex flex-col gap-12 px-16 pt-32 text-white xl:absolute xl:top-106 xl:left-100 xl:w-1506 xl:flex-row xl:items-start xl:gap-0 xl:p-0">
            <h2 className="text-32 leading-36 tracking-display capitalize xl:w-572 xl:shrink-0 xl:text-64 xl:leading-80">
              {vision.title}
            </h2>
            <p className="text-14 leading-20 xl:min-w-0 xl:flex-1 xl:text-justify xl:text-24 xl:leading-[calc(var(--spacing)*33.74)]">
              {vision.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

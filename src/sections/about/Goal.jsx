import { goal } from '../../data/about'

export default function Goal() {
  return (
    <section className="mx-auto w-full max-w-1920 px-16 py-100 xl:h-960 xl:px-100 xl:pt-99 xl:pb-0">
      <div className="relative h-469 overflow-hidden rounded-12 xl:h-769 xl:rounded-10-5">
        {/* Desktop frames the photo 123px above the card and lets the card crop it. Mobile has its own portrait crop. */}
        <div className="absolute inset-0 xl:inset-auto xl:-top-123 xl:left-0 xl:h-1054 xl:w-full">
          <picture>
            <source media="(max-width: 1279px)" srcSet={goal.mobileImage} />
            <img
              src={goal.image}
              alt="Electric vehicles, a drone and a robot arm at a green charging hub in front of a city skyline"
              loading="lazy"
              className="absolute top-[-31.79%] left-0 h-[140.56%] w-full object-cover xl:top-[-1.3%] xl:left-[-5.89%] xl:h-[102.61%] xl:w-[111.77%] xl:object-fill xl:object-[30%_50%]"
            />
          </picture>
          <span className="absolute inset-0 hidden bg-linear-to-b from-[rgba(24,99,218,0.5)] to-[rgba(24,99,218,0)] to-[68.156%] xl:block" />
        </div>

        <div className="absolute top-61 left-33 flex w-304 flex-col gap-10 text-center text-white xl:top-79 xl:left-83 xl:w-1550 xl:flex-row xl:items-start xl:justify-between xl:gap-12 xl:p-0 xl:text-start">
          <h2 className="text-32 leading-36 tracking-display capitalize xl:w-821 xl:text-64 xl:leading-72">{goal.title}</h2>
          <p className="flex h-47 flex-col justify-center text-14 leading-17 xl:h-[calc(var(--spacing)*90.315)] xl:w-[calc(var(--spacing)*415.624)] xl:text-21 xl:leading-[calc(var(--spacing)*29.585)]">
            <span>
              {goal.text[0]}
              <br />
              {goal.text[1]}
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

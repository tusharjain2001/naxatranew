import { goal } from '../../data/about'

export default function Goal() {
  return (
    <section className="mx-auto w-full max-w-1920 px-16 py-40 xl:h-960 xl:px-100 xl:pt-99 xl:pb-0">
      <div className="relative h-420 overflow-hidden rounded-10-5 xl:h-769">
        {/* Figma frames the photo 123px above the card and lets the card crop it. */}
        <div className="absolute inset-0 xl:inset-auto xl:-top-123 xl:left-0 xl:h-1054 xl:w-full">
          <img
            src={goal.image}
            alt="Electric vehicles, a drone and a robot arm at a green charging hub in front of a city skyline"
            loading="lazy"
            className="absolute top-0 left-0 size-full object-cover object-[30%_50%] xl:top-[-1.3%] xl:left-[-5.89%] xl:h-[102.61%] xl:w-[111.77%] xl:object-fill"
          />
          <span className="absolute inset-0 bg-linear-to-b from-[rgba(24,99,218,0.5)] to-[rgba(24,99,218,0)] to-[68.156%]" />
        </div>

        <div className="relative flex flex-col gap-12 p-20 text-white xl:absolute xl:top-79 xl:left-83 xl:w-1550 xl:flex-row xl:items-start xl:justify-between xl:p-0">
          <h2 className="text-28 leading-32 tracking-display capitalize xl:w-821 xl:text-64 xl:leading-72">{goal.title}</h2>
          <p className="text-12 leading-16 xl:flex xl:h-[calc(var(--spacing)*90.315)] xl:w-[calc(var(--spacing)*415.624)] xl:flex-col xl:justify-center xl:text-21 xl:leading-[calc(var(--spacing)*29.585)]">
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

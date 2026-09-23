import { commitment } from '../data/home'

export default function Commitment() {
  return (
    <section id="about" className="mx-auto w-full max-w-1920 py-100 xl:px-100 xl:pt-144 xl:pb-0">
      <div className="flex flex-col gap-16 px-16 pb-60 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:p-0">
        <div className="flex flex-col gap-16 xl:w-1040 xl:gap-32">
          <h2 className="text-32 leading-36 tracking-display capitalize xl:text-72 xl:leading-80">{commitment.title}</h2>
          <p className="w-334 text-14 leading-16 font-light text-grey-dark xl:flex xl:capitalize xl:h-87 xl:w-800 xl:items-center xl:text-24 xl:leading-32 xl:font-normal xl:text-grey">
            {commitment.body}
          </p>
          <p className="text-12 leading-24 tracking-display uppercase xl:flex xl:h-75 xl:items-center xl:text-24 xl:leading-normal xl:tracking-normal">
            <span>
              Find us and our manufacturing unit in <span className="text-primary">{commitment.location}</span>
            </span>
          </p>
        </div>
        <div className="relative h-335 w-full overflow-hidden rounded-8 xl:h-466 xl:w-514 xl:shrink-0">
          <img
            src={commitment.image}
            alt="Cutaway render of a Naxatra electric motor"
            loading="lazy"
            className="absolute top-[-16.25%] left-0 h-[137.78%] w-full"
          />
        </div>
      </div>

      <dl className="flex flex-wrap gap-20 px-16 capitalize xl:mt-231 xl:flex-nowrap xl:justify-between xl:gap-0 xl:px-0">
        {commitment.stats.map((stat) => (
          <div
            key={stat.value}
            className="flex h-70 w-172 flex-col justify-between xl:h-140 xl:w-433"
          >
            <dd className="order-first flex h-49 shrink-0 items-center text-44 leading-normal xl:h-98 xl:text-100">{stat.value}</dd>
            <dt className="text-12 leading-16 text-grey xl:text-28 xl:leading-36">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  )
}

// "Our key advantages" block from the 2-wheeler and 3-wheeler artboards.
export default function Advantages({ data }) {
  return (
    <section className={`flex w-full flex-col items-center py-56 xl:py-100 ${data.section ?? ''}`}>
      <div className="flex w-full flex-col gap-60 px-16 xl:w-1776 xl:gap-120 xl:px-0">
        <div className="flex flex-col gap-60 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
          <div className="flex flex-col gap-10 capitalize xl:gap-32">
            <h2 className="text-32 leading-36 tracking-display xl:w-886 xl:text-72 xl:leading-88 xl:tracking-normal">{data.title}</h2>
            <p className="text-14 leading-24 text-grey xl:w-540 xl:text-32 xl:leading-48 xl:font-light xl:text-black">{data.subtitle}</p>
          </div>
          <div className={`relative aspect-[699/466] w-full shrink-0 overflow-hidden rounded-8 xl:h-466 xl:w-699 ${data.imageBg ?? ''}`}>
            <img src={data.image} alt={data.imageAlt} loading="lazy" className={`absolute inset-0 size-full ${data.imageFit ?? 'object-cover'}`} />
          </div>
        </div>
        {/* Phone: a 2×2 grid filled column by column (100px first column), as on the artboard. */}
        <dl className="grid grid-flow-col grid-cols-[calc(var(--spacing)*100)_1fr] grid-rows-2 gap-x-60 gap-y-48 capitalize xl:mx-auto xl:flex xl:items-center xl:gap-44">
          {data.stats.map((stat) => (
            <div key={stat.value} className={`flex flex-col xl:gap-8 ${stat.width}`}>
              <dd className={`order-first flex h-27 items-center text-24 leading-none whitespace-nowrap xl:h-56 ${stat.big ? 'xl:text-56' : 'xl:text-48'}`}>{stat.value}</dd>
              <dt className="text-10 leading-21 text-grey xl:text-24 xl:leading-28">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

// "Our key advantages" block from the 2-wheeler and 3-wheeler artboards.
export default function Advantages({ data }) {
  return (
    <section className={`flex w-full flex-col items-center py-100 xl:py-200 ${data.section ?? ''}`}>
      <div className="flex w-full flex-col gap-40 px-16 xl:w-1776 xl:gap-120 xl:px-0">
        <div className="flex flex-col gap-32 xl:flex-row xl:items-center xl:justify-between xl:gap-0">
          <div className="flex flex-col gap-16 capitalize xl:gap-32">
            <h2 className="text-32 leading-36 tracking-display xl:w-886 xl:text-72 xl:leading-88 xl:tracking-normal">{data.title}</h2>
            <p className="text-16 leading-24 font-light xl:w-540 xl:text-32 xl:leading-48">{data.subtitle}</p>
          </div>
          <div className={`relative aspect-[699/466] w-full shrink-0 overflow-hidden rounded-8 xl:h-466 xl:w-699 ${data.imageBg ?? ''}`}>
            <img src={data.image} alt={data.imageAlt} loading="lazy" className={`absolute inset-0 size-full ${data.imageFit ?? 'object-cover'}`} />
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-x-16 gap-y-24 capitalize xl:mx-auto xl:flex xl:items-center xl:gap-44">
          {data.stats.map((stat) => (
            <div key={stat.value} className={`flex flex-col gap-4 xl:gap-8 ${stat.width}`}>
              <dd className={`order-first flex min-h-32 items-center leading-none xl:h-56 ${stat.big ? 'text-32 xl:text-56' : 'text-28 xl:text-48'}`}>{stat.value}</dd>
              <dt className="text-14 leading-18 text-grey xl:text-24 xl:leading-28">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

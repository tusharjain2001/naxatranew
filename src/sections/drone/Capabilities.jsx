// "The engineering behind the thrust": six capabilities, three to a row on desktop and two on the phone.
// Icons are sized in `em` (1 design px on desktop, 0.351 on the phone) in a box that aligns their feet.
export default function Capabilities({ data }) {
  return (
    <section className="flex w-full flex-col gap-40 px-14 pt-60 pb-56 xl:gap-0 xl:px-0 xl:pt-99 xl:pb-155">
      <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between xl:pr-81 xl:pl-105">
        <h2 className="w-221 text-24 leading-28 capitalize xl:w-689 xl:text-64 xl:leading-72">{data.title}</h2>
        <p className="text-12 leading-15 text-grey xl:w-558 xl:text-24 xl:leading-32">{data.text}</p>
      </div>
      <span aria-hidden className="-mx-14 h-px bg-grey xl:mx-0 xl:mt-76 xl:mb-99" />
      <ul className="grid grid-cols-2 gap-x-[calc(var(--spacing)*16.76)] gap-y-24 xl:grid-cols-[repeat(3,calc(var(--spacing)*416))] xl:justify-between xl:gap-x-0 xl:gap-y-143 xl:px-100">
        {data.items.map((item) => (
          <li key={item.title} className="flex flex-col gap-[calc(var(--spacing)*9.177)] xl:gap-24">
            <span className="flex h-[60em] items-end text-[length:calc(var(--spacing)*0.351)] xl:text-[length:var(--spacing)]">
              <img src={item.icon} alt="" className={item.size} />
            </span>
            <div className="flex flex-col gap-[calc(var(--spacing)*5.648)] border-t-[calc(var(--spacing)*0.706)] border-grey py-[calc(var(--spacing)*8.471)] xl:gap-25 xl:border-t-[calc(var(--spacing)*3.976)] xl:pt-24 xl:pb-0">
              <h3 className="text-[length:calc(var(--spacing)*16.943)] leading-[calc(var(--spacing)*26.965)] capitalize xl:text-32 xl:leading-[calc(var(--spacing)*38.196)]">
                {item.title}
              </h3>
              <p className="text-[length:calc(var(--spacing)*11.295)] leading-[calc(var(--spacing)*18.355)] font-light text-grey xl:w-404 xl:text-24 xl:leading-32">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

// "Quality systems you can audit": six certification cards, two columns on desktop.
export default function Quality({ data }) {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-60 py-56 xl:gap-100 xl:p-100">
      <div className="mx-auto flex w-290 flex-col items-center gap-10 text-center xl:w-full xl:gap-16 xl:px-100">
        <p className="text-14 leading-35 font-light tracking-display uppercase xl:text-20 xl:leading-28 xl:tracking-normal xl:text-grey-dark">{data.eyebrow}</p>
        <h2 className="text-32 leading-40 tracking-display capitalize xl:text-64 xl:leading-80">{data.title}</h2>
      </div>
      <ul className="flex flex-col gap-16 px-16 xl:grid xl:h-633 xl:grid-cols-2 xl:grid-rows-3 xl:gap-36 xl:px-0">
        {data.items.map((item) => (
          <li key={item.title} className="flex items-center gap-16 bg-[rgba(240,240,240,0.5)] px-12 py-16 xl:gap-30 xl:rounded-8 xl:bg-panel xl:px-30 xl:py-20">
            <span className="flex h-44 w-62 shrink-0 items-center justify-center xl:h-auto xl:w-auto">
              <img src={item.logo} alt="" loading="lazy" className={`max-h-full max-w-full object-contain xl:max-h-none xl:max-w-none ${item.logoClass}`} />
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-2 xl:gap-10">
              <h3 className="flex h-24 items-center text-16 leading-25 uppercase xl:h-auto xl:text-28 xl:leading-31">{item.title}</h3>
              <p className="text-12 leading-16 text-grey xl:text-20 xl:leading-26">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

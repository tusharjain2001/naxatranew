// Six platform cards, two columns on desktop. Cards are sized in `em`: 1 design px on desktop and
// 0.438 on the phone, where they stack in one column.
export default function WhyNaxatra({ data }) {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-48 px-16 py-56 xl:gap-100 xl:px-100 xl:py-100">
      <div className="flex flex-col gap-10 xl:w-1036 xl:gap-16">
        <p className="text-16 leading-28 font-light text-grey-dark uppercase xl:text-20">{data.eyebrow}</p>
        <h2 className="text-32 leading-40 tracking-display capitalize xl:text-64 xl:leading-68">{data.title}</h2>
      </div>
      <ul data-reveal="left" className="grid gap-[14.012px] text-[length:calc(var(--spacing)*0.4379)] xl:grid-cols-2 xl:gap-32 xl:text-[length:var(--spacing)]">
        {data.items.map((item, i) => (
          <li key={i} className="flex h-[210em] items-center gap-[40em] bg-panel p-[32em]">
            {item.tile ? (
              <span className="flex size-[80em] shrink-0 items-center justify-center rounded-[4em] bg-white">
                <img src={item.icon} alt="" className={item.iconClass} />
              </span>
            ) : (
              <img src={item.icon} alt="" className="size-[80em] shrink-0" />
            )}
            <div className="flex min-w-0 flex-1 flex-col">
              <h3 className="flex h-[1.375em] items-center text-[length:32em] leading-[0.83] text-black capitalize">{item.title}</h3>
              <p className={`text-[length:24em] leading-[1.406] text-grey ${item.textClass ?? ''}`}>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

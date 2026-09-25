// Spec cards. Desktop lays them three to a row (`cols` overrides it); mobile is one column.
export default function Features({ data }) {
  return (
    <section className={`flex w-full flex-col gap-60 pb-100 xl:gap-100 xl:py-200 ${data.section ?? ''}`}>
      <h2 className={`px-16 capitalize tracking-display xl:px-100 xl:tracking-normal ${data.titleClass ?? 'xl:w-1368'}`}>
        <span className="block text-32 leading-35 xl:text-72 xl:leading-88">{data.title[0]}</span>
        {data.title[1] && <span className="block text-24 leading-35 xl:text-48 xl:leading-57">{data.title[1]}</span>}
      </h2>
      <ul className={`grid gap-16 px-16 xl:gap-32 xl:px-100 ${data.cols ?? 'xl:grid-cols-3'}`}>
        {data.items.map((item) => (
          <li
            key={item.title}
            className={`flex items-center gap-16 ${item.mobileLast ? 'order-last xl:order-none' : ''} border-[calc(var(--spacing)*0.95)] border-black/15 bg-[rgba(240,240,240,0.5)] p-12 xl:items-start xl:gap-24 xl:p-32 ${data.bordered ? 'xl:border' : 'xl:border-0'}`}
          >
            <picture className="contents">
              {item.mobileIcon && <source media="(max-width: 1279px)" srcSet={item.mobileIcon} className="hidden" />}
              <img src={item.icon} alt="" className="size-48 shrink-0 xl:size-80" />
            </picture>
            <div className="flex min-w-0 flex-col">
              <h3 className="flex h-24 items-center text-20 leading-[calc(var(--spacing)*25.224)] uppercase xl:h-44 xl:text-32 xl:leading-[calc(var(--spacing)*26.55)]">
                <span className="xl:hidden">{item.mobileTitle ?? item.title}</span>
                <span className="hidden xl:inline">{item.title}</span>
              </h3>
              <p className="flex h-16 items-center text-12 text-grey xl:h-36 xl:text-24 xl:leading-[calc(var(--spacing)*33.74)]">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

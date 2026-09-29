import Button from '../../components/ui/Button'

// Half-width dark photo card beside a text column; `reverse` puts the photo on the left. On the phone the
// card sits above centred copy.
function Row({ row }) {
  return (
    <div className="flex flex-col items-center bg-[#fdfdfd] px-13 pt-56 xl:h-880 xl:flex-row xl:items-center xl:bg-transparent xl:p-0">
      <div
        className={`relative w-full overflow-hidden rounded-[calc(var(--spacing)*3.153)] xl:h-880 xl:w-960 xl:shrink-0 xl:rounded-12 ${
          row.reverse ? 'h-[calc(var(--spacing)*349.504)]' : 'h-[calc(var(--spacing)*354.928)] xl:order-last'
        }`}
      >
        <picture>
          <source media="(max-width: 1279px)" srcSet={row.mobileImage} />
          <img src={row.image} alt={row.alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
        </picture>
        <div className={`absolute inset-x-28 flex flex-col text-white capitalize xl:inset-x-50 ${row.reverse ? 'bottom-22 xl:bottom-46' : 'bottom-19 xl:bottom-60'}`}>
          <p className="text-[length:calc(var(--spacing)*11.1)] leading-[calc(var(--spacing)*17.9)] font-light xl:text-[length:calc(var(--spacing)*27.8)] xl:leading-[calc(var(--spacing)*44.365)]">
            {row.label}
          </p>
          <p className={`text-16 leading-24 xl:text-36 xl:leading-44 ${row.reverse ? 'mt-10' : 'mt-8 xl:mt-12'}`}>
            {row.caption.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
      {/* Desktop: the first row's copy sits 254px down (24px above centre), the second is centred. */}
      <div className={`flex w-full flex-col items-center gap-32 pt-41 pb-10 text-center xl:w-auto xl:flex-1 xl:items-start xl:gap-32 xl:pb-0 xl:text-left ${row.reverse ? 'xl:pt-0 xl:pl-79' : 'xl:self-start xl:pt-254 xl:pl-100'}`}>
        <div className="flex flex-col gap-16 xl:gap-32">
          <h2 className="text-24 leading-32 xl:w-667 xl:text-48 xl:leading-56">
            {row.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-16 leading-23 text-grey xl:w-667 xl:text-24 xl:leading-32">{row.text}</p>
        </div>
        <Button href="/about" variant="outline" size="spec" className="h-34 px-12 xl:hidden">
          Know about us
        </Button>
        <Button href="/about" variant="outline" className="hidden xl:inline-flex">
          Know about us
        </Button>
      </div>
    </div>
  )
}

export default function Showcase({ rows }) {
  return (
    <section className="flex w-full flex-col">
      {rows.map((row) => (
        <Row key={row.label} row={row} />
      ))}
    </section>
  )
}

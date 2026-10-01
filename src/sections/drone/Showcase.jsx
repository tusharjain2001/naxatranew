import Button from '../../components/ui/Button'

// Half-width dark photo card beside a text column; `reverse` puts the photo on the left. The card names the
// part (Motor / ESC) over its caption lines. On the phone the card sits above centred copy; `mobile` holds
// that row's phone spacing (title width, title-to-text gap, gap above the button, bottom padding).
function Row({ row }) {
  return (
    <div className="mt-56 flex flex-col items-center bg-[#fdfdfd] px-13 xl:mt-0 xl:h-880 xl:flex-row xl:items-center xl:bg-transparent xl:p-0">
      <div
        className={`relative w-full overflow-hidden rounded-[calc(var(--spacing)*3.153)] xl:h-880 xl:w-960 xl:shrink-0 xl:rounded-12 ${
          row.reverse ? 'h-[calc(var(--spacing)*349.504)]' : 'h-[calc(var(--spacing)*354.928)] xl:order-last'
        }`}
      >
        <picture>
          <source media="(max-width: 1279px)" srcSet={row.mobileImage} />
          <img src={row.image} alt={row.alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
        </picture>
        <div
          className={`absolute inset-x-18 flex flex-col text-white capitalize xl:inset-x-50 ${
            row.reverse ? 'bottom-19 gap-8 xl:bottom-62 xl:gap-[calc(var(--spacing)*17.3)]' : 'bottom-15 gap-8 xl:bottom-80 xl:gap-[calc(var(--spacing)*21.3)]'
          }`}
        >
          <p className="text-16 leading-[calc(var(--spacing)*17.894)] font-bold xl:text-36 xl:leading-[calc(var(--spacing)*44.365)] xl:font-medium">{row.name}</p>
          <p className="text-14 leading-20 xl:text-28 xl:leading-36">
            {row.caption.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
      {/* Desktop: the first row's copy sits 254px down (24px above centre), the second is centred. */}
      <div
        className={`flex w-full flex-col items-center pt-41 text-center xl:w-auto xl:flex-1 xl:items-start xl:gap-32 xl:pb-0 xl:text-left ${row.mobile.buttonGap} ${row.mobile.bottom} ${
          row.reverse ? 'xl:pt-0 xl:pl-79' : 'xl:self-start xl:pt-254 xl:pl-100'
        }`}
      >
        <div className={`flex flex-col items-center xl:items-start xl:gap-32 ${row.mobile.titleGap}`}>
          <h2 className={`text-24 leading-32 xl:w-667 xl:text-48 xl:leading-56 ${row.mobile.title ?? ''}`}>
            {row.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="text-16 leading-23 text-grey xl:w-667 xl:text-24 xl:leading-32">{row.text}</p>
        </div>
        <Button href={row.button.href} variant="outline" size="spec" className="h-34 px-12 xl:hidden">
          {row.button.label}
        </Button>
        <Button href={row.button.href} variant="outline" className="hidden xl:inline-flex">
          {row.button.label}
        </Button>
      </div>
    </div>
  )
}

export default function Showcase({ rows }) {
  return (
    <section className="flex w-full flex-col">
      {rows.map((row) => (
        <Row key={row.name} row={row} />
      ))}
    </section>
  )
}

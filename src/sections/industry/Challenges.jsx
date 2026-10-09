// Two artboard layouts: Cleaning and Agriculture pin the header and a row of three photos at fixed
// positions (`layout`), while 2- and 3-wheeler flow a heading row above four cards (`layout.flow`).
function Cards({ cards, className, cardClass }) {
  return (
    <div className={className}>
      {cards.map((card) => (
        <picture key={card.src} className={`${card.wide ? 'col-span-2' : ''} ${card.order ?? ''}`}>
          {card.mobile && <source media="(max-width: 1279px)" srcSet={card.mobile} />}
          <img
            src={card.src}
            alt={`“${card.mobileQuote ?? card.quote}”`}
            loading="lazy"
            className={`block h-240 w-full rounded-[calc(var(--spacing)*3.945)] object-cover xl:shrink-0 ${cardClass}`}
          />
        </picture>
      ))}
    </div>
  )
}

// Desktop sizes for the flow layout; Agriculture overrides them with its larger cards.
const flowDefaults = {
  section: 'xl:px-[calc(var(--spacing)*97.202)] xl:py-100',
  title: 'xl:w-647 xl:text-56 xl:leading-64',
  aside: 'xl:w-[calc(var(--spacing)*692.076)]',
  text: 'xl:text-24 xl:leading-32',
  row: 'xl:gap-[calc(var(--spacing)*18.006)]',
  card: 'xl:h-[calc(var(--spacing)*533.434)] xl:w-[calc(var(--spacing)*417.894)] xl:rounded-[calc(var(--spacing)*9.003)]',
}

function FlowChallenges({ data }) {
  const f = { ...flowDefaults, ...data.layout }
  return (
    <section className={`w-full py-56 ${f.section}`}>
      {/* Phone: the uppercase label leads, then the title and text, 32px above the cards. */}
      <div className={`mx-auto flex max-w-1920 flex-col xl:gap-100 ${data.heading ? (f.mobileGap ?? 'gap-32') : 'gap-60'}`}>
        <div className="flex flex-col gap-10 px-16 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:px-0">
          <h2 className={`text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:tracking-normal ${f.title}`}>
            {data.title}
          </h2>
          <div className={`max-xl:contents xl:flex xl:flex-col xl:gap-23 ${f.aside}`}>
            {data.heading && (
              <p className="order-first text-14 leading-28 font-light text-grey-dark uppercase xl:order-none xl:flex xl:h-65 xl:items-center xl:text-24 xl:leading-32 xl:font-medium xl:text-black xl:normal-case">
                {data.heading}
              </p>
            )}
            <p className={`text-14 leading-20 font-light xl:text-grey ${data.heading ? 'text-grey capitalize' : 'text-grey-dark'} ${f.text}`}>{data.text}</p>
          </div>
        </div>
        <Cards
          cards={data.cards}
          className={`grid grid-cols-2 gap-12 px-16 xl:flex xl:justify-end xl:px-0 ${f.row}`}
          cardClass={`${data.mobileCard ?? 'h-240'} ${f.card}`}
        />
      </div>
    </section>
  )
}

export default function Challenges({ data }) {
  const { layout } = data
  if (layout.flow) return <FlowChallenges data={data} />
  return (
    <section className={`relative w-full py-56 xl:py-0 ${layout.section}`}>
      <div className="relative mx-auto h-full max-w-1920">
        <div className="flex flex-col gap-10 px-16 pb-60 xl:contents">
          <h2 className={`text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:absolute xl:left-100 xl:text-56 xl:leading-64 xl:tracking-normal ${layout.title}`}>
            {data.title}
          </h2>
          <p className={`text-14 leading-20 font-light text-grey-dark xl:absolute xl:-translate-y-1/2 xl:text-24 xl:leading-32 xl:font-normal xl:text-grey ${layout.text}`}>
            {data.text}
          </p>
        </div>
        <Cards
          cards={data.cards}
          className={`grid grid-cols-2 gap-12 px-16 xl:absolute xl:inset-x-0 xl:flex xl:justify-end xl:gap-24 xl:px-100 ${layout.row}`}
          cardClass={`xl:rounded-12 ${layout.card}`}
        />
      </div>
    </section>
  )
}

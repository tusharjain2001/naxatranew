// "Typical customer challenges": a centred title over five quote cards in a row; the phone shows them two
// to a row with the last spanning both.
export default function CustomerChallenges({ data }) {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col items-center gap-48 px-16 py-56 xl:gap-56 xl:px-100">
      <h2 className="w-full text-center text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:w-1118 xl:text-56 xl:leading-64 xl:tracking-normal">
        {data.title}
      </h2>
      <div className="grid w-full grid-cols-2 gap-12 xl:flex xl:w-auto xl:gap-[calc(var(--spacing)*14.393)]">
        {data.cards.map((card) => (
          <picture key={card.src} className={card.mobile ? 'col-span-2' : ''}>
            {card.mobile && <source media="(max-width: 1279px)" srcSet={card.mobile} />}
            <img
              src={card.src}
              alt={`“${card.quote}”`}
              loading="lazy"
              className="block h-[calc(var(--spacing)*228.014)] w-full rounded-[calc(var(--spacing)*3.848)] object-cover xl:h-[calc(var(--spacing)*426.402)] xl:w-[calc(var(--spacing)*334.045)] xl:rounded-[calc(var(--spacing)*7.197)]"
            />
          </picture>
        ))}
      </div>
    </section>
  )
}

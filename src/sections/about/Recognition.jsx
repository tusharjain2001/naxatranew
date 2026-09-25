import { recognition } from '../../data/about'

const tileRadius = 'rounded-[calc(var(--spacing)*1.302)] xl:rounded-4'

function Tile({ tile }) {
  if (tile.type === 'statement')
    return (
      <div className={`col-span-2 flex items-center justify-center bg-[rgba(77,214,196,0.13)] py-16 xl:justify-start xl:pl-143 ${tileRadius}`}>
        <p className="w-307 text-center text-14 leading-17 xl:w-785 xl:text-start xl:text-48 xl:leading-56">{recognition.statement}</p>
      </div>
    )

  if (tile.type === 'stat') {
    const { value, unit, label } = recognition.stat
    return (
      <div className={`flex items-center justify-center bg-[#f2f2f2] max-xl:order-last ${tileRadius}`}>
        <div className="flex h-[calc(var(--spacing)*45.561)] w-[calc(var(--spacing)*140.589)] flex-col items-center justify-between text-center capitalize xl:h-140 xl:w-432">
          <p className="flex h-[calc(var(--spacing)*31.893)] items-center xl:h-98">
            <span className="text-[length:calc(var(--spacing)*32.544)] leading-[calc(var(--spacing)*11.657)] xl:text-100 xl:leading-[calc(var(--spacing)*35.818)]">
              {value}
            </span>
            <span className="text-[length:calc(var(--spacing)*18.225)] leading-[calc(var(--spacing)*11.657)] xl:text-56 xl:leading-[calc(var(--spacing)*35.818)]">
              {unit}
            </span>
          </p>
          <p className="flex h-[calc(var(--spacing)*9.112)] items-center font-geist text-[length:calc(var(--spacing)*7.811)] leading-[calc(var(--spacing)*12.367)] text-grey xl:h-28 xl:text-24 xl:leading-38">
            {label}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${tile.mobileLast ? 'max-xl:order-last' : ''} ${tileRadius}`}>
      <img
        src={tile.src}
        alt="Naxatra Labs at an industry event"
        loading="lazy"
        className={`absolute inset-0 size-full object-cover ${tile.fit ?? ''}`}
      />
    </div>
  )
}

export default function Recognition() {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-60 px-16 py-100 xl:gap-100 xl:px-100 xl:py-200">
      <div className="flex flex-col items-start gap-10 text-left capitalize xl:items-center xl:gap-16 xl:px-100 xl:text-center">
        <h2 className="text-32 leading-36 tracking-display xl:text-64 xl:leading-80">{recognition.title}</h2>
        <p className="text-14 leading-19 text-grey xl:text-32 xl:leading-32">{recognition.subtitle}</p>
      </div>

      {/* Mobile moves the stat tile to the last row, beside the final photo. */}
      <div className="grid auto-rows-[calc(var(--spacing)*123.341)] grid-cols-2 gap-x-[calc(var(--spacing)*9.112)] gap-y-8 xl:auto-rows-[calc(var(--spacing)*379)] xl:grid-cols-3 xl:gap-x-28 xl:gap-y-30">
        {recognition.tiles.map((tile, i) => (
          <Tile key={tile.src ?? tile.type ?? i} tile={tile} />
        ))}
      </div>
    </section>
  )
}

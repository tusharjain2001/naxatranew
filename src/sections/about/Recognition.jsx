import { recognition } from '../../data/about'

function Tile({ tile }) {
  if (tile.type === 'statement')
    return (
      <div className="col-span-2 flex items-center justify-end rounded-4 bg-[rgba(77,214,196,0.13)] p-16 xl:pr-141 xl:pl-0">
        <p className="text-right text-14 leading-20 capitalize xl:w-887 xl:text-32 xl:leading-42">{recognition.statement}</p>
      </div>
    )

  if (tile.type === 'stat') {
    const { value, unit, label } = recognition.stat
    return (
      <div className="flex items-center justify-center rounded-4 bg-[#f2f2f2]">
        <div className="flex h-70 flex-col items-center justify-between text-center capitalize xl:h-140 xl:w-432">
          <p className="flex h-49 items-center xl:h-98">
            <span className="text-44 leading-none xl:text-100 xl:leading-[calc(var(--spacing)*35.818)]">{value}</span>
            <span className="text-24 leading-none xl:text-56 xl:leading-[calc(var(--spacing)*35.818)]">{unit}</span>
          </p>
          <p className="font-geist text-12 leading-16 text-grey xl:flex xl:h-28 xl:items-center xl:text-24 xl:leading-38">{label}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-4">
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
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-40 px-16 py-80 xl:gap-100 xl:px-100 xl:py-200">
      <div className="flex flex-col items-center gap-8 text-center capitalize xl:gap-16 xl:px-100">
        <h2 className="text-32 leading-36 tracking-display xl:text-64 xl:leading-80">{recognition.title}</h2>
        <p className="text-16 leading-20 text-grey xl:text-32 xl:leading-32">{recognition.subtitle}</p>
      </div>

      <div className="grid auto-rows-[calc(var(--spacing)*130)] grid-cols-2 gap-8 xl:auto-rows-[calc(var(--spacing)*379)] xl:grid-cols-3 xl:gap-x-28 xl:gap-y-30">
        {recognition.tiles.map((tile, i) => (
          <Tile key={tile.src ?? tile.type ?? i} tile={tile} />
        ))}
      </div>
    </section>
  )
}

import { useState } from 'react'
import { sharedAssets } from '../../data/industry/shared'

// Tiles are sized in `em`: 1 design px on desktop, 0.4167 on mobile (a 259px tile becomes 108px).
function Tile({ item, selected, onSelect, id, panelId }) {
  return (
    <button
      type="button"
      role="tab"
      id={id}
      aria-selected={selected}
      aria-controls={panelId}
      onClick={onSelect}
      className={`group relative h-[230.4em] w-[259.2em] shrink-0 cursor-pointer overflow-hidden rounded-[7.828em] bg-[#f2f2f2] text-[length:calc(var(--spacing)*0.4167)] transition-colors duration-200 xl:h-[240em] xl:text-[length:var(--spacing)] ${
        selected ? 'border-[0.96em] border-black xl:border-[1em]' : 'border-[0.96em] border-transparent hover:border-black/30 xl:border-[1em]'
      }`}
    >
      <img
        src={item.tile}
        alt=""
        className="pointer-events-none absolute top-0 left-0 w-full transition-transform duration-300 group-hover:scale-[1.03]"
      />
      {selected && (
        <>
          <span className="pointer-events-none absolute inset-[1em] rounded-[6em] border-[2em] border-white" />
          <img src={sharedAssets.check} alt="" className="absolute top-[7.68em] right-[9.43em] size-[26.88em] xl:top-[8em] xl:right-[8.8em] xl:size-[28em]" />
        </>
      )}
      <span className="absolute inset-x-0 top-[160em] flex h-[57.6em] items-center justify-center px-[12em] text-center xl:top-[180em] xl:h-[60em]">
        <span className="text-[length:calc(var(--spacing)*11)] leading-14 tracking-[-0.03em] text-black xl:text-20 xl:leading-24">{item.label}</span>
      </span>
    </button>
  )
}

function Supplies({ items }) {
  return (
    <ul className="flex flex-wrap items-center gap-[calc(var(--spacing)*9.845)] xl:gap-16">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-[calc(var(--spacing)*9.845)] xl:gap-16">
          {i > 0 && <span aria-hidden className="h-[calc(var(--spacing)*24.611)] w-[calc(var(--spacing)*1.231)] bg-silver xl:h-40 xl:w-2" />}
          <span className="py-[calc(var(--spacing)*4.922)] text-16 leading-[calc(var(--spacing)*19.689)] capitalize xl:py-8 xl:text-24 xl:leading-32">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Applications({ data }) {
  const [index, setIndex] = useState(data.defaultIndex ?? 0)
  const item = data.items[index]
  const panelId = 'application-panel'

  return (
    <section id="applications" className="flex w-full scroll-mt-56 flex-col gap-60 py-100 xl:scroll-mt-80 xl:gap-100 xl:py-160">
      <h2 className="mx-auto w-369 text-center text-32 leading-36 tracking-display capitalize xl:w-1050 xl:text-72 xl:leading-88 xl:tracking-normal">
        {data.title}
      </h2>

      <div className="mx-auto flex w-[calc(var(--spacing)*371)] flex-col items-center gap-18 py-[calc(var(--spacing)*3.889)] xl:w-1376 xl:gap-32 xl:py-0">
        <div role="tablist" aria-label="Applications" className="flex flex-wrap justify-center gap-8 xl:flex-nowrap xl:gap-20">
          {data.items.map((it, i) => (
            <Tile
              key={it.label}
              item={it}
              id={`application-tab-${i}`}
              panelId={panelId}
              selected={i === index}
              onSelect={() => setIndex(i)}
            />
          ))}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-labelledby={`application-tab-${index}`}
          className="flex w-full flex-col items-center gap-24 rounded-[calc(var(--spacing)*3.321)] border-[calc(var(--spacing)*0.553)] border-silver bg-white px-12 py-[calc(var(--spacing)*6.642)] xl:h-600 xl:flex-row xl:gap-32 xl:rounded-12 xl:border-2 xl:p-24"
        >
          <div className="relative h-264 w-full shrink-0 overflow-hidden rounded-4 bg-[#f2f2f2] xl:h-552 xl:w-auto xl:flex-1 xl:rounded-12 xl:bg-transparent">
            <img
              key={item.panel}
              src={item.panel}
              alt={`${item.label} drive system: ${item.parts.join(', ')}`}
              className="absolute inset-0 size-full animate-[fade-in_0.4s_ease-out] object-contain xl:object-cover"
            />
          </div>

          <div key={item.label} className="flex w-full animate-[fade-in_0.4s_ease-out] flex-col gap-[calc(var(--spacing)*13.284)] p-16 xl:min-w-0 xl:flex-1 xl:gap-48 xl:p-0">
            <div className="flex flex-col gap-8 xl:gap-16">
              <p className="text-12 leading-28 font-light text-grey-dark uppercase xl:text-20">Your Application</p>
              <h3 className="text-28 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:text-40 xl:leading-48 xl:tracking-[-0.03em] xl:normal-case">{item.label}</h3>
              <p className="text-14 leading-20 font-light text-grey xl:text-20 xl:leading-28 xl:text-black">{item.text}</p>
            </div>
            <div className="flex flex-col gap-[calc(var(--spacing)*6.642)] xl:gap-24">
              <p className="text-12 leading-28 font-light text-grey-dark uppercase xl:text-20">we supply motors for</p>
              <Supplies items={item.supplies} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

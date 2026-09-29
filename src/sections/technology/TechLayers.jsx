import { useState } from 'react'

const chevron = '/assets/technology/chevron.svg'

// Layer detail card, sized from `--u`: 1 design px on desktop, 0.577 on the phone.
const u = (n) => `calc(var(--u) * ${n})`

function Panel({ item, index, icon, className = '' }) {
  return (
    <div
      role="tabpanel"
      className={`flex flex-col justify-center bg-panel [--u:calc(var(--spacing)*0.577)] xl:[--u:var(--spacing)] ${className}`}
      style={{ gap: u(40), padding: u(56), borderRadius: u(8) }}
    >
      <div className="flex items-start" style={{ gap: u(24) }}>
        <span className="flex shrink-0 items-center justify-center bg-white" style={{ width: u(80), height: u(80), borderRadius: u(4) }}>
          <img src={icon} alt="" style={{ width: u(33.25), height: u(36.6) }} />
        </span>
        <div className="flex flex-col uppercase" style={{ gap: u(4) }}>
          <p className="text-grey" style={{ fontSize: u(24), lineHeight: u(33.74) }}>
            layer {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="flex items-center text-black" style={{ height: u(44), fontSize: u(32), lineHeight: u(26.55) }}>
            {item.title}
          </h3>
        </div>
      </div>
      <p className="text-black" style={{ fontSize: u(24), lineHeight: u(34) }}>
        {item.text}
      </p>
      <ul className="grid grid-cols-2 gap-x-5 gap-y-[calc(var(--spacing)*4.6)] xl:flex xl:gap-8">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="border-[max(calc(var(--u)*1),0.5px)] border-silver bg-white font-medium whitespace-nowrap text-[#767676]"
            style={{ borderRadius: u(5), padding: `${u(4)} ${u(24)}`, fontSize: u(16), lineHeight: u(30.39) }}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Seven platform layers: a tab list beside the detail card on desktop, an accordion on the phone.
export default function TechLayers({ data }) {
  const [active, setActive] = useState(0)
  const current = data.items[active]

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-48 px-16 py-56 xl:gap-100 xl:px-100 xl:py-100">
      <h2 className="text-32 leading-40 tracking-display capitalize xl:w-1320 xl:text-64 xl:leading-80">
        {data.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
      <div className="flex items-start xl:gap-51">
        <ul role="tablist" aria-label="Platform layers" className="flex w-full flex-col gap-4 xl:w-480 xl:shrink-0 xl:gap-16 xl:border-r-[0.5px] xl:border-silver">
          {data.items.map((item, i) => {
            const open = i === active
            return (
              <li key={item.tab} className="flex flex-col gap-4">
                <button
                  type="button"
                  role="tab"
                  aria-selected={open}
                  onClick={() => setActive(open && window.matchMedia('(max-width: 1279px)').matches ? -1 : i)}
                  className={`flex w-full cursor-pointer items-center justify-between gap-8 border p-12 text-left text-20 leading-[calc(var(--spacing)*27.442)] text-grey capitalize transition-colors duration-200 xl:p-20 xl:text-32 xl:leading-37 ${
                    open ? 'rounded-4 border-primary bg-primary/10' : 'rounded-4 border-transparent hover:bg-primary/5 xl:rounded-8'
                  }`}
                >
                  {item.tab}
                  <img src={chevron} alt="" className={`h-14 w-8 shrink-0 transition-transform duration-200 xl:hidden ${open ? '-rotate-90' : 'rotate-90'}`} />
                </button>
                {open && <Panel item={item} index={i} icon={data.icon} className="xl:hidden" />}
              </li>
            )
          })}
        </ul>
        {current && <Panel key={active} item={current} index={active} icon={data.icon} className="hidden min-w-0 flex-1 animate-[fade-in_0.3s_ease-out] xl:flex" />}
      </div>
    </section>
  )
}

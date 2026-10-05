import useAutoCycle from '../../hooks/useAutoCycle'

// Keep in step with the bar's 3000ms animation below.
const CYCLE_MS = 3000

// The bar under the open item fills across it over CYCLE_MS, then the next item opens. It holds still
// while the mouse is over the section, and with reduced motion it is the artboard's static 100px stub.
function Progress({ run, running }) {
  return (
    <span
      key={run}
      aria-hidden
      className="absolute -bottom-px left-0 h-[calc(var(--spacing)*1.163)] w-[calc(var(--spacing)*58.142)] origin-left bg-black motion-safe:w-full motion-safe:animate-[hero-progress_3000ms_linear_both] xl:h-2 xl:w-100 xl:bg-grey xl:motion-safe:w-full"
      style={{ animationPlayState: running ? 'running' : 'paused' }}
    />
  )
}

// "Where else we can build" (node 15421:59895): a list of applications beside a product panel. The open item
// shows its description; the list steps to the next item every three seconds, and a click opens one.
// The phone opens the panel inside the list, under the open item.
export default function WhereElse({ data }) {
  const { ref, index, select, running, run, hover } = useAutoCycle(data.items.length, CYCLE_MS)
  const active = data.items[index]

  return (
    <section ref={ref} {...hover} className="mx-auto flex w-full max-w-1920 flex-col gap-48 px-16 py-28 xl:flex-row xl:items-end xl:gap-60 xl:px-100 xl:py-100">
      <div className="flex flex-col gap-48 xl:w-800 xl:shrink-0 xl:gap-32">
        <div className="flex flex-col gap-16 xl:gap-32">
          <h2 className="text-32 leading-40 tracking-display capitalize xl:text-64 xl:leading-68">{data.title}</h2>
          <p className="text-20 leading-24 text-grey xl:w-698 xl:text-24 xl:leading-32">{data.text}</p>
        </div>
        <ul className="-mx-2 flex flex-col xl:mx-0">
          {data.items.map((item, i) => {
            const open = i === index
            return (
              <li key={item.title} className="relative border-b-[calc(var(--spacing)*0.581)] border-silver xl:border-b">
                <button
                  type="button"
                  onClick={() => select(i)}
                  aria-expanded={open}
                  className={`flex w-full cursor-pointer gap-9 pt-[calc(var(--spacing)*23.257)] text-left xl:gap-16 xl:py-40 ${
                    open ? 'items-start pb-[calc(var(--spacing)*9.303)]' : 'items-center pb-[calc(var(--spacing)*23.257)]'
                  }`}
                >
                  <span className="relative flex size-28 shrink-0 items-center justify-center rounded-[calc(var(--spacing)*1.395)] bg-primary/10 xl:size-48 xl:rounded-[calc(var(--spacing)*2.4)]">
                    <img src={item.icon} alt="" className="size-[calc(var(--spacing)*18.605)] xl:size-32" />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-[calc(var(--spacing)*4.651)] capitalize xl:gap-8">
                    <span className={`flex h-[calc(var(--spacing)*23.257)] items-center text-[length:calc(var(--spacing)*18.605)] leading-[calc(var(--spacing)*20.825)] transition-colors xl:h-40 xl:text-32 xl:leading-[calc(var(--spacing)*35.818)] ${open ? 'text-black' : 'text-grey'}`}>
                      {item.title}
                    </span>
                    {open && <span className="text-14 leading-18 text-grey xl:text-24 xl:leading-32">{item.text}</span>}
                  </span>
                </button>
                {open && (
                  <div className="relative mb-[calc(var(--spacing)*23.257)] h-314 overflow-hidden rounded-12 bg-[#f5f6f7] xl:hidden">
                    <img src={item.image} alt={item.title} className="absolute inset-0 size-full object-contain" />
                  </div>
                )}
                {open && <Progress run={run} running={running} />}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="relative hidden h-800 min-w-0 flex-1 overflow-hidden rounded-12 bg-[#f5f6f7] xl:block">
        {data.items.map((item) => (
          <img
            key={item.title}
            src={item.image}
            alt={item === active ? item.title : ''}
            aria-hidden={item !== active}
            loading="lazy"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${item === active ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </section>
  )
}

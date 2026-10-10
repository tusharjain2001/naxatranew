import useAutoCycle from '../../hooks/useAutoCycle'

// "Why Naxatra?" (node 15421:60088): four reasons beside a workshop photo. Every three seconds the next
// reason is highlighted and its photo shown (Figma's note asks for it), and hovering or clicking a reason
// picks it and restarts the wait from there. The phone shows the photo under the highlighted reason.
export default function WhyUs({ data }) {
  const { ref, index, select } = useAutoCycle(data.items.length, 3000)
  const active = data.items[index]

  return (
    <section ref={ref} className="mx-auto flex w-full max-w-1920 flex-col gap-24 px-16 py-56 xl:flex-row xl:items-end xl:gap-60 xl:p-100">
      <div className="flex flex-col gap-24 xl:shrink-0 xl:gap-64">
        <h2 className="text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:text-64 xl:leading-68">{data.title}</h2>
        <ul className="flex flex-col gap-[calc(var(--spacing)*14.012)] xl:gap-32">
          {data.items.map((item, i) => {
            const open = i === index
            return (
              <li key={item.title} className="flex flex-col gap-8">
                <button
                  type="button"
                  onClick={() => select(i)}
                  onMouseEnter={() => select(i)}
                  aria-pressed={open}
                  className={`flex w-full cursor-pointer flex-col gap-4 p-[calc(var(--spacing)*14.012)] text-left transition-colors duration-300 xl:h-210 xl:w-845 xl:justify-center xl:p-32 ${
                    open ? 'bg-[#e2edff]' : 'bg-[#f8f8f8]'
                  }`}
                >
                  <span className="text-16 leading-20 capitalize xl:text-32 xl:leading-38">{item.title}</span>
                  <span className="text-12 leading-16 text-grey xl:text-24 xl:leading-[calc(var(--spacing)*33.74)]">{item.text}</span>
                </button>
                {open && <img src={item.image} alt={item.title} className="h-320 w-full rounded-8 bg-[#c6c6c6] object-cover xl:hidden" />}
              </li>
            )
          })}
        </ul>
      </div>
      <div className="relative hidden h-936 min-w-0 flex-1 overflow-hidden rounded-12 bg-[#c6c6c6] xl:block">
        {data.items.map((item) => (
          <img
            key={item.title}
            src={item.image}
            alt={item.title}
            aria-hidden={item !== active}
            loading="lazy"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${item === active ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </section>
  )
}

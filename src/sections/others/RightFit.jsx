import { useState } from 'react'
import Button from '../../components/ui/Button'

// "Get the right fit": two platform tabs beside the chosen motor (node 15421:59977, AF state 15421:60305).
// The phone opens the picture under the chosen tab.
export default function RightFit({ data }) {
  const [active, setActive] = useState(0)
  const series = data.series[active]

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col px-16 py-56 xl:flex-row xl:items-stretch xl:gap-60 xl:px-100 xl:py-100">
      <div className="flex flex-col items-start gap-24 xl:w-800 xl:shrink-0 xl:gap-32">
        <div className="flex flex-col gap-10 capitalize xl:contents xl:normal-case">
          <h2 className="text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:w-800 xl:text-64 xl:leading-68">{data.title}</h2>
          <p className="text-14 leading-18 text-grey xl:text-24 xl:leading-32">{data.text}</p>
        </div>
        <ul className="flex w-full flex-col gap-16 xl:contents">
          {data.series.map((item, i) => (
            <li key={item.title} className="w-full">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={`flex h-[calc(var(--spacing)*54)] w-full cursor-pointer items-center px-32 text-left text-20 capitalize transition-colors xl:h-108 xl:p-32 xl:text-32 ${
                  i === active ? 'bg-[#e2edff]' : 'bg-[#f8f8f8] hover:bg-[#eef3fc]'
                }`}
              >
                {item.title}
              </button>
              {i === active && (
                <img
                  src={item.mobileImage ?? item.image}
                  alt={item.alt}
                  className="block h-[calc(var(--spacing)*257.279)] w-full rounded-[calc(var(--spacing)*5.163)] object-cover xl:hidden"
                />
              )}
            </li>
          ))}
        </ul>
        <Button href="#spec" size="spec" className="xl:hidden">
          {data.cta}
        </Button>
        <Button href="#spec" className="hidden h-60 px-24! xl:inline-flex">
          {data.cta}
        </Button>
      </div>
      <div className="relative hidden min-w-0 flex-1 overflow-hidden rounded-12 bg-[#f5f6f7] xl:block">
        {data.series.map((item) => (
          <img
            key={item.title}
            src={item.image}
            alt={item === series ? item.alt : ''}
            aria-hidden={item !== series}
            loading="lazy"
            className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${item === series ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </section>
  )
}

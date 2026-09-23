import { useState } from 'react'
import { deployment } from '../data/home'

// Figma only supplies one photo set, so each tab rotates which photo takes the wide centre slot.
const slots = ['xl:w-684', 'xl:w-800', 'xl:w-754']
const positions = ['object-bottom', 'object-[0%_93%]', 'object-center']

export default function Deployment() {
  const [active, setActive] = useState(0)
  const ordered = deployment.images.map((_, i) => ({ ...deployment.images[(i + active) % 3], pos: positions[(i + active) % 3] }))

  return (
    <section className="flex w-full flex-col items-center gap-48 overflow-hidden py-100 xl:gap-0 xl:pt-209 xl:pb-0">
      <div className="flex w-full flex-col items-center gap-10 px-15.25 text-center capitalize xl:translate-x-29 xl:gap-24 xl:px-0">
        <h2 className="w-337 text-32 leading-[calc(var(--spacing)*33.42)] tracking-display xl:w-1340 xl:text-64 xl:leading-80">
          {deployment.title}
        </h2>
        <p className="flex h-[calc(var(--spacing)*23.87)] items-center text-14 leading-[calc(var(--spacing)*18.15)] text-grey xl:h-32 xl:w-800 xl:text-24 xl:leading-32">{deployment.subtitle}</p>
      </div>

      <div role="tablist" aria-label="Deployment focus" className="flex w-full items-center justify-center gap-8 px-9.5 xl:mt-64 xl:w-auto xl:translate-x-29 xl:gap-24 xl:px-0">
        {deployment.tabs.map((tab, i) => {
          const isActive = i === active
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`flex h-[calc(var(--spacing)*37.93)] min-w-0 flex-1 cursor-pointer items-center justify-center rounded-2 border-[calc(var(--spacing)*0.6)] p-9.5 text-14-2 leading-[calc(var(--spacing)*18.97)] capitalize transition-colors duration-200 xl:h-64 xl:w-200 xl:flex-none xl:rounded-4 xl:border xl:p-16 xl:text-24 xl:leading-32 ${
                isActive ? 'border-primary bg-primary/10 font-medium text-primary' : 'border-silver text-black hover:border-primary/50'
              }`}
            >
              {tab}
            </button>
          )
        })}
      </div>

      <div className="flex items-center gap-8 xl:mt-66 xl:translate-x-29 xl:gap-29">
        {ordered.map((img, i) => (
          <div key={i} className={`relative h-160 w-200 shrink-0 overflow-hidden rounded-3 xl:h-400 xl:rounded-12 ${slots[i]}`}>
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`absolute inset-0 size-full animate-[fade-in_600ms_ease-out] object-cover ${img.pos} ${img.imageClass ?? ''}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

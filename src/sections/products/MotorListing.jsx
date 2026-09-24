import { useMemo, useState } from 'react'
import { productFamilies, productPath, industries, applicationFilters, seriesTabs } from '../../data/products'

// Map each sub-application (checkbox) back to its category so a checked box filters families by industry.
const optionCategory = {}
applicationFilters.forEach((cat) => cat.options.forEach((opt) => (optionCategory[opt] = cat.key)))

const SPECS = [
  { key: 'voltage', label: 'Voltage (V)' },
  { key: 'power', label: 'Continuous Power (kW)' },
  { key: 'torque', label: 'Peak Torque (Nm)' },
]

const emptyRanges = () => ({ voltage: ['', ''], power: ['', ''], torque: ['', ''] })

function Chevron({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`size-18 shrink-0 text-black transition-transform duration-200 ${open ? '' : 'rotate-180'}`}>
      <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// One min/max spec filter row.
function SpecRange({ label, value, onChange }) {
  const box = 'min-w-0 flex-1 rounded-4 border border-silver bg-white px-16 py-12 text-12 font-light text-grey outline-none transition-colors placeholder:text-grey focus:border-primary'
  return (
    <div className="flex w-full flex-col gap-12">
      <span className="text-16 xl:text-20">{label}</span>
      <div className="flex items-center justify-between gap-8">
        <input inputMode="numeric" placeholder="Min" value={value[0]} onChange={(e) => onChange([e.target.value, value[1]])} className={box} />
        <span className="text-16 text-black xl:text-20">-</span>
        <input inputMode="numeric" placeholder="Max" value={value[1]} onChange={(e) => onChange([value[0], e.target.value])} className={box} />
      </div>
    </div>
  )
}

// One collapsible Industrial-Applications category with its sub-application checkboxes.
function AppCategory({ cat, checked, onToggle }) {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex w-full flex-col gap-16">
      <button type="button" onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between border-b-[0.3px] border-[#8d8d8d] py-6 text-left" aria-expanded={open}>
        <span className="text-16 xl:text-20">{cat.label}</span>
        <Chevron open={open} />
      </button>
      {open &&
        cat.options.map((opt) => (
          <label key={opt} className="flex w-full cursor-pointer items-center gap-12">
            <input type="checkbox" checked={checked.has(opt)} onChange={() => onToggle(opt)} className="size-24 shrink-0 cursor-pointer rounded-[3px] border border-[#adadad] accent-primary" />
            <span className="text-16 xl:text-20">{opt}</span>
          </label>
        ))}
    </div>
  )
}

function FilterPanel({ ranges, setRanges, checked, toggleApp, clearAll }) {
  return (
    <div className="flex w-full flex-col gap-24 xl:w-360 xl:shrink-0 xl:gap-32 xl:border-r-[0.5px] xl:border-silver xl:pr-16">
      <div className="flex items-center justify-between pr-16">
        <span className="text-20 xl:text-24">Filter By</span>
        <button type="button" onClick={clearAll} className="text-16 font-light text-primary underline underline-offset-2 hover:no-underline xl:text-18">
          Clear All
        </button>
      </div>
      <div className="h-px w-full bg-silver" />

      <div className="flex w-full flex-col gap-24 pr-16">
        <span className="text-20 xl:text-24">Key Specifications</span>
        <div className="flex w-full flex-col gap-24 xl:gap-30">
          {SPECS.map((s) => (
            <SpecRange key={s.key} label={s.label} value={ranges[s.key]} onChange={(v) => setRanges((r) => ({ ...r, [s.key]: v }))} />
          ))}
        </div>
      </div>
      <div className="h-px w-full bg-silver" />

      <div className="flex w-full flex-col gap-24 pr-16">
        <span className="text-20 xl:text-24">Industrial Applications</span>
        <div className="flex w-full flex-col gap-16">
          {applicationFilters.map((cat) => (
            <AppCategory key={cat.key} cat={cat} checked={checked} onToggle={toggleApp} />
          ))}
        </div>
      </div>
    </div>
  )
}

function SeriesRadios({ value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-16 xl:gap-32">
      {seriesTabs.map((s) => {
        const on = value === s
        return (
          <button key={s} type="button" onClick={() => onChange(on ? null : s)} className="flex items-center gap-12" aria-pressed={on}>
            <span className={`grid size-24 place-items-center rounded-full border-2 transition-colors ${on ? 'border-primary' : 'border-[#adadad]'}`}>
              {on && <span className="size-12 rounded-full bg-primary" />}
            </span>
            <span className="text-20 font-light xl:text-24">{s} Series</span>
          </button>
        )
      })}
    </div>
  )
}

function IndustryChips({ keys }) {
  return (
    <div className="flex flex-wrap gap-10">
      {keys.map((key) => {
        const ind = industries[key]
        if (!ind) return null
        return (
          <span key={key} className="flex items-center gap-8 border-[0.4px] border-black/10 bg-black/5 p-7">
            <span className="grid size-20 place-items-center bg-white">
              <img src={ind.icon} alt="" className="size-14 object-contain" />
            </span>
            <span className="text-13 font-light capitalize">{ind.label}</span>
          </span>
        )
      })}
    </div>
  )
}

function FamilyCard({ family }) {
  return (
    <a href={productPath(family.slug)} className="group relative block h-440 w-full overflow-hidden border-[0.85px] border-black/10 bg-black/[0.02] xl:h-500 xl:w-415">
      {/* White plate + render */}
      <span className="absolute top-20 left-1/2 h-190 w-[86%] -translate-x-1/2 bg-white xl:top-26 xl:left-26 xl:h-197 xl:w-360 xl:translate-x-0" />
      <img
        src={family.card.image}
        alt={family.name}
        loading="lazy"
        className="pointer-events-none absolute top-14 left-1/2 h-215 w-[92%] -translate-x-1/2 object-contain transition-transform duration-500 group-hover:scale-[1.04] xl:top-6 xl:left-26 xl:h-235 xl:w-360 xl:translate-x-0"
      />
      {/* Content */}
      <div className="absolute top-215 left-20 flex w-[88%] flex-col gap-14 xl:top-247 xl:left-26 xl:w-360">
        <div className="flex flex-col gap-3">
          <span className="text-28 leading-none capitalize xl:text-40">{family.name}</span>
          <span className="text-14 font-light capitalize text-black xl:text-16">{family.tagline}</span>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-14 font-light capitalize xl:text-16">Industries</span>
          <IndustryChips keys={family.industries} />
        </div>
        <span className="text-18 text-primary capitalize underline underline-offset-2 group-hover:no-underline xl:text-20">View Product →</span>
      </div>
    </a>
  )
}

export default function MotorListing() {
  const [series, setSeries] = useState(null)
  const [ranges, setRanges] = useState(emptyRanges)
  const [checked, setChecked] = useState(() => new Set())

  const toggleApp = (opt) =>
    setChecked((prev) => {
      const next = new Set(prev)
      if (next.has(opt)) next.delete(opt)
      else next.add(opt)
      return next
    })

  const clearAll = () => {
    setSeries(null)
    setRanges(emptyRanges())
    setChecked(new Set())
  }

  const families = useMemo(() => {
    const inRange = (val, [min, max]) => (min === '' || val >= Number(min)) && (max === '' || val <= Number(max))
    const checkedCats = new Set([...checked].map((opt) => optionCategory[opt]))
    return productFamilies.filter((f) => {
      if (series && f.series !== series) return false
      if (!inRange(f.spec.voltage, ranges.voltage) || !inRange(f.spec.power, ranges.power) || !inRange(f.spec.torque, ranges.torque)) return false
      if (checkedCats.size && ![...checkedCats].some((c) => f.industries.includes(c))) return false
      return true
    })
  }, [series, ranges, checked])

  return (
    <section id="motor-listing" className="mx-auto flex w-full max-w-1920 scroll-mt-80 flex-col gap-40 px-16 py-60 xl:gap-60 xl:px-100 xl:py-100">
      <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">Browse Our Motor Solutions</h2>

      <div className="flex flex-col gap-40 xl:flex-row xl:gap-60">
        <FilterPanel ranges={ranges} setRanges={setRanges} checked={checked} toggleApp={toggleApp} clearAll={clearAll} />

        <div className="flex min-w-0 flex-1 flex-col items-stretch gap-24 xl:items-end">
          <SeriesRadios value={series} onChange={setSeries} />

          {families.length ? (
            <div className="grid w-full grid-cols-1 gap-24 sm:grid-cols-2 xl:grid-cols-3 xl:gap-28">
              {families.map((f) => (
                <FamilyCard key={f.slug} family={f} />
              ))}
            </div>
          ) : (
            <div className="grid w-full place-items-center rounded-8 border border-silver py-80 text-center text-16 text-grey xl:text-20">
              No motors match the selected filters. <button type="button" onClick={clearAll} className="ml-2 text-primary underline">Clear all</button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

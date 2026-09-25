import { useCallback, useEffect, useMemo, useState } from 'react'
import { productFamilies, applicationFilters, seriesTabs } from '../../data/products'
import FamilyCard from './FamilyCard'

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
    <div className="hidden xl:flex xl:w-360 xl:shrink-0 xl:flex-col xl:gap-32 xl:border-r-[0.5px] xl:border-silver xl:pr-16">
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
    <div className="flex flex-wrap items-center justify-end gap-16 xl:justify-start xl:gap-32">
      {seriesTabs.map((s) => {
        const on = value === s
        return (
          <button key={s} type="button" onClick={() => onChange(on ? null : s)} className="flex items-center gap-8 xl:gap-12" aria-pressed={on}>
            <span className={`grid size-16 place-items-center rounded-full border transition-colors xl:size-24 xl:border-2 ${on ? 'border-primary' : 'border-[#adadad]'}`}>
              {on && <span className="size-8 rounded-full bg-primary xl:size-12" />}
            </span>
            <span className="text-16 font-light xl:text-24">{s} Series</span>
          </button>
        )
      })}
    </div>
  )
}

function Caret({ open, className = 'size-20' }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`}>
      <path d="M5 9l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const DrawerRule = () => <span aria-hidden className="block h-[0.5px] w-full shrink-0 bg-silver" />

// Phone filter drawer (Figma filter frames in 14626-12329): a 340px sheet from the left over a 50% scrim.
// Key Specifications and Industrial Applications collapse; applications list their categories on the left
// and the chosen category's checkboxes on the right. Filters apply live, so Apply just closes the sheet.
function FilterDrawer({ open, onClose, ranges, setRanges, checked, toggleApp, clearAll }) {
  const [specsOpen, setSpecsOpen] = useState(false)
  const [appsOpen, setAppsOpen] = useState(false)
  const [category, setCategory] = useState(applicationFilters[0].key)
  const cat = applicationFilters.find((c) => c.key === category)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  const setRange = (key, i, v) => setRanges((r) => ({ ...r, [key]: i ? [r[key][0], v] : [v, r[key][1]] }))
  const box = 'min-w-0 flex-1 rounded-4 border border-silver bg-white px-16 py-12 text-12 font-light text-black outline-none placeholder:text-grey focus:border-primary'
  const action = 'flex h-30 w-100 cursor-pointer items-center justify-center gap-[calc(var(--spacing)*6.657)] rounded-[calc(var(--spacing)*2.663)] text-12 leading-16 font-medium uppercase'

  return (
    <div className={`fixed inset-0 z-50 xl:hidden ${open ? 'visible' : 'invisible'}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter motors"
        className={`absolute inset-y-0 left-0 flex w-340 flex-col justify-between gap-24 overflow-y-auto border-r-[0.5px] border-silver bg-white px-12 pt-48 pb-60 transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex w-full flex-col gap-24">
          <div className="flex items-center justify-between">
            <span className="text-20">Filter By</span>
            <button type="button" onClick={onClose} aria-label="Close filters" className="grid size-24 cursor-pointer place-items-center">
              <svg viewBox="0 0 24 24" aria-hidden className="size-13">
                <path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <DrawerRule />

          <div className="flex flex-col gap-16">
            <button type="button" onClick={() => setSpecsOpen((o) => !o)} aria-expanded={specsOpen} className="flex cursor-pointer items-center justify-between text-left">
              <span className="text-16 leading-24">Key Specifications</span>
              <Caret open={specsOpen} />
            </button>
            {specsOpen && (
              <>
                <DrawerRule />
                {SPECS.map((spec) => (
                  <div key={spec.key} className="flex flex-col gap-8">
                    <span className="flex h-24 items-center text-14">{spec.label}</span>
                    <div className="flex items-center">
                      <input inputMode="numeric" placeholder="Min" value={ranges[spec.key][0]} onChange={(e) => setRange(spec.key, 0, e.target.value)} className={box} />
                      <span className="w-19 text-center text-20">-</span>
                      <input inputMode="numeric" placeholder="Max" value={ranges[spec.key][1]} onChange={(e) => setRange(spec.key, 1, e.target.value)} className={box} />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <DrawerRule />

          <button type="button" onClick={() => setAppsOpen((o) => !o)} aria-expanded={appsOpen} className="flex cursor-pointer items-center justify-between text-left">
            <span className="text-16 leading-24">Industrial Applications</span>
            <Caret open={appsOpen} />
          </button>
          <DrawerRule />
          {appsOpen && (
            <div className="flex w-full items-start">
              <ul className="flex w-96 shrink-0 flex-col self-stretch">
                {applicationFilters.map((c, i) => (
                  <li key={c.key}>
                    {i > 0 && <DrawerRule />}
                    <button
                      type="button"
                      onClick={() => setCategory(c.key)}
                      aria-pressed={c.key === category}
                      className={`flex h-36 w-full cursor-pointer items-center px-4 text-left text-12 ${c.key === category ? 'bg-silver/25' : ''}`}
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
              <span aria-hidden className="w-[0.5px] self-stretch bg-silver/50" />
              <div className="flex min-w-0 flex-1 flex-col gap-8 px-12 py-4">
                {cat.options.map((opt) => (
                  <label key={opt} className="flex h-24 cursor-pointer items-center gap-8">
                    <input type="checkbox" checked={checked.has(opt)} onChange={() => toggleApp(opt)} className="size-16 shrink-0 cursor-pointer accent-primary" />
                    <span className="text-12">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end gap-12">
          <button type="button" onClick={clearAll} className={`${action} border-[0.5px] border-black`}>
            Clear all <span aria-hidden>↗</span>
          </button>
          <button type="button" onClick={onClose} className={`${action} bg-black text-white`}>
            Apply <span aria-hidden>↗</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MotorListing() {
  const [series, setSeries] = useState(null)
  const [seriesOpen, setSeriesOpen] = useState(true)
  // The phone toolbar starts with the series radios and the filter drawer closed.
  const [mobileSeriesOpen, setMobileSeriesOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = useCallback(() => setDrawerOpen(false), [])
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
      <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-[96px]">Browse Our Motor Solutions</h2>

      <div className="flex flex-col gap-40 xl:flex-row xl:gap-60">
        <FilterPanel ranges={ranges} setRanges={setRanges} checked={checked} toggleApp={toggleApp} clearAll={clearAll} />

        <div className="flex min-w-0 flex-1 flex-col items-stretch gap-24 xl:items-end">
          {/* Phone toolbar: Series toggles the radios below it, Filters opens the drawer. */}
          <div className="flex w-full flex-col gap-16 xl:hidden">
            <div className="flex justify-end gap-8">
              <button
                type="button"
                onClick={() => setMobileSeriesOpen((o) => !o)}
                aria-expanded={mobileSeriesOpen}
                className={`flex cursor-pointer items-center gap-2 rounded-2 border-[0.5px] bg-[#fafafa] px-12 py-6 text-12 font-light ${mobileSeriesOpen ? 'border-black/60' : 'border-black/12'}`}
              >
                Series
                <Caret open={mobileSeriesOpen} className="size-[calc(var(--spacing)*8.918)]" />
              </button>
              <button
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-haspopup="dialog"
                className="flex cursor-pointer items-center gap-2 rounded-2 border-[0.5px] border-silver bg-[#fafafa] px-12 py-4 text-12 font-light text-grey"
              >
                Filters
                <img src="/assets/products/listing/filter.svg" alt="" className="size-16" />
              </button>
            </div>
            {mobileSeriesOpen && <SeriesRadios value={series} onChange={setSeries} />}
          </div>
          <FilterDrawer
            open={drawerOpen}
            onClose={closeDrawer}
            ranges={ranges}
            setRanges={setRanges}
            checked={checked}
            toggleApp={toggleApp}
            clearAll={clearAll}
          />

          {/* Series dropdown (top-right) with the RF/AF/PT radios on the row below it, per the artboard. */}
          <div className="hidden w-full flex-col items-end gap-16 xl:flex">
            <button
              type="button"
              onClick={() => setSeriesOpen((o) => !o)}
              aria-expanded={seriesOpen}
              className="flex items-center justify-between gap-16 self-end rounded-[4px] border border-black/25 px-16 py-8 text-16 font-light xl:text-20"
            >
              Series
              <svg viewBox="0 0 12 8" aria-hidden className={`w-12 transition-transform ${seriesOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {seriesOpen && <SeriesRadios value={series} onChange={setSeries} />}
          </div>

          {families.length ? (
            <div className="grid w-full grid-cols-2 gap-x-[calc(var(--spacing)*11.729)] gap-y-[calc(var(--spacing)*11.643)] xl:grid-cols-3 xl:gap-32">
              {families.map((f) => (
                <FamilyCard key={f.slug} family={f} className="h-full w-full" />
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

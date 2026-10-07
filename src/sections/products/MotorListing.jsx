import { useCallback, useEffect, useMemo, useState } from 'react'
import { productFamilies, applicationFilters, seriesTabs } from '../../data/products'
import FamilyCard from './FamilyCard'
import Button from '../../components/ui/Button'
import ArrowUpRight from '../../components/ui/ArrowUpRight'

// Map each sub-application (checkbox) back to its category so a checked box filters families by industry.
const optionCategory = {}
applicationFilters.forEach((cat) => cat.options.forEach((opt) => (optionCategory[opt] = cat.key)))

// Key Specifications sliders (Figma 15421:42167). Both artboards draw the scales differently (desktop
// 0-72 V / 0-14 kW / 0-80 Nm, phone 0-100 each); the desktop scales fit the motors, so both use them.
const SPECS = [
  { key: 'voltage', label: 'Voltage (V)', mobileLabel: 'Voltage (V)', unit: 'V', max: 72, step: 1 },
  { key: 'power', label: 'Power (kW)', mobileLabel: 'Continuous Power (kW)', unit: 'kW', max: 14, step: 0.1 },
  { key: 'torque', label: 'Torque (Nm)', mobileLabel: 'Peak Torque (Nm)', unit: 'Nm', max: 80, step: 0.5 },
]

const emptyRanges = () => Object.fromEntries(SPECS.map((spec) => [spec.key, [0, spec.max]]))
const fmt = (v) => `${Number(v.toFixed(1))}`

function Chevron({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={`size-18 shrink-0 text-black transition-transform duration-200 ${open ? '' : 'rotate-180'}`}>
      <path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// One spec filter: the scale ends above a two-handle slider and the chosen range under it. The blue bar runs
// between the thumbs' centres (a native thumb travels 8px in from each end of the track).
function SpecRange({ spec, label, value, onChange, labelClass, valueClass }) {
  const [lo, hi] = value
  const at = (v) => `calc(var(--spacing) * 8 + (100% - var(--spacing) * 16) * ${v / spec.max})`
  return (
    <div className="flex w-full flex-col gap-12">
      <span className={labelClass}>{label}</span>
      <span className="flex justify-between text-12 text-grey">
        <span>0{spec.unit}</span>
        <span>
          {spec.max}
          {spec.unit}
        </span>
      </span>
      <div className="relative h-6 rounded-full bg-silver">
        <span className="absolute top-px h-4 rounded-full bg-primary" style={{ left: at(lo), width: `calc(${at(hi)} - ${at(lo)})` }} />
        <input
          type="range"
          min={0}
          max={spec.max}
          step={spec.step}
          value={lo}
          onChange={(e) => onChange([Math.min(Number(e.target.value), hi), hi])}
          aria-label={`Minimum ${label}`}
          className="range-thumb absolute inset-0 h-6 w-full"
          style={{ zIndex: lo > spec.max / 2 ? 2 : 1 }}
        />
        <input
          type="range"
          min={0}
          max={spec.max}
          step={spec.step}
          value={hi}
          onChange={(e) => onChange([lo, Math.max(Number(e.target.value), lo)])}
          aria-label={`Maximum ${label}`}
          className="range-thumb absolute inset-0 h-6 w-full"
        />
      </div>
      <span className={valueClass}>
        {fmt(lo)}
        {spec.unit} - {fmt(hi)}
        {spec.unit}
      </span>
    </div>
  )
}

// One collapsible Industrial-Applications category with its sub-application checkboxes (open by default,
// as on the artboard).
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
        <div className="flex w-full flex-col gap-[calc(var(--spacing)*29.728)]">
          {SPECS.map((s) => (
            <SpecRange
              key={s.key}
              spec={s}
              label={s.label}
              value={ranges[s.key]}
              onChange={(v) => setRanges((r) => ({ ...r, [s.key]: v }))}
              labelClass="text-20"
              valueClass="text-18"
            />
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
    <svg viewBox="0 0 20 20" aria-hidden className={`shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`}>
      {/* Figma's "chevron-down 2" icon. */}
      <path d="M2.425 6.636l7.525 7.849 8.172-7.849" fill="none" stroke="currentColor" strokeWidth="1.682" />
    </svg>
  )
}

const DrawerRule = () => <span aria-hidden className="block h-[0.5px] w-full shrink-0 bg-silver" />

// Phone filter drawer (Figma filter frames in 14626-12329): a 340px sheet from the left over a 50% scrim.
// Key Specifications and Industrial Applications collapse; applications list their categories on the left
// and the chosen category's checkboxes on the right. Filters apply live, so Apply just closes the sheet.
// Only the filters scroll; Clear All and Apply stay pinned to the foot of the sheet.
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

  // The same small arrow as the site's other 12px buttons (the ↗ glyph renders as an emoji on phones).
  const arrow = 'size-6.5 [&>img]:scale-[0.58]'
  const action = 'flex h-30 w-100 cursor-pointer items-center justify-center gap-[calc(var(--spacing)*6.657)] rounded-[calc(var(--spacing)*2.663)] text-12 leading-16 font-medium uppercase'

  return (
    <div className={`fixed inset-0 z-50 xl:hidden ${open ? 'visible' : 'invisible'}`}>
      <div onClick={onClose} className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filter motors"
        className={`absolute inset-y-0 left-0 flex w-340 flex-col border-r-[0.5px] border-silver bg-white transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex w-full min-h-0 flex-1 flex-col gap-24 overflow-y-auto overscroll-contain px-12 pt-48 pb-24">
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
                <div className="flex flex-col gap-[calc(var(--spacing)*29.728)]">
                  {SPECS.map((spec) => (
                    <SpecRange
                      key={spec.key}
                      spec={spec}
                      label={spec.mobileLabel}
                      value={ranges[spec.key]}
                      onChange={(v) => setRanges((r) => ({ ...r, [spec.key]: v }))}
                      labelClass="flex h-24 items-center text-14"
                      valueClass="flex h-24 items-center text-14"
                    />
                  ))}
                </div>
                {/* Open, the closing rule sits 16px under the sliders (inside the group); closed, 24px under the row. */}
                <DrawerRule />
              </>
            )}
          </div>
          {!specsOpen && <DrawerRule />}

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
                      className={`flex h-36 w-full cursor-pointer items-center px-4 text-left text-13 ${c.key === category ? 'bg-silver/25' : ''}`}
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
                    <span className="text-13">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex shrink-0 justify-end gap-12 bg-white px-12 pt-16 pb-[max(calc(var(--spacing)*60),env(safe-area-inset-bottom))]">
          <button type="button" onClick={clearAll} className={`${action} border-[0.5px] border-black`}>
            Clear all <ArrowUpRight tone="black-sm" className={arrow} />
          </button>
          <button type="button" onClick={onClose} className={`${action} bg-black text-white`}>
            Apply <ArrowUpRight tone="white" className={arrow} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MotorListing() {
  const [series, setSeries] = useState(null)
  const [seriesOpen, setSeriesOpen] = useState(false)
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
    const inRange = (val, [min, max]) => val >= min && val <= max
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

      {/* Custom-solutions banner (Figma 15472:1565 / phone 15504:2170), pointing to the Others page. */}
      <div className="flex flex-col gap-32 bg-primary/12 p-24 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:px-64 xl:py-56">
        <p className="text-28 leading-32 xl:w-720 xl:text-48 xl:leading-64">We offer custom solutions to meet your unique needs!!</p>
        <div className="flex flex-col items-start gap-16">
          <p className="text-12 leading-18 text-grey xl:w-765 xl:text-28 xl:leading-36">
            We are currently broadening our reach into robotic actuators, marine applications, and defense, among others.
          </p>
          <Button href="/industry/others" size="spec" className="xl:hidden">
            Know more
          </Button>
          <Button href="/industry/others" className="hidden xl:inline-flex">
            Know more
          </Button>
        </div>
      </div>

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
          <div className="hidden w-full flex-col items-end gap-24 xl:flex">
            <button
              type="button"
              onClick={() => setSeriesOpen((o) => !o)}
              aria-expanded={seriesOpen}
              className="flex h-50 cursor-pointer items-center gap-4 self-end rounded-[4px] border border-black/12 bg-[#fafafa] px-24 text-24 font-light"
            >
              <span className="w-68 text-left">Series</span>
              {/* Figma's chevron-down, flipped to point up while the radios are showing. */}
              <svg viewBox="0 0 17.837 17.837" aria-hidden className={`size-[calc(var(--spacing)*17.837)] shrink-0 transition-transform ${seriesOpen ? 'rotate-180' : ''}`}>
                <path d="M2.164 5.918l6.711 7 7.289-7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            {seriesOpen && <SeriesRadios value={series} onChange={setSeries} />}
          </div>

          {families.length ? (
            <div className="grid w-full grid-cols-2 gap-x-[calc(var(--spacing)*11.729)] gap-y-[calc(var(--spacing)*11.643)] xl:grid-cols-3 xl:gap-27">
              {/* Figma (node 15651:3370): 415×548 cards 27px apart on desktop, 179×240 on the phone; every card keeps
                  that height even without a variants line. */}
              {families.map((f) => (
                <FamilyCard key={f.slug} family={f} className="h-full min-h-240 w-full xl:min-h-548" listing />
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

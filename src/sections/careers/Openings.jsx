import { useEffect, useRef, useState } from 'react'
import { openings } from '../../data/careers'
import Button from '../../components/ui/Button'

const sorters = {
  default: () => 0,
  title: (a, b) => a.title.localeCompare(b.title),
  location: (a, b) => a.location.localeCompare(b.location) || a.title.localeCompare(b.title),
}

function SortMenu({ value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !ref.current?.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [open])

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex cursor-pointer items-center gap-8 rounded-4 border border-black/12 bg-[#fafafa] px-12 py-8 text-14 leading-16 font-light transition-colors hover:border-black/30 xl:gap-12 xl:px-24 xl:py-16 xl:text-24 xl:leading-24"
      >
        Sort By
        <img
          src="/assets/careers/chevron-down.svg"
          alt=""
          className={`size-12 transition-transform duration-200 xl:size-[calc(var(--spacing)*17.837)] ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <ul
        role="listbox"
        aria-label="Sort positions"
        className={`absolute top-full right-0 z-10 mt-8 min-w-full overflow-hidden rounded-4 border border-black/12 bg-white py-4 whitespace-nowrap shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-200 ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'
        }`}
      >
        {openings.sortOptions.map((option) => (
          <li key={option.value} role="option" aria-selected={option.value === value}>
            <button
              type="button"
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
              className={`w-full cursor-pointer px-12 py-8 text-left text-14 font-light transition-colors hover:bg-job xl:px-24 xl:py-12 xl:text-20 ${
                option.value === value ? 'text-primary' : 'text-black'
              }`}
            >
              {option.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function JobCard({ job, onApply }) {
  const [open, setOpen] = useState(false)
  const panelId = `job-${job.title.replace(/\W+/g, '-').toLowerCase()}`
  const jdProps = job.jd
    ? { href: job.jd, download: true }
    : { href: '#apply', 'aria-disabled': true, title: 'Job description coming soon', onClick: (e) => e.preventDefault() }

  return (
    <article className="flex flex-col gap-24 rounded-12 bg-job p-20 xl:gap-55 xl:p-80">
      <div className="flex items-start justify-between gap-16 xl:items-center">
        <div className="flex max-w-1164 min-w-0 flex-1 flex-col gap-8 xl:gap-16">
          <h3 className="text-20 leading-24 tracking-display capitalize xl:text-48 xl:leading-60">{job.title}</h3>
          <p className="text-12 leading-16 font-light text-grey uppercase xl:text-28 xl:leading-40">
            {job.location} | {job.type} | Experience: {job.experience}
          </p>
        </div>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? 'Hide' : 'Show'} details for ${job.title}`}
          onClick={() => setOpen((v) => !v)}
          className="size-32 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-110 xl:size-57"
        >
          <img src="/assets/careers/plus.svg" alt="" className={`size-full transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
        </button>
      </div>

      <div>
        <div
          id={panelId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <div className="overflow-hidden">
            <p className="pb-24 text-14 leading-20 font-light text-grey xl:max-w-1164 xl:pb-40 xl:text-24 xl:leading-36">
              {job.summary || 'Full job description coming soon.'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 xl:gap-24">
          <Button href="#apply" size="sm" onClick={() => onApply(job.title)} className="xl:hidden">
            Apply now
          </Button>
          <Button href="#apply" size="lg" onClick={() => onApply(job.title)} className="hidden xl:inline-flex">
            Apply now
          </Button>
          <Button variant="outline" size="sm" {...jdProps} className="xl:hidden">
            Download job description
          </Button>
          <Button variant="outline" size="lg" {...jdProps} className="hidden xl:inline-flex">
            Download job description
          </Button>
        </div>
      </div>
    </article>
  )
}

export default function Openings({ onApply }) {
  const [sort, setSort] = useState('default')
  const jobs = [...openings.jobs].sort(sorters[sort])

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-48 px-16 py-80 xl:gap-100 xl:px-100 xl:py-200">
      <div className="flex flex-col gap-8 xl:gap-16">
        <h2 className="text-32 leading-36 tracking-display xl:w-1240 xl:text-64 xl:leading-80">{openings.title}</h2>
        <p className="text-16 leading-20 font-light text-grey xl:text-32 xl:leading-40">{openings.subtitle}</p>
      </div>

      <div className="flex flex-col gap-24 xl:gap-43">
        <div className="flex items-center justify-between gap-16 xl:justify-start xl:gap-84">
          <h3 className="text-24 leading-32 tracking-display capitalize xl:w-1448 xl:text-40 xl:leading-80">
            {openings.jobs.length} open positions
          </h3>
          <SortMenu value={sort} onChange={setSort} />
        </div>

        <div className="flex flex-col gap-16 xl:gap-53">
          {jobs.map((job) => (
            <JobCard key={job.title} job={job} onApply={onApply} />
          ))}
        </div>
      </div>
    </section>
  )
}

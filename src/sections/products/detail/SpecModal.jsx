import { useEffect } from 'react'

// VIEW SPECIFICATIONS overlay for the selected variant: full Technical Specifications table +
// Applications + Salient Features. Closes on Escape, backdrop click, or the close button.
export default function SpecModal({ open, onClose, family, variant }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 xl:items-center xl:p-40" onClick={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${family.name} ${variant.code} technical specifications`}
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-980 flex-col overflow-hidden rounded-t-16 bg-white xl:max-h-[88vh] xl:rounded-16"
      >
        <div className="flex items-center justify-between gap-8 border-b border-black/10 px-20 py-16 xl:px-40 xl:py-24">
          <div className="flex flex-col">
            <span className="text-20 xl:text-28">{family.name}</span>
            <span className="text-14 font-light text-grey xl:text-18">{variant.code} · Technical Specifications</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Close specifications" className="grid size-40 shrink-0 place-items-center rounded-full border border-black/15 text-24 leading-none hover:bg-silver">
            ×
          </button>
        </div>

        <div className="flex flex-col gap-32 overflow-y-auto px-20 py-24 xl:px-40 xl:py-32">
          <div>
            <h3 className="mb-12 text-18 tracking-display xl:text-24">Specification</h3>
            <dl className="grid grid-cols-1 gap-x-40 sm:grid-cols-2">
              {variant.spec.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-12 border-b border-black/10 py-10">
                  <dt className="text-14 font-light text-grey xl:text-16">{row.label}</dt>
                  <dd className="text-14 text-black xl:text-16">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="mb-12 text-18 tracking-display xl:text-24">Applications</h3>
            <div className="flex flex-wrap gap-8">
              {variant.applications.map((a, i) => (
                <span key={a.label + i} className="border border-black/10 bg-black/5 px-12 py-6 text-14 capitalize xl:text-16">
                  {a.label}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-12 text-18 tracking-display xl:text-24">Salient Features</h3>
            <ul className="flex flex-col gap-8">
              {variant.features.map((f) => (
                <li key={f} className="flex gap-8 text-14 xl:text-16">
                  <span aria-hidden className="text-primary">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

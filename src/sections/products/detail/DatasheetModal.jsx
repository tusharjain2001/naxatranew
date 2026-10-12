import { useEffect } from 'react'
import Button from '../../../components/ui/Button'
import FormStatus from '../../../components/ui/FormStatus'
import useFormSubmit from '../../../hooks/useFormSubmit'

// "Request data-sheet" form (the old site's "Download Spec Sheet" form: first/last name, company, email).
// Sends to the backend's /api/datasheet with the motor on show; the backend emails that motor's PDF to the
// visitor and the lead to the team. Rendered only while open, so every opening starts with a fresh form.
const label = 'text-14 text-grey xl:text-16'
const box =
  'h-48 w-full rounded-4 border border-silver bg-field px-16 text-16 text-black outline-none transition-colors placeholder:text-14 placeholder:text-grey/40 focus:border-primary xl:h-56 xl:placeholder:text-16'

function Field({ label: text, className = '', ...input }) {
  return (
    <label className={`flex min-w-0 flex-col gap-6 ${className}`}>
      <span className={label}>
        {text}
        <span className="text-[red]"> *</span>
      </span>
      <input required className={box} {...input} />
    </label>
  )
}

export default function DatasheetModal({ onClose, family, variant }) {
  const { status, message, sending, formKey, onSubmit } = useFormSubmit('datasheet')
  // Single-variant motors go by their own name (AF 58, PT-500, AKSH 3115); the rest by variant code.
  const motor = variant.displayName ?? variant.code

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 xl:items-center xl:p-40" onClick={onClose} role="presentation">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="datasheet-title"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-[92vh] w-full max-w-720 flex-col overflow-hidden rounded-t-16 bg-white xl:rounded-16"
      >
        <div className="flex items-center justify-between gap-8 border-b border-black/10 px-20 py-16 xl:px-40 xl:py-24">
          <div className="flex flex-col">
            <h2 id="datasheet-title" className="text-20 xl:text-28">
              Request Data-Sheet
            </h2>
            <span className="text-14 font-light text-grey xl:text-18">{variant.displayName ? family.name : `${family.name} · ${variant.code}`}</span>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="grid size-40 shrink-0 cursor-pointer place-items-center rounded-full border border-black/15 text-24 leading-none hover:bg-silver">
            ×
          </button>
        </div>

        <form key={formKey} onSubmit={onSubmit} aria-busy={sending} className="flex flex-col gap-16 overflow-y-auto px-20 py-24 xl:gap-20 xl:px-40 xl:py-32">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 xl:gap-20">
            <Field label="First Name" name="firstName" autoComplete="given-name" placeholder="First name" autoFocus />
            <Field label="Last Name" name="lastName" autoComplete="family-name" placeholder="Last name" />
          </div>
          <Field label="Company Name" name="company" autoComplete="organization" placeholder="Company name" />
          <Field label="Email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          <input type="hidden" name="motor" value={motor} />
          <input type="hidden" name="page" value={window.location.pathname} />
          <div className="flex flex-col items-start gap-12 pt-4">
            <Button as="button" type="submit" size="spec" disabled={sending} className="cursor-pointer disabled:cursor-wait xl:hidden">
              {sending ? 'Sending...' : 'Submit'}
            </Button>
            <Button as="button" type="submit" disabled={sending} className="hidden cursor-pointer disabled:cursor-wait xl:inline-flex">
              {sending ? 'Sending...' : 'Submit'}
            </Button>
            <FormStatus status={status} message={message} />
          </div>
        </form>
      </div>
    </div>
  )
}

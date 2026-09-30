import { useState } from 'react'

// Form controls shared by the Careers and Contact forms, sized to the Figma input boxes
// (36px phone / 80px desktop). Typed text stays 16px on phones so iOS doesn't zoom in on focus;
// the placeholders use the artboard's 12px.
export const labelText = 'font-arial text-[length:calc(var(--spacing)*13.68)] leading-[calc(var(--spacing)*22.457)] text-grey xl:text-28 xl:leading-[calc(var(--spacing)*45.965)]'
// The Contact phone artboard sets its labels smaller, with more room above the box; on desktop its labels,
// typed text and placeholders are 24px (Careers keeps 28px). `text` is the desktop box text size.
const tones = {
  default: { label: labelText, gap: 'gap-[calc(var(--spacing)*2.807)]', text: 'xl:text-28 xl:placeholder:text-28' },
  contact: {
    label: 'font-arial text-14 leading-[calc(var(--spacing)*13.13)] text-grey xl:text-24 xl:leading-[calc(var(--spacing)*45.965)]',
    gap: 'gap-[calc(var(--spacing)*8.799)]',
    text: 'xl:text-24 xl:placeholder:text-24',
  },
}
const boxText = (tone) => tones[tone ?? 'default'].text
const box =
  'w-full rounded-[calc(var(--spacing)*1.641)] border-[calc(var(--spacing)*0.41)] border-silver bg-field xl:rounded-5-7 xl:border-[calc(var(--spacing)*1.436)] px-[calc(var(--spacing)*8.52)] font-arial text-16 text-black outline-none transition-colors placeholder:font-sans placeholder:text-12 placeholder:text-grey/40 focus:border-primary'
const fieldHeight = 'h-36 xl:h-80'
const chevron =
  'pointer-events-none absolute top-1/2 right-[calc(var(--spacing)*8.62)] h-[calc(var(--spacing)*4.447)] w-[calc(var(--spacing)*8.706)] -translate-y-1/2 xl:right-[calc(var(--spacing)*33.45)] xl:h-[calc(var(--spacing)*11.277)] xl:w-[calc(var(--spacing)*22.555)]'

// `markClass` recolours the asterisk; the contact form's company field has a plain one.
export function Required({ className = 'text-[red]' }) {
  return <span className={className}> *</span>
}

function Labelled({ label, required, markClass, className, tone = 'default', children }) {
  const t = tones[tone ?? 'default']
  return (
    <label className={`flex min-w-0 flex-col ${t.gap} xl:gap-[calc(var(--spacing)*5.746)] ${className}`}>
      <span className={`whitespace-nowrap ${t.label}`}>
        {label}
        {required && <Required className={markClass} />}
      </span>
      {children}
    </label>
  )
}

// `chevron` draws the dropdown arrow for a free-text field that suggests values (a datalist).
export function Field({ label, required = true, markClass, className = '', inputClass = '', tone, chevron: withChevron = false, ...input }) {
  const field = <input required={required} className={`${fieldHeight} xl:px-32 ${box} ${boxText(tone)} ${withChevron ? 'pr-24 xl:pr-80' : ''} ${inputClass}`} {...input} />
  return (
    <Labelled label={label} required={required} markClass={markClass} className={className} tone={tone}>
      {withChevron ? (
        <span className="relative block">
          {field}
          <img src="/assets/industry/shared/select-chevron.svg" alt="" className={chevron} />
        </span>
      ) : (
        field
      )}
    </Labelled>
  )
}

export function SelectField({ label, name, placeholder, options, className = '', tone }) {
  const [value, setValue] = useState('')
  return (
    <Labelled label={label} className={className} tone={tone}>
      <span className="relative block">
        <select
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${fieldHeight} cursor-pointer appearance-none pr-24 max-xl:text-12 xl:pr-80 xl:pl-32 ${box} ${boxText(tone)} ${value ? '' : 'text-grey/40'}`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="text-black">
              {option}
            </option>
          ))}
        </select>
        <img src="/assets/industry/shared/select-chevron.svg" alt="" className={chevron} />
      </span>
    </Labelled>
  )
}

export function TextAreaField({ label, className = '', tone, ...textarea }) {
  return (
    <Labelled label={label} className={className} tone={tone}>
      <textarea className={`h-64 resize-none py-7 xl:h-200 xl:px-32 xl:pt-29 ${box} ${boxText(tone)}`} {...textarea} />
    </Labelled>
  )
}

export function FileField({ id, name, label, accept, className = '' }) {
  const [fileName, setFileName] = useState('')
  return (
    <div className={`flex flex-col gap-[calc(var(--spacing)*2.807)] xl:gap-[calc(var(--spacing)*5.746)] ${className}`}>
      <span id={`${id}-label`} className={`whitespace-nowrap ${labelText}`}>
        {label}
        <Required />
      </span>
      <div className="flex items-center gap-[calc(var(--spacing)*8.421)] xl:gap-[calc(var(--spacing)*17.237)]">
        <input
          id={id}
          name={name}
          type="file"
          required
          accept={accept}
          aria-labelledby={`${id}-label`}
          onChange={(e) => setFileName(e.target.files[0]?.name ?? '')}
          className="peer sr-only"
        />
        <label
          htmlFor={id}
          className="shrink-0 cursor-pointer rounded-[calc(var(--spacing)*2.807)] border-[calc(var(--spacing)*0.702)] border-[#9d9d9d] bg-silver p-[calc(var(--spacing)*7.018)] font-arial text-[length:calc(var(--spacing)*13.68)] leading-[calc(var(--spacing)*22.457)] whitespace-nowrap xl:rounded-5-7 xl:border-[calc(var(--spacing)*1.436)] text-black transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-primary hover:bg-[#cfcfcf] xl:p-[calc(var(--spacing)*14.364)] xl:text-28 xl:leading-[calc(var(--spacing)*45.965)]"
        >
          Choose File
        </label>
        <span className={`truncate xl:max-w-400 ${labelText}`}>{fileName || 'No file chosen'}</span>
      </div>
    </div>
  )
}

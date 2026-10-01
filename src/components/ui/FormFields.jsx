import { useState } from 'react'

// Form controls shared by the Careers and Contact forms, sized to the Figma input boxes
// (40px phone / 60px desktop). Typed text stays 16px on phones so iOS doesn't zoom in on focus;
// the placeholders use the artboard's 14px (24px on desktop).
// Phone labels are 14px with 8px down to the box; desktop labels are 28px on Careers and 24px on Contact.
const phoneLabel = 'text-14 leading-[calc(var(--spacing)*11.937)] text-grey'
const tones = {
  default: { label: `${phoneLabel} xl:font-arial xl:text-28 xl:leading-[calc(var(--spacing)*45.965)]`, chevron: 'xl:right-[calc(var(--spacing)*25.95)]' },
  contact: { label: `${phoneLabel} xl:font-arial xl:text-24 xl:leading-[calc(var(--spacing)*45.965)]`, chevron: 'xl:right-[calc(var(--spacing)*33.45)]' },
}
const box =
  'w-full rounded-[calc(var(--spacing)*1.492)] border-[calc(var(--spacing)*0.373)] border-silver bg-field xl:rounded-5-7 xl:border-[calc(var(--spacing)*1.436)] px-[calc(var(--spacing)*7.83)] xl:px-[calc(var(--spacing)*23.5)] text-16 text-black outline-none transition-colors placeholder:text-14 placeholder:text-grey/40 focus:border-primary xl:text-24 xl:placeholder:text-24'
const fieldHeight = 'h-40 xl:h-60'
const chevron = (tone) =>
  `pointer-events-none absolute top-1/2 right-[calc(var(--spacing)*7.92)] h-4 w-8 -translate-y-1/2 xl:h-[calc(var(--spacing)*11.277)] xl:w-[calc(var(--spacing)*22.555)] ${tones[tone ?? 'default'].chevron}`
// The resume picker keeps Arial (it stands in for the browser's file button) with taller lines.
const fileText = 'font-arial text-14 leading-[calc(var(--spacing)*22.982)] text-grey xl:text-28 xl:leading-[calc(var(--spacing)*45.965)]'

// `markClass` recolours the asterisk; the contact form's company field has a plain one.
export function Required({ className = 'text-[red]' }) {
  return <span className={className}> *</span>
}

function Labelled({ label, required, markClass, className, tone = 'default', children }) {
  const t = tones[tone ?? 'default']
  return (
    <label className={`flex min-w-0 flex-col gap-8 xl:gap-[calc(var(--spacing)*5.746)] ${className}`}>
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
  const field = <input required={required} className={`${fieldHeight} ${box} ${withChevron ? 'pr-24 xl:pr-80' : ''} ${inputClass}`} {...input} />
  return (
    <Labelled label={label} required={required} markClass={markClass} className={className} tone={tone}>
      {withChevron ? (
        <span className="relative block">
          {field}
          <img src="/assets/industry/shared/select-chevron.svg" alt="" className={chevron(tone)} />
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
          className={`${fieldHeight} cursor-pointer appearance-none pr-24 max-xl:text-14 xl:pr-80 ${box} ${value ? '' : 'text-grey/40'}`}
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
        <img src="/assets/industry/shared/select-chevron.svg" alt="" className={chevron(tone)} />
      </span>
    </Labelled>
  )
}

export function TextAreaField({ label, className = '', tone, ...textarea }) {
  return (
    <Labelled label={label} className={className} tone={tone}>
      <textarea className={`h-92 resize-none pt-[calc(var(--spacing)*10.33)] xl:h-180 xl:pt-[calc(var(--spacing)*15.82)] ${box}`} {...textarea} />
    </Labelled>
  )
}

export function FileField({ id, name, label, accept, className = '' }) {
  const [fileName, setFileName] = useState('')
  return (
    <div className={`flex flex-col gap-[calc(var(--spacing)*2.873)] xl:gap-[calc(var(--spacing)*5.746)] ${className}`}>
      <span id={`${id}-label`} className={`whitespace-nowrap ${fileText}`}>
        {label}
        <Required />
      </span>
      <div className="flex items-center gap-[calc(var(--spacing)*8.618)] xl:gap-[calc(var(--spacing)*17.237)]">
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
          className="flex h-30 shrink-0 cursor-pointer items-center rounded-[calc(var(--spacing)*2.873)] border-[calc(var(--spacing)*0.718)] border-[#9d9d9d] bg-silver px-[calc(var(--spacing)*7.182)] font-arial text-12 leading-[calc(var(--spacing)*22.982)] whitespace-nowrap xl:h-60 xl:rounded-5-7 xl:border-[calc(var(--spacing)*1.436)] text-black transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-primary hover:bg-[#cfcfcf] xl:px-[calc(var(--spacing)*14.364)] xl:text-24 xl:leading-[calc(var(--spacing)*45.965)]"
        >
          Choose File
        </label>
        <span className={`truncate xl:max-w-400 ${fileText}`}>{fileName || 'No file chosen'}</span>
      </div>
    </div>
  )
}

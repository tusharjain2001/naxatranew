import { useState } from 'react'

// Form controls shared by the Careers and Contact forms, sized to the Figma input boxes.
export const labelText = 'font-arial text-[length:calc(var(--spacing)*13.68)] leading-[calc(var(--spacing)*22.457)] text-grey xl:text-28 xl:leading-[calc(var(--spacing)*45.965)]'
const box =
  'w-full rounded-3 border border-silver bg-field xl:rounded-5-7 xl:border-[calc(var(--spacing)*1.436)] px-16 font-arial text-16 text-black outline-none transition-colors placeholder:font-sans placeholder:text-grey/40 focus:border-primary xl:text-28'
const fieldBox = `h-[calc(var(--spacing)*49.834)] xl:h-102 xl:px-32 ${box}`

// `markClass` recolours the asterisk; the contact form's company field has a plain one.
export function Required({ className = 'text-[red]' }) {
  return <span className={className}> *</span>
}

function Labelled({ label, required, markClass, className, children }) {
  return (
    <label className={`flex min-w-0 flex-col gap-[calc(var(--spacing)*2.807)] xl:gap-[calc(var(--spacing)*5.746)] ${className}`}>
      <span className={`whitespace-nowrap ${labelText}`}>
        {label}
        {required && <Required className={markClass} />}
      </span>
      {children}
    </label>
  )
}

export function Field({ label, required = true, markClass, className = '', inputClass = '', ...input }) {
  return (
    <Labelled label={label} required={required} markClass={markClass} className={className}>
      <input required={required} className={`${fieldBox} ${inputClass}`} {...input} />
    </Labelled>
  )
}

export function SelectField({ label, name, placeholder, options, className = '' }) {
  const [value, setValue] = useState('')
  return (
    <Labelled label={label} className={className}>
      <span className="relative block">
        <select
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`h-[calc(var(--spacing)*49.834)] cursor-pointer appearance-none pr-44 xl:h-102 xl:pr-80 xl:pl-32 ${box} ${value ? '' : 'text-grey/40'}`}
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
        <img
          src="/assets/industry/shared/select-chevron.svg"
          alt=""
          className="pointer-events-none absolute top-1/2 right-16 h-6 w-12 -translate-y-1/2 xl:right-[calc(var(--spacing)*33.45)] xl:h-[calc(var(--spacing)*11.277)] xl:w-[calc(var(--spacing)*22.555)]"
        />
      </span>
    </Labelled>
  )
}

export function TextAreaField({ label, className = '', ...textarea }) {
  return (
    <Labelled label={label} className={className}>
      <textarea className={`h-140 resize-none py-12 xl:h-288 xl:px-32 xl:pt-29 ${box}`} {...textarea} />
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

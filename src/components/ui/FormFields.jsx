import { useState } from 'react'

// Form controls shared by the Careers and Contact forms, sized to the Figma input boxes.
export const labelText = 'font-arial text-14 leading-20 text-grey xl:text-28 xl:leading-[calc(var(--spacing)*45.965)]'
const fieldBox =
  'h-52 w-full rounded-5-7 border-[calc(var(--spacing)*1.436)] border-silver bg-field px-16 font-arial text-16 text-black outline-none transition-colors focus:border-primary xl:h-102 xl:px-24 xl:text-28'

export function Required() {
  return <span className="text-[red]"> *</span>
}

export function Field({ label, className = '', ...input }) {
  return (
    <label className={`flex min-w-0 flex-col gap-6 xl:gap-[calc(var(--spacing)*5.746)] ${className}`}>
      <span className={`whitespace-nowrap ${labelText}`}>
        {label}
        <Required />
      </span>
      <input required className={fieldBox} {...input} />
    </label>
  )
}

export function FileField({ id, name, label, accept, className = '' }) {
  const [fileName, setFileName] = useState('')
  return (
    <div className={`flex flex-col gap-6 xl:gap-[calc(var(--spacing)*5.746)] ${className}`}>
      <span id={`${id}-label`} className={`whitespace-nowrap ${labelText}`}>
        {label}
        <Required />
      </span>
      <div className="flex items-center gap-12 xl:gap-[calc(var(--spacing)*17.237)]">
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
          className="shrink-0 cursor-pointer rounded-5-7 border-[calc(var(--spacing)*1.436)] border-[#9d9d9d] bg-silver p-8 font-arial text-16 leading-20 whitespace-nowrap text-black transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-primary hover:bg-[#cfcfcf] xl:p-[calc(var(--spacing)*14.364)] xl:text-28 xl:leading-[calc(var(--spacing)*45.965)]"
        >
          Choose File
        </label>
        <span className={`truncate xl:max-w-400 ${labelText}`}>{fileName || 'No file chosen'}</span>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { sharedAssets, specForm } from '../../data/industry/shared'
import Button from '../../components/ui/Button'

// Phone fields share the Contact form's sizing (FormFields.jsx); desktop keeps its own artboard values.
// The industry phone artboards draw a smaller form (`compact`): 12px labels over 26px boxes, 16px apart.
// The drone phone artboard (`open`) drops the card: full-width 50px boxes, name and email side by side.
const xlLabel = 'xl:text-20 xl:leading-[calc(var(--spacing)*26.81)]'
const xlBox =
  'bg-field text-black outline-none transition-colors placeholder:text-grey/40 focus:border-primary xl:rounded-[calc(var(--spacing)*3.351)] xl:border-[calc(var(--spacing)*0.838)] xl:px-[calc(var(--spacing)*17.59)] xl:text-20 xl:placeholder:text-20 xl:font-sans'
const sizes = {
  default: {
    label: `text-[length:calc(var(--spacing)*13.68)] leading-[calc(var(--spacing)*22.457)] text-grey max-xl:font-arial ${xlLabel}`,
    gap: 'gap-[calc(var(--spacing)*2.807)]',
    box: `w-full rounded-3 border border-silver px-16 text-16 max-xl:font-arial max-xl:placeholder:font-sans ${xlBox}`,
    input: 'h-[calc(var(--spacing)*49.834)]',
    textarea: 'h-140 py-12',
    form: 'gap-20',
    button: 'spec',
  },
  compact: {
    label: `text-12 leading-[calc(var(--spacing)*11.937)] text-grey ${xlLabel}`,
    gap: 'gap-8',
    // Typed text stays 16px so iOS doesn't zoom in on focus; the placeholders use the artboard's 10px.
    box: `w-full rounded-[calc(var(--spacing)*1.492)] border-[calc(var(--spacing)*0.373)] border-silver px-[calc(var(--spacing)*7.83)] text-16 placeholder:text-10 ${xlBox}`,
    input: 'h-26',
    textarea: 'h-[calc(var(--spacing)*52.225)] py-[calc(var(--spacing)*6.34)] placeholder:text-12',
    form: 'gap-16',
    button: 'heroM',
  },
  open: {
    label: `text-[length:calc(var(--spacing)*13.68)] leading-[calc(var(--spacing)*22.457)] text-grey max-xl:font-arial ${xlLabel}`,
    gap: 'gap-[calc(var(--spacing)*2.807)]',
    box: `w-full rounded-3 border border-silver px-10 text-16 placeholder:text-12 ${xlBox}`,
    input: 'h-[calc(var(--spacing)*49.834)]',
    textarea: 'h-98 py-8',
    form: 'gap-[calc(var(--spacing)*19.65)]',
    button: 'form',
  },
}

function Field({ label: text, required, className = '', size, children }) {
  return (
    <label className={`flex flex-col ${size.width ?? 'w-340'} ${size.gap} xl:gap-[calc(var(--spacing)*3.351)] ${className}`}>
      <span className={size.label}>
        {text}
        {required && <span className="text-[red]"> *</span>}
      </span>
      {children}
    </label>
  )
}

// Not connected to a backend yet: submitting validates the required fields and stops there.
// `title` (two lines) and `text` default to the shared spec-form copy but can be overridden, e.g. the
// Products pages reuse this as "Need Help Finding The Right Motor?".
// `wide` widens the copy column so the products/listing "Need Help Finding The Right Motor?" heading
// renders on 2 lines and the body on 2 lines (Figma node 14394:1963 text column), matching the artboard.
// The form column stays put; only the heading/body widths grow (they overflow into the layout gap).
// `flowText` lets the two body lines run together on phones (full 370 width), keeping the desktop break.
// `spacing` overrides the desktop padding (Agriculture and 3-wheeler sit it 100px from the edges, not 120).
// `open` switches the phone layout to the drone artboard's (see `sizes.open`).
export default function SpecForm({ applications, title = specForm.title, text = specForm.text, wide = false, flowText = false, spacing = 'xl:py-120', compact = false, open = false }) {
  const [application, setApplication] = useState('')
  const size = sizes[open ? 'open' : compact ? 'compact' : 'default']
  // Phone field widths: `open` pairs name and email in one row, every other field spans the column.
  const half = open ? 'max-xl:w-auto max-xl:min-w-0 max-xl:flex-1' : ''
  const full = open ? 'max-xl:w-full' : ''
  const box = size.box
  const input = `${size.input} xl:h-[calc(var(--spacing)*59.485)]`
  return (
    <section id="spec" className={`w-full scroll-mt-56 px-16 xl:scroll-mt-80 xl:px-100 ${open ? 'py-100' : 'py-60'} ${spacing}`}>
      <div className={`mx-auto flex flex-col ${open ? 'gap-38' : 'gap-[calc(var(--spacing)*35.62)]'} xl:w-fit xl:flex-row xl:gap-[calc(var(--spacing)*155.28)] ${wide ? 'xl:items-center' : 'xl:items-start'}`}>
        <div className={`flex flex-col gap-[calc(var(--spacing)*10.686)] xl:w-578 xl:gap-28 ${wide ? '' : 'xl:pt-33'}`}>
          <h2 className={`w-313 text-32 leading-[calc(var(--spacing)*35.62)] capitalize ${open ? 'tracking-display xl:tracking-normal' : ''} xl:text-64 ${wide ? 'xl:w-640 xl:leading-80' : 'xl:w-auto xl:leading-72'}`}>
            {title[0]}
            <br />
            {title[1]}
          </h2>
          <p className={`${open ? 'w-344 leading-[calc(var(--spacing)*19.543)] font-light text-grey xl:font-normal xl:text-black' : `${flowText ? 'w-370' : 'w-261'} leading-[calc(var(--spacing)*17.81)]`} text-14 xl:text-32 xl:leading-40 ${wide ? 'xl:w-640' : 'xl:w-544'}`}>
            {Array.isArray(text) ? (
              <>
                {text[0]}
                {flowText ? ' ' : ''}
                <br className={flowText ? 'hidden xl:inline' : ''} />
                {text[1]}
              </>
            ) : (
              text
            )}
          </p>
          <a href={`mailto:${specForm.email}`} className={`group flex w-fit items-center xl:gap-10 ${open ? 'gap-11' : 'gap-4'}`}>
            <img
              src={sharedAssets.mail}
              alt=""
              className={`${open ? 'h-[calc(var(--spacing)*16.932)] w-23' : 'h-[calc(var(--spacing)*8.257)] w-[calc(var(--spacing)*11.219)]'} xl:h-[calc(var(--spacing)*16.413)] xl:w-[calc(var(--spacing)*22.29)]`}
            />
            <span className={`${open ? 'text-14' : 'text-12'} font-medium text-primary underline underline-offset-2 group-hover:no-underline xl:text-[length:calc(var(--spacing)*24.767)]`}>{specForm.email}</span>
          </a>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`flex flex-col items-start ${size.form} xl:w-fit xl:gap-25 xl:rounded-8 xl:border-2 xl:border-silver xl:p-32 ${
            open ? 'w-full' : 'w-fit rounded-4 border-[calc(var(--spacing)*0.891)] border-silver p-[calc(var(--spacing)*14.248)]'
          }`}
        >
          <div className={`flex ${open ? 'w-full flex-row gap-[calc(var(--spacing)*19.543)]' : `flex-col ${size.form}`} xl:w-auto xl:flex-row xl:gap-20`}>
            <Field size={size} label="Full Name (Required)" required className={`${half} xl:w-[calc(var(--spacing)*387.071)]`}>
              <input required name="name" autoComplete="name" placeholder="Enter Full Name" className={`${input} ${box}`} />
            </Field>
            <Field size={size} label="Email ID (Required)" required className={`${half} xl:w-[calc(var(--spacing)*356.91)]`}>
              <input required type="email" name="email" autoComplete="email" placeholder="Enter Email ID" className={`${input} ${box}`} />
            </Field>
          </div>
          <div className={`flex flex-col ${size.form} ${full} xl:w-auto xl:flex-row xl:gap-20`}>
            <Field size={size} label="Company Name (Required)" required className={`${full} xl:w-[calc(var(--spacing)*387.071)]`}>
              <input required name="company" autoComplete="organization" placeholder="Enter Company Name" className={`${input} ${box}`} />
            </Field>
            <Field size={size} label="Application Type" className={`${full} xl:w-[calc(var(--spacing)*356.91)]`}>
              <span className="relative block">
                <select
                  name="application"
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  className={`${input} cursor-pointer appearance-none pr-44 xl:pr-44 ${compact ? 'max-xl:text-10' : open ? 'max-xl:text-12' : ''} ${box} ${application ? '' : 'text-grey/40'}`}
                >
                  <option value="" disabled>
                    Choose your application type
                  </option>
                  {applications.map((name) => (
                    <option key={name} value={name} className="text-black">
                      {name}
                    </option>
                  ))}
                  <option value="Other" className="text-black">
                    Other
                  </option>
                </select>
                <img src={sharedAssets.chevron} alt="" className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${compact ? 'right-[calc(var(--spacing)*7.92)] h-4 w-8' : 'right-16 h-6 w-12'} xl:right-[calc(var(--spacing)*20.13)] xl:h-[calc(var(--spacing)*7.109)] xl:w-[calc(var(--spacing)*14.218)]`} />
              </span>
            </Field>
          </div>
          <Field size={size} label="Any Message" className={`${full} xl:w-[calc(var(--spacing)*764.088)]`}>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className={`${size.textarea} resize-none xl:h-[calc(var(--spacing)*117.294)] xl:py-[calc(var(--spacing)*14.24)] ${box}`}
            />
          </Field>
          <Button as="button" type="submit" size={size.button} className={`cursor-pointer xl:hidden ${open ? 'mt-[calc(var(--spacing)*18.35)]' : ''}`}>
            {specForm.cta}
          </Button>
          <Button as="button" type="submit" className="hidden cursor-pointer xl:inline-flex">
            {specForm.cta}
          </Button>
        </form>
      </div>
    </section>
  )
}

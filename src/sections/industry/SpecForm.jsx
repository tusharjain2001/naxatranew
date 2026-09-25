import { useState } from 'react'
import { sharedAssets, specForm } from '../../data/industry/shared'
import Button from '../../components/ui/Button'

const label = 'text-12 leading-[calc(var(--spacing)*11.937)] text-grey xl:text-20 xl:leading-[calc(var(--spacing)*26.81)]'
const box =
  'w-full rounded-[calc(var(--spacing)*1.492)] border-[calc(var(--spacing)*0.373)] border-silver bg-field px-[calc(var(--spacing)*7.83)] text-black outline-none transition-colors placeholder:text-grey/40 focus:border-primary xl:rounded-[calc(var(--spacing)*3.351)] xl:border-[calc(var(--spacing)*0.838)] xl:px-[calc(var(--spacing)*17.59)] xl:text-20'

function Field({ label: text, required, className = '', children }) {
  return (
    <label className={`flex w-340 flex-col gap-8 xl:gap-[calc(var(--spacing)*3.351)] ${className}`}>
      <span className={label}>
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
export default function SpecForm({ applications, title = specForm.title, text = specForm.text, wide = false, flowText = false }) {
  const [application, setApplication] = useState('')
  return (
    <section id="spec" className="w-full scroll-mt-56 px-16 py-60 xl:scroll-mt-80 xl:px-100 xl:py-120">
      <div className={`mx-auto flex flex-col gap-[calc(var(--spacing)*35.62)] xl:w-fit xl:flex-row xl:gap-[calc(var(--spacing)*155.28)] ${wide ? 'xl:items-center' : 'xl:items-start'}`}>
        <div className={`flex flex-col gap-[calc(var(--spacing)*10.686)] xl:w-578 xl:gap-28 ${wide ? '' : 'xl:pt-33'}`}>
          <h2 className={`w-313 text-32 leading-[calc(var(--spacing)*35.62)] capitalize xl:text-64 ${wide ? 'xl:w-640 xl:leading-80' : 'xl:w-auto xl:leading-72'}`}>
            {title[0]}
            <br />
            {title[1]}
          </h2>
          <p className={`${flowText ? 'w-370' : 'w-261'} text-14 leading-[calc(var(--spacing)*17.81)] xl:text-32 xl:leading-40 ${wide ? 'xl:w-640' : 'xl:w-544'}`}>
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
          <a href={`mailto:${specForm.email}`} className="group flex w-fit items-center gap-4 xl:gap-10">
            <img src={sharedAssets.mail} alt="" className="h-[calc(var(--spacing)*8.257)] w-[calc(var(--spacing)*11.219)] xl:h-[calc(var(--spacing)*16.413)] xl:w-[calc(var(--spacing)*22.29)]" />
            <span className="text-12 font-medium text-primary underline underline-offset-2 group-hover:no-underline xl:text-[length:calc(var(--spacing)*24.767)]">{specForm.email}</span>
          </a>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-fit flex-col items-start gap-16 rounded-4 border-[calc(var(--spacing)*0.891)] border-silver p-[calc(var(--spacing)*14.248)] xl:gap-25 xl:rounded-8 xl:border-2 xl:p-32"
        >
          <div className="flex flex-col gap-16 xl:flex-row xl:gap-20">
            <Field label="Full Name (Required)" required className="xl:w-[calc(var(--spacing)*387.071)]">
              <input required name="name" autoComplete="name" placeholder="Enter Full Name" className={`h-26 text-10 xl:h-[calc(var(--spacing)*59.485)] ${box}`} />
            </Field>
            <Field label="Email ID (Required)" required className="xl:w-[calc(var(--spacing)*356.91)]">
              <input required type="email" name="email" autoComplete="email" placeholder="Enter Email ID" className={`h-26 text-10 xl:h-[calc(var(--spacing)*59.485)] ${box}`} />
            </Field>
          </div>
          <div className="flex flex-col gap-16 xl:flex-row xl:gap-20">
            <Field label="Company Name (Required)" required className="xl:w-[calc(var(--spacing)*387.071)]">
              <input required name="company" autoComplete="organization" placeholder="Enter Company Name" className={`h-26 text-10 xl:h-[calc(var(--spacing)*59.485)] ${box}`} />
            </Field>
            <Field label="Application Type" className="xl:w-[calc(var(--spacing)*356.91)]">
              <span className="relative block">
                <select
                  name="application"
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  className={`h-26 cursor-pointer appearance-none pr-24 text-10 xl:h-[calc(var(--spacing)*59.485)] xl:pr-44 ${box} ${application ? '' : 'text-grey/40'}`}
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
                <img src={sharedAssets.chevron} alt="" className="pointer-events-none absolute top-1/2 right-[calc(var(--spacing)*7.92)] h-4 w-8 -translate-y-1/2 xl:right-[calc(var(--spacing)*20.13)] xl:h-[calc(var(--spacing)*7.109)] xl:w-[calc(var(--spacing)*14.218)]" />
              </span>
            </Field>
          </div>
          <Field label="Any Message" className="xl:w-[calc(var(--spacing)*764.088)]">
            <textarea
              name="message"
              placeholder="Write your message here..."
              className={`h-[calc(var(--spacing)*52.225)] resize-none text-12 py-[calc(var(--spacing)*6.34)] xl:h-[calc(var(--spacing)*117.294)] xl:py-[calc(var(--spacing)*14.24)] ${box}`}
            />
          </Field>
          <Button as="button" type="submit" size="spec" className="cursor-pointer xl:hidden">
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

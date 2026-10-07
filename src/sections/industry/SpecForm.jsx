import { useState } from 'react'
import { sharedAssets, specForm } from '../../data/industry/shared'
import Button from '../../components/ui/Button'
import FormStatus from '../../components/ui/FormStatus'
import useFormSubmit from '../../hooks/useFormSubmit'

// Phone (industry and products artboards, node 15333:2607): 14px labels 8px over 40px boxes, the four
// fields 20px apart, then the message box and the button 16px apart, in a card padded 20/14.
// Every page with this form (industry, Drone, Products) uses it. Desktop keeps its own artboard values.
const xlLabel = 'xl:text-20 xl:leading-[calc(var(--spacing)*26.81)]'
const xlBox =
  'bg-field text-black outline-none transition-colors placeholder:text-grey/40 focus:border-primary xl:rounded-[calc(var(--spacing)*3.351)] xl:border-[calc(var(--spacing)*0.838)] xl:px-[calc(var(--spacing)*17.59)] xl:text-20 xl:placeholder:text-20 xl:font-sans'
const sizes = {
  card: {
    label: `text-14 leading-[calc(var(--spacing)*11.937)] text-grey ${xlLabel}`,
    gap: 'gap-8',
    // Typed text stays 16px so iOS doesn't zoom in on focus; the placeholders use the artboard's 14px.
    box: `w-full rounded-[calc(var(--spacing)*1.492)] border-[calc(var(--spacing)*0.373)] border-silver px-[calc(var(--spacing)*7.83)] text-16 placeholder:text-14 ${xlBox}`,
    input: 'h-40',
    textarea: 'h-92 pt-[calc(var(--spacing)*10.33)]',
    select: 'max-xl:text-14',
    chevron: 'right-[calc(var(--spacing)*7.92)] h-4 w-8',
    fields: 'gap-20',
    form: 'gap-16',
    button: 'spec',
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

// Sends to the backend's /api/spec-enquiry (with the page it was sent from), which emails the team and a
// confirmation to the visitor.
// `title` (two lines) and `text` default to the shared spec-form copy but can be overridden, e.g. the
// Products pages reuse this as "Need Help Finding The Right Motor?".
// `wide` widens the copy column so the products/listing "Need Help Finding The Right Motor?" heading
// renders on 2 lines and the body on 2 lines (Figma node 14394:1963 text column), matching the artboard.
// The form column stays put; only the heading/body widths grow (they overflow into the layout gap).
// `flowText` lets the two body lines run together on phones (full 370 width), keeping the desktop break.
// `spacing` overrides the desktop padding (Agriculture and 3-wheeler sit it 100px from the edges, not 120).
// `centered` is the Products listing's desktop layout (node 15421:66253): the heading, text and email centred
// on one line each, 80px above a 1192px form with two equal columns.
export default function SpecForm({ applications, title = specForm.title, text = specForm.text, wide = false, flowText = false, centered = false, spacing = 'xl:py-120' }) {
  const [application, setApplication] = useState('')
  const { status, message, sending, formKey, onSubmit } = useFormSubmit('spec-enquiry', { onSuccess: () => setApplication('') })
  const size = sizes.card
  // The Products listing form (node 15421:66253) spells out "(Required)" before the asterisk.
  const req = centered ? ' (Required)' : ''
  const box = size.box
  const input = `${size.input} xl:h-[calc(var(--spacing)*59.485)]`
  const half = centered ? 'xl:min-w-0 xl:flex-1' : ''
  const nameWidth = centered ? half : 'xl:w-[calc(var(--spacing)*387.071)]'
  const emailWidth = centered ? half : 'xl:w-[calc(var(--spacing)*356.91)]'
  const layout = centered
    ? { wrap: 'xl:flex-col xl:items-center xl:gap-80', copy: 'xl:items-center xl:gap-24 xl:text-center', title: 'xl:w-auto xl:leading-80', text: 'xl:w-auto', form: 'xl:w-1192', row: 'xl:w-full', message: 'xl:w-full' }
    : {
        wrap: `xl:flex-row xl:gap-[calc(var(--spacing)*155.28)] ${wide ? 'xl:items-center' : 'xl:items-start'}`,
        copy: `xl:w-578 xl:gap-28 ${wide ? '' : 'xl:pt-33'}`,
        title: wide ? 'xl:w-640 xl:leading-80' : 'xl:w-auto xl:leading-72',
        text: wide ? 'xl:w-640' : 'xl:w-544',
        form: 'xl:w-fit',
        row: 'xl:w-auto',
        message: 'xl:w-[calc(var(--spacing)*764.088)]',
      }
  return (
    <section id="spec" className={`w-full scroll-mt-56 px-16 xl:scroll-mt-80 xl:px-100 py-60 ${spacing}`}>
      <div className={`mx-auto flex flex-col gap-[calc(var(--spacing)*35.62)] xl:w-fit ${layout.wrap}`}>
        <div className={`flex flex-col gap-[calc(var(--spacing)*10.686)] ${layout.copy}`}>
          <h2 className={`w-313 text-32 leading-[calc(var(--spacing)*35.62)] capitalize xl:text-64 ${layout.title}`}>
            {title[0]}
            {centered && ' '}
            <br className={centered ? 'xl:hidden' : ''} />
            {title[1]}
          </h2>
          <p className={`${flowText ? 'w-370' : 'w-261'} leading-[calc(var(--spacing)*17.81)] text-14 xl:text-32 xl:leading-40 ${layout.text}`}>
            {Array.isArray(text) ? (
              <>
                {text[0]}
                {flowText ? ' ' : ''}
                <br className={flowText ? `hidden ${centered ? '' : 'xl:inline'}` : centered ? 'xl:hidden' : ''} />
                {!flowText && centered && <span className="hidden xl:inline"> </span>}
                {text[1]}
              </>
            ) : (
              text
            )}
          </p>
          <a href={`mailto:${specForm.email}`} className={`group flex w-fit items-center gap-4 xl:gap-10`}>
            <img
              src={sharedAssets.mail}
              alt=""
              className={`h-[calc(var(--spacing)*8.257)] w-[calc(var(--spacing)*11.219)] xl:h-[calc(var(--spacing)*16.413)] xl:w-[calc(var(--spacing)*22.29)]`}
            />
            <span className={`text-12 font-medium text-primary underline underline-offset-2 group-hover:no-underline xl:text-[length:calc(var(--spacing)*24.767)]`}>{specForm.email}</span>
          </a>
        </div>

        <form
          key={formKey}
          onSubmit={onSubmit}
          aria-busy={sending}
          className={`flex w-fit flex-col items-start rounded-4 border-[calc(var(--spacing)*0.891)] border-silver px-14 py-20 ${size.form} xl:gap-25 xl:rounded-8 xl:border-2 xl:p-32 ${layout.form}`}
        >
          <div className={`flex flex-col ${size.fields} xl:gap-25 ${centered ? 'xl:w-full' : ''}`}>
            <div className={`flex flex-col ${size.fields} xl:flex-row xl:gap-20 ${layout.row}`}>
              <Field size={size} label={`Full Name${req}`} required className={nameWidth}>
                <input required name="name" autoComplete="name" placeholder="Enter Full Name" className={`${input} ${box}`} />
              </Field>
              <Field size={size} label={`Email ID${req}`} required className={emailWidth}>
                <input required type="email" name="email" autoComplete="email" placeholder="Enter Email ID" className={`${input} ${box}`} />
              </Field>
            </div>
            <div className={`flex flex-col ${size.fields} xl:flex-row xl:gap-20 ${layout.row}`}>
              <Field size={size} label={`Company Name${req}`} required className={nameWidth}>
                <input required name="company" autoComplete="organization" placeholder="Enter Company Name" className={`${input} ${box}`} />
              </Field>
              <Field size={size} label="Application Type" className={emailWidth}>
                <span className="relative block">
                  <select
                    name="application"
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    className={`${input} cursor-pointer appearance-none pr-44 xl:pr-44 ${size.select} ${box} ${application ? '' : 'text-grey/40'}`}
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
                  <img src={sharedAssets.chevron} alt="" className={`pointer-events-none absolute top-1/2 -translate-y-1/2 ${size.chevron} xl:right-[calc(var(--spacing)*20.13)] xl:h-[calc(var(--spacing)*7.109)] xl:w-[calc(var(--spacing)*14.218)]`} />
                </span>
              </Field>
            </div>
          </div>
          <Field size={size} label="Any Message" className={layout.message}>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className={`${size.textarea} resize-none xl:h-[calc(var(--spacing)*117.294)] xl:py-[calc(var(--spacing)*14.24)] ${box}`}
            />
          </Field>
          <input type="hidden" name="page" value={window.location.pathname} />
          <Button as="button" type="submit" size={size.button} disabled={sending} className="cursor-pointer disabled:cursor-wait xl:hidden">
            {sending ? 'Sending...' : specForm.cta}
          </Button>
          <Button as="button" type="submit" disabled={sending} className="hidden cursor-pointer disabled:cursor-wait xl:inline-flex">
            {sending ? 'Sending...' : specForm.cta}
          </Button>
          <FormStatus status={status} message={message} className={`w-340 ${layout.message}`} />
        </form>
      </div>
    </section>
  )
}

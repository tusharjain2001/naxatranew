import { useSyncExternalStore } from 'react'
import { applyForm, openings } from '../../data/careers'
import Button from '../../components/ui/Button'
import { Field, FileField } from '../../components/ui/FormFields'

// The two artboards word some placeholders differently, which inputs can't switch with CSS.
const desktopQuery = '(min-width: 1280px)'
const subscribe = (onChange) => {
  const query = window.matchMedia(desktopQuery)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}
const useDesktop = () => useSyncExternalStore(subscribe, () => window.matchMedia(desktopQuery).matches, () => true)

// Desktop labels add "(Required)" before the asterisk.
const required = (label) => (
  <>
    {label}
    <span className="hidden xl:inline"> (Required)</span>
  </>
)

// Not connected to a backend yet: submitting validates the fields and stops there.
// Phone (15421:64325): the heading, then one column of fields (Company Name in place of Contact Number)
// with a "Contact us" button 20px under the last one.
// Desktop (15421:64139): the heading in a 600px column beside the 1088px form, 98px below the openings.
export default function ApplyForm({ role, onRoleChange }) {
  const desktop = useDesktop()
  return (
    <section
      id="apply"
      className="mx-auto flex w-full max-w-1920 scroll-mt-56 flex-col gap-38 px-16 py-56 xl:scroll-mt-80 xl:flex-row xl:items-start xl:justify-between xl:gap-0 xl:px-100 xl:pt-98 xl:pb-282"
    >
      <div className="flex flex-col gap-10 xl:w-600 xl:shrink-0 xl:gap-16">
        {/* The heading breaks after its first sentence; the 532px desktop width puts "To You." on a third line. */}
        <h2 className="text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:w-532 xl:text-64 xl:leading-80">
          <span className="xl:hidden">
            {applyForm.mobileTitle[0]}
            <br />
            {applyForm.mobileTitle[1]}
          </span>
          <span className="hidden xl:inline">
            {applyForm.title.split('. ')[0]}. <br />
            {applyForm.title.split('. ')[1]}
          </span>
        </h2>
        <p className="text-14 leading-[calc(var(--spacing)*19.543)] font-light text-grey xl:text-24 xl:leading-40">
          <span className="text-[red]">*</span> {applyForm.note}
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-start gap-20 xl:w-1088 xl:shrink-0 xl:gap-48">
        <div className="flex w-full flex-col gap-20 xl:gap-32">
          <div className="grid gap-20 xl:grid-cols-2 xl:gap-32">
            <Field label={required('Full Name')} name="name" autoComplete="name" placeholder="Enter Full Name" />
            <Field label={required('Email ID')} name="email" type="email" autoComplete="email" placeholder={desktop ? 'Enter EmailID' : 'Enter Email ID'} />
            {desktop ? (
              <Field label="Contact Number" name="phone" type="tel" autoComplete="tel" placeholder="Enter Contact Number" />
            ) : (
              <Field label="Company Name" name="company" autoComplete="organization" placeholder="Enter Company Name" />
            )}
            <Field
              label="Applying for which role?"
              name="role"
              list="open-roles"
              placeholder={desktop ? 'Choose your role' : 'Choose your application type'}
              chevron
              value={role}
              onChange={(e) => onRoleChange(e.target.value)}
            />
            <datalist id="open-roles">
              {openings.jobs.map((job) => (
                <option key={job.title} value={job.title} />
              ))}
            </datalist>
          </div>
          <div className="flex flex-col gap-20 xl:flex-row xl:gap-32">
            <FileField id="resume" name="resume" label="Attach Resume" accept=".pdf,.doc,.docx" className="xl:shrink-0" />
            <Field label="Linkedin Link" name="linkedin" type="url" placeholder="Enter Linked In link" className="xl:flex-1" />
          </div>
        </div>

        <Button as="button" type="submit" size="spec" className="cursor-pointer xl:hidden">
          Contact us
        </Button>
        <Button as="button" type="submit" size="hero" className="hidden cursor-pointer xl:inline-flex xl:rounded-4">
          Submit Application
        </Button>
      </form>
    </section>
  )
}

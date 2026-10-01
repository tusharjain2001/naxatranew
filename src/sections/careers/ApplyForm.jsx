import { applyForm, openings } from '../../data/careers'
import Button from '../../components/ui/Button'
import { Field, FileField } from '../../components/ui/FormFields'

// Not connected to a backend yet: submitting validates the fields and stops there.
// Phone: the heading, then one column of fields with the submit button 20px under the last one.
// Desktop (node 13957:5107): the heading in a 600px column beside the 1088px form, 212px below the openings.
export default function ApplyForm({ role, onRoleChange }) {
  return (
    <section
      id="apply"
      className="mx-auto flex w-full max-w-1920 scroll-mt-56 flex-col gap-38 px-16 py-56 xl:scroll-mt-80 xl:flex-row xl:items-start xl:justify-between xl:gap-0 xl:px-100 xl:pt-212 xl:pb-282"
    >
      <div className="flex flex-col gap-10 xl:w-600 xl:shrink-0 xl:gap-16">
        <h2 className="text-32 leading-[calc(var(--spacing)*35.6)] tracking-display capitalize xl:text-64 xl:leading-80">
          {/* The phone artboard breaks the heading after "details". */}
          {applyForm.title.split(' with ')[0]} <br className="xl:hidden" />
          with {applyForm.title.split(' with ')[1]}
        </h2>
        <p className="hidden font-light text-grey xl:block xl:text-32 xl:leading-40">
          <span className="text-[red]">*</span> {applyForm.note}
        </p>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-start gap-20 xl:w-1088 xl:shrink-0 xl:gap-48">
        <div className="flex w-full flex-col gap-20 xl:gap-32">
          <div className="grid gap-20 xl:grid-cols-2 xl:gap-32">
            <Field label="Full Name" name="name" autoComplete="name" placeholder="Enter Full Name" />
            <Field label="Email ID" name="email" type="email" autoComplete="email" placeholder="Enter EmailID" />
            <Field label="Contact Number" name="phone" type="tel" autoComplete="tel" placeholder="Enter Contact Number" />
            <Field
              label="Applying for which role?"
              name="role"
              list="open-roles"
              placeholder="Choose your role"
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
          Submit Application
        </Button>
        <Button as="button" type="submit" size="hero" className="hidden cursor-pointer xl:inline-flex xl:rounded-4">
          Submit Application
        </Button>
      </form>
    </section>
  )
}

import { applyForm, openings } from '../../data/careers'
import Button from '../../components/ui/Button'
import { Field, FileField } from '../../components/ui/FormFields'

// Not connected to a backend yet: submitting validates the fields and stops there.
export default function ApplyForm({ role, onRoleChange }) {
  return (
    <section
      id="apply"
      className="mx-auto flex w-full max-w-1920 scroll-mt-56 flex-col gap-40 px-16 py-80 xl:mb-184 xl:h-1000 xl:scroll-mt-80 xl:justify-center xl:gap-60 xl:px-100 xl:py-0"
    >
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col items-end gap-40 xl:gap-60">
        <div className="flex w-full flex-col gap-32 xl:gap-70">
          <div className="flex flex-col gap-8 xl:gap-16">
            <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">{applyForm.title}</h2>
            <p className="text-16 leading-20 font-light text-grey xl:text-32 xl:leading-40">
              <span className="text-[red]">*</span> {applyForm.note}
            </p>
          </div>

          <div className="flex flex-col gap-20 xl:gap-32">
            <div className="grid gap-20 xl:grid-cols-2 xl:gap-x-40 xl:gap-y-32">
              <Field label="Full Name (Required)" name="name" autoComplete="name" />
              <Field label="Email ID (Required)" name="email" type="email" autoComplete="email" />
              <Field label="Contact Number" name="phone" type="tel" autoComplete="tel" />
              <Field
                label="Applying for which role?"
                name="role"
                list="open-roles"
                value={role}
                onChange={(e) => onRoleChange(e.target.value)}
              />
              <datalist id="open-roles">
                {openings.jobs.map((job) => (
                  <option key={job.title} value={job.title} />
                ))}
              </datalist>
            </div>
            <div className="flex flex-col gap-20 xl:flex-row xl:gap-46">
              <FileField id="resume" name="resume" label="Attach Resume" accept=".pdf,.doc,.docx" className="xl:shrink-0" />
              <Field label="Linkedin Link" name="linkedin" type="url" placeholder="" className="xl:flex-1" />
            </div>
          </div>
        </div>

        <Button as="button" type="submit" size="sm" className="cursor-pointer xl:hidden">
          Submit Enquiry
        </Button>
        <Button as="button" type="submit" size="lg" className="hidden cursor-pointer xl:inline-flex">
          Submit Enquiry
        </Button>
      </form>
    </section>
  )
}

import { useState } from 'react'
import { enquiry } from '../../data/contact'
import Button from '../../components/ui/Button'
import { Field, FileField } from '../../components/ui/FormFields'

// Not connected to a backend yet: submitting validates the fields and stops there.
export default function EnquiryForm() {
  const [topic, setTopic] = useState(enquiry.topics[0])

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-40 px-16 py-80 xl:gap-60 xl:px-100 xl:py-200">
      <div role="tablist" aria-label="Enquiry type" className="grid grid-cols-2 gap-8 xl:flex xl:gap-24">
        {enquiry.topics.map((item) => {
          const active = item === topic
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls="enquiry-form"
              onClick={() => setTopic(item)}
              className={`cursor-pointer rounded-4 border p-12 text-center text-16 leading-20 whitespace-nowrap capitalize transition-colors duration-200 xl:flex-1 xl:p-16 xl:text-24 xl:leading-32 ${
                active ? 'border-primary bg-[rgba(0,101,225,0.1)] font-medium text-primary' : 'border-silver text-black hover:border-primary/50'
              }`}
            >
              {item}
            </button>
          )
        })}
      </div>

      <form id="enquiry-form" role="tabpanel" aria-label={topic} onSubmit={(e) => e.preventDefault()} className="flex flex-col items-end gap-40 xl:gap-70">
        <input type="hidden" name="topic" value={topic} />
        <div className="flex w-full flex-col gap-8 xl:gap-16">
          <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">{enquiry.title}</h2>
          <p className="text-16 leading-20 font-light text-grey xl:text-32 xl:leading-40">{enquiry.subtitle}</p>
        </div>

        <div className="flex w-full flex-col gap-20 xl:gap-[calc(var(--spacing)*45.965)]">
          <div className="flex flex-col gap-20 xl:gap-[calc(var(--spacing)*40.219)]">
            <div className="grid gap-20 xl:grid-cols-2 xl:gap-40">
              <Field label="Full Name (Required)" name="name" autoComplete="name" />
              <Field label="Email ID (Required)" name="email" type="email" autoComplete="email" />
            </div>
            <Field label="Contact Number" name="phone" type="tel" autoComplete="tel" />
          </div>
          <Field label={enquiry.fields.role} name="role" />
          <FileField id="enquiry-file" name="attachment" label={enquiry.fields.file} accept=".pdf,.doc,.docx" />
          <Field label={enquiry.fields.link} name="linkedin" type="url" />
        </div>

        <Button as="button" type="submit" size="sm" className="cursor-pointer xl:hidden">
          Submit Enquiry
        </Button>
        <Button as="button" type="submit" size="hero" className="hidden cursor-pointer xl:inline-flex">
          Submit Enquiry
        </Button>
      </form>
    </section>
  )
}

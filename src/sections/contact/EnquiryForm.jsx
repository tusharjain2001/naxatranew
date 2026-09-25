import { useState } from 'react'
import { enquiry } from '../../data/contact'
import Button from '../../components/ui/Button'
import { Field, SelectField, TextAreaField } from '../../components/ui/FormFields'
import TabBar from '../../components/ui/TabBar'

// Not connected to a backend yet: submitting validates the fields and stops there.
export default function EnquiryForm() {
  const [topic, setTopic] = useState(enquiry.topics[0])

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-40 px-16 py-80 xl:gap-60 xl:px-100 xl:py-200">
      <TabBar tabs={enquiry.topics} active={topic} onChange={setTopic} label="Enquiry type" controls="enquiry-form" />

      <form id="enquiry-form" role="tabpanel" aria-label={topic} onSubmit={(e) => e.preventDefault()} className="flex flex-col items-end gap-40 xl:gap-70">
        <input type="hidden" name="topic" value={topic} />
        <div className="flex w-full flex-col gap-8 xl:gap-16">
          <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">{enquiry.title}</h2>
          <p className="text-16 leading-20 font-light text-grey xl:text-32 xl:leading-40">{enquiry.subtitle}</p>
        </div>

        <div className="grid w-full gap-20 xl:grid-cols-2 xl:gap-x-40 xl:gap-y-[calc(var(--spacing)*40.219)]">
          <Field label="Full Name (Required)" name="name" autoComplete="name" placeholder="Enter Full Name" />
          <Field label="Email ID (Required)" name="email" type="email" autoComplete="email" placeholder="Enter Email ID" />
          <Field
            label="Company Name (Required)"
            name="company"
            autoComplete="organization"
            placeholder="Enter Company Name"
            markClass="text-grey"
           
          />
          <SelectField label="Application Type" name="application" placeholder="Choose your application type" options={enquiry.applications} />
          <TextAreaField label="Any Message" name="message" placeholder="Write your message here..." className="xl:col-span-2" />
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

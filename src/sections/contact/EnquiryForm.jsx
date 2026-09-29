import { useState } from 'react'
import { enquiry } from '../../data/contact'
import Button from '../../components/ui/Button'
import { Field, SelectField, TextAreaField } from '../../components/ui/FormFields'
import TabBar from '../../components/ui/TabBar'

// Not connected to a backend yet: submitting validates the fields and stops there.
export default function EnquiryForm() {
  const [topic, setTopic] = useState(enquiry.topics[0])

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-60 px-16 py-56 xl:gap-60 xl:px-100 xl:py-100">
      <TabBar tabs={enquiry.topics} active={topic} onChange={setTopic} label="Enquiry type" controls="enquiry-form" />

      {/* Desktop: the heading sits in a 516px column beside the form. */}
      <div className="flex flex-col gap-40 xl:flex-row xl:items-start xl:gap-120">
        <div className="flex w-full flex-col gap-[calc(var(--spacing)*7.817)] xl:w-516 xl:shrink-0 xl:gap-16">
          <h2 className="w-233 text-32 leading-[calc(var(--spacing)*39.085)] tracking-display capitalize xl:w-auto xl:text-64 xl:leading-80">
            {enquiry.title[0]} <br className="hidden xl:inline" />
            {enquiry.title[1]}
          </h2>
          <p className="text-14 leading-18 font-light text-grey xl:text-32 xl:leading-40">{enquiry.subtitle}</p>
        </div>

        <form id="enquiry-form" role="tabpanel" aria-label={topic} onSubmit={(e) => e.preventDefault()} className="flex flex-col items-start gap-40 xl:min-w-0 xl:flex-1">
          <input type="hidden" name="topic" value={topic} />
          <div className="flex w-full flex-col gap-24">
            <p className="hidden border-b-[0.5px] border-black/50 text-24 leading-40 font-light text-grey uppercase xl:block">{enquiry.formLabels[topic]}</p>
            <div className="grid w-full gap-[calc(var(--spacing)*17.599)] xl:grid-cols-2 xl:gap-x-40 xl:gap-y-[calc(var(--spacing)*40.219)]">
              <Field label="Full Name (Required)" name="name" autoComplete="name" placeholder="Enter Full Name" tone="contact" />
              <Field label="Email ID (Required)" name="email" type="email" autoComplete="email" placeholder="Enter Email ID" tone="contact" />
              <Field label="Company Name (Required)" name="company" autoComplete="organization" placeholder="Enter Company Name" markClass="text-grey" tone="contact" />
              <SelectField label="Application Type" name="application" placeholder="Choose your application type" options={enquiry.applications} tone="contact" />
              <TextAreaField label="Any Message" name="message" placeholder="Write your message here..." className="xl:col-span-2" tone="contact" />
            </div>
          </div>

          <Button as="button" type="submit" size="heroM" className="cursor-pointer xl:hidden">
            Submit Enquiry
          </Button>
          <Button as="button" type="submit" size="hero" className="hidden cursor-pointer xl:inline-flex">
            Submit Enquiry
          </Button>
        </form>
      </div>
    </section>
  )
}

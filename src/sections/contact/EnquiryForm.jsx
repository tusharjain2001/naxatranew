import { useState } from 'react'
import { enquiry } from '../../data/contact'
import Button from '../../components/ui/Button'
import FormStatus from '../../components/ui/FormStatus'
import { Field, SelectField, TextAreaField } from '../../components/ui/FormFields'
import TabBar from '../../components/ui/TabBar'
import useFormSubmit from '../../hooks/useFormSubmit'

// Sends to the backend's /api/contact, which emails the team and a confirmation to the visitor.
export default function EnquiryForm() {
  const [topic, setTopic] = useState(enquiry.topics[0])
  const { status, message, sending, formKey, onSubmit } = useFormSubmit('contact')
  const label = sending ? 'Sending...' : 'Submit Enquiry'

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

        <form key={formKey} id="enquiry-form" role="tabpanel" aria-label={topic} onSubmit={onSubmit} aria-busy={sending} className="flex flex-col items-start gap-38 xl:min-w-0 xl:flex-1 xl:gap-40">
          <input type="hidden" name="topic" value={topic} />
          <div className="flex w-full flex-col gap-[calc(var(--spacing)*17.599)] xl:gap-24">
            <p className="flex h-20 items-center border-b-[0.5px] border-black/50 text-12 font-light text-grey uppercase xl:block xl:h-auto xl:text-24 xl:leading-40">{enquiry.formLabels[topic]}</p>
            <div className="grid w-full gap-20 xl:grid-cols-2 xl:gap-x-40 xl:gap-y-32">
              <Field label="Full Name" name="name" autoComplete="name" placeholder="Enter Full Name" tone="contact" />
              <Field label="Email ID" name="email" type="email" autoComplete="email" placeholder="Enter Email ID" tone="contact" />
              <Field label="Company Name" name="company" autoComplete="organization" placeholder="Enter Company Name" tone="contact" />
              <SelectField label="Application Type" name="application" placeholder="Choose your application type" options={enquiry.applications} tone="contact" />
              <TextAreaField label="Any Message" name="message" placeholder="Write your message here..." className="xl:col-span-2" tone="contact" />
            </div>
          </div>

          <Button as="button" type="submit" size="form" disabled={sending} className="h-32 cursor-pointer disabled:cursor-wait max-xl:text-12 xl:hidden">
            {label}
          </Button>
          <Button as="button" type="submit" size="hero" disabled={sending} className="hidden cursor-pointer disabled:cursor-wait xl:inline-flex">
            {label}
          </Button>
          <FormStatus status={status} message={message} className="-mt-22 xl:-mt-24" />
        </form>
      </div>
    </section>
  )
}

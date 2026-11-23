import ContactHero from '../sections/contact/ContactHero'
import EnquiryForm from '../sections/contact/EnquiryForm'
import { usePageTitle } from '../lib/pageTitle'

export default function Contact() {
  usePageTitle('Contact Us | Naxatra Labs')

  return (
    <main className="flex flex-col">
      <ContactHero />
      <EnquiryForm />
    </main>
  )
}

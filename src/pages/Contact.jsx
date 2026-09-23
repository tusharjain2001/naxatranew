import { useEffect } from 'react'
import ContactHero from '../sections/contact/ContactHero'
import EnquiryForm from '../sections/contact/EnquiryForm'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Us | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <ContactHero />
      <EnquiryForm />
    </main>
  )
}

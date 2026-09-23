import { useEffect, useState } from 'react'
import CareersHero from '../sections/careers/CareersHero'
import Openings from '../sections/careers/Openings'
import ApplyForm from '../sections/careers/ApplyForm'

export default function Careers() {
  // "Apply now" on a job card fills the role field of the form below.
  const [role, setRole] = useState('')

  useEffect(() => {
    document.title = 'Careers | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <CareersHero />
      <Openings onApply={setRole} />
      <ApplyForm role={role} onRoleChange={setRole} />
    </main>
  )
}

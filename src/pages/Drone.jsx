import { useEffect } from 'react'
import drone from '../data/industry/drone'
import DroneHero from '../sections/drone/DroneHero'
import DroneApplications from '../sections/drone/DroneApplications'
import EngineeringPower from '../sections/drone/EngineeringPower'
import Prototype from '../sections/drone/Prototype'
import Showcase from '../sections/drone/Showcase'
import Pulse from '../sections/drone/Pulse'
import Capabilities from '../sections/drone/Capabilities'
import DifferentApplication from '../sections/industry/DifferentApplication'
import Features from '../sections/industry/Features'
import Process from '../sections/industry/Process'
import SpecForm from '../sections/industry/SpecForm'

// Drone industry page. Sections follow the Figma "drone page (latest)" artboard (node 15420:4563, no
// testimonials); the last four are shared with the other industry pages.
export default function Drone() {
  useEffect(() => {
    document.title = drone.title
  }, [])

  const applications = drone.applications.flatMap((group) => group.cards.map((card) => card.label))

  return (
    <main className="flex flex-col">
      <DroneHero hero={drone.hero} />
      <DroneApplications groups={drone.applications} />
      <EngineeringPower data={drone.power} />
      <Prototype data={drone.prototype} />
      <Showcase rows={drone.showcase} />
      <Pulse data={drone.pulse} />
      <Capabilities data={drone.capabilities} />
      <DifferentApplication image={drone.cta.image} imageClass={drone.cta.imageClass} mobileImage={drone.cta.mobileImage} mobileButton="cta" mobileTop="pt-99" mobileBottom="pb-81" />
      <Features data={drone.features} />
      <Process centered />
      <SpecForm applications={applications} spacing="xl:py-100" />
    </main>
  )
}

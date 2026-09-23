import { contactHero } from '../../data/contact'
import PageHero from '../../components/ui/PageHero'

export default function ContactHero() {
  return (
    <PageHero
      title={contactHero.title}
      subtitle={contactHero.subtitle}
      background={contactHero.background}
      foreground={contactHero.foreground}
      foregroundAlt="Electric delivery vehicle, field robots, a drone and a robot arm in a park by a city skyline"
      frame="bottom-0 left-1/2 h-460 w-1004 -translate-x-1/2 xl:top-2 xl:bottom-auto xl:left-0 xl:h-880 xl:w-1920 xl:translate-x-0"
      textTop="xl:pt-89"
    />
  )
}

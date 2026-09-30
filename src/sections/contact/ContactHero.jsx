import { contactHero } from '../../data/contact'
import PageHero from '../../components/ui/PageHero'
import ScrollDown from '../../components/ui/ScrollDown'

export default function ContactHero() {
  return (
    <PageHero
      title={contactHero.title}
      subtitle={contactHero.subtitle}
      image={contactHero.image}
      foregroundAlt="Electric delivery vehicle, field robots, a drone and a robot arm in a park by a city skyline"
      textTop="xl:pt-89"
      mobile={{
        image: contactHero.mobileImage,
        height: 'h-716',
        wash: 'bottom-auto h-489 xl:bottom-0 xl:h-auto',
        text: 'gap-18 pt-80',
        title: 'text-40 leading-48',
        subtitle: 'text-20 leading-28',
      }}
    >
      <ScrollDown className="xl:tx-802" />
    </PageHero>
  )
}

import { careersHero } from '../../data/careers'
import PageHero from '../../components/ui/PageHero'
import ScrollDown from '../../components/ui/ScrollDown'

export default function CareersHero() {
  return (
    <PageHero
      title={careersHero.title}
      subtitle={careersHero.subtitle}
      image={careersHero.image}
      foregroundAlt="The Naxatra Labs team standing together on the factory roof"
      mobile={{
        image: careersHero.mobileImage,
        height: 'h-718',
        // The blue wash is already baked into the phone image.
        wash: 'hidden',
        text: 'gap-18 pt-100',
        title: 'text-40 leading-48',
        subtitle: 'text-20 leading-28',
      }}
    >
      <ScrollDown className="xl:tx-785" />
    </PageHero>
  )
}

import { careersHero } from '../../data/careers'
import PageHero from '../../components/ui/PageHero'

export default function CareersHero() {
  return (
    <PageHero
      title={careersHero.title}
      subtitle={careersHero.subtitle}
      image={careersHero.image}
      foregroundAlt=""
      cta={careersHero.cta}
      scrollDown={false}
      mobile={{
        image: careersHero.mobileImage,
        height: 'h-718',
        // The blueprint has no blue wash.
        wash: 'hidden',
        text: 'gap-24 pt-80',
        title: 'text-40 leading-48',
        subtitle: 'text-20 leading-28',
      }}
    />
  )
}

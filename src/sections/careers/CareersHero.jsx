import { careersHero } from '../../data/careers'
import PageHero from '../../components/ui/PageHero'

export default function CareersHero() {
  return (
    <PageHero
      title={careersHero.title}
      subtitle={careersHero.subtitle}
      background={careersHero.background}
      foreground={careersHero.team}
      foregroundAlt="The Naxatra Labs team standing together on the factory roof"
      frame="bottom-0 left-1/2 h-400 w-782 -translate-x-1/2 xl:-top-163 xl:bottom-auto xl:-left-69 xl:h-1108 xl:w-2166 xl:translate-x-0"
      wash="xl:bottom-auto xl:-top-39 xl:h-1082"
    />
  )
}

import { blogsHero } from '../../data/blogs'
import PageHero from '../../components/ui/PageHero'

export default function BlogsHero() {
  return (
    <PageHero
      title={blogsHero.title}
      subtitle={blogsHero.subtitle}
      background={blogsHero.background}
      foreground={blogsHero.foreground}
      foregroundAlt="Riders on an electric scooter and motorcycle beside an electric auto-rickshaw on a city highway"
      frame="bottom-0 left-1/2 h-460 w-900 -translate-x-1/2 xl:-top-103 xl:bottom-auto xl:left-0 xl:h-983 xl:w-1922 xl:translate-x-0"
      foregroundFrame="bottom-0 left-1/2 h-460 w-900 -translate-x-1/2 xl:-top-104 xl:bottom-auto xl:left-2 xl:h-982 xl:w-1920 xl:translate-x-0"
      wash="xl:inset-auto xl:-top-103 xl:left-0 xl:h-983 xl:w-1922"
      washStyle={{ backgroundImage: 'linear-gradient(182.03deg, rgba(43,106,164,0.8) 23.802%, rgba(24,99,218,0) 57.429%)' }}
      textTop="xl:pt-89"
      rowClass="xl:gap-197"
      titleClass="xl:w-945 xl:shrink-0"
      subtitleClass="xl:w-439 xl:shrink-0 xl:text-right"
    />
  )
}

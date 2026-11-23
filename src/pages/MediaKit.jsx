import MediaKitHero from '../sections/media-kit/MediaKitHero'
import MediaKitDownload from '../sections/media-kit/MediaKitDownload'
import { usePageTitle } from '../lib/pageTitle'

export default function MediaKit() {
  usePageTitle('Media Kit | Naxatra Labs')

  return (
    <main className="flex flex-col">
      <MediaKitHero />
      <MediaKitDownload />
    </main>
  )
}

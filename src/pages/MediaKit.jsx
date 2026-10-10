import { useEffect } from 'react'
import MediaKitHero from '../sections/media-kit/MediaKitHero'
import MediaKitDownload from '../sections/media-kit/MediaKitDownload'

export default function MediaKit() {
  useEffect(() => {
    document.title = 'Media Kit | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <MediaKitHero />
      <MediaKitDownload />
    </main>
  )
}

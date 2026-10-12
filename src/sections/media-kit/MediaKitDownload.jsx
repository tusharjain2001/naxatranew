import { mediaKitDownload, mediaKitPdf } from '../../data/mediaKit'
import Button from '../../components/ui/Button'

// Pale-blue band: "Download Media Kit" beside the branding note and button on desktop (Figma 15886:9505),
// stacked and centred on the phone (15886:9447).
export default function MediaKitDownload() {
  return (
    <section id="download" className="mx-auto w-full max-w-1920 px-16 py-100 xl:px-100">
      <div className="flex flex-col items-center gap-32 bg-primary/12 px-24 py-56 text-center xl:flex-row xl:px-64 xl:text-left">
        <h2 className="w-full text-40 leading-48 tracking-display capitalize xl:w-auto xl:min-w-0 xl:flex-1 xl:text-72 xl:leading-88">
          {mediaKitDownload.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="flex flex-col items-center gap-32 xl:w-898 xl:shrink-0 xl:items-start">
          <p className="text-16 leading-24 text-grey xl:text-28 xl:leading-36">{mediaKitDownload.note}</p>
          <Button href={mediaKitPdf.href} download={mediaKitPdf.filename} size="spec" className="xl:hidden">
            {mediaKitDownload.cta}
          </Button>
          <Button href={mediaKitPdf.href} download={mediaKitPdf.filename} className="hidden xl:inline-flex">
            {mediaKitDownload.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

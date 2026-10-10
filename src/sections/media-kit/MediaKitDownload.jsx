// Ported from the old site (components/sections/media-kit/MediaKitDownloadSection.jsx).
// Adapted: assets served from /public, and the formerly-dead button now downloads the real PDF.
const cardBg = '/assets/media-kit/media-kit-card-bg.svg'
const downloadKit = '/assets/media-kit/download-kit.svg'
const MEDIA_KIT_PDF = '/pdfs/naxatra-media-kit.pdf'

export default function MediaKitDownload() {
  return (
    <section id="download" className="w-full bg-white" style={{ padding: 'clamp(48px, 6.25vw, 120px) 0' }}>
      <div
        className="mx-auto md:hidden"
        style={{ maxWidth: '460px', padding: '0 16px' }}
      >
        <div className="flex flex-col items-center text-center" style={{ gap: '18px' }}>
          <h2
            style={{
              fontSize: '26px',
              lineHeight: '1.12',
              fontWeight: 400,
              color: '#1863da',
            }}
          >
            Download Media Kit
          </h2>

          <p
            className="text-black"
            style={{
              fontSize: '10px',
              lineHeight: '1.55',
              maxWidth: '332px',
            }}
          >
            <span>Note: Always follow these Branding Guidelines while publishing</span>
            <br />
            <span>information relevant to Naxatra Labs. Download the Branding Kit below.</span>
          </p>

          <a
            href={MEDIA_KIT_PDF}
            download="Naxatra-Media-Kit-2026.pdf"
            aria-label="Download Media Kit PDF"
            className="relative block"
            style={{
              width: '188px',
              height: '40px',
              marginTop: '12px',
              overflow: 'hidden',
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
            }}
          >
            <img
              src={downloadKit}
              alt="Download Kit"
              className="block object-contain"
              style={{ width: '188px', height: '40px' }}
            />
          </a>
        </div>
      </div>

      <div
        className="mx-auto hidden md:flex md:flex-wrap items-center"
        style={{
          maxWidth: '1574px',
          padding: '0 clamp(24px, 4.2vw, 80px)',
          gap: 'clamp(24px, 3.13vw, 60px)',
          minHeight: 'clamp(120px, 11.7vw, 224px)',
        }}
      >
        {/* Left: heading */}
        <div className="flex-shrink-0" style={{ width: 'clamp(180px, 17vw, 327px)' }}>
          <h2
            style={{
              fontSize: 'clamp(22px, 2.6vw, 50px)',
              lineHeight: '1.24',
              fontWeight: 400,
              color: '#1863da',
            }}
          >
            Download Media Kit
          </h2>
        </div>

        {/* Right: card with note + button */}
        <div
          className="relative flex-1"
          style={{ minHeight: 'clamp(120px, 11.7vw, 224px)' }}
        >
          <img
            src={cardBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ objectFit: 'fill' }}
          />

          <div
            className="relative flex flex-col items-start justify-center h-full"
            style={{
              padding: 'clamp(20px, 2.08vw, 40px) clamp(24px, 3.13vw, 60px)',
              gap: 'clamp(16px, 1.56vw, 30px)',
            }}
          >
            <p
              className="text-black"
              style={{
                fontSize: 'clamp(13px, 1.04vw, 20px)',
                lineHeight: '1.7',
                maxWidth: 'clamp(280px, 55.4vw, 1064px)',
              }}
            >
              <strong>Note:</strong> Always follow these Branding Guidelines while publishing information relevant to Naxatra Labs. Download the Branding Kit below.
            </p>

            <a
              href={MEDIA_KIT_PDF}
              download="Naxatra-Media-Kit-2026.pdf"
              aria-label="Download Media Kit PDF"
              className="relative block"
              style={{ width: 'fit-content' }}
            >
              <img
                src={downloadKit}
                alt="Download Kit"
                className="block h-auto object-contain"
                style={{
                  width: 'clamp(150px, 13.6vw, 262px)',
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

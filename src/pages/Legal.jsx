import { useEffect } from 'react'

// Privacy Policy and Terms of Use: a 400px black title band, then numbered sections.
// Figma only has the 1920 artboard; mobile keeps the same order at the site's phone type sizes.
export default function Legal({ page }) {
  useEffect(() => {
    document.title = `${page.title} | Naxatra Labs`
  }, [page])

  return (
    <main className="flex flex-col">
      <section className="w-full bg-black">
        <div className="mx-auto flex max-w-1920 flex-col gap-8 px-16 py-60 xl:h-400 xl:justify-center xl:gap-16 xl:px-200 xl:py-0">
          <p className="text-16 leading-24 font-bold text-[#a3c1f0] capitalize xl:text-32 xl:leading-42">Naxatra Labs Pvt. Ltd.</p>
          <h1 className="text-40 leading-48 text-white xl:text-88 xl:leading-96">{page.title}</h1>
          <p className="text-14 leading-24 text-[#999] capitalize xl:text-24 xl:leading-42">{page.updated}</p>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-1920 flex-col gap-40 px-16 py-60 xl:gap-100 xl:px-200 xl:py-200">
        {page.sections.map((section, i) => (
          <section key={section.title} className="flex flex-col gap-8 xl:gap-16">
            <h2 className="flex gap-8 text-22 leading-28 tracking-[-0.02em] text-black capitalize xl:h-48 xl:items-center xl:gap-16 xl:text-40 xl:leading-none">
              <span className="shrink-0 xl:w-56">{String(i + 1).padStart(2, '0')}.</span>
              {section.title}
            </h2>
            <div className="text-14 leading-20 font-light text-grey xl:text-32 xl:leading-40">
              {section.text && <p>{section.text}</p>}
              {section.contact && (
                <>
                  <p className="mb-20 xl:mb-40">{section.contact.intro}</p>
                  <address className="leading-28 not-italic xl:leading-64">
                    <p className="font-bold">{section.contact.company}</p>
                    {section.contact.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </address>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}

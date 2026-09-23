import { values } from '../../data/about'

// 80px icon tile in `em`: 1 design px on desktop, 0.7 on mobile.
function ValueIcon({ icon }) {
  return (
    <span className="relative size-[80em] shrink-0 overflow-hidden rounded-4 bg-icon-tile text-[length:calc(var(--spacing)*0.7)] xl:text-[length:var(--spacing)]">
      {icon.src ? (
        <img src={icon.src} alt="" className="absolute inset-0 block size-full" />
      ) : (
        <span className={`absolute ${icon.box}`}>
          {icon.layers.map((layer) => (
            <span key={layer.src} className="absolute" style={{ inset: layer.inset }}>
              <img src={layer.src} alt="" className="block size-full" />
            </span>
          ))}
        </span>
      )}
    </span>
  )
}

export default function Values() {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-40 px-16 py-80 xl:h-960 xl:justify-center xl:gap-100 xl:px-100 xl:py-0">
      <div className="flex flex-col gap-12 xl:w-1305 xl:gap-25">
        <p className="text-12 leading-16 font-light text-grey-dark uppercase xl:text-20 xl:leading-28">{values.eyebrow}</p>
        <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-68">{values.title}</h2>
      </div>

      <ul className="grid gap-16 xl:grid-cols-2 xl:gap-64">
        {values.items.map((item) => (
          <li key={item.title} className="flex items-center gap-16 border border-black/15 bg-panel p-16 xl:gap-24 xl:p-32">
            <ValueIcon icon={item.icon} />
            <div className="flex min-w-0 flex-1 flex-col gap-4 xl:gap-0">
              <h3 className="text-16 leading-20 uppercase xl:flex xl:h-44 xl:items-center xl:text-32 xl:leading-[calc(var(--spacing)*26.55)]">
                {item.title}
              </h3>
              <p className="text-14 leading-20 text-grey xl:flex xl:h-36 xl:items-center xl:text-24 xl:leading-[calc(var(--spacing)*33.74)]">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

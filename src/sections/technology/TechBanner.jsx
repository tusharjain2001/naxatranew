// Rounded photo card with the headline over the sky: split left / right on desktop, centred on the phone.
export default function TechBanner({ data }) {
  return (
    <section className="w-full px-15 py-56 xl:flex xl:h-960 xl:justify-center xl:px-0 xl:pt-99 xl:pb-0">
      <div className="relative h-469 overflow-hidden rounded-12 xl:h-769 xl:w-1720 xl:rounded-[calc(var(--spacing)*10.522)]">
        <img src={data.image} alt={data.alt} loading="lazy" className="absolute inset-0 size-full object-cover xl:object-[50%_56%]" />
        <div className="absolute top-48 left-1/2 flex w-320 -translate-x-1/2 flex-col gap-4 text-center text-white xl:top-79 xl:left-83 xl:w-1550 xl:translate-x-0 xl:flex-row xl:items-start xl:justify-between xl:gap-0 xl:text-left">
          <h2 className="text-32 leading-36 tracking-display capitalize xl:w-821 xl:text-64 xl:leading-72">{data.title}</h2>
          <p className="text-14 leading-17 xl:w-[calc(var(--spacing)*415.6)] xl:text-[length:calc(var(--spacing)*21.044)] xl:leading-[calc(var(--spacing)*29.585)]">{data.text}</p>
        </div>
      </div>
    </section>
  )
}

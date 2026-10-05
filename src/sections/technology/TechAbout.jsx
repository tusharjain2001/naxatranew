// "Innovating the future of electric mobility": copy beside the motor render (stacked on the phone).
export default function TechAbout({ data }) {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-48 px-16 py-56 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:px-100 xl:py-100">
      <div className="flex flex-col gap-32 xl:w-1026">
        <h2 className="text-32 leading-40 tracking-display capitalize xl:w-800 xl:text-64 xl:leading-68">{data.title}</h2>
        <div className="flex flex-col gap-18 text-14 leading-18 text-grey xl:gap-32 xl:text-24 xl:leading-32">
          {data.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <div className="relative h-[calc(var(--spacing)*336.1)] w-full shrink-0 overflow-hidden rounded-[calc(var(--spacing)*5.896)] xl:h-456 xl:w-502 xl:rounded-8">
        <img src={data.image} alt={data.alt} loading="lazy" className="absolute inset-0 size-full object-cover object-right" />
      </div>
    </section>
  )
}

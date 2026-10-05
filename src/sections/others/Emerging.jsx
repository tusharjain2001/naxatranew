import Button from '../../components/ui/Button'

// "Emerging applications": copy and a button beside the robot-arm render (stacked on the phone).
export default function Emerging({ data }) {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-48 px-16 py-29 xl:flex-row xl:items-center xl:justify-between xl:gap-0 xl:px-100 xl:py-100">
      <div className="flex flex-col items-start gap-32">
        <h2 className="text-32 leading-40 tracking-display capitalize xl:w-800 xl:text-64 xl:leading-68">{data.title}</h2>
        <div className="flex w-366 flex-col gap-18 text-14 leading-18 text-grey xl:w-1034 xl:gap-32 xl:text-24 xl:leading-32">
          {data.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <Button href="#spec" size="cta" className="xl:hidden">
          {data.cta}
        </Button>
        <Button href="#spec" className="hidden h-60 px-24! xl:inline-flex">
          {data.cta}
        </Button>
      </div>
      <div className="relative h-[calc(var(--spacing)*336.1)] w-full shrink-0 overflow-hidden rounded-[calc(var(--spacing)*5.896)] xl:h-456 xl:w-502 xl:rounded-8">
        <picture>
          <source media="(max-width: 1279px)" srcSet={data.mobileImage} />
          <img src={data.image} alt={data.alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
        </picture>
      </div>
    </section>
  )
}

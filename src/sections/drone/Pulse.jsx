// "Motor and ESC, engineered as one." between the ESC and motor blueprints (one image with the dashed links).
export default function Pulse({ data }) {
  return (
    <section className="relative mt-72 h-336 w-full overflow-hidden xl:mt-0 xl:h-880">
      <picture>
        <source media="(max-width: 1279px)" srcSet={data.mobileImage} />
        <img src={data.image} alt="" loading="lazy" className="absolute inset-x-0 top-0 h-260 w-full object-cover xl:inset-0 xl:h-full" />
      </picture>
      <div className="relative mx-auto h-full max-w-1920 text-center capitalize">
        <p className="absolute top-15 left-68 w-269 text-[length:calc(var(--spacing)*6.812)] leading-[calc(var(--spacing)*6.94)] xl:top-171 xl:left-1/2 xl:w-948 xl:-translate-x-1/2 xl:text-24 xl:leading-[calc(var(--spacing)*24.452)]">
          {data.eyebrow}
        </p>
        <h2 className="absolute top-34 left-68 w-269 text-24 leading-28 xl:top-212 xl:left-1/2 xl:w-948 xl:-translate-x-1/2 xl:text-64 xl:leading-72">
          <span className="block text-grey">{data.title[0]}</span>
          <span className="block">{data.title[1]}</span>
        </h2>
        <p className="absolute top-239 left-51 w-319 text-10 leading-15 text-grey xl:top-534 xl:left-1/2 xl:w-893 xl:-translate-x-1/2 xl:text-24 xl:leading-32 xl:text-black">
          {data.text}
        </p>
      </div>
    </section>
  )
}

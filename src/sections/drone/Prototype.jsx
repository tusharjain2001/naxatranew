const em = (v) => `${v}em`

// Four stages of the motor on progressively darker tiles. Tiles are sized in `em`: 1 design px on
// desktop, 0.438 on the phone (a 411×522 tile becomes 180×229, two to a row).
export default function Prototype({ data }) {
  return (
    <section className="flex w-full flex-col items-center gap-60 py-56 xl:h-880 xl:gap-60 xl:pt-100 xl:pb-0">
      <h2 className="text-center text-24 leading-38 xl:text-56 xl:leading-[calc(var(--spacing)*75.976)]">{data.title}</h2>
      <ul className="grid grid-cols-2 gap-[14.014em] text-[length:calc(var(--spacing)*0.43794)] xl:flex xl:gap-[32em] xl:text-[length:var(--spacing)]">
        {data.stages.map((stage) => (
          <li key={stage.image} className={`relative h-[522em] w-[411em] rounded-[9em] ${stage.tone}`}>
            <img
              src={stage.image}
              alt=""
              loading="lazy"
              className="absolute max-w-none"
              style={{ left: em(stage.box.l), top: em(stage.box.t), width: em(stage.box.w), height: em(stage.box.h) }}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

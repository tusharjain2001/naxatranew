import { applications } from '../data/home'

// Every length inside the card is in 1920-artboard px expressed as `em`; the card's font-size
// is 1 design px on desktop and 0.4106 design px on mobile, matching both Figma frames.
const em = (n) => `${n}em`

// Figma exports the floor shadow with a negative `inset`; images need an explicit box to honour it.
const shadowBox = (inset) => {
  const [y, x] = inset.split(' ')
  return { top: y, left: x, width: `calc(100% - 2 * ${x})`, height: `calc(100% - 2 * ${y})` }
}

function ApplicationCard({ item }) {
  const { photo, shadow } = item
  return (
    <a
      href="#industry"
      className="group relative block h-[378.914em] w-[334.257em] shrink-0 rounded-[9.473em] bg-white transition-transform duration-300 hover:-translate-y-[6em]"
    >
      <span className="absolute inset-0 rounded-[9.473em] border-[2.271em] border-tile-border transition-colors duration-300 group-hover:border-primary/40" />
      <span className="absolute top-[1.52em] left-[2.16em] h-[313em] w-[330em] rounded-t-[7.569em] bg-tile" />

      <span className="absolute top-[325em] left-[15.5em] flex h-[40em] items-center text-grey capitalize">
        <span className={`${item.font} leading-normal`} style={{ fontSize: em(32) }}>
          {item.label}
        </span>
      </span>
      <img
        src="/assets/arrow-right.svg"
        alt=""
        className="absolute top-[334.9em] left-[270.22em] size-[30.275em] transition-transform duration-300 group-hover:translate-x-[6em]"
      />

      {shadow && (
        <span className="absolute h-[8.7em]" style={{ left: em(shadow.l), top: em(shadow.t), width: em(shadow.w) }}>
          <img src={shadow.src} alt="" className="absolute block" style={shadowBox(shadow.inset)} />
        </span>
      )}

      <span
        className={`absolute overflow-hidden rounded-t-[7.569em] ${photo.flip ? '-scale-x-100' : ''}`}
        style={{ left: em(photo.l), top: em(photo.t), width: em(photo.w), height: em(photo.h) }}
      >
        <img
          src={photo.src}
          alt=""
          loading="lazy"
          className="absolute transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ width: `${photo.crop.w}%`, height: `${photo.crop.h}%`, left: `${photo.crop.l}%`, top: `${photo.crop.t}%` }}
        />
      </span>
    </a>
  )
}

export default function Applications() {
  return (
    <section id="industry" className="mx-auto flex w-full max-w-1920 flex-col items-center gap-48 py-100 xl:gap-101 xl:pt-269 xl:pb-0">
      <div className="flex flex-col items-center gap-16 px-16 text-center xl:w-1279 xl:gap-20 xl:px-0">
        <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-72">
          Powering A Wide Range Of Applications
        </h2>
        <p className="w-334 text-14 leading-16 font-light text-grey-dark xl:w-full xl:text-32 xl:leading-normal xl:font-normal xl:tracking-display xl:text-grey">
          Designed to serve all industries.
        </p>
        <p className="w-248 text-12 leading-24 tracking-display uppercase xl:hidden">
          Find us and our manufacturing unit in <span className="text-primary">Ahmedabad, India</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-12 px-16 text-[length:calc(var(--spacing)*0.4106)] xl:flex-nowrap xl:px-0 xl:text-[length:var(--spacing)]">
        {applications.map((item) => (
          <ApplicationCard key={item.label} item={item} />
        ))}
      </div>
    </section>
  )
}

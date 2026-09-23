// Portrait card shared by the founders and investors rows. The LinkedIn badge is exported with a
// drop-shadow margin, so the SVG overflows its frame by the same share Figma gives it.
const variants = {
  founder: {
    card: 'gap-[calc(var(--spacing)*13.224)] xl:gap-[calc(var(--spacing)*24.05)]',
    photo: 'aspect-[323.265/398.182] rounded-[calc(var(--spacing)*2.595)] xl:rounded-4-7',
    badge: 'bottom-[calc(var(--spacing)*9.26)] left-9 h-[calc(var(--spacing)*14.833)] w-[calc(var(--spacing)*15.245)] xl:bottom-[calc(var(--spacing)*16.81)] xl:left-16 xl:h-[calc(var(--spacing)*26.977)] xl:w-[calc(var(--spacing)*27.726)]',
    icon: '/assets/about/linkedin-sm.svg',
    text: 'items-center gap-7 text-center xl:gap-[calc(var(--spacing)*12.733)]',
    name: 'text-[length:calc(var(--spacing)*14.002)] leading-[calc(var(--spacing)*10.89)] xl:text-26 xl:leading-[calc(var(--spacing)*19.806)]',
    role: 'text-[length:calc(var(--spacing)*10.89)] leading-[calc(var(--spacing)*10.89)] xl:text-20 xl:leading-[calc(var(--spacing)*19.806)]',
  },
  investor: {
    card: 'gap-[calc(var(--spacing)*12.679)] xl:gap-23',
    photo: 'aspect-[322.4/385.453] rounded-[calc(var(--spacing)*2.518)] xl:rounded-4-6',
    badge: 'bottom-9 left-[calc(var(--spacing)*22.72)] h-[calc(var(--spacing)*21.024)] w-[calc(var(--spacing)*21.608)] xl:bottom-[calc(var(--spacing)*16.32)] xl:left-15 xl:h-[calc(var(--spacing)*38.137)] xl:w-[calc(var(--spacing)*39.197)]',
    icon: '/assets/about/linkedin-lg.svg',
    text: 'gap-[calc(var(--spacing)*4.41)] xl:gap-8',
    name: 'text-[length:calc(var(--spacing)*13.23)] leading-[calc(var(--spacing)*15.435)] xl:text-24 xl:leading-28',
    role: 'text-[length:calc(var(--spacing)*11.025)] leading-[calc(var(--spacing)*15.435)] xl:text-20 xl:leading-28',
  },
}

export default function PersonCard({ person, variant = 'investor' }) {
  const v = variants[variant]
  return (
    <figure className={`flex flex-col ${v.card}`}>
      <div className={`relative w-full overflow-hidden bg-silver/40 ${v.photo}`}>
        <img
          src={person.image}
          alt={`Portrait of ${person.name}`}
          loading="lazy"
          className={`absolute inset-0 size-full object-cover ${person.fit ?? 'object-center'}`}
        />
        <span aria-hidden className={`absolute ${v.badge}`}>
          <img src={v.icon} alt="" className="absolute top-[-40.28%] left-[-39.19%] h-[180.56%] w-[178.38%]" />
        </span>
      </div>
      <figcaption className={`flex flex-col tracking-display text-grey-dark ${v.text}`}>
        <span className={`font-medium uppercase ${v.name}`}>{person.name}</span>
        <span className={`font-light ${v.role}`}>{person.role}</span>
      </figcaption>
    </figure>
  )
}

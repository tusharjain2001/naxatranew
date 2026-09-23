import { founders } from '../../data/about'
import PersonCard from '../../components/ui/PersonCard'

export default function Founders() {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col items-center gap-60 px-16 pt-100 pb-[calc(var(--spacing)*59.64)] xl:h-960 xl:justify-center xl:gap-60 xl:p-0">
      <div className="flex flex-col items-center gap-10 text-center capitalize xl:gap-16">
        <h2 className="w-237 text-32 leading-36 tracking-display xl:w-auto xl:text-64 xl:leading-80">{founders.title}</h2>
        <p className="py-[calc(var(--spacing)*2.86)] text-14 leading-[calc(var(--spacing)*18.145)] text-grey xl:py-0 xl:text-32 xl:leading-32">
          {founders.subtitle}
        </p>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-x-[calc(var(--spacing)*15.557)] gap-y-18 py-[calc(var(--spacing)*3.889)] xl:w-auto xl:flex-nowrap xl:gap-40 xl:py-0">
        {founders.people.map((person) => (
          <div key={person.name} className="w-[calc(50%-var(--spacing)*7.7785)] xl:w-[calc(var(--spacing)*323.265)]">
            <PersonCard person={person} variant="founder" />
          </div>
        ))}
      </div>
    </section>
  )
}

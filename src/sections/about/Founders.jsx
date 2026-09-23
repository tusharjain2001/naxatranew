import { founders } from '../../data/about'
import PersonCard from '../../components/ui/PersonCard'

export default function Founders() {
  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col items-center gap-40 px-16 py-80 xl:h-960 xl:justify-center xl:gap-60 xl:p-0">
      <div className="flex flex-col items-center gap-8 text-center capitalize xl:gap-16">
        <h2 className="text-32 leading-36 tracking-display xl:text-64 xl:leading-80">{founders.title}</h2>
        <p className="text-16 leading-20 text-grey xl:text-32 xl:leading-32">{founders.subtitle}</p>
      </div>

      <div className="flex w-full flex-wrap justify-center gap-x-12 gap-y-24 xl:w-auto xl:flex-nowrap xl:gap-40">
        {founders.people.map((person) => (
          <div key={person.name} className="w-[calc(50%-var(--spacing)*6)] xl:w-[calc(var(--spacing)*323.265)]">
            <PersonCard person={person} variant="founder" />
          </div>
        ))}
      </div>
    </section>
  )
}

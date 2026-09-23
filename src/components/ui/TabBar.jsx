// Row of equal-width pill tabs from the Contact and Blogs artboards. Two per row on mobile.
export default function TabBar({ tabs, active, onChange, label, controls }) {
  return (
    <div role="tablist" aria-label={label} className="grid grid-cols-2 gap-8 xl:flex xl:gap-24">
      {tabs.map((tab) => {
        const selected = tab === active
        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={controls}
            onClick={() => onChange(tab)}
            className={`cursor-pointer rounded-4 border p-12 text-center text-16 leading-20 whitespace-nowrap capitalize transition-colors duration-200 xl:flex-1 xl:p-16 xl:text-24 xl:leading-32 ${
              selected ? 'border-primary bg-[rgba(0,101,225,0.1)] font-medium text-primary' : 'border-silver text-black hover:border-primary/50'
            }`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}

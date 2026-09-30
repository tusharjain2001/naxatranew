// Frosted "scroll down" pill centred near the foot of a desktop hero; it glides to the next section.
// `className` places it (e.g. `xl:tx-780`); `left` moves it off centre.
export default function ScrollDown({ className = '', left = 'left-[calc(50%+0.5px)]' }) {
  const onClick = (e) => e.currentTarget.closest('section').nextElementSibling?.scrollIntoView({ behavior: 'smooth' })

  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute ${left} hidden -translate-x-1/2 cursor-pointer items-center gap-12 rounded-8 bg-white/10 px-12 py-8 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] backdrop-blur-[12px] xl:flex ${className}`}
    >
      <img src="/assets/scroll-down.svg" alt="" className="size-32" />
      <span className="h-20 w-107 text-20 leading-14 font-medium">scroll down</span>
    </button>
  )
}

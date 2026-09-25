const sets = {
  desktop: { prev: '/assets/journey-prev.svg', next: '/assets/journey-next.svg', size: 'size-50', gap: 'gap-8' },
  mobile: { prev: '/assets/m/prev.svg', next: '/assets/m/next.svg', size: 'size-[calc(var(--spacing)*38.89)]', gap: 'gap-6.25' },
  // Phone "Browse Our Other Motors" header: the mobile arrows at 32px.
  small: { prev: '/assets/m/prev.svg', next: '/assets/m/next.svg', size: 'size-32', gap: 'gap-[calc(var(--spacing)*5.12)]' },
  hero: { prev: '/assets/m/hero-prev.svg', next: '/assets/m/hero-next.svg', size: 'size-32' },
}

export function ArrowButton({ direction, set = 'desktop', onClick, disabled, label, className = '' }) {
  const s = sets[set]
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label ?? (direction === 'prev' ? 'Previous' : 'Next')}
      className={`shrink-0 cursor-pointer transition-opacity duration-200 hover:opacity-70 disabled:cursor-default disabled:opacity-40 ${s.size} ${className}`}
    >
      <img src={direction === 'prev' ? s.prev : s.next} alt="" className="block size-full" />
    </button>
  )
}

export default function SliderArrows({ set = 'desktop', onPrev, onNext, canPrev = true, canNext = true, className = '' }) {
  return (
    <div className={`flex items-start ${sets[set].gap} ${className}`}>
      <ArrowButton direction="prev" set={set} onClick={onPrev} disabled={!canPrev} />
      <ArrowButton direction="next" set={set} onClick={onNext} disabled={!canNext} />
    </div>
  )
}

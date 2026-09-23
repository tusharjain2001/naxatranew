// Mobile pagination dots from the 402px artboard: 5.45px circles, #525252, inactive at 42%.
export default function Dots({ count, active, onSelect, className = '' }) {
  return (
    <div className={`flex items-center gap-2.25 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === active}
          onClick={() => onSelect?.(i)}
          className={`size-5.5 cursor-pointer rounded-full bg-dot transition-opacity duration-300 ${i === active ? 'opacity-100' : 'opacity-42'}`}
        />
      ))}
    </div>
  )
}

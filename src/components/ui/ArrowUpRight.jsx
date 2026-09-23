const arrows = {
  black: { src: '/assets/arrow-black.svg', className: 'h-14.75 w-18' },
  'black-sm': { src: '/assets/arrow-black-sm.svg', className: 'h-14.75 w-17' },
  white: { src: '/assets/arrow-white.svg', className: 'h-14.75 w-17' },
}

// The Figma arrow is a horizontal arrow rotated -45deg inside an 11.3px box.
export default function ArrowUpRight({ tone = 'black', className = 'size-11.25' }) {
  const arrow = arrows[tone]
  return (
    <span aria-hidden className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      <img src={arrow.src} alt="" className={`block max-w-none -rotate-45 ${arrow.className}`} />
    </span>
  )
}

import ArrowUpRight from './ArrowUpRight'

const variants = {
  primary: 'bg-primary text-white hover:bg-[#1150b8]',
  outline: 'border-black text-black hover:bg-black hover:text-white',
  white: 'bg-white text-black hover:bg-silver',
}

const arrows = { primary: 'white', outline: 'black-sm', white: 'black' }
// The large size uses Figma's longer 18px arrow.
const largeArrows = { primary: 'white-lg', outline: 'black', white: 'black' }

const sizes = {
  md: 'gap-12 rounded-4 text-20 leading-20',
  hero: 'gap-13.25 rounded-5 text-20 leading-[calc(var(--spacing)*26.63)]',
  lg: 'gap-13.25 rounded-4 text-20 leading-[calc(var(--spacing)*26.63)]',
  sm: 'gap-7 rounded-2 text-12 leading-12',
  xs: 'gap-7 rounded-2 text-11-5 leading-11.5',
}

// Figma strokes sit inside the box, so outlined buttons lose the border width from their padding.
const padding = {
  solid: { md: 'px-32 py-16', hero: 'px-32 py-16', lg: 'px-32 py-16', sm: 'px-19.25 py-9.5', xs: 'px-18.5 py-9.25' },
  outline: { md: 'border-2 px-30 py-14', hero: 'border-2 px-30 py-14', lg: 'border px-31 py-15', sm: 'border px-18.25 py-8.5', xs: 'border px-17.5 py-8.25' },
}

const small = (size) => size === 'sm' || size === 'xs'

export default function Button({ as: Tag = 'a', variant = 'primary', size = 'md', className = '', children, ...props }) {
  // Let callers own `display` when they hide the button at some breakpoint.
  const display = /(^|\s)hidden(\s|$)/.test(className) ? '' : 'inline-flex'
  const pad = padding[variant === 'outline' ? 'outline' : 'solid'][size]
  return (
    <Tag
      className={`group ${display} shrink-0 items-center justify-center font-medium whitespace-nowrap uppercase transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${pad} ${className}`}
      {...props}
    >
      {children}
      <ArrowUpRight
        tone={(size === 'lg' ? largeArrows : arrows)[variant]}
        className={`transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-2 ${
          variant === 'outline' ? 'group-hover:invert' : ''
        } ${small(size) ? 'size-6.5 [&>img]:scale-[0.58]' : 'size-11.25'}`}
      />
    </Tag>
  )
}

// Quiet scroll-in motion: blocks fade up a little as they enter the viewport, with a short stagger for
// rows of cards. Classes are added from here (not in JSX) so the page renders fully visible without JS,
// and they are removed once the fade ends so each element gets its own transitions back.
const MAX_STAGGER = 6
const STAGGER_MS = 90

// Walk past single-child wrappers (section > container > inner) to the block that holds the content.
function contentRoot(el) {
  let node = el
  for (let i = 0; i < 3 && node.children.length === 1; i++) node = node.children[0]
  return node
}

// A row of 3+ cards staggers item by item; a horizontal scroller (items off to the side never enter the
// viewport) rises as one block instead.
function isRow(el) {
  if (el.children.length < 3 || el.scrollWidth > el.clientWidth + 1) return false
  const { display, flexDirection } = getComputedStyle(el)
  return display === 'grid' || (display === 'flex' && flexDirection.startsWith('row'))
}

// Skip things that are hidden, decorative (absolute layers), or already carry their own opacity.
function usable(el) {
  if (!(el instanceof HTMLElement) || el.offsetParent === null) return false
  if (/(^|\s)(xl:)?opacity-/.test(el.className)) return false
  return getComputedStyle(el).position !== 'absolute'
}

function collect() {
  const groups = []
  const sections = [...document.querySelectorAll('#root section, #root footer')]
  sections.forEach((section, index) => {
    // The page hero: only its copy block rises in (the home carousel animates itself).
    if (index === 0) {
      const title = section.id === 'home' ? null : [...section.querySelectorAll('h1')].find((h) => h.offsetParent !== null)
      const block = title?.parentElement && getComputedStyle(title.parentElement).display !== 'contents' ? title.parentElement : title
      if (block) groups.push([block])
      return
    }
    // Nested sections are handled by their outer section.
    if (section.parentElement?.closest('section')) return
    const items = []
    for (const child of contentRoot(section).children) {
      if (isRow(child)) items.push([...child.children].filter(usable))
      else if (usable(child)) items.push([child])
    }
    groups.push(...items.filter((g) => g.length))
  })
  return groups
}

export function startReveal() {
  if (typeof IntersectionObserver === 'undefined') return () => {}
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {}

  const done = (el) => {
    el.classList.remove('reveal', 'is-in')
    el.style.removeProperty('transition-delay')
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target
        observer.unobserve(el)
        el.classList.add('is-in')
        el.addEventListener('transitionend', () => done(el), { once: true })
        setTimeout(() => done(el), 1600)
      }
    },
    { threshold: 0 },
  )

  for (const group of collect()) {
    group.forEach((el, i) => {
      el.classList.add('reveal')
      if (i) el.style.transitionDelay = `${Math.min(i, MAX_STAGGER) * STAGGER_MS}ms`
      observer.observe(el)
    })
  }
  return () => observer.disconnect()
}

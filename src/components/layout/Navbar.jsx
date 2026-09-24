import { useEffect, useRef, useState } from 'react'
import { industryMenu, navLinks } from '../../data/home'
import Button from '../ui/Button'
import { currentPath } from '../../lib/currentPath'

// The industry page you're on is filled blue and its photo shows on the left; hovering another
// industry previews it the same way. Off the industry pages the photo defaults to Cleaning.
function IndustryMenu({ onNavigate }) {
  const { links } = industryMenu
  const current = links.findIndex((item) => item.href === currentPath())
  const [hovered, setHovered] = useState(-1)
  const selected = hovered >= 0 ? hovered : current

  return (
    <div className="flex items-start gap-24 rounded-4 border border-primary-soft bg-white p-32 drop-shadow-[0_0_calc(var(--spacing)*6)_rgba(0,0,0,0.25)]">
      <div className="relative h-176 w-280 shrink-0 overflow-hidden rounded-4">
        {links.map((item, i) => (
          <div
            key={item.label}
            aria-hidden
            className={`absolute inset-0 transition-opacity duration-300 ${i === Math.max(selected, 0) ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={item.image} alt="" className="size-full object-cover" />
            {item.tint && (
              <span className="absolute inset-0 bg-linear-to-b from-[rgba(11,78,183,0.6)] to-[rgba(24,99,218,0)] to-64%" />
            )}
          </div>
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-16" onMouseLeave={() => setHovered(-1)}>
        {links.map((item, i) => {
          const active = i === selected
          return (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={onNavigate}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                aria-current={i === current ? 'page' : undefined}
                className={`relative flex h-80 w-248 items-center justify-center gap-4 rounded-4 border p-16 transition-colors duration-200 ${
                  active ? 'border-primary bg-primary/10' : 'border-silver bg-[rgba(217,217,217,0.15)]'
                }`}
              >
                <span className="flex size-48 shrink-0 items-center justify-center">
                  <img src={active ? item.activeIcon : item.icon} alt="" className={item.iconClass} />
                </span>
                <span className="flex h-48 w-148 items-center text-20 text-black uppercase">{item.label}</span>
                {active && (
                  <img src="/assets/nav/chevron-blue.svg" alt="" className="absolute top-32 left-218 h-12 w-[calc(var(--spacing)*7.389)]" />
                )}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const mobileLink = 'flex w-214 items-center gap-8 px-10 py-12 text-16 leading-19 font-light tracking-nav text-black uppercase'

// Mobile popup, 234px wide, pinned under the header on the right. The industry list starts
// collapsed each time the popup opens.
function MobileMenu({ open, onClose }) {
  const [industryOpen, setIndustryOpen] = useState(false)
  const [wasOpen, setWasOpen] = useState(open)
  if (open !== wasOpen) {
    setWasOpen(open)
    if (!open) setIndustryOpen(false)
  }

  return (
    <div className={`xl:hidden ${open ? 'visible' : 'invisible'}`}>
      <div
        aria-hidden
        onClick={onClose}
        className={`fixed inset-x-0 top-56 bottom-0 bg-black/30 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <nav
        aria-label="Menu"
        className={`fixed top-64 right-16 flex max-h-[calc(100dvh-var(--spacing)*80)] w-234 flex-col gap-10 overflow-y-auto rounded-8 bg-white p-10 transition-all duration-300 ${
          open ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
        }`}
      >
        {navLinks.map((link) =>
          link.hasMenu ? (
            <div key={link.label} className="contents">
              <button
                type="button"
                aria-expanded={industryOpen}
                aria-controls="mobile-industry"
                onClick={() => setIndustryOpen((v) => !v)}
                className={`${mobileLink} cursor-pointer`}
              >
                {link.label}
                <img
                  src="/assets/chevron.svg"
                  alt=""
                  className={`h-9 w-5 transition-transform duration-200 ${industryOpen ? '-rotate-90' : 'rotate-90'}`}
                />
              </button>
              {industryOpen && (
                <ul
                  id="mobile-industry"
                  className="flex w-214 flex-col gap-[calc(var(--spacing)*6.326)] rounded-[calc(var(--spacing)*2.892)] border-[calc(var(--spacing)*0.723)] border-[#f5f5f5] p-[calc(var(--spacing)*5.784)]"
                >
                  {industryMenu.links.map((item) => {
                    const active = item.href === currentPath()
                    return (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          onClick={onClose}
                          aria-current={active ? 'page' : undefined}
                          className={`flex items-center gap-8 rounded-[calc(var(--spacing)*1.582)] border-[calc(var(--spacing)*0.395)] h-32 px-8 text-12 leading-20 text-black uppercase ${
                            active ? 'border-primary bg-primary/10' : 'border-silver bg-[rgba(217,217,217,0.15)]'
                          }`}
                        >
                          <span className="flex size-24 shrink-0 items-center justify-center">
                            <img src={active ? item.activeIcon : item.icon} alt="" className={item.mobileIconClass} />
                          </span>
                          {item.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              aria-current={link.href === currentPath() ? 'page' : undefined}
              className={mobileLink}
            >
              {link.label}
            </a>
          ),
        )}
        <Button href="/contact" onClick={onClose} className="w-full text-16!">
          Contact Us
        </Button>
      </nav>
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const industryRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => {
      if (e.type === 'keydown' ? e.key === 'Escape' : !industryRef.current?.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('pointerdown', close)
    document.addEventListener('keydown', close)
    return () => {
      document.removeEventListener('pointerdown', close)
      document.removeEventListener('keydown', close)
    }
  }, [menuOpen])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Desktop, 1920px artboard */}
      <div className="mx-auto hidden h-80 max-w-1920 items-center justify-between px-100 xl:flex">
        <a href="/" aria-label="Naxatra Labs home" className="block">
          <img src="/assets/logo.svg" alt="Naxatra Labs" className="h-20 w-194" />
        </a>
        <nav className="flex items-center">
          {navLinks.map((link) =>
            link.hasMenu ? (
              <div
                key={link.label}
                ref={industryRef}
                className="relative"
                onMouseEnter={() => setMenuOpen(true)}
                onMouseLeave={() => setMenuOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={menuOpen}
                  aria-haspopup="true"
                  onClick={() => setMenuOpen((v) => !v)}
                  className="flex w-160 cursor-pointer items-center justify-center gap-8 px-10 py-12 text-16 leading-16 font-light tracking-nav text-black uppercase transition-colors hover:text-primary"
                >
                  {link.label}
                  <img
                    src="/assets/chevron.svg"
                    alt=""
                    className={`h-9 w-5 transition-transform duration-200 ${menuOpen ? '-rotate-90' : 'rotate-90'}`}
                  />
                </button>
                <div
                  className={`absolute top-full -left-440 z-10 w-880 pt-25 transition-all duration-200 ${
                    menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-8 opacity-0'
                  }`}
                >
                  <IndustryMenu onNavigate={() => setMenuOpen(false)} />
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                aria-current={link.href === currentPath() ? 'page' : undefined}
                className={`flex items-center justify-center py-12 text-16 leading-16 font-light tracking-nav text-black uppercase transition-colors hover:text-primary ${
                  link.label === 'Products' ? 'w-160 px-10' : 'px-32'
                }`}
              >
                {link.label}
              </a>
            ),
          )}
          <Button href="/contact" className="h-44 px-24! py-0!">
            Contact Us
          </Button>
        </nav>
      </div>

      {/* Mobile, 402px artboard */}
      <div className="flex h-56 items-center justify-between p-16 xl:hidden">
        <a href="/" aria-label="Naxatra Labs home">
          <img src="/assets/logo.svg" alt="Naxatra Labs" className="h-[calc(var(--spacing)*14.73)] w-143" />
        </a>
        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="relative size-24 cursor-pointer"
        >
          {mobileOpen ? (
            <span aria-hidden className="absolute inset-0 flex items-center justify-center">
              <span className="absolute h-2 w-16 rotate-45 rounded-full bg-grey" />
              <span className="absolute h-2 w-16 -rotate-45 rounded-full bg-grey" />
            </span>
          ) : (
            <img src="/assets/m/hamburger.svg" alt="" className="size-24" />
          )}
        </button>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}

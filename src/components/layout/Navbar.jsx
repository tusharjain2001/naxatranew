import { useEffect, useRef, useState } from 'react'
import { industryMenu, navLinks } from '../../data/home'
import Button from '../ui/Button'
import { currentPath } from '../../lib/currentPath'

function IndustryMenu({ onNavigate }) {
  return (
    <div className="flex items-start gap-24 rounded-4 border border-primary-soft bg-white p-32 drop-shadow-[0_0_calc(var(--spacing)*6)_rgba(0,0,0,0.25)]">
      <div className="grid grid-cols-[repeat(2,calc(var(--spacing)*136))] gap-8">
        {industryMenu.images.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={onNavigate}
            aria-label={item.label}
            className="group relative block h-84 overflow-hidden rounded-4"
          >
            <img src={item.src} alt="" className="size-full object-cover transition-transform duration-500 group-hover:scale-105" />
            {item.tint && (
              <span className="absolute inset-0 bg-linear-to-b from-[rgba(11,78,183,0.6)] to-[rgba(24,99,218,0)] to-64%" />
            )}
          </a>
        ))}
      </div>
      <ul className="grid grid-cols-2 gap-16">
        {industryMenu.links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={onNavigate}
              className="flex w-248 items-center justify-center gap-4 rounded-4 border border-silver bg-[rgba(217,217,217,0.15)] p-16 transition-colors duration-200 hover:border-primary hover:bg-primary/10"
            >
              <span className="flex size-48 shrink-0 items-center justify-center">
                <img src={item.icon} alt="" className={item.iconClass} />
              </span>
              <span className="flex h-48 w-148 items-center text-20 text-black uppercase">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
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

      <div
        className={`fixed inset-x-0 top-56 bottom-0 overflow-y-auto bg-white px-16 pb-40 transition-all duration-300 xl:hidden ${
          mobileOpen ? 'visible opacity-100' : 'invisible -translate-y-8 opacity-0'
        }`}
      >
        <nav className="flex flex-col border-t border-silver">
          {navLinks.map((link) => (
            <div key={link.label} className="border-b border-silver">
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-16 text-16 font-light tracking-nav uppercase"
              >
                {link.label}
              </a>
              {link.hasMenu && (
                <div className="grid grid-cols-2 gap-8 pb-16">
                  {industryMenu.links.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-8 rounded-4 border border-silver bg-[rgba(217,217,217,0.15)] p-8 text-12 uppercase"
                    >
                      <span className="flex size-24 shrink-0 items-center justify-center">
                        <img src={item.icon} alt="" className="max-h-24 max-w-24" />
                      </span>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <Button href="/contact" size="sm" className="mt-24" onClick={() => setMobileOpen(false)}>
          Contact Us
        </Button>
      </div>
    </header>
  )
}

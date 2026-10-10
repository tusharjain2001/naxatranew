import { useCallback, useEffect, useRef, useState } from 'react'
import { footer } from '../../data/home'
import { loadRecaptcha, RECAPTCHA_SITE_KEY } from '../../lib/recaptcha'
import { subscribe } from '../../lib/newsletter'
import Button from '../ui/Button'

const socials = [
  { label: 'Facebook', icon: '/assets/social/facebook.svg' },
  { label: 'X', icon: '/assets/social/x.svg' },
  { label: 'YouTube', icon: '/assets/social/youtube.svg' },
  { label: 'LinkedIn', icon: '/assets/social/linkedin.svg' },
  { label: 'Instagram', icon: '/assets/social/instagram.svg' },
]

// 24px icons 40px apart on desktop; the phone artboard uses 12px icons on a 41.6px pitch in a 23px row.
function SocialIcons({ className, iconClass }) {
  return (
    <ul className={`flex items-center ${className}`}>
      {socials.map((item) => (
        <li key={item.label}>
          <img src={item.icon} alt={item.label} className={`block ${iconClass}`} />
        </li>
      ))}
    </ul>
  )
}

function Copyright({ className }) {
  return (
    <p className={`font-light text-grey capitalize ${className}`}>
      {footer.copyright.slice(0, -1)}
      <span className="font-normal">.</span>
    </p>
  )
}

// The reCAPTCHA checkbox, rendered once its box comes near the screen (the hidden phone/desktop copy never
// does, so only one widget loads). Figma draws it at 245×61, so Google's 304×78 widget is scaled to 80%.
function Captcha({ onReady, className }) {
  const box = useRef(null)
  useEffect(() => {
    const el = box.current
    let cancelled = false
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        loadRecaptcha()
          .then((grecaptcha) => {
            if (cancelled) return
            const id = grecaptcha.render(el, { sitekey: RECAPTCHA_SITE_KEY, theme: 'dark' })
            onReady({ token: () => grecaptcha.getResponse(id), reset: () => grecaptcha.reset(id) })
          })
          .catch(() => {})
      },
      { rootMargin: '300px' },
    )
    io.observe(el)
    return () => {
      cancelled = true
      io.disconnect()
    }
  }, [onReady])
  return (
    <div className={`h-62 w-245 ${className}`}>
      <div ref={box} className="origin-top-left scale-80" />
    </div>
  )
}

const joinLabels = { idle: 'Join', joining: 'Joining...', done: 'Thank You!' }

// Newsletter sign-up (15420:4155): the captcha, then the email box with its Join button, which reads
// "Joining..." while the request runs (15564:170) and turns pale blue reading "Thank You!" once it
// succeeds (15564:182).
function Newsletter({ mobile = false }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const captcha = useRef(null)
  const onCaptchaReady = useCallback((widget) => (captcha.current = widget), [])

  const submit = async (e) => {
    e.preventDefault()
    if (status === 'joining') return
    const form = e.currentTarget
    const token = captcha.current?.token()
    if (!token) return setError('Please confirm you’re not a robot.')
    setError('')
    setStatus('joining')
    try {
      await subscribe(form.email.value.trim(), token)
      form.reset()
      setStatus('done')
    } catch (err) {
      setStatus('idle')
      setError(err.message)
    }
    captcha.current?.reset()
  }

  return (
    <form onSubmit={submit} className={mobile ? 'flex w-294 flex-col items-start gap-20' : 'flex flex-col items-start'}>
      <h2
        className={
          mobile
            ? 'text-20 leading-32 tracking-display text-white capitalize'
            : 'w-[calc(var(--spacing)*456.77)] text-46 leading-[calc(var(--spacing)*71.78)] tracking-display text-white capitalize'
        }
      >
        {footer.newsletter.title}
      </h2>
      <p
        className={
          mobile
            ? 'text-14 leading-[calc(var(--spacing)*18.63)] font-light tracking-display text-silver'
            : 'mt-23 w-[calc(var(--spacing)*488.68)] text-19-5 leading-[calc(var(--spacing)*30.97)] font-light tracking-display text-silver'
        }
      >
        {footer.newsletter.text.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <Captcha onReady={onCaptchaReady} className={mobile ? '' : 'mt-24'} />
      <div
        className={`flex items-center bg-white transition-shadow focus-within:ring-2 focus-within:ring-primary ${
          mobile ? 'w-full gap-8 rounded-4 py-4 pr-4 pl-10' : 'mt-15 gap-10 rounded-8 py-8 pr-8 pl-16'
        }`}
      >
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-label="Email address"
          placeholder="Enter Your Email"
          onChange={() => status === 'done' && setStatus('idle')}
          className={`min-w-0 bg-transparent text-black outline-none placeholder:text-grey/50 ${
            mobile ? 'h-28 flex-1 text-16 placeholder:text-14' : 'h-40 w-320 text-24 tracking-[calc(var(--spacing)*-0.48)]'
          }`}
        />
        <Button
          as="button"
          type="submit"
          variant={status === 'done' ? 'soft' : 'primary'}
          size={mobile ? 'sm' : 'md'}
          disabled={status === 'joining'}
          className="cursor-pointer disabled:cursor-wait"
        >
          {joinLabels[status]}
        </Button>
      </div>
      <p role="status" className={`text-[#ff8a8a] ${mobile ? '-mt-12 text-12 leading-16' : 'mt-8 text-16 leading-20'} ${error ? '' : 'sr-only'}`}>
        {error || (status === 'done' ? 'Thank you for joining the newsletter.' : '')}
      </p>
    </form>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="w-full">
      {/* Desktop, 1920px artboard */}
      <div className="hidden bg-black xl:block">
        <div className="relative mx-auto h-[calc(var(--spacing)*686.94)] max-w-1920 overflow-hidden px-70 pt-[calc(var(--spacing)*64.66)]">
          <img
            src="/assets/footer-grid.svg"
            alt=""
            aria-hidden
            className="pointer-events-none absolute top-[1.81%] left-[40%] h-[81.57%] w-[47.32%]"
          />
          <img
            src="/assets/logo-white.svg"
            alt="Naxatra Labs"
            className="relative h-[calc(var(--spacing)*57.58)] w-[calc(var(--spacing)*561.29)]"
          />

          <div className="relative mt-[calc(var(--spacing)*93.27)] flex items-start text-24 text-silver capitalize">
            <div className="w-419">
              <h3 className="leading-48 font-bold">Locate Us</h3>
              {footer.offices.map((office, i) => (
                <address key={office.title} className={`leading-32 not-italic ${i === 0 ? 'mt-7 w-351' : 'mt-40 w-308'}`}>
                  <span className="block font-bold">{office.title}</span>
                  {office.lines.map((line) => (
                    <span key={line} className="block font-light">
                      {line}
                    </span>
                  ))}
                </address>
              ))}
            </div>
            <nav aria-label="Quick links" className="w-316 leading-48">
              <h3 className="font-bold">Quick Links</h3>
              <ul className="font-light">
                {footer.quickLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-417 leading-48">
              <h3 className="font-bold">Let’s Connect</h3>
              <ul className="font-light normal-case">
                {footer.contact.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <span aria-hidden className="-mt-[calc(var(--spacing)*29.5)] h-366 w-2 shrink-0 bg-[#5f5f5f]" />
            <div className="-mt-[calc(var(--spacing)*29.5)] ml-51 normal-case">
              <Newsletter />
            </div>
          </div>

          <ul className="absolute top-625 left-[calc(var(--spacing)*1596.78)] flex gap-[calc(var(--spacing)*63)] text-18 leading-[calc(var(--spacing)*51.73)] whitespace-nowrap text-white">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="transition-opacity hover:opacity-70">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto hidden h-62 max-w-1920 items-center justify-between border-b border-silver pr-29 pl-[calc(var(--spacing)*38.71)] xl:flex">
        <Copyright className="text-23" />
        <SocialIcons className="mr-21 gap-40" iconClass="size-24" />
      </div>

      {/* Mobile, 402px artboard */}
      <div className="flex flex-col gap-23 bg-black px-16 pt-60 pb-40 xl:hidden">
        <img src="/assets/logo-white.svg" alt="Naxatra Labs" className="h-15 w-[calc(var(--spacing)*146.25)]" />
        <div className="flex items-start justify-between text-silver capitalize">
          <div className="flex flex-col gap-12">
            <h3 className="text-12 leading-16 font-bold">Locate Us</h3>
            {footer.offices.map((office) => (
              <address key={office.title} className="w-110 text-10 leading-14 not-italic">
                <span className="block font-bold">{office.title}</span>
                {office.lines.map((line) => (
                  <span key={line} className="block font-light">
                    {line}
                  </span>
                ))}
              </address>
            ))}
          </div>
          <nav aria-label="Quick links" className="leading-20 whitespace-nowrap">
            <h3 className="text-12 font-bold">Quick Links</h3>
            <ul className="text-11 font-light">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="leading-20 whitespace-nowrap">
            <h3 className="text-12 font-bold">Let’s Connect</h3>
            <ul className="text-10 font-light normal-case">
              {footer.contact.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img src="/assets/m/footer-line.svg" alt="" aria-hidden className="h-px w-full" />
        <Newsletter mobile />
        <ul className="flex gap-10 text-10 leading-[calc(var(--spacing)*35.06)] text-white">
          {footer.legal.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-15 bg-white py-16 xl:hidden">
        <SocialIcons className="h-23 gap-[calc(var(--spacing)*29.6)]" iconClass="size-12" />
        <Copyright className="text-center text-16" />
      </div>
    </footer>
  )
}

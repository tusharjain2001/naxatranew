import { footer } from '../../data/home'
import Button from '../ui/Button'

// Figma supplies the social row as a single image, so it is cropped exactly as on the artboard.
function SocialIcons({ className }) {
  return (
    <div role="img" aria-label="Facebook, X, YouTube, LinkedIn and Instagram" className={`relative overflow-hidden ${className}`}>
      <img src="/assets/social-icons.png" alt="" className="absolute top-0 left-[-0.11%] h-[163.16%] w-[100.22%]" />
    </div>
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

function Newsletter({ mobile = false }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={mobile ? 'flex w-294 flex-col items-start gap-20' : 'flex flex-col items-start'}>
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
      <Button as="button" type="submit" size={mobile ? 'sm' : 'md'} className={mobile ? 'cursor-pointer' : 'mt-44 cursor-pointer'}>
        Join
      </Button>
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
                  <li key={link}>
                    <a href="#home" className="transition-colors hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-417 leading-48">
              <h3 className="font-bold">Let’s Connect</h3>
              <ul className="font-light">
                {footer.contact.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <span aria-hidden className="-mt-4.5 h-[calc(var(--spacing)*340.65)] w-[calc(var(--spacing)*1.52)] shrink-0 bg-divider" />
            <div className="-mt-14.25 ml-[calc(var(--spacing)*62.14)] normal-case">
              <Newsletter />
            </div>
          </div>

          <ul className="absolute top-625 left-[calc(var(--spacing)*1596.78)] flex gap-[calc(var(--spacing)*63)] text-18 leading-[calc(var(--spacing)*51.73)] whitespace-nowrap text-white">
            {footer.legal.map((item) => (
              <li key={item}>
                <a href="#home" className="transition-opacity hover:opacity-70">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto hidden h-[calc(var(--spacing)*108.54)] max-w-1920 items-center justify-between border-b border-silver pr-29 pl-[calc(var(--spacing)*38.71)] xl:flex">
        <Copyright className="text-23" />
        <SocialIcons className="h-[calc(var(--spacing)*36.77)] w-[calc(var(--spacing)*317.42)]" />
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
                <li key={link}>
                  <a href="#home">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="leading-20 whitespace-nowrap">
            <h3 className="text-12 font-bold">Let’s Connect</h3>
            <ul className="text-10 font-light">
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
            <li key={item}>
              <a href="#home">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-15 bg-white py-16 xl:hidden">
        <SocialIcons className="h-23 w-194" />
        <Copyright className="text-center text-16" />
      </div>
    </footer>
  )
}

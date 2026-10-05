import { products } from '../data/home'

const rem = (n) => `${n / 16}rem`

// Motor renders sit in a rotated box, exactly as placed on the artboards.
function Motor({ image, anchor = 'left', frameWidth }) {
  const { box, inner, crop } = image
  const horizontal = anchor === 'left' ? { left: rem(box.l) } : { right: rem(frameWidth - box.l - box.w) }
  return (
    <div
      className="pointer-events-none absolute flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]"
      style={{ ...horizontal, top: rem(box.t), width: rem(box.w), height: rem(box.h) }}
    >
      <div
        className={`relative shrink-0 ${crop ? 'overflow-hidden' : ''}`}
        style={{ width: rem(inner.w), height: rem(inner.h), transform: `rotate(${inner.rotate}deg)` }}
      >
        <img
          src={image.src}
          alt=""
          loading="lazy"
          className={crop ? 'absolute' : `absolute inset-0 size-full ${image.fit}`}
          style={crop ? { width: `${crop.w}%`, height: `${crop.h}%`, left: `${crop.l}%`, top: `${crop.t}%` } : undefined}
        />
      </div>
    </div>
  )
}

function Name({ product }) {
  return (
    <>
      <span className="font-bold">
        {product.brand}
        {product.joiner ?? ' - '}
      </span>
      <span className="font-normal">{product.series}</span>
    </>
  )
}

export default function Products() {
  return (
    <section id="products" className="mx-auto flex w-full max-w-1920 flex-col gap-60 py-56 xl:gap-80 xl:px-100 xl:pt-68 xl:pb-[calc(var(--spacing)*130.391)]">
      <div className="flex flex-col gap-10 px-16 capitalize xl:gap-11 xl:px-0">
        <h2 className="text-32 leading-[calc(var(--spacing)*35.6)] tracking-display xl:text-64 xl:leading-80">
          The Right <br className="xl:hidden" />
          Motor Changes Everything
        </h2>
        <p className="text-14 leading-16 text-grey xl:text-24 xl:leading-32 xl:normal-case">
          Featured products, efficient, compact and high-performance electric motion.
        </p>
      </div>

      {/* Desktop cards: four 416.5x478.6 cards, the name and description centred over the render. */}
      <div className="hidden gap-[calc(var(--spacing)*17.948)] xl:flex">
        {products.map((product) => (
          <a
            key={product.href}
            href={product.href}
            className="group relative h-[calc(var(--spacing)*478.609)] w-[calc(var(--spacing)*416.539)] shrink-0 overflow-hidden rounded-[calc(var(--spacing)*8.974)]"
          >
            {/* Resting backdrop: the plain card from Figma. */}
            <img src="/assets/product-bg.png" alt="" loading="lazy" className="absolute inset-0 size-full object-cover opacity-45" />
            {/* Hover backdrop: the highlighted first card from Figma, faded in on hover or keyboard focus. */}
            <div className="absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-50 group-focus-visible:opacity-50">
              <img src="/assets/product-bg.png" alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,#bcc0c3_0%,rgba(221,225,229,0)_26.63%,rgba(221,225,229,0.41)_80.36%,#bcc0c3_100%)]" />
            </div>
            <h3 className="absolute top-[calc(var(--spacing)*14.96)] left-1/2 -translate-x-1/2 text-[length:calc(var(--spacing)*26.922)] leading-[calc(var(--spacing)*102.972)] whitespace-nowrap uppercase">
              <Name product={product} />
            </h3>
            <p
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[length:calc(var(--spacing)*17.948)] leading-[calc(var(--spacing)*20.939)] text-grey capitalize"
              style={{ top: rem(product.descTop), width: rem(product.descWidth) }}
            >
              {product.desc}
            </p>
            <Motor image={product.image} />
          </a>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-16 px-16 xl:hidden">
        {products.map((product) => (
          <a key={product.href} href={product.href} className="group relative h-160 w-full">
            <img src="/assets/m/product-bg2.png" alt="" loading="lazy" className="absolute inset-0 size-full rounded-4-4 object-cover opacity-40" />
            <img src="/assets/product-bg.png" alt="" loading="lazy" className="absolute inset-0 size-full rounded-4-4 object-cover opacity-45" />
            <Motor image={product.mobile} anchor="right" frameWidth={370} />
            <div className="absolute top-1/2 left-29 flex w-151 -translate-y-1/2 flex-col">
              <h3 className="flex h-21 items-center text-14 leading-16 whitespace-nowrap uppercase">
                <span>
                  <Name product={product} />
                </span>
              </h3>
              <p className="text-10 leading-14 text-grey capitalize">{product.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

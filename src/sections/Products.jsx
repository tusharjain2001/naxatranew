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

function Name({ product, series }) {
  return (
    <>
      <span className="font-bold">{product.brand} - </span>
      <span className="font-normal">{series}</span>
    </>
  )
}

export default function Products() {
  return (
    <section id="products" className="mx-auto flex w-full max-w-1920 flex-col gap-60 py-100 xl:gap-100 xl:px-100 xl:pt-262 xl:pb-0">
      <div className="flex flex-col gap-10 px-16 capitalize xl:gap-11 xl:px-0">
        <h2 className="text-32 leading-[calc(var(--spacing)*35.6)] tracking-display xl:text-64 xl:leading-80">
          The Right <br className="xl:hidden" />
          Motor Changes Everything
        </h2>
        <p className="text-14 leading-16 text-grey xl:text-24 xl:leading-32">
          Featured Products, Efficient, Compact And High-Performance Electric Motion.
        </p>
      </div>

      {/* Desktop cards */}
      <div className="hidden gap-24 xl:flex">
        {products.map((product, i) => (
          <a key={product.series} href="#products" className="group relative h-751 w-557 shrink-0 overflow-hidden rounded-12">
            <div className={`absolute inset-0 overflow-hidden rounded-12 ${i === 0 ? 'opacity-50' : 'opacity-45'}`}>
              <img src="/assets/product-bg.png" alt="" loading="lazy" className="absolute inset-0 size-full object-cover" />
              {product.backdrop === 'gradient' && (
                <span className="absolute inset-0 bg-[linear-gradient(180deg,#bcc0c3_0%,rgba(221,225,229,0)_26.63%,rgba(221,225,229,0.41)_80.36%,#bcc0c3_100%)]" />
              )}
            </div>
            <h3 className="absolute top-20 left-1/2 -translate-x-1/2 text-36 leading-[calc(var(--spacing)*137.7)] whitespace-nowrap uppercase">
              <Name product={product} series={product.series} />
            </h3>
            <p className={`absolute flex h-37 w-276 items-center text-24 leading-normal text-grey capitalize ${product.descClass} ${product.descClass.includes('text-center') ? 'justify-center' : ''}`}>
              {product.desc}
            </p>
            <Motor image={product.image} />
          </a>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="flex flex-col gap-16 px-16 xl:hidden">
        {products.map((product) => (
          <a key={product.series} href="#products" className="group relative h-160 w-full">
            <img src="/assets/m/product-bg2.png" alt="" loading="lazy" className="absolute inset-0 size-full rounded-4-4 object-cover opacity-40" />
            <img src="/assets/product-bg.png" alt="" loading="lazy" className="absolute inset-0 size-full rounded-4-4 object-cover opacity-45" />
            <Motor image={product.mobile} anchor="right" frameWidth={370} />
            <div className="absolute top-1/2 left-29 flex w-151 -translate-y-1/2 flex-col">
              <h3 className="flex h-21 items-center text-14 leading-16 whitespace-nowrap uppercase">
                <span>
                  <Name product={product} series={product.mobileSeries} />
                </span>
              </h3>
              <p className="flex h-13.5 items-center text-9 text-grey capitalize">{product.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

import { useEffect, useState } from 'react'
import { productDetail } from '../data/products/details'
import DetailHero from '../sections/products/detail/DetailHero'
import TechnicalSpecs from '../sections/products/detail/TechnicalSpecs'
import BrowseOtherMotors from '../sections/products/detail/BrowseOtherMotors'
import SpecModal from '../sections/products/detail/SpecModal'
import SpecForm from '../sections/industry/SpecForm'

const motorApplications = ['Cleaning', 'Agriculture', '2 Wheeler', '3 Wheeler', 'Industrial Tools']

// Deep links from Find-By-Applications (…?variant=42) pre-select that variant.
const initialVariant = (detail) => {
  const want = new URLSearchParams(window.location.search).get('variant')
  return (want && detail.variants.find((v) => v.id === want)?.id) || detail.variants[0].id
}

export default function ProductDetail({ family }) {
  const detail = productDetail(family.slug)
  const [variantId, setVariantId] = useState(() => initialVariant(detail))
  const [specOpen, setSpecOpen] = useState(false)
  const variant = detail.variants.find((v) => v.id === variantId) ?? detail.variants[0]

  useEffect(() => {
    document.title = `${family.name} | Naxatra Labs`
  }, [family])

  return (
    <main className="flex flex-col">
      <DetailHero family={family} detail={detail} variant={variant} onSelectVariant={setVariantId} onOpenSpec={() => setSpecOpen(true)} />
      <TechnicalSpecs variant={variant} sketch={variant.sketch ?? detail.sketch} mobile={detail.mobile} />
      <BrowseOtherMotors currentSlug={family.slug} />
      <SpecForm applications={motorApplications} wide flowText title={['Need Help Finding', 'The Right Motor?']} text={['Our team can help you choose or', 'customise a solution for your application.']} />
      <SpecModal open={specOpen} onClose={() => setSpecOpen(false)} family={family} variant={variant} />
    </main>
  )
}

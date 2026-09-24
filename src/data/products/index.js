// Product families for the /products listing and /products/<slug> detail pages.
//
// Extracted from the Figma "Naxatra-Labs-2026" listing artboard (node 14051-1426): family names,
// taglines, industry chips and the card renders. Per-family DETAIL data (variants, spec boxes,
// technical sketch, applications, salient features) lives in src/data/products/<slug>.js.
//
// NOTE (flagged to god): the numeric `spec` used by the Key Specifications min-max filter is a
// placeholder ordering — the listing artboard shows only industry chips, not per-family numbers.
// Real figures come from Tushar's datasheets; the filter is fully functional against these.
const L = (file) => `/assets/products/listing/${file}`

// Industry chip metadata (icon + label), keyed by the slug used in family.industries.
export const industries = {
  cleaning: { label: 'Cleaning', icon: L('ind-cleaning.svg') },
  agriculture: { label: 'Agriculture', icon: L('ind-agriculture.svg') },
  '2-wheeler': { label: '2 Wheelers', icon: L('ind-2wheeler.svg') },
  '3-wheeler': { label: '3 Wheelers', icon: L('ind-3wheeler.svg') },
  'industrial-tools': { label: 'Industrial Tools', icon: L('ind-tools.svg') },
}

// The "Industrial Applications" filter: each category is collapsible with sub-application checkboxes.
// Checking any sub-application filters the grid to families that serve that category.
export const applicationFilters = [
  { key: 'cleaning', label: 'Cleaning', options: ['Ride-on Sweeper', 'Ride-on Floor Scrubber', 'Leaf Picker', 'Walk-behind/Compact Scrubber', 'Truck Mounted Sweeper'] },
  { key: 'agriculture', label: 'Agriculture', options: ['Power Weeder', 'Power Tiller', 'Agri Bot', 'Compact Tractor', 'Agri Sprayer'] },
  { key: '2-wheeler', label: '2 Wheelers', options: ['2W Scooter', '2W Bikes', 'Moped'] },
  { key: '3-wheeler', label: '3 Wheelers', options: ['E-Rickshaw', 'Loader Passenger', 'Loader Cargo', 'Tricycle'] },
  { key: 'industrial-tools', label: 'Industrial Tools', options: ['Grinder', 'Electric Drill'] },
]

export const seriesTabs = ['RF', 'AF', 'PT']

// Grid order on the /products listing, top to bottom, left to right.
export const productFamilies = [
  { slug: 'rf15', name: 'Antarix RF 15', series: 'RF', brand: 'Antarix', tagline: 'Compact | Efficient | Versatile', card: { image: L('card-rf-a.png') }, industries: ['cleaning', 'agriculture', '2-wheeler'], spec: { voltage: 72, power: 1.5, torque: 6.5 } },
  { slug: 'rf22', name: 'Antarix RF 22', series: 'RF', brand: 'Antarix', tagline: 'Compact | Efficient | Versatile', card: { image: L('card-rf-a.png') }, industries: ['2-wheeler', 'agriculture', '3-wheeler'], spec: { voltage: 72, power: 2.2, torque: 9.5 } },
  { slug: 'rf33', name: 'Antarix RF 33', series: 'RF', brand: 'Antarix', tagline: 'Compact | Efficient | Versatile', card: { image: L('card-rf-b.png') }, industries: ['cleaning', 'agriculture', '2-wheeler'], spec: { voltage: 72, power: 3.3, torque: 10.5 } },
  { slug: 'rf55', name: 'Antarix RF 55', series: 'RF', brand: 'Antarix', tagline: 'Compact | Efficient | Versatile', card: { image: L('card-rf-b.png') }, industries: ['2-wheeler', 'agriculture', '3-wheeler'], spec: { voltage: 72, power: 5.5, torque: 10.5 } },
  { slug: 'rf66', name: 'Antarix RF 66', series: 'RF', brand: 'Antarix', tagline: 'Compact | Efficient | Versatile', card: { image: L('card-rf66.png') }, industries: ['2-wheeler', 'agriculture', '3-wheeler'], spec: { voltage: 72, power: 14, torque: 16 } },
  { slug: 'af58', name: 'Antarix AF 58', series: 'AF', brand: 'Antarix', tagline: 'Compact | Efficient | Versatile', card: { image: L('card-af58.png') }, industries: ['2-wheeler', '3-wheeler'], spec: { voltage: 72, power: 5.8, torque: 60 } },
  { slug: 'pt500', name: 'PT - 500', series: 'PT', brand: 'PT', tagline: 'Compact | Efficient | Versatile', card: { image: L('card-pt500.png') }, industries: ['industrial-tools'], spec: { voltage: 18, power: 0.05, torque: 0.5 } },
]

export const productBySlug = Object.fromEntries(productFamilies.map((f) => [f.slug, f]))

export const productPath = (slug) => `/products/${slug}`

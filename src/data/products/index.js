// Product families by URL slug. `/products` lists them; `/products/<slug>` is the family detail page.
//
// BRIDGE STATE: minimal family records so routing + a scaffold listing render and are testable while
// Figma auth is pending. Once the "Naxatra-Labs-2026" artboards are accessible (nodes 14051-1426 listing
// + detail states), each family is expanded into its own file (src/data/products/<slug>.js) following the
// src/data/industry/cleaning.js template — variants, per-variant spec boxes (V/kW/Nm), technical-sketch
// drawing + table (Voltage/Rated Power/Rated Torque/Peak Speed/Efficiency/Mass), datasheet link,
// applications, salient features, hero render + thumb gallery — and imported here.

// series: RF / AF / PT drives the listing series tabs. Families sharing a die expose multiple `variants`
// (e.g. RF15 -> 42 & 60); single-variant families (AF58, PT500) hide the Choose-The-Variant panel.
export const productFamilies = [
  { slug: 'rf15', name: 'Antarix RF15', series: 'RF', brand: 'Antarix' },
  { slug: 'rf22', name: 'Antarix RF22', series: 'RF', brand: 'Antarix' },
  { slug: 'rf33', name: 'Antarix RF33', series: 'RF', brand: 'Antarix' },
  { slug: 'rf55', name: 'Antarix RF55', series: 'RF', brand: 'Antarix' },
  { slug: 'rf66', name: 'Antarix RF66', series: 'RF', brand: 'Antarix' },
  { slug: 'af58', name: 'Antarix AF58', series: 'AF', brand: 'Antarix' },
  { slug: 'pt500', name: 'PT500', series: 'PT', brand: 'PT' },
]

export const productBySlug = Object.fromEntries(productFamilies.map((f) => [f.slug, f]))

export const productPath = (slug) => `/products/${slug}`

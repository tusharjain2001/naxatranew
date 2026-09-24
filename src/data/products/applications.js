// "Find by applications" explorer (listing node 14111-1898). Selecting an application shows its feature
// image + a "Relevant Motors" list; each motor link opens the family detail pre-selected to that variant
// (e.g. RF 15/42 -> /products/rf15?variant=42), per the dispatch's assumption #3.
//
// NOTE (flagged to god): the applications shown and their relevant-motor mappings are the Figma's demo
// content (only "Ride on Sweeper" had a real list on the artboard); the rest are sensible placeholders
// pending Tushar's application matrix. Wiring + pre-selection are fully functional.
const L = (file) => `/assets/products/listing/${file}`

const motor = (code, use) => {
  const [, model, variant] = code.match(/^(\w+ \d+)\/(\d+)$/) || [null, code, '']
  const slug = model.replace(/\s+/g, '').toLowerCase() // "RF 15" -> "rf15"
  return { code, use, slug, variant }
}

export const findByApplications = [
  { key: 'ride-on-sweeper', name: 'Ride on Sweeper', industry: 'Cleaning', image: L('app-sweeper.png'), motors: [motor('RF 15/42', 'Steering'), motor('RF 15/42', 'Traction'), motor('RF 22/42', 'Steering'), motor('RF 22/42', 'Traction')] },
  { key: 'l5-cargo', name: 'L5 Cargo', industry: '3 Wheelers', image: L('app-l5cargo.png'), motors: [motor('RF 55/70', 'Traction'), motor('RF 66/70', 'Traction'), motor('RF 22/60', 'Steering')] },
  { key: 'agribot', name: 'Agribot', industry: 'Agriculture', image: L('app-agribot.png'), motors: [motor('RF 33/60', 'Traction'), motor('RF 55/70', 'Traction'), motor('RF 15/60', 'Steering')] },
  { key: '2-wheelers', name: '2 Wheelers', industry: '2 Wheelers', image: L('app-2wheeler.png'), motors: [motor('AF 58/40', 'Hub Drive'), motor('RF 15/42', 'Mid Drive'), motor('RF 22/42', 'Mid Drive')] },
  { key: 'e-rickshaw', name: 'E-Rickshaw', industry: '3 Wheelers', image: L('app-erickshaw.png'), motors: [motor('RF 55/70', 'Traction'), motor('RF 66/90', 'Traction'), motor('RF 22/60', 'Steering')] },
  { key: 'power-weeder', name: 'Power Weeder', industry: 'Agriculture', image: L('app-powerweeder.png'), motors: [motor('RF 33/60', 'Traction'), motor('RF 15/42', 'Traction')] },
]

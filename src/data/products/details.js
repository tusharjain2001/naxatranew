// Per-family DETAIL data for /products/<slug>, keyed by slug. Consolidated into one builder-backed module
// (rather than seven near-duplicate files) since only RF15 carries full multi-variant Figma data; the rest
// reuse the same layout with their own figures.
//
// Sources (Figma "Naxatra-Labs-2026"): RF15/42 hero + technical section (14394-1603/1658) and the AF58
// VIEW SPECIFICATIONS modal (14394-2056) — motor type / rated+peak power / torque / speed / efficiency /
// cooling / IP / insulation / communication / sensor / mass, plus Salient Features + Applications.
//
// NOTE (flagged to god): figures for RF15/60 and for rf22/rf33/rf55/rf66/pt500 are reasonable placeholders
// ordered off the listing specs — Tushar's datasheets replace them. RF15 (2 variants) demonstrates the
// Choose-The-Variant swap; single-variant families hide that panel.
const RF = '/assets/products/rf15/'
const A = (f) => `${RF}apps/${f}`
const listing = (f) => `/assets/products/listing/${f}`

// Shared application tiles (only RF15's tile renders were provided; reused across families).
const APPS = [
  { label: 'Scooters', image: A('scooter.png') },
  { label: 'Bikes', image: A('bikes.png') },
  { label: 'Sweepers', image: A('sweeper.png') },
  { label: 'Agri-bot', image: A('agribot.png') },
  { label: 'Power Weeder', image: A('powerweeder.png') },
  { label: 'Loader Vehicle', image: A('loader.png') },
  { label: 'Forklift', image: A('forklift.png') },
  { label: 'E-Rickshaw', image: A('erickshaw.png') },
]

const sketch = [RF + 'sketch-front.png', RF + 'sketch-side.png']
const gallery = [RF + 'hero.png', RF + 'hero-cutaway.png']

// Build one variant. `voltage/power/torque` are the 3 hero spec boxes; the rest fill the technical table
// and the VIEW SPECIFICATIONS modal.
function mkVariant(code, o) {
  return {
    id: code.split('/')[1],
    code,
    label: code.replace(/\s+/g, ''), // "RF 15/42" -> "RF15/42" (subtitle form)
    note: o.note ?? 'This motor variant shares the same die, offered in distinct voltage options.',
    hero: o.hero,
    specBoxes: [
      { label: 'Voltage', value: o.voltage },
      { label: 'Power', value: o.power },
      { label: 'Torque', value: o.torque },
    ],
    table: [
      { label: 'Voltage', value: o.voltage },
      { label: 'Rated Power', value: o.power },
      { label: 'Rated Torque', value: o.torque },
      { label: 'Peak Speed', value: o.peakSpeed },
      { label: 'Efficiency', value: o.efficiency },
      { label: 'Mass', value: o.mass },
    ],
    datasheet: '/assets/products/datasheet-placeholder.pdf',
    datasheetNote: `Get more detailed specification in our ${code} specsheet.`,
    applications: o.applications ?? APPS,
    // VIEW SPECIFICATIONS modal — detailed spec sheet.
    spec: [
      { label: 'Motor type', value: o.motorType ?? 'Radial Flux PMSM' },
      { label: 'Rated Voltage', value: o.voltage },
      { label: 'Rated Power', value: o.power },
      { label: 'Peak Power', value: o.peakPower ?? o.power },
      { label: 'Rated Torque', value: o.torque },
      { label: 'Peak Torque', value: o.peakTorque ?? o.torque },
      { label: 'Max Speed', value: o.peakSpeed },
      { label: 'Peak Efficiency', value: o.efficiency },
      { label: 'Cooling method', value: o.cooling ?? 'Air Cooled' },
      { label: 'IP rating', value: o.ip ?? 'IP67' },
      { label: 'Insulation', value: o.insulation ?? 'H Class' },
      { label: 'Communication mode', value: o.comm ?? 'CAN / one-line' },
      { label: 'Sensor Type', value: o.sensor ?? 'Hall Sensor / Magnetic Encoder' },
      { label: 'Mass', value: o.mass },
    ],
    features: o.features ?? [
      'Advanced cooling channels for better thermal performance',
      'Compact, integrated packaging',
      'High efficiency across the operating range',
    ],
  }
}

function mkDetail(slug, breadcrumb, variants) {
  return { slug, breadcrumb, gallery, sketch, variants }
}

export const detailBySlug = {
  rf15: mkDetail('rf15', 'Product/ RF Series/ RF 15', [
    mkVariant('RF 15/42', { hero: RF + 'hero.png', voltage: '48 V / 72 V', power: '1.5 kW', torque: '6.5 Nm', peakPower: '3 kW', peakTorque: '18 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '6.5 Kg', note: 'This motor variant has the same die with two distinct voltage options.' }),
    mkVariant('RF 15/60', { hero: RF + 'hero.png', voltage: '48 V / 96 V', power: '2.2 kW', torque: '9 Nm', peakPower: '4.5 kW', peakTorque: '24 Nm', peakSpeed: '5200 RPM', efficiency: '>94%', mass: '6.8 Kg', note: 'This motor variant has the same die with two distinct voltage options.' }),
  ]),
  rf22: mkDetail('rf22', 'Product/ RF Series/ RF 22', [
    mkVariant('RF 22/42', { hero: listing('card-rf-a.png'), voltage: '48 V / 72 V', power: '3 kW', torque: '12 Nm', peakPower: '6 kW', peakTorque: '34 Nm', peakSpeed: '5200 RPM', efficiency: '>94%', mass: '8 Kg' }),
  ]),
  rf33: mkDetail('rf33', 'Product/ RF Series/ RF 33', [
    mkVariant('RF 33/60', { hero: listing('card-rf-b.png'), voltage: '72 V / 96 V', power: '5 kW', torque: '20 Nm', peakPower: '10 kW', peakTorque: '55 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '11 Kg' }),
  ]),
  rf55: mkDetail('rf55', 'Product/ RF Series/ RF 55', [
    mkVariant('RF 55/70', { hero: listing('card-rf-b.png'), voltage: '72 V / 96 V', power: '8 kW', torque: '30 Nm', peakPower: '16 kW', peakTorque: '80 Nm', peakSpeed: '4800 RPM', efficiency: '>94%', mass: '15 Kg' }),
  ]),
  rf66: mkDetail('rf66', 'Product/ RF Series/ RF 66', [
    mkVariant('RF 66/90', { hero: listing('card-rf66.png'), voltage: '96 V', power: '12 kW', torque: '45 Nm', peakPower: '24 kW', peakTorque: '150 Nm', peakSpeed: '4500 RPM', efficiency: '>94%', mass: '19 Kg' }),
  ]),
  af58: mkDetail('af58', 'Product/ AF Series/ AF 58', [
    mkVariant('AF 58/40', {
      hero: listing('card-af58.png'), motorType: 'Axial Flux PMSM',
      voltage: '72 V', power: '5.8 kW', torque: '25 Nm', peakPower: '10.5 kW', peakTorque: '60 Nm',
      peakSpeed: '4400 RPM', efficiency: '94%', cooling: 'Forced Air cooled', mass: '11 Kg',
      applications: [
        { label: 'High-Performance 2W', image: A('scooter.png') },
        { label: 'Performance 3W', image: A('erickshaw.png') },
        { label: 'Specialty EV', image: A('bikes.png') },
      ],
      features: ['Advanced cooling channels for better thermal performance', 'Compact 3.4 Litre packaging', 'High Efficiency > 91%'],
    }),
  ]),
  pt500: mkDetail('pt500', 'Product/ PT Series/ PT 500', [
    mkVariant('PT 500/00', { hero: listing('card-pt500.png'), motorType: 'Power Tool BLDC', voltage: '96 V', power: '20 kW', torque: '80 Nm', peakPower: '40 kW', peakTorque: '200 Nm', peakSpeed: '4000 RPM', efficiency: '>93%', mass: '24 Kg', applications: [{ label: 'Grinder', image: A('forklift.png') }, { label: 'Electric Drill', image: A('powerweeder.png') }] }),
  ]),
}

export const productDetail = (slug) => detailBySlug[slug]

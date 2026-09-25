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
const PT = '/assets/products/pt500/'
const PTA = (f) => `${PT}apps/${f}`
const AF = '/assets/products/af58/'
const AFA = (f) => `${AF}apps/${f}`
const RF22 = '/assets/products/rf22/'
const RF33 = '/assets/products/rf33/'
const RF55 = '/assets/products/rf55/'
const RF66 = '/assets/products/rf66/'

// The RF-family variant notes, verbatim from the artboards.
const SAME_DIE = 'This motor variant has the same die with two distinct voltage options.'
const DISTINCT_HOUSING = 'This motor variant has a distinct housing with two distinct voltage options.'

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

// RF 55 / RF 66 artboards list only these six applications (no Bikes / E-Rickshaw). The two boards
// order the last pair differently: RF 66 = …Forklift, Loader Vehicle; RF 55 = …Loader Vehicle, Forklift.
const APPS6 = [APPS[0], APPS[2], APPS[3], APPS[4], APPS[6], APPS[5]] // RF 66 order
const APPS6_RF55 = [APPS[0], APPS[2], APPS[3], APPS[4], APPS[5], APPS[6]] // RF 55 order (Loader before Forklift)

const sketch = [RF + 'sketch-front.png', RF + 'sketch-side.png']
const gallery = [RF + 'hero.png', RF + 'hero.png'] // mobile fallback gallery (mobile is untouched this pass)

// DESKTOP per-slot renders, exported PLACED from Figma so each carries its own baked orientation
// (the same asset is placed at a different scaleY/rotate per slot). The View-In-Motion thumbs (vim) and
// the variant-panel thumb are the standard "49bc91be" motor across all RF families except RF 66 (which
// uses its own squat renders), so rf15/22/33/55 share these; see per-family wiring below.
const STD_VIM = [RF + 'vim-1.png', RF + 'vim-2.png'] // thumb1 = hero orientation, thumb2 = distinct (rotate -37.37 + overlay)
const STD_THUMB = RF + 'thumb.png' // variant-panel thumbnail, baked at scaleY(-1) rotate(180)

// Build one variant. `voltage/power/torque` are the 3 hero spec boxes; the rest fill the technical table
// and the VIEW SPECIFICATIONS modal.
function mkVariant(code, o) {
  return {
    id: code.split('/')[1],
    code,
    label: code.replace(/\s+/g, ''), // "RF 15/42" -> "RF15/42" (subtitle form)
    displayName: o.displayName ?? null, // single-variant families show this instead of "<code> Variant"
    note: o.note ?? 'This motor variant shares the same die, offered in distinct voltage options.',
    hero: o.hero,
    thumb: o.thumb ?? null, // DESKTOP variant-panel thumbnail (Figma bakes it at a different orientation than the hero)
    sketch: o.sketch ?? null, // per-variant technical sketch override (else falls back to detail.sketch)
    specBoxes: [
      { label: 'Voltage', value: o.voltage },
      { label: 'Power', value: o.power },
      // hero box may show peak torque while the table shows rated (e.g. AF 58: box 60 Nm / rated 25 Nm)
      { label: 'Torque', value: o.boxTorque ?? o.torque },
    ],
    table: [
      { label: 'Voltage', value: o.voltage },
      { label: 'Rated Power', value: o.power },
      { label: 'Rated Torque', value: o.torque },
      { label: 'Peak Speed', value: o.peakSpeed },
      { label: 'Efficiency', value: o.efficiency },
      { label: 'Mass', value: o.mass },
    ].map((row, i) => ({ ...row, mobileLabel: o.mobileTableLabels?.[i] })), // phone artboard can relabel a row
    datasheet: '/assets/products/datasheet-placeholder.pdf',
    datasheetNote: `Get more detailed specification in our ${o.displayName ?? code} specsheet.`,
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

function mkDetail(slug, breadcrumb, variants, opts = {}) {
  // heroClass overrides the desktop hero-render position/size (default suits RF-family cylindrical motors;
  // the AF 58 disc motor sits further right per its artboard). gallery/sketch default to the RF15 assets.
  // `mobile` tunes the single-variant phone layout per artboard: hero render box, hero bottom padding,
  // sketch height, applications-box height and the tech section's bottom padding.
  return { slug, breadcrumb, gallery: opts.gallery ?? gallery, vim: opts.vim ?? null, sketch: opts.sketch ?? sketch, heroClass: opts.heroClass, showPanel: opts.showPanel, mobile: opts.mobile ?? {}, variants }
}

export const detailBySlug = {
  // RF 15 (Figma board 14394-2054): /42 and /60. Figma shows them identical except efficiency
  // (/42 >94%, /60 >92%) — flagged for Tushar as likely placeholder duplication.
  rf15: mkDetail('rf15', 'Product/ RF Series/ RF 15', [
    mkVariant('RF 15/42', { hero: RF + 'hero.png', thumb: STD_THUMB, note: SAME_DIE, voltage: '48 V / 72 V', power: '1.5 kW', torque: '6.5 Nm', peakPower: '3 kW', peakTorque: '18 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '6.5 Kg' }),
    mkVariant('RF 15/60', { hero: RF + 'hero.png', thumb: STD_THUMB, note: SAME_DIE, voltage: '48 V / 72 V', power: '1.5 kW', torque: '6.5 Nm', peakSpeed: '5000 RPM', efficiency: '>92%', mass: '6.5 Kg' }),
  // Hero render sized and placed to the RF 15/42 artboard (node 14626-22478).
  ], { vim: STD_VIM, heroClass: 'xl:top-168 xl:left-229 xl:h-603 xl:w-775' }),
  // RF 22 (Figma board 14394-2055): three variants /42, /60, /86. Figma shows near-identical specs
  // across all three (only efficiency differs) — flagged for Tushar as likely placeholder duplication.
  // /86 uses its OWN distinct-housing render (Figma node 14342:11384, exported with the studio-backdrop
  // layer excluded → clean cut-out); /42 & /60 share the standard render. Own technical sketch used.
  rf22: mkDetail('rf22', 'Product/ RF Series/ RF 22', [
    mkVariant('RF 22/42', { hero: RF22 + 'hero.png', thumb: STD_THUMB, note: SAME_DIE, voltage: '48 V / 72 V', power: '2.2 kW', torque: '9.5 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '6.5 Kg' }),
    mkVariant('RF 22/60', { hero: RF22 + 'hero.png', thumb: STD_THUMB, note: SAME_DIE, voltage: '48 V / 72 V', power: '2.2 kW', torque: '9.5 Nm', peakSpeed: '5000 RPM', efficiency: '>92%', mass: '6.5 Kg' }),
    mkVariant('RF 22/86', { hero: RF22 + 'hero-86.png', thumb: RF22 + 'thumb-86.png', note: DISTINCT_HOUSING, voltage: '48 V / 72 V', power: '2.2 kW', torque: '9.5 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '6.5 Kg' }),
  ], { vim: STD_VIM, gallery: [RF22 + 'hero.png', RF22 + 'hero.png'], sketch: [RF22 + 'sketch-1.png', RF22 + 'sketch-2.png'] }),
  // RF 33 (Figma board 14378-3788): /60, /86, /90. Figma gives each variant its OWN render: /60 the
  // standard finned motor, /86 the finned-housing render (same "Final 1 2" art as RF 22/86), /90 the
  // squat cylinder (same "014455d6" art as RF 66). /60 & /86 share specs; /90 differs (6500 RPM, 13.6 Kg).
  rf33: mkDetail('rf33', 'Product/ RF Series/ RF 33', [
    mkVariant('RF 33/60', { hero: RF33 + 'hero.png', thumb: STD_THUMB, note: SAME_DIE, voltage: '48 V / 72 V', power: '3.3 kW', torque: '10.5 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '7.7 Kg' }),
    mkVariant('RF 33/86', { hero: RF33 + 'hero-86.png', thumb: RF33 + 'thumb-86.png', note: DISTINCT_HOUSING, voltage: '48 V / 72 V', power: '3.3 kW', torque: '10.5 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '7.7 Kg' }),
    mkVariant('RF 33/90', { hero: RF33 + 'hero-90.png', thumb: RF33 + 'thumb-90.png', note: DISTINCT_HOUSING, voltage: '48 V / 72 V', power: '3.3 kW', torque: '10.5 Nm', peakSpeed: '6500 RPM', efficiency: '>94%', mass: '13.6 Kg' }),
  ], { vim: STD_VIM, gallery: [RF33 + 'hero.png', RF33 + 'hero.png'], sketch: [RF33 + 'sketch-1.png', RF33 + 'sketch-2.png'] }),
  // RF 55 (Figma board 14389-4682): single variant /86 — but the artboard KEEPS the Choose-The-Variant
  // panel (one row) and bottom-left gallery, unlike AF 58 / PT-500. showPanel forces that RF-series layout.
  // Hero reuses clean RF15 render; own sketch.
  rf55: mkDetail('rf55', 'Product/ RF Series/ RF 55', [
    mkVariant('RF 55/86', { hero: RF55 + 'hero.png', thumb: RF55 + 'thumb.png', note: DISTINCT_HOUSING, applications: APPS6_RF55, voltage: '48 V / 72 V', power: '5.5 kW', torque: '10.5 Nm', peakSpeed: '5000 RPM', efficiency: '>94%', mass: '10.5 Kg' }),
  ], { showPanel: true, vim: [RF55 + 'vim-1.png', RF55 + 'vim-2.png'], gallery: [RF55 + 'hero.png', RF55 + 'hero.png'], sketch: [RF55 + 'sketch.png'], heroClass: 'xl:top-98 xl:left-260 xl:h-770 xl:w-778' }),
  // RF 66 (Figma board 14393-7232): /70 and /90 — distinct real specs. RF 66 has its OWN render (the
  // squat finned cylinder, Figma "014455d6" node 14393:6358, exported transparent) shared by both
  // variants. Apps are the six-item RF 55/66 list. /90 uses its own sketch node (14393:6490).
  rf66: mkDetail('rf66', 'Product/ RF Series/ RF 66', [
    mkVariant('RF 66/70', { hero: RF66 + 'hero.png', thumb: RF66 + 'thumb.png', note: SAME_DIE, applications: APPS6, voltage: '48 V / 72 V', power: '12.5 kW', torque: '14 Nm', peakSpeed: '6500 RPM', efficiency: '>92%', mass: '13.6 Kg' }),
    mkVariant('RF 66/90', { hero: RF66 + 'hero.png', thumb: RF66 + 'thumb.png', sketch: [RF66 + 'sketch-90.png'], note: SAME_DIE, applications: APPS6, voltage: '48 V / 72 V', power: '14 kW', torque: '16 Nm', peakSpeed: '6500 RPM', efficiency: '>93%', mass: '14.5 Kg' }),
  ], { vim: [RF66 + 'vim-1.png', RF66 + 'vim-2.png'], gallery: [RF66 + 'hero.png', RF66 + 'hero.png'], sketch: [RF66 + 'sketch.png'], heroClass: 'xl:top-205 xl:left-302 xl:h-579 xl:w-564' }),
  // Antarix AF 58 axial-flux motor (Figma node 14394-2056). Hero Torque box shows PEAK (60 Nm); the
  // technical table shows Rated Torque (25 Nm). Single-variant, so no Choose-Variant panel.
  af58: mkDetail('af58', 'Product/ AF Series/ AF 58', [
    mkVariant('AF 58/40', {
      displayName: 'AF 58', hero: AF + 'hero.png', motorType: 'Axial Flux PMSM',
      voltage: '72 V', power: '5.8 kW', torque: '25 Nm', boxTorque: '60 Nm', peakPower: '10.5 kW', peakTorque: '60 Nm',
      peakSpeed: '4400 RPM', efficiency: '94%', cooling: 'Forced Air cooled', mass: '11 Kg',
      applications: [
        { label: 'High Performance 2W', image: AFA('highperf-2w.png') },
        { label: 'Performance 3W', image: AFA('performance-3w.png') },
        { label: 'Specialty EV Application', image: AFA('specialty-ev.png') },
      ],
      features: ['Advanced cooling channels for better thermal performance', 'Compact 3.4 Litre packaging', 'High Efficiency > 91%'],
    }),
  ], { gallery: [AF + 'vim-1.png', AF + 'vim-2.png'], sketch: [AF + 'sketch.png'], heroClass: 'xl:top-166 xl:left-655 xl:h-699 xl:w-862' }),
  // PT-500 power-tool motor (Figma node 14394-3023). Real spec sheet: 18 V, 0.05 kW, 0.32 Nm, 17500 RPM.
  // NOTE (flagged): the Figma technical table labels the last two rows "Efficiency = 0.5 kW" and
  // "Mass = 0.5 Nm" — the units are mismatched (efficiency isn't kW, mass isn't Nm). Rendered exactly as
  // designed; Tushar to confirm the real efficiency % and mass. Single-variant, so no Choose-Variant panel.
  pt500: mkDetail('pt500', 'Product/ PT Series/ PT 500', [
    mkVariant('PT 500/00', {
      displayName: 'PT-500', hero: PT + 'hero.png', motorType: 'Power Tool BLDC',
      voltage: '18 V', power: '0.05 kW', torque: '0.32 Nm', peakPower: '0.5 kW', peakTorque: '0.5 Nm',
      peakSpeed: '17500 RPM', efficiency: '0.5 kW', mass: '0.5 Nm',
      // The phone artboard (14394-3492) labels the last two rows correctly for their units.
      mobileTableLabels: { 4: 'Peak Power', 5: 'Peak Torque' },
      applications: [
        { label: 'Grinder', image: PTA('grinder.png') },
        { label: 'Electric Drill', image: PTA('drill.png') },
        { label: 'Other Industrial Tools', image: PTA('other-tools.png') },
      ],
    }),
  ], {
    vim: [PT + 'vim-1.png', PT + 'vim-2.png'],
    gallery: [PT + 'hero-t.png', PT + 'hero-t.png'],
    sketch: [PT + 'sketch.png'],
    heroClass: 'xl:top-149 xl:left-806 xl:h-684 xl:w-684',
    // Phone artboard 14394-3492: bigger render, section 50px shorter, shorter sketch and applications box.
    mobile: { hero: '-top-21 -left-33 h-352 w-433', heroPad: 'pb-25', sketch: 'h-167', apps: 'min-h-0', techPad: 'pb-60' },
  }),
}

export const productDetail = (slug) => detailBySlug[slug]

/*
 * FAMILY DATA SHAPE — template / copy-source (NOT imported; the leading underscore keeps it out of the
 * family list). Mirrors the src/data/industry/cleaning.js convention: a local `a(file)` asset helper and a
 * single config object. Once the Figma "Naxatra-Labs-2026" artboards are accessible, copy this to
 * src/data/products/<slug>.js per family, replace placeholder numbers with the artboard spec values, and
 * point every asset at the downloaded file under public/assets/products/<slug>/.
 *
 * Field contract is derived straight from the T117 dispatch:
 *  - Listing (node 14051-1426) filters families on: series (RF/AF/PT tab) + voltage / continuousPower /
 *    peakTorque (min-max) + applications (Industrial Applications checkboxes). Those live in `filter`.
 *  - Detail (nodes 14394-2054/2055, 14378-3788, 14389-4682, 14393-7232, 14394-2056, 14394-3022) renders,
 *    per SELECTED variant: subtitle, the 3 spec boxes (V / kW / Nm), the technical-sketch drawing + table
 *    (Voltage / Rated Power / Rated Torque / Peak Speed / Efficiency / Mass), the datasheet link, the
 *    "<variant> Motor Applications" heading + list, and the Technical Specifications modal
 *    (table + Applications + Salient Features), plus the hero render + thumbnail gallery.
 *  - A family with a single variant (AF58, PT500) hides the Choose-The-Variant panel automatically
 *    (variants.length === 1).
 */
const a = (file) => `/assets/products/rf15/${file}`

export default {
  slug: 'rf15',
  name: 'Antarix RF15', // detail <h1> and breadcrumb tail
  series: 'RF', // listing series tab: RF | AF | PT
  brand: 'Antarix',
  tagline: 'Compact radial-flux traction motor', // listing card supporting line

  // Listing card render (family hero thumbnail on the grid).
  card: { image: a('card.png'), alt: 'Antarix RF15 motor' },

  // Client-side listing filters. Numbers are the family's representative/peak figures used by the
  // Voltage / Continuous Power / Peak Torque min-max sliders; `applications` are the Industrial
  // Applications checkbox slugs this family serves.
  filter: {
    voltage: 72, // V  (peak of the family's voltage options)
    continuousPower: 5, // kW
    peakTorque: 45, // Nm
    applications: ['cleaning', 'agriculture', '2-wheeler', '3-wheeler', 'industrial-tools'],
  },

  // 1..n variants sharing the die. `id` is the variant suffix; `code` is the display label on the
  // Choose-The-Variant panel and Find-By-Applications "Relevant Motors" links.
  variants: [
    {
      id: '42',
      code: 'RF 15/42',
      subtitle: 'High-torque radial flux motor - 42 Variant', // "... - <variant> Variant"
      hero: a('42-hero.png'), // main render, swaps in place on selection
      gallery: [a('42-thumb-1.png'), a('42-thumb-2.png'), a('42-thumb-3.png')],
      motionPoster: a('42-motion.png'), // View In Motion placeholder still (no video asset yet)
      sketch: a('42-sketch.png'), // technical-sketch line drawing
      datasheet: '/assets/products/datasheet-placeholder.pdf', // real per-variant PDF when Tushar sends it

      // The three spec boxes under the title (value + unit).
      specBoxes: [
        { value: '48-72', unit: 'V', label: 'Voltage' },
        { value: '5', unit: 'kW', label: 'Continuous Power' },
        { value: '45', unit: 'Nm', label: 'Peak Torque' },
      ],

      // Technical-sketch spec table (fixed row order from the artboard).
      table: {
        voltage: '48-72 V',
        ratedPower: '5 kW',
        ratedTorque: '18 Nm',
        peakSpeed: '6000 rpm',
        efficiency: '92%',
        mass: '9.5 kg',
      },

      // "<variant> Motor Applications" list + the modal's Applications block.
      applications: ['Steering', 'Traction', 'Sweeper drive'],

      // Technical Specifications modal — Salient Features block.
      features: ['IP67 rated', 'H-class insulation', 'Air cooled', 'CAN communication'],
    },
    {
      id: '60',
      code: 'RF 15/60',
      subtitle: 'High-torque radial flux motor - 60 Variant',
      hero: a('60-hero.png'),
      gallery: [a('60-thumb-1.png'), a('60-thumb-2.png'), a('60-thumb-3.png')],
      motionPoster: a('60-motion.png'),
      sketch: a('60-sketch.png'),
      datasheet: '/assets/products/datasheet-placeholder.pdf',
      specBoxes: [
        { value: '48-96', unit: 'V', label: 'Voltage' },
        { value: '7', unit: 'kW', label: 'Continuous Power' },
        { value: '60', unit: 'Nm', label: 'Peak Torque' },
      ],
      table: {
        voltage: '48-96 V',
        ratedPower: '7 kW',
        ratedTorque: '24 Nm',
        peakSpeed: '6000 rpm',
        efficiency: '93%',
        mass: '10.2 kg',
      },
      applications: ['Steering', 'Traction', 'Hydraulic drive'],
      features: ['IP67 rated', 'H-class insulation', 'Air cooled', 'CAN communication'],
    },
  ],
}

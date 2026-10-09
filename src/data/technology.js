const a = (file) => `/assets/technology/${file}`

export const techHero = {
  title: 'From Concept to Creation, engineering motion for every industry.',
  subtitle: 'Lighter, Stronger, Smarter Motors for the Future.',
  image: a('hero.webp'),
  alt: 'Electric scooter, delivery vehicle, field robot, drone and utility vehicle on a mountain road at dusk',
}

export const techAbout = {
  title: 'Innovating the future of electric mobility',
  paragraphs: [
    'Naxatra Labs™ is an innovation-driven EV powertrain technology company, dedicated to engineering high-performance, lightweight, and efficient solutions. We specialize in delivering powerful motor technologies for diverse verticals, including electric vehicles, agricultural machinery, and power tools.',
    'Backed by over five years of research and development, our solutions meet industry performance, durability, and efficiency standards. Our cutting-edge portfolio includes both axial and radial flux motor technologies, pushing the boundaries of electric mobility and sustainable innovation.',
  ],
  image: a('about.webp'),
  alt: 'Cutaway render of an axial flux motor',
}

// `tile` draws the icon on a white square at `iconClass` size. `textClass` narrows the copy as on the artboard
// (in the text's own em: 534px is 22.25em at 24px).
export const whyNaxatra = {
  eyebrow: 'why naxatra',
  title: 'Antarix: A configurable motor platform solving tech, supply chain, and economics all at once',
  items: [
    { title: 'customer value', text: 'Higher efficiency at your exact torque and RPM. Better cooling. Faster integration. Local service and support.', icon: a('icon-customer.svg') },
    { title: 'faster turnaround', text: 'New product variants, service cycles, and sourcing done faster than any overseas lead time.', icon: a('icon-turnaround.svg'), tile: true, iconClass: 'size-[48em]', textClass: 'max-w-[22.25em]' },
    { title: 'controller agnostic', text: 'Compatible with all controllers. No system lock-in. Fits your existing architecture out of the box.', icon: a('icon-controller.svg') },
    { title: 'Economics', text: 'Custom motors at lower cost - enabled by repeated tooling and optimized assembly across the platform.', icon: a('icon-stats.svg'), tile: true, iconClass: 'h-[37.13em] w-[37.63em]' },
    { title: 'supply chain', text: '80%+ domestic value addition. Common vendors across all variants. No single-point import dependency.', icon: a('icon-supply.svg') },
    { title: 'defensibility', text: 'Proprietary EM/thermal map library, in-house jigs, fixtures, and a locked supplier network that grows harder to replicate over time.', icon: a('icon-defensibility.svg'), textClass: 'max-w-[25.8em]' },
  ],
}

export const techBanner = {
  title: 'Engineering the Next Generation of Motion.',
  text: 'Driven by innovation. Designed for performance. Built for what’s next.',
  image: a('banner-v2.webp'),
  // The phone card is its own composition: the photo laid over the middle of a sky background.
  mobileImage: a('m-banner.webp'),
  alt: 'Electric utility vehicle and a delivery drone on a road at dusk',
}

// Layer copy: layer 01 from the artboard, layers 02-07 as supplied by the client.
// Icons come from the artboard's layer icon set, drawn at 1.32× their list size (layer 01's 25px stack is 33px).
export const techLayers = {
  title: ['Deeper customisable layers deliver.', 'the exact torque, thermal and control profile'],
  items: [
    {
      tab: 'design DB and EM Maps',
      icon: a('layer-1.svg'),
      iconSize: 33,
      title: 'design db & em maps',
      text: 'Years of accumulated material, winding, magnet, performance, and thermal data — every motor we build draws from this library. It means faster design cycles and fewer unknowns before a prototype is even made.',
      tags: ['Thermal data', 'Winding maps', 'Performance library', 'Material data'],
    },
    {
      tab: 'EM Cores',
      icon: a('layer-2.svg'),
      iconSize: 39.6,
      title: 'em cores',
      text: 'Axial and radial flux orientations available in a single platform. Motor designs spanning 100 W to 10 kW across 48, 72, and 96 V - without starting from scratch each time.',
      tags: ['Axial flux', 'Radial flux', '100 W - 10 kW', '48 / 72 / 96 V'],
    },
    {
      tab: 'magnet systems',
      icon: a('layer-3.svg'),
      iconSize: 33,
      title: 'magnet systems',
      text: 'NdFeB HRE and HRE-free variants, ferrite, and multiple placement patterns - each matched to thermal limits, cost targets, and supply chain risk. You choose the trade-off; we engineer it in.',
      tags: ['NdFeB HRE', 'HRE-free', 'Ferrite', 'Multiple patterns'],
    },
    {
      tab: 'mech & thermal modules',
      icon: a('layer-4.svg'),
      iconSize: 39.6,
      title: 'mech & thermal modules',
      text: 'Housings, bearings, IP ratings, and air or liquid cooling methods - engineered for the environment your motor actually operates in. Indian summers, monsoon flooding, and dusty industrial sites are the baseline, not the edge case.',
      tags: ['IP67', 'H-class insulation', 'Air cooling', 'Liquid cooling'],
    },
    {
      tab: 'sense & control',
      icon: a('layer-5.svg'),
      iconSize: 37,
      title: 'sense & control',
      text: 'Hall, encoder, resolver, and FOC-sensorless sensing options. Controller-agnostic tuning means you keep your existing control architecture - Naxatra fits into your system, not the other way around.',
      tags: ['Hall sensor', 'FOC sensorless', 'Encoder', 'Resolver', 'Controller agnostic'],
    },
    {
      tab: 'Integration methods',
      icon: a('layer-6.svg'),
      iconSize: 38.3,
      title: 'integration methods',
      text: 'Customised gear and spline interfaces, connectors, and harnesses configured per application. Whether it is a cargo trike, an agricultural implement, or a floor sweeper - the motor mounts as if it was designed for it. Because it was.',
      tags: ['Gear interfaces', 'Spline shafts', 'Custom harness', 'App-specific connectors'],
    },
    {
      tab: 'test & analytics',
      icon: a('layer-7.svg'),
      iconSize: 37,
      title: 'test & analytics',
      text: 'In-house FMEA, EOL maps, field data-loggers, and OTA controller tuning. Performance is measured at every stage - not assumed. Every number in our spec sheets is backed by test data from our own lab.',
      tags: ['FMEA', 'EOL maps', 'Data loggers', 'OTA tuning'],
    },
  ],
}

// `logo` is the desktop size of each mark; the phone fits them into a 62×44 box.
export const quality = {
  eyebrow: 'Validated & certified',
  title: 'Quality systems you can audit',
  items: [
    { title: 'ISO 9001:2015', text: 'Certified quality management system covering design, production, QC, and customer support.', logo: a('cert-iso.webp'), logoClass: 'xl:size-90' },
    // The NATRAX mark sits on white, so it is multiplied onto the grey card.
    { title: 'natrax certification', text: 'NATRAX is one of the state-of-the-art automotive testing and certification centre under NATRiP, a flagship project.', logo: a('cert-natrax.webp'), logoClass: 'mix-blend-multiply xl:h-44 xl:w-105' },
    { title: 'IATF 16949 in progress', text: 'Automotive-grade QMS initiated for Tier-1 and OEM supplier readiness.', logo: a('cert-iatf.webp'), logoClass: 'xl:size-89' },
    { title: 'IP67 · H-class insulation', text: 'Full submersion rated. H-class insulation validated for sustained high-temperature operation.', logo: a('cert-ip67.webp'), logoClass: 'xl:h-99 xl:w-94' },
    { title: '3-year motor warranty', text: 'On every unit supplied, covering manufacturing and material defects not just paper coverage.', logo: a('cert-warranty.webp'), logoClass: 'xl:h-105 xl:w-104' },
    { title: '100% made in India', text: '85% localised supply chain. PLI-qualifying. Every motor designed, built, and tested in Ahmedabad.', logo: a('cert-india.webp'), logoClass: 'xl:h-[calc(var(--spacing)*49.24)] xl:w-[calc(var(--spacing)*107.66)]' },
  ],
}

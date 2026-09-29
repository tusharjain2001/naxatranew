const a = (file) => `/assets/technology/${file}`

export const techHero = {
  title: 'From Concept to Creation, driving EV innovation',
  subtitle: 'Lighter, Stronger, Smarter Motors for the Future.',
  image: a('hero.webp'),
  alt: 'Electric scooter, delivery vehicle, field robot, drone and utility vehicle on a mountain road at dusk',
}

export const techAbout = {
  title: 'Innovating the future of electric mobility',
  paragraphs: [
    'Naxatra Labs™ is an innovation-driven EV powertrain technology company, dedicated to engineering high-performance, lightweight, and efficient solutions. We specialize in delivering powerful motor technologies for diverse verticals, including electric vehicles, agricultural machinery, and power tools.',
    'Backed by over four years of research and development, our solutions meet industry performance, durability, and efficiency standards. Our cutting-edge portfolio includes both axial and radial flux motor technologies, pushing the boundaries of electric mobility and sustainable innovation.',
  ],
  image: a('about.webp'),
  alt: 'Cutaway render of an axial flux motor',
}

// Card copy is as on the artboard (it repeats "Controller agnostic" in the second row).
// `tile` draws the icon on a white square at `iconClass` size.
export const whyNaxatra = {
  eyebrow: 'why naxatra',
  title: 'Antarix: A configurable motor platform solving tech, supply chain, and economics all at once',
  items: [
    { title: 'customer value', text: 'Higher efficiency at your exact torque and RPM. Better cooling. Faster integration. Local service and support.', icon: a('icon-customer.svg') },
    { title: 'faster turnaround', text: 'New product variants, service cycles, and sourcing done faster than any overseas lead time.', icon: a('icon-turnaround.svg'), tile: true, iconClass: 'size-[48em]' },
    { title: 'controller agnostic', text: 'Compatible with all controllers. No system lock-in. Fits your existing architecture out of the box.', icon: a('icon-controller.svg') },
    { title: 'controller agnostic', text: 'Compatible with all controllers. No system lock-in. Fits your existing architecture out of the box.', icon: a('icon-stats.svg'), tile: true, iconClass: 'h-[37.13em] w-[37.63em]' },
    { title: 'supply chain', text: '80%+ domestic value addition. Common vendors across all variants. No single-point import dependency.', icon: a('icon-supply.svg') },
    { title: 'defensibility', text: 'Proprietary EM/thermal map library, in-house jigs, fixtures, and a locked supplier network that grows harder to replicate over time.', icon: a('icon-defensibility.svg') },
  ],
}

export const techBanner = {
  title: 'Engineering the Next Generation of Motion.',
  text: 'Driven by innovation. Designed for performance. Built for what’s next.',
  image: a('banner.webp'),
  alt: 'Electric utility vehicle and a delivery drone on a road at dusk',
}

// Figma only writes out layer 01; the other layers' text and tags are drafts to be replaced by the client's copy.
export const techLayers = {
  title: ['Deeper customisable layers deliver.', 'the exact torque, thermal and control profile'],
  icon: a('icon-database.svg'),
  items: [
    {
      tab: 'design DB and EM Maps',
      title: 'design db & em maps',
      text: 'Years of accumulated material, winding, magnet, performance, and thermal data — every motor we build draws from this library. It means faster design cycles and fewer unknowns before a prototype is even made.',
      tags: ['Thermal data', 'Winding maps', 'Performance library', 'Material data'],
    },
    {
      tab: 'EM Cores',
      title: 'em cores',
      text: 'Stator and rotor electromagnetic cores in radial and axial flux topologies, sized and wound to hit your torque and speed targets.',
      tags: ['Radial flux', 'Axial flux', 'Custom windings', 'Lamination stacks'],
    },
    {
      tab: 'magnet systems',
      title: 'magnet systems',
      text: 'Magnet grades, geometry and retention chosen for your duty cycle, balancing torque density, temperature margin and cost.',
      tags: ['Magnet grades', 'Rotor topology', 'Retention', 'Demagnetisation margin'],
    },
    {
      tab: 'mech & thermal modules',
      title: 'mech & thermal modules',
      text: 'Housings, bearings, shafts and cooling paths configured for your mounting, ingress rating and ambient conditions.',
      tags: ['Housings', 'Cooling paths', 'IP67 sealing', 'Mounting options'],
    },
    {
      tab: 'sense & control',
      title: 'sense & control',
      text: 'Position sensing, temperature feedback and controller tuning so the motor responds exactly the way your application needs.',
      tags: ['Hall / encoder', 'Thermal sensing', 'Controller tuning', 'CAN'],
    },
    {
      tab: 'Integration methods',
      title: 'integration methods',
      text: 'Mechanical and electrical interfaces matched to your vehicle or machine, from shaft and flange to connectors and harnesses.',
      tags: ['Shaft & flange', 'Gearbox coupling', 'Connectors', 'Harnessing'],
    },
    {
      tab: 'test & analytics',
      title: 'test & analytics',
      text: 'Dynamometer, endurance and environmental testing with the data fed back into the library for the next design.',
      tags: ['Dyno testing', 'Endurance', 'Environmental', 'Test reports'],
    },
  ],
}

// `logo` is the desktop size of each mark; the phone fits them into a 62×44 box.
export const quality = {
  eyebrow: 'Validated & certified',
  title: 'Quality systems you can audit',
  items: [
    { title: 'ISO 9001:2015', text: 'Certified quality management system covering design, production, QC, and customer support.', logo: a('cert-iso.webp'), logoClass: 'xl:size-90' },
    { title: 'ARAI recognised', text: 'Automotive Research Association of India  credibility for EV and automotive applications.', logo: a('cert-arai.webp'), logoClass: 'xl:h-76 xl:w-107' },
    { title: 'IATF 16949 in progress', text: 'Automotive-grade QMS initiated for Tier-1 and OEM supplier readiness.', logo: a('cert-iatf.webp'), logoClass: 'xl:size-89' },
    { title: 'IP67 · H-class insulation', text: 'Full submersion rated. H-class insulation validated for sustained high-temperature operation.', logo: a('cert-ip67.webp'), logoClass: 'xl:h-99 xl:w-94' },
    { title: '3-year motor warranty', text: 'On every unit supplied, covering manufacturing and material defects not just paper coverage.', logo: a('cert-warranty.webp'), logoClass: 'xl:h-105 xl:w-104' },
    { title: '100% made in India', text: '85% localised supply chain. PLI-qualifying. Every motor designed, built, and tested in Ahmedabad.', logo: a('cert-india.webp'), logoClass: 'xl:h-[calc(var(--spacing)*49.24)] xl:w-[calc(var(--spacing)*107.66)]' },
  ],
}

export const efficiency = {
  title: 'More Power. More Range. More Possibilities.',
  text: 'Our advanced Antarix-AF58 powertrain delivers up to 10% higher average efficiency compared to market leaders. With improved energy optimization, it extends the operating range by 5-8%, ensuring peak performance with every ride.',
  chart: {
    grid: a('chart-grid.svg'),
    curve: a('chart-curve.svg'),
    x: [0, 5, 10, 15, 20, 25, 30],
    y: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0],
    xLabel: 'Torque (Nm)',
    yLabel: 'Efficiency %',
    series: 'Antarix-AF58',
  },
}

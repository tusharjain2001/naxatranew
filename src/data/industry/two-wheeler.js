const a = (file) => `/assets/industry/2w/${file}`

const offer =
  'We offer a comprehensive solution for a high-maneuverability moving appliance, including a motor, controller, and gearbox for steering, traction, hydraulic systems, and sweeper components.'

export default {
  slug: '2-wheeler',
  name: '2 Wheeler',
  title: '2 Wheeler EV Motors & Controllers | Naxatra Labs',
  sections: ['challenges', 'applications', 'advantages', 'cta', 'features', 'process', 'testimonials', 'spec'],

  hero: {
    variant: 'cover',
    title: ['Engineered in India.', 'Built To Power 2 Wheeler Electric Mobility'],
    // Figma breaks the desktop title differently from the phone one.
    desktopTitle: ['Engineered in India. Built To', 'Power 2 Wheeler Electric', 'Mobility'],
    titleClass: 'capitalize xl:w-1097 xl:whitespace-nowrap',
    textTop: 'xl:top-107',
    subtitle: ['Motor Advanced electric powertrain technology engineered for scooters, motorcycles, passenger mobility, and cargo transport.'],
    subtitleClass: 'xl:w-452',
    image: a('hero.png'),
    alt: 'Electric motorcycles and scooters parked on a coastal highway',
  },

  challenges: {
    title: 'The key Consumer challenges in mobility',
    heading: '2-Wheelers mobility vehicles',
    text: 'Precision-built motors and controllers designed for performance, efficiency, and reliability.',
    layout: { flow: true },
    cards: [
      { src: a('challenge-1.png'), quote: 'Our motor overheats on long shifts' },
      { src: a('challenge-2.png'), quote: 'We needed better motor efficiency to increase vehicle range.' },
      { src: a('challenge-3.png'), quote: 'We need to hit PLI localization thresholds' },
      { src: a('challenge-4.png'), quote: 'Our current vendor has 16-week lead times from overseas.' },
    ],
  },

  applications: {
    title: 'Which 2 Wheeler application are you building for?',
    defaultIndex: 1,
    items: [
      { label: '2W Scooters', tile: a('tile-1.png'), panel: a('panel-scooter.png'), parts: ['RF series Motor & Controller'], text: offer, supplies: ['Traction - RF Series Motor & Controller'] },
      { label: '2W Bikes', tile: a('tile-2.png'), panel: a('panel-bike.png'), parts: ['RF 22/55 series Motor & Controller'], text: offer, supplies: ['Traction - RF 22/ RF 55 Motor & Controller'] },
      { label: 'Moped', tile: a('tile-3.png'), panel: a('panel-moped.png'), parts: ['RF series Motor & Controller'], text: offer, supplies: ['Traction - RF Series Motor & Controller'] },
    ],
  },

  advantages: {
    section: 'xl:pb-207',
    title: 'Our key advantages for EV 2W, 3W and L5 OEMs',
    subtitle: 'Higher-Efficiency RF-series motor with matched controller',
    image: a('advantages.png'),
    imageAlt: 'X-ray view of an electric motorcycle showing its motor and controller',
    stats: [
      { value: 'H Class', label: 'Insulation', width: 'xl:w-337' },
      { value: '85%', label: 'Localised BOM', big: true, width: 'xl:w-289' },
      { value: 'India-Based', label: 'Manufacturing supply chain', width: 'xl:w-432' },
      { value: 'Controller Agnostic', label: 'Power Density for Max Performance', width: 'xl:w-532' },
    ],
  },

  cta: { image: '/assets/industry/shared/cta.png' },

  features: {
    title: ['Measurable outcomes of our motor & controller- optimised for electric mobility'],
    titleClass: 'xl:w-1788',
    bordered: true,
    items: [
      { title: '+5-8% Range', text: 'From Motor Swap Alone', icon: a('feat-range.svg') },
      { title: '2-3 week', text: 'Leadtime', icon: a('feat-leadtime.svg') },
      { title: '>40°C ambient', text: 'Sustained Operation', icon: a('feat-ambient.svg') },
      { title: 'PLI Qualifying', text: 'Motor', icon: a('feat-pli.svg') },
      { title: 'Easily configurable', text: 'For Different Applications', icon: a('feat-config.svg') },
    ],
  },

  testimonials: { desktopArrows: true, spacing: 'gap-60 py-100 xl:gap-100 xl:pt-181 xl:pb-182' },
}

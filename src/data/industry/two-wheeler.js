const a = (file) => `/assets/industry/2w/${file}`

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
    // The phone headline keeps its lowercase "in"; desktop capitalises every word.
    titleClass: 'xl:capitalize xl:w-1097 xl:whitespace-nowrap',
    textTop: 'xl:top-107',
    subtitle: ['Advanced electric powertrain technology engineered for scooters, motorcycles, passenger mobility, and cargo transport.'],
    subtitleClass: 'normal-case xl:w-452',
    image: a('hero.png'),
    // One 1920×880 picture for the desktop hero.
    desktopImage: a('hero-desktop.webp'),
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
      { src: a('challenge-4.png'), quote: 'Waiting on overseas shipments was slowing down our entire production.' },
    ],
  },

  applications: {
    title: 'Which 2 Wheeler application are you building for?',
    defaultIndex: 1,
    items: [
      { label: '2W Scooters', tile: a('tile-1.png'), panel: a('panel-scooter.png'), parts: ['RF series Motor & Controller'], text: 'Smooth, efficient traction for electric scooters, powered by our RF-series motor and controller for reliable everyday performance.', supplies: ['Traction - RF Series Motor & Controller'] },
      { label: '2W Bikes', tile: a('tile-2.png'), panel: a('panel-bike.png'), mobilePanel: a('m/panel-bike.jpg'), parts: ['RF 22/55 series Motor & Controller'], text: 'High-performance traction for electric bikes- RF-series motor and controller, built for power, range, and reliability', supplies: ['Traction - RF 22/ RF 55 Motor & Controller'] },
      { label: 'Moped', tile: a('tile-3.png'), panel: a('panel-moped.png'), parts: ['RF series Motor & Controller'], text: 'Dependable traction for electric mopeds, RF-series motor and controller, engineered for efficient, everyday commuting.', supplies: ['Traction - RF Series Motor & Controller'] },
    ],
  },

  advantages: {
    // The stat row is 7px shorter than the artboard's, so the bottom padding takes it up.
    section: 'xl:pb-107',
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

  // The phone banner reuses the Cleaning page's motor, controller and gearbox render and its smaller button.
  cta: { image: '/assets/industry/shared/cta.png', mobileImage: '/assets/industry/cleaning/m/cta.jpg', mobileButton: 'cta', mobileTop: 'pt-77', mobileBottom: 'pb-81' },

  features: {
    title: ['Measurable outcomes of our motor & controller- optimised for electric mobility'],
    titleClass: 'xl:w-1788',
    reveal: 'left',
    titleCase: true,
    bordered: true,
    items: [
      { title: '+5-8% Range', text: 'From Motor Swap Alone', icon: a('feat-range.svg') },
      { title: '2-3 week', text: 'Leadtime', icon: a('feat-leadtime.svg') },
      { title: '>40°C ambient', text: 'Sustained Operation', icon: a('feat-ambient.svg') },
      // The phone artboard draws PLI as a shield and words the last card differently.
      { title: 'PLI Qualifying', text: 'Motor', icon: a('feat-pli.svg'), mobileIcon: a('feat-pli-m.svg') },
      { title: 'Easily configurable', text: 'For Different Applications', mobileText: 'no liquid cooling maintenance', icon: a('feat-config.svg') },
    ],
  },

  process: { centered: true },

}

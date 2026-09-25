const a = (file) => `/assets/industry/3w/${file}`
// The outcome cards reuse the 2-wheeler icons, which are the same artwork.
const icon = (file) => `/assets/industry/2w/${file}`

export default {
  slug: '3-wheeler',
  name: '3 Wheeler',
  title: '3 Wheeler EV Motors & Controllers | Naxatra Labs',
  sections: ['challenges', 'applications', 'advantages', 'cta', 'features', 'process', 'testimonials', 'spec'],

  hero: {
    variant: 'cover',
    title: ['Engineered in India.', 'Built To Power 3 Wheeler Electric Mobility'],
    desktopTitle: ['Engineered in India. Built To', 'Power 3 Wheeler Electric', 'Mobility'],
    titleClass: 'capitalize xl:w-1097 xl:whitespace-nowrap',
    textTop: 'xl:top-82',
    subtitle: ['Advanced Electric Motor & Powertrain Technology- Engineered For EV Autos, Loaders, And Tricycles.'],
    subtitleClass: 'xl:w-450',
    image: a('hero.png'),
    imageClass: 'xl:object-bottom',
    frameClass: 'xl:-bottom-43 xl:h-967 xl:w-1920',
    washClass: 'bg-linear-to-b from-[rgba(24,99,218,0.4)] to-[rgba(24,99,218,0)]',
    angleClass: 'h-603 bg-[linear-gradient(200.56deg,#1863da_18.598%,rgba(24,99,218,0)_43.806%)]',
    alt: 'Electric auto-rickshaws and loaders on a highway through green hills',
    // The phone artboard's photo already carries its blue sky, so no wash is laid over it.
    mobile: {
      image: a('m-hero.jpg'),
      wash: 'hidden',
      title: ['Engineered in India.', 'Built To Power 3 Wheeler Electric Mobility'],
      text: 'py-60',
    },
  },

  challenges: {
    title: 'The key Consumer challenges in mobility',
    heading: '3-Wheelers mobility vehicles',
    text: 'Precision-built motors and controllers designed for performance, efficiency, and reliability.',
    layout: { flow: true },
    cards: [
      { src: a('challenge-1.png'), quote: 'Our motor overheats on long shifts' },
      { src: a('challenge-2.png'), quote: 'We need more efficiency range without adding battery' },
      { src: a('challenge-3.png'), quote: 'We need to hit PLI localization thresholds' },
      { src: a('challenge-4.png'), quote: 'Our current vendor has 16-week lead times from overseas.' },
    ],
  },

  applications: {
    title: 'Which 3 Wheeler application are you building for?',
    defaultIndex: 1,
    items: [
      { label: 'E-rickshaw', tile: a('tile-1.png'), panel: a('panel-erickshaw.png'), parts: ['Traction Motor, Controller & Axle'], text: 'Built for high-density urban transit, a traction motor, controller, and axle engineered for frequent stop-start driving, passenger comfort, and long daily duty cycles.', supplies: ['Traction - Motor, Controller & Axle (30/32inch)'] },
      {
        label: 'Loader Passenger',
        tile: a('tile-2.png'),
        panel: a('panel-passenger.png'),
        parts: ['Traction Motor, Controller, Gearbox & Independent Axle', 'Traction Motor, Controller & Rigid Axle'],
        text: 'Built for reliable passenger and cargo mobility. We supply traction motors, controllers, and gearboxes in both independent and rigid axle configurations, engineered for stable, load-ready performance.',
        supplies: ['Traction - Motor, Controller, Gearbox & Independent Axle', 'Traction - Motor, Controller & Rigid Axle'],
      },
      { label: 'Loader Cargo', tile: a('tile-3.png'), panel: a('panel-cargo.png'), parts: ['Traction Motor, Controller & Rigid Axle'], text: 'Engineered for heavy-duty goods transport. A traction motor, controller, and rigid axle built to handle sustained load carrying, frequent starts, and rough last-mile routes.', supplies: ['Traction - Motor, Controller & Rigid Axle'] },
      { label: 'Tricycle', tile: a('tile-4.png'), panel: a('panel-tricycle.png'), parts: ['Traction Motor, Controller & Rigid Axle'], text: 'Compact and dependable for everyday mobility. A traction motor, controller, and rigid axle designed for stable, efficient rides across short-to-medium distances.', supplies: ['Traction - Motor, Controller & Rigid Axle'] },
    ],
  },

  advantages: {
    section: 'xl:pb-207',
    title: 'Our key advantages for EV 2W, 3W and L5 OEMs',
    subtitle: 'Higher-Efficiency RF-series motor with matched controller',
    image: a('advantages.png'),
    imageBg: 'bg-black/7',
    imageFit: 'object-cover object-bottom',
    imageAlt: 'X-ray view of an electric auto-rickshaw showing its motor, controller and axle',
    stats: [
      { value: 'H Class', label: 'Insulation', width: 'xl:w-337' },
      { value: '85%', label: 'Localised BOM', big: true, width: 'xl:w-289' },
      { value: 'India-Based', label: 'Manufacturing supply chain', width: 'xl:w-432' },
      { value: 'Controller Agnostic', label: 'Power Density for Max Performance', width: 'xl:w-532' },
    ],
  },

  cta: {
    image: a('cta.png'),
    // The axle hangs 64px left of and 67.6px below the usual 500×320 render slot.
    imageClass:
      '-mb-[calc(var(--spacing)*44.1)] -ml-42 h-253 w-368 xl:-mb-[calc(var(--spacing)*67.628)] xl:-ml-64 xl:h-388 xl:w-564',
  },

  features: {
    title: ['Measurable outcomes of our motor & controller- optimised for electric mobility'],
    titleClass: 'xl:w-1788',
    items: [
      { title: '+5-8% Range', text: 'From Motor Swap Alone', icon: icon('feat-range.svg') },
      { title: '2-3 week', text: 'Leadtime', icon: icon('feat-leadtime.svg') },
      { title: '>40°C ambient', text: 'Sustained Operation', icon: icon('feat-ambient.svg') },
      { title: 'PLI Qualifying', text: 'Motor', icon: icon('feat-pli.svg') },
      { title: 'Easily configurable', text: 'For Different Applications', icon: icon('feat-config.svg') },
    ],
  },

  testimonials: { desktopArrows: true, spacing: 'gap-60 py-100 xl:gap-100 xl:pt-181 xl:pb-182' },
}

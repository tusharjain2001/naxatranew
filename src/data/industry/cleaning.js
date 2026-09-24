const a = (file) => `/assets/industry/cleaning/${file}`

const offer =
  'We offer a comprehensive solution for a high-maneuverability moving appliance, including a motor, controller, and gearbox for steering, traction, hydraulic systems, and sweeper components.'

export default {
  slug: 'cleaning',
  name: 'Cleaning',
  title: 'Cleaning Equipment Motors & Controllers | Naxatra Labs',
  // Section order on the artboard, top to bottom.
  sections: ['challenges', 'applications', 'cta', 'features', 'process', 'testimonials', 'spec'],

  hero: {
    title: ['Designed.Developed.', 'Driven Cleaning Equipment.'],
    subtitle: ['Motor. Controller. Gearbox.', 'One complete drive solution - built for continuous-duty cleaning applications.'],
    image: a('hero.png'),
    mobileStrip: a('m-hero-strip.png'),
    alt: 'Electric ride-on sweepers and floor scrubbers lined up on a plaza',
  },

  challenges: {
    title: 'The electric cleaning equipment challenge for motors nobody talks about',
    text: 'Commercial and industrial cleaning machines operate in harsh conditions, with extreme temperatures and inconsistent power. Most drive systems, designed for controlled environments, often fail in real-world scenarios, causing motor issues and unplanned downtime.',
    // Desktop places the header and the card row absolutely, as on the artboard.
    layout: { section: 'xl:h-1372', title: 'xl:top-161 xl:w-930', text: 'xl:top-269 xl:left-1199 xl:w-524', row: 'xl:top-537', card: 'xl:h-711 xl:w-557' },
    // Each card is the artboard's photo, callout and arrow exported as one image; `mobile` is the phone crop.
    cards: [
      { src: a('challenge-1.png'), mobile: a('m-challenge-1.png'), quote: 'Our motor overheats on long shifts' },
      { src: a('challenge-2.png'), mobile: a('m-challenge-2.png'), quote: 'We have 3 vendors - motor, controller, gearbox - no unified accountability' },
      { src: a('challenge-3.png'), mobile: a('m-challenge-3.png'), quote: 'We use higher power, unaware that lower power can perform just as well.', wide: true },
    ],
  },

  applications: {
    title: 'Which cleaning application are you building for?',
    defaultIndex: 1,
    // `tile` is the vehicle and its ground shadow composed from the artboard; `panel` is the annotated drive diagram.
    items: [
      {
        label: 'Ride-on floor Scrubber',
        tile: a('tile-1.png'),
        panel: a('panel-scrubber.png'),
        parts: ['Steering Motor & Controller', 'Hydraulic/Brush drive', 'Traction Motor, Controller & Gearbox'],
        text: offer,
        supplies: ['Steering', 'Traction', 'Hydraulic'],
      },
      {
        label: 'Ride-on sweeper with steering',
        tile: a('tile-2.png'),
        panel: a('panel-sweeper.png'),
        parts: ['Steering Motor & Controller', 'Sweeper Rotation Motor', 'Hydraulic Motor & Controller', 'Traction Motor, Controller & Gearbox'],
        text: offer,
        supplies: ['Steering', 'Traction', 'Hydraulic', 'Sweeper'],
      },
      {
        label: 'Leaf picker',
        tile: a('tile-3.png'),
        panel: a('panel-leaf.png'),
        parts: ['Vacuum Motor & Controller', 'Traction Motor, Controller & Axle'],
        text: offer,
        supplies: ['Vacuum', 'Traction'],
      },
      {
        label: 'Walk-behind / Compact Scrubber',
        tile: a('tile-4.png'),
        panel: a('panel-walk.png'),
        parts: ['Traction Motor, Controller & Gearbox', 'Hydraulic/Brush drive'],
        text: offer,
        supplies: ['Hydraulic', 'Traction'],
      },
      {
        label: 'Truck-mounted sweeper',
        tile: a('tile-5.png'),
        panel: a('panel-truck.png'),
        parts: ['6 Cubic Truck-Mounted Sweeper Solution', 'Hydraulic System Solution', 'Traction Motor & Controller', 'Vacuum Motor & Controller Solution'],
        text: offer,
        supplies: ['Hydraulic', 'Vacuum', 'Sweeper', 'Traction'],
      },
    ],
  },

  cta: { image: '/assets/industry/shared/cta.png' },

  features: {
    title: ['Antarix RF Series', 'Optimised for Cleaning Equipment'],
    items: [
      { title: '48V / 72V / 96V', text: 'Available', icon: a('feat-voltage.svg') },
      { title: 'IP67 Rated', text: 'Full Submersion Validated', icon: a('feat-ip67.svg') },
      { title: 'H-class insulation', text: 'Continuous High-Temp Operation', icon: a('feat-hclass.svg') },
      { title: '3-year', mobileTitle: '3 year', text: 'Motor Warranty on Every Unit', icon: a('feat-warranty.svg') },
      { title: 'Air cooled', text: 'no liquid cooling maintenance', icon: a('feat-air.svg') },
      { title: 'CAN', text: 'One-line communication', icon: a('feat-can.svg') },
    ],
  },

  testimonials: { desktopArrows: false },
}

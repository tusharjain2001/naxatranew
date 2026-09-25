const a = (file) => `/assets/industry/cleaning/${file}`

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
        text: 'Engineered for continuous-duty floor scrubbing. Our drive system covers steering control, hydraulic brush drive, and a traction motor, controller, and gearbox for precise, stable maneuvering across large floor areas.',
        supplies: ['Steering', 'Traction', 'Hydraulic'],
      },
      {
        label: 'Ride-on sweeper with steering',
        tile: a('tile-2.png'),
        panel: a('panel-sweeper.png'),
        // The phone artboard re-lays the diagram for its 360×264 box, so it is rebuilt from parts (design px).
        mobileDiagram: {
          image: { src: a('m/sweeper.png'), l: 64.48, t: 68.73, w: 186.301, h: 148.381 },
          shadow: { src: a('m/shadow.svg'), l: 51.2, t: 167.59, w: 222.46, h: 70.17 },
          lines: [
            { src: a('m/line-steering.svg'), l: 81.07, t: 28.4, w: 39.03, h: 96.44 },
            { src: a('m/line-sweeper.svg'), l: 136.06, t: 56.3, w: 57.19, h: 142.94 },
            { src: a('m/line-traction.svg'), l: 200.06, t: 195.03, w: 27.44, h: 39.44 },
            { src: a('m/line-hydraulic.svg'), l: 92.07, t: 185.03, w: 19.86, h: 42.44 },
          ],
          labels: [
            { text: 'Steering Motor & Controller', l: 100.29, t: 23.47, w: 163.99 },
            { text: 'Sweeper Rotation Motor', l: 197.68, t: 50.81, w: 127.28 },
            { text: 'Hydraulic Motor & Controller', l: 7.5, t: 218.47, w: 84, align: 'right' },
            { text: 'Traction Motor, Controller & Gearbox', l: 232.5, t: 226.47, w: 107.56 },
          ],
        },
        parts: ['Steering Motor & Controller', 'Sweeper Rotation Motor', 'Hydraulic Motor & Controller', 'Traction Motor, Controller & Gearbox'],
        text: 'We offer a complete solution for this high-maneuverability machine motors, controllers, and gearboxes for steering, traction, hydraulics, and sweeper components.',
        supplies: ['Steering', 'Traction', 'Hydraulic', 'Sweeper'],
      },
      {
        label: 'Leaf picker',
        tile: a('tile-3.png'),
        panel: a('panel-leaf.png'),
        parts: ['Vacuum Motor & Controller', 'Traction Motor, Controller & Axle'],
        text: 'Built for efficient outdoor debris collection. We supply the vacuum motor and controller for suction power, along with a traction motor, controller, and axle for smooth, reliable maneuvering across open ground.',
        supplies: ['Vacuum', 'Traction'],
      },
      {
        label: 'Walk-behind / Compact Scrubber',
        tile: a('tile-4.png'),
        panel: a('panel-walk.png'),
        parts: ['Traction Motor, Controller & Gearbox', 'Hydraulic/Brush drive'],
        text: 'Compact and easy to operate- our drive system powers the hydraulic brush drive for consistent scrubbing pressure, along with a traction motor, controller, and gearbox for smooth, controlled walk-behind movement.',
        supplies: ['Hydraulic', 'Traction'],
      },
      {
        label: 'Truck-mounted sweeper',
        tile: a('tile-5.png'),
        panel: a('panel-truck.png'),
        parts: ['6 Cubic Truck-Mounted Sweeper Solution', 'Hydraulic System Solution', 'Traction Motor & Controller', 'Vacuum Motor & Controller Solution'],
        text: 'Built for large-scale municipal and industrial sweeping. Our drive system covers vacuum, hydraulic, and sweeper functions, plus a dedicated traction motor and controller, delivering reliable performance across heavy-duty, high-capacity truck-mounted units.',
        supplies: ['Hydraulic', 'Vacuum', 'Sweeper', 'Traction'],
      },
    ],
  },

  // The phone render is the artboard's motor, controller and gearbox composed on black, with a smaller button.
  cta: { image: '/assets/industry/shared/cta.png', mobileImage: a('m/cta.jpg'), mobileButton: 'cta' },

  features: {
    title: ['Antarix RF Series', 'Optimised for Cleaning Equipment'],
    items: [
      { title: '48V / 72V / 96V', text: 'Available', icon: a('feat-voltage.svg'), mobileIcon: a('feat-voltage-m.svg') },
      { title: 'IP67 Rated', text: 'Full Submersion Validated', icon: a('feat-ip67.svg') },
      { title: 'H-class insulation', text: 'Continuous High-Temp Operation', icon: a('feat-hclass.svg') },
      { title: '3-year', mobileTitle: '3 year', text: 'Motor Warranty on Every Unit', icon: a('feat-warranty.svg') },
      { title: 'Air cooled', text: 'no liquid cooling maintenance', icon: a('feat-air.svg') },
      { title: 'CAN', text: 'One-line communication', icon: a('feat-can.svg') },
    ],
  },

  testimonials: { desktopArrows: false },
}

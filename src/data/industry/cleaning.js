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
    // One 1920×880 picture for the desktop hero.
    desktopImage: a('hero-desktop.webp'),
    alt: 'Electric ride-on sweepers and floor scrubbers lined up on a plaza',
  },

  challenges: {
    title: 'The electric cleaning equipment challenge for motors nobody talks about',
    text: 'Commercial and industrial cleaning machines operate in harsh conditions, with extreme temperatures and inconsistent power. Most drive systems, designed for controlled environments, often fail in real-world scenarios, causing motor issues and unplanned downtime.',
    // Desktop places the header and the card row absolutely, as on the artboard.
    // Cards are 640 tall on the artboard; the 711px exports are clipped the way Figma offsets them (13px up).
    layout: { section: 'xl:h-1140', title: 'xl:top-106 xl:w-740', text: 'xl:top-202 xl:left-1125 xl:w-695', row: 'xl:top-378', card: 'xl:h-640 xl:w-557 xl:object-[50%_18.3%]' },
    // Each card is the artboard's photo, callout and arrow exported as one image; `mobile` is the phone crop.
    // Listed in phone order; `order` swaps the first two on desktop, where "3 vendors" leads.
    cards: [
      { src: a('challenge-1-v2.png'), mobile: a('m-challenge-1-v2.png'), quote: 'Our motor overheats on long shifts', order: 'xl:order-2' },
      { src: a('challenge-2-v2.png'), mobile: a('m-challenge-2-v2.png'), quote: 'We have 3 vendors - motor, controller, gearbox - no unified accountability', order: 'xl:order-1' },
      { src: a('challenge-3-v2.png'), mobile: a('m-challenge-3-v2.png'), quote: 'We use higher power, unaware that lower power can perform just as well.', wide: true, order: 'xl:order-3' },
    ],
  },

  applications: {
    title: 'Which cleaning application are you building for?',
    titleClass: 'xl:w-809 xl:text-64',
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
        // The phone artboard re-lays the diagram for its 360×264 box (15421:36165), exported as its own picture.
        mobilePanel: a('m/panel-sweeper.jpg'),
        parts: ['Steering Motor & Controller', 'Sweeper Rotation Motor', 'Hydraulic Motor & Controller', 'Traction Motor, Controller & Gearbox'],
        text: 'We offer a comprehensive solution for a high-maneuverability moving appliance, including a motor, controller, and gearbox for steering, traction, hydraulic systems, and sweeper components.',
        supplies: ['Steering', 'Traction', 'Hydraulic', 'Sweeper'],
      },
      {
        label: 'Leaf picker',
        mobileLabel: 'Leaf Picker',
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
    reveal: 'left',
    titleCase: true,
    items: [
      { title: '48V / 72V / 96V', text: 'Available', icon: a('feat-voltage.svg'), mobileIcon: a('feat-voltage-m.svg') },
      { title: 'IP67 Rated', text: 'Full Submersion Validated', icon: a('feat-ip67.svg') },
      { title: 'H-class insulation', text: 'Continuous High-Temp Operation', icon: a('feat-hclass.svg') },
      { title: '3-year', mobileTitle: '3 year', text: 'Motor Warranty on Every Unit', icon: a('feat-warranty.svg') },
      { title: 'Air cooled', text: 'no liquid cooling maintenance', icon: a('feat-air.svg') },
      { title: 'CAN', text: 'One-line communication', icon: a('feat-can.svg') },
    ],
  },

}

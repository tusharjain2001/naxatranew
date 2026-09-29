const a = (file) => `/assets/industry/drone/${file}`

// Drone industry page (Figma "drone page"). It has its own section set, so it is routed separately from
// the four template industry pages; the banner, outcomes, timeline, testimonials and form are shared.
export default {
  slug: 'drone',
  name: 'Drone',
  title: 'Drone Motors & ESC | Naxatra Labs',

  hero: {
    title: ['Motors & ESC', 'That Power Drones'],
    subtitle: 'Naxatra Labs engineers high-performance brushless motors and electronic speed controllers',
    image: a('hero.webp'),
    mobileImage: a('m/hero.webp'),
    alt: 'Quadcopter drone with its four motors lit in blue',
  },

  // Accordion of application groups; the first starts open. Card photos are composed from the artboard
  // at 2×, the fade and label are drawn in CSS.
  applications: [
    {
      title: 'Defence Applications',
      mobileTitle: 'Defence Applications',
      cards: [
        { label: 'Fixed wing drones', image: a('fixed-wing.webp') },
        { label: 'Inspection drones', image: a('inspection.webp') },
        { label: 'Cargo transfer drones', image: a('cargo.webp') },
        { label: 'Surveillance drones', image: a('surveillance.webp') },
        { label: 'Kamikaze drones', image: a('kamikaze.webp') },
      ],
    },
    {
      title: 'Agriculture Applications',
      mobileTitle: 'Agricultural Applications',
      cards: [
        { label: 'Hexacopter drone', image: a('hexacopter.webp') },
        { label: 'Quadcopter drone', image: a('quadcopter.webp') },
        { label: 'Spraying drone', image: a('spraying.webp') },
      ],
    },
  ],

  power: {
    image: a('engineering.webp'),
    mobileImage: a('m/engineering.webp'),
    alt: 'Brushless drone motor in a transparent housing',
  },

  // Four stages of the same motor, placed as on the 411×522 artboard cards (design px).
  prototype: {
    title: 'From prototype to production.',
    stages: [
      { image: a('proto-1.webp'), tone: 'bg-[rgba(217,217,217,0.2)]', box: { l: 28, t: 88, w: 339, h: 398 } },
      { image: a('proto-2.webp'), tone: 'bg-[rgba(217,217,217,0.35)]', box: { l: 34, t: 88, w: 342.939, h: 398.071 } },
      { image: a('proto-3.webp'), tone: 'bg-[rgba(217,217,217,0.6)]', box: { l: 39, t: 71, w: 327.675, h: 397.394 } },
      { image: a('proto-4.webp'), tone: 'bg-[rgba(217,217,217,0.75)]', box: { l: 44, t: 88, w: 324.257, h: 345.726 } },
    ],
  },

  // Alternating text / photo rows. The phone artboard shows the ESC on the second card.
  showcase: [
    {
      title: ['One platform.', 'for Every Efficient cycle.'],
      text: "We don't sell a motor. We deliver a matched drive system - engineered for your specific application. Featured Products, efficient, Compact and High-Performance electric motion.",
      image: a('card-motor.webp'),
      mobileImage: a('m/card-motor.webp'),
      label: 'IP67 sealed',
      caption: ['Built for continuous agri duty', 'cycles Tested in dust, heat, and monsoon'],
      alt: 'Brushless drone motor',
    },
    {
      title: ['One platform.', 'for Every Efficient cycle.'],
      text: "We don't sell a motor. We deliver a matched drive system - engineered for your specific application. Featured Products, efficient, Compact and High-Performance electric motion.",
      image: a('card-motor.webp'),
      mobileImage: a('m/card-esc.webp'),
      label: 'ESC',
      caption: ['Matched and tuned for variable', 'load and terrain', '48V / 72V / 96V', 'CAN / one-line comms'],
      alt: 'Electronic speed controller',
      reverse: true,
    },
  ],

  pulse: {
    eyebrow: 'THE PULSE BEHIND EVERY MOTION.',
    title: ['Motor and ESC,', 'engineered as one.'],
    text: 'A drone is only as reliable as its propulsion core. We design the brushless motor and its electronic speed controller together. so torque delivery, thermal behavior and throttle response are matched, not compromised.',
    image: a('blueprint.webp'),
    mobileImage: a('m/blueprint.webp'),
  },

  capabilities: {
    title: 'The engineering behind the thrust',
    text: 'Credibility comes from capability. Every Naxatra system is the product of in-house research, rigorous testing and precision manufacturing.',
    // `icon` is the glyph size in design px (desktop); the phone draws them at 0.35×.
    items: [
      { title: 'In-House R&D', text: 'Dedicated research into magnetic design, winding topology and ESC firmware — owned end to end.', icon: a('icon-rnd.svg'), size: 'w-[42.53em] h-[52.87em]' },
      { title: 'Testing & Validation', text: 'Dynamometer thrust testing, endurance cycling and environmental validation before any unit ships.', icon: a('icon-testing.svg'), size: 'size-[51.69em]' },
      { title: 'Thermal Engineering', text: 'Heat-path modeling and airflow design keep motors and controllers within safe limits under load.', icon: a('icon-thermal.svg'), size: 'w-[23.95em] h-[48.53em]' },
      { title: 'Precision Manufacturing', text: 'Tight-tolerance assembly and balanced rotors for low vibration and consistent unit-to-unit output.', icon: a('icon-precision.svg'), size: 'size-[46.8em]' },
      { title: 'Lightweight Systems', text: 'Material and structural optimization strips grams without sacrificing strength or thermal headroom.', icon: a('icon-lightweight.svg'), size: 'size-[51.69em]' },
      { title: 'Performance Tuning', text: 'Configurable ESC profiles let integrators match propulsion behavior to each airframe and mission.', icon: a('icon-tuning.svg'), size: 'size-[60em]' },
    ],
  },

  // The phone banner uses the shared motor, controller and gearbox render.
  cta: {
    image: a('cta.webp'),
    mobileImage: '/assets/industry/cleaning/m/cta.jpg',
    imageClass: 'h-209 w-[calc(var(--spacing)*326.18)] xl:h-[calc(var(--spacing)*328.8)] xl:w-[calc(var(--spacing)*460.31)]',
  },

  features: {
    title: ['Measurable outcomes of our motor & controller- optimised for Drones'],
    titleClass: 'xl:w-1588',
    reveal: 'left',
    items: [
      { title: '+5-8% Range', text: 'From Motor Swap Alone', icon: '/assets/industry/2w/feat-range.svg' },
      { title: '2-3 week', text: 'Leadtime', icon: '/assets/industry/2w/feat-leadtime.svg' },
      { title: '>40°C ambient', text: 'Sustained Operation', icon: '/assets/industry/2w/feat-ambient.svg' },
      { title: 'PLI Qualifying', text: 'Motor', icon: '/assets/industry/2w/feat-pli.svg' },
      { title: 'Easily configurable', text: 'For Different Applications', icon: '/assets/industry/2w/feat-config.svg' },
    ],
  },
}

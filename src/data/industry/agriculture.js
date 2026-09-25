const a = (file) => `/assets/industry/agri/${file}`

export default {
  slug: 'agriculture',
  name: 'Agriculture',
  title: 'Agriculture Equipment Motors & Controllers | Naxatra Labs',
  sections: ['challenges', 'applications', 'cta', 'features', 'process', 'testimonials', 'spec'],

  hero: {
    variant: 'cover',
    // Title on top, the subtitle 112px below it on the left, as on the artboard.
    stacked: true,
    title: ['Indian Fields Don’t Forgive', 'A Weak Motor.'],
    titleClass: 'capitalize xl:w-1097',
    textTop: 'xl:top-136',
    subtitle: ['Motor. Controller. Axle.', 'One complete drive solution — built for continuous-duty agri applications in the conditions that actually exist in India.'],
    subtitleClass: 'font-light xl:w-649',
    image: a('hero.png'),
    imageClass: 'xl:object-bottom',
    frameClass: 'xl:top-[-42px] xl:bottom-auto xl:h-964 xl:w-1970',
    washClass: 'bg-[linear-gradient(131.82deg,rgba(0,43,96,0.2)_15.953%,rgba(0,0,0,0)_68.206%)]',
    angleClass: false,
    alt: 'Electric tractors, a tiller and farm vehicles lined up at the edge of a crop field',
  },

  challenges: {
    title: 'The Agri Drive System challenges that nobody talks about',
    text: 'Agricultural equipment in India endures harsh conditions like dust, monsoon floods, and extreme heat over 44°C, which leads to early motor failures during crucial crop seasons. Most motors are designed for controlled environments, and sourcing motors and controllers from different vendors creates integration and warranty challenges for OEMs.',
    layout: {
      flow: true,
      section: 'xl:px-100 xl:py-160',
      title: 'xl:w-823 xl:text-64 xl:leading-80',
      aside: 'xl:w-897',
      text: 'xl:text-32 xl:leading-40',
      row: 'xl:gap-24',
      card: 'xl:h-711 xl:w-557 xl:rounded-12',
    },
    cards: [
      { src: a('challenge-1.png'), quote: 'We face failure during peak crop season - no margin for downtime' },
      { src: a('challenge-2.png'), quote: 'We have to go through multi-vendor sourcing - nobody owns the system integration' },
      { src: a('challenge-3.png'), quote: 'We see dust and water ingress in field conditions destroys motors without IP67', wide: true },
    ],
  },

  applications: {
    title: 'Which Agriculture application are you building for?',
    defaultIndex: 1,
    items: [
      { label: 'Power Tiller', tile: a('tile-1.png'), panel: a('panel-tiller.png'), parts: ['RF 55/86 Motor & Controller'], text: 'Built for demanding soil preparation, our RF 55/86 traction motor and controller deliver consistent, reliable power to handle tough field conditions.', supplies: ['Traction - RF 55/86 Motor & Controller'] },
      { label: 'Power Weeder', tile: a('tile-2.png'), panel: a('panel-weeder.png'), parts: ['RF 22/48 Motor & Controller'], text: 'Built for demanding soil preparation, we supply motors and controllers for steering, traction, and hydraulic systems, engineered to handle tough field conditions with consistent, reliable power.', supplies: ['Traction - RF22/48 Motor & Controller'] },
      {
        label: 'Agri Bot',
        tile: a('tile-3.png'),
        panel: a('panel-bot.png'),
        parts: ['Traction Motor & Controller', 'Spraying Motor & Controller'],
        text: 'A fully motorized solution for autonomous field operations- RF 22/48 spraying motor and controller for precise application, with RF 22/48 or RF 22/60 traction options depending on payload and terrain.',
        supplies: ['Spraying - RF 22/48', 'Traction - RF 22/48 & RF 22/60'],
      },
      {
        label: 'Compact Tractor',
        tile: a('tile-4.png'),
        panel: a('panel-tractor.png'),
        parts: ['Steering Motor & Controller', 'Hydraulic Motor & Controller', 'Traction Motor, Controller and Axle'],
        text: 'Built for versatile farm work- RF 15/42 steering motor and controller, hydraulic power for implement control, and RF 22/48 traction with axle, engineered for reliable performance across varied field tasks.',
        supplies: ['Steering - RF 15/42', 'Hydraulic', 'Traction - RF 22/48 + Axle'],
      },
      { label: 'Agri Sprayer', tile: a('tile-5.png'), panel: a('panel-sprayer.png'), parts: ['Spraying Motor & Controller'], text: 'Precision aerial application. A dedicated spraying motor and controller engineered for accurate, efficient crop coverage from the air.', supplies: ['Spraying'] },
    ],
  },

  cta: { image: '/assets/industry/shared/cta.png' },

  features: {
    title: ['Antarix RF Series', 'Optimised for Agriculture Equipment'],
    cols: 'xl:grid-cols-2',
    items: [
      { title: '48V / 72V / 96V', text: 'Available', icon: a('feat-voltage.svg') },
      { title: 'IP67 Rated', text: 'Full Submersion Validated', icon: a('feat-ip67.svg') },
      { title: '3-year', mobileTitle: '3 year', text: 'Motor Warranty on Every Unit', icon: a('feat-warranty.svg') },
      { title: 'H-class insulation', text: 'Continuous High-Temp Operation', icon: a('feat-hclass.svg') },
    ],
  },

  testimonials: { desktopArrows: true, spacing: 'gap-60 py-100 xl:gap-100 xl:pt-181 xl:pb-182' },
}

const a = (file) => `/assets/${file}`

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Industry', href: '#industry', hasMenu: true },
  { label: 'About', href: '#about' },
]

export const industryMenu = {
  images: [
    { src: a('menu-cleaning.png'), label: 'Cleaning', tint: true },
    { src: a('menu-agriculture.png'), label: 'Agriculture' },
    { src: a('menu-2wheeler.png'), label: '2 wheeler' },
    { src: a('menu-3wheeler.png'), label: '3 wheeler' },
  ],
  links: [
    { label: 'Cleaning', icon: a('icon-cleaning.svg'), iconClass: 'size-48' },
    { label: 'Agriculture', icon: a('icon-agriculture.svg'), iconClass: 'size-48' },
    { label: '2 wheeler', icon: a('icon-scooter.svg'), iconClass: 'h-23 w-32 -scale-x-100' },
    { label: '3 wheeler', icon: a('icon-3wheeler.svg'), iconClass: 'h-28 w-32' },
  ],
}

// `top` is the headline offset from the top of the 880px image area on the 1920px artboard.
export const heroSlides = [
  {
    id: 'precision',
    image: a('hero-agri.png'),
    title: ['Precision motor systems'],
    subtitle: ['Designed and manufactured in India for manufacturers,', 'OEMs and mobility companies worldwide.'],
    subtitleGap: 'gap-18',
    top: 142,
  },
  {
    id: 'making',
    image: a('hero-vehicles.png'),
    title: ['The Making of', 'What Moves'],
    overlay: 'vehicles',
    top: 111,
  },
  {
    id: 'designed',
    image: a('hero-sweeper.png'),
    title: ['Designed.', 'Developed.', 'Driven.'],
    top: 160,
  },
  {
    id: 'drone',
    image: a('hero-drone.png'),
    imageClass: '-scale-x-100 object-top',
    title: ['The Making of', 'What Moves'],
    top: 111,
  },
  {
    id: 'made-in-india',
    image: a('hero-bridge.png'),
    mobileImage: a('m/hero-bridge.png'),
    title: ['Advanced Motors & Controllers', 'All Made In India'],
    mobileTitle: ['Advanced Motors & Controllers', 'All Made in India'],
    subtitle: ['Designed. Developed. Driven.'],
    subtitleGap: 'gap-48',
    overlay: 'bridge',
    titleSize: 'text-80 leading-88',
    left: 100,
    top: 120,
  },
]

export const commitment = {
  title: 'Our Commitment To Innovation, Precision, And Sustainability Drives Every Decision We Make',
  body: "At Naxatra Labs, we understand that every application has unique requirements. They're engineered to fit your needs. We customize every detail to ensure optimal performance and efficiency.",
  location: 'AHMEDABAD, INDIA',
  image: a('commitment-motor.png'),
  stats: [
    { value: '10%', label: 'Higher Average Efficiency' },
    { value: '8%', label: 'Increased Operating Range' },
    { value: '20%', label: 'Lighter For Better Energy Utilization' },
    { value: '2x', label: 'Power Density For Max Performance' },
  ],
}

/*
 * Application cards, measured in 1920px-artboard px. The card scales with its font-size, so
 * the same numbers drive the 0.41x mobile card.
 *   tile: grey backdrop, photo: product box + crop, shadow: floor ellipse under the vehicle.
 */
export const applications = [
  {
    label: '2 Wheelers',
    font: 'font-inter',
    photo: { src: a('app-2wheeler.png'), l: 38.9, t: 33.42, w: 276.478, h: 250.377, crop: { w: 101.29, h: 148.67, l: -1.22, t: -19.07 } },
    shadow: { src: a('shadow-sm.svg'), l: 60.17, t: 262.53, w: 213.642, inset: '-111.11% -4.52%' },
  },
  {
    label: '3 Wheelers & L5',
    font: 'font-inter',
    photo: { src: a('app-3wheeler.png'), l: 7.61, t: -7.18, w: 308.379, h: 274.545, crop: { w: 100, h: 149.88, l: 0, t: -7.82 } },
    shadow: { src: a('shadow-lg.svg'), l: 42.41, t: 262.53, w: 238.777, inset: '-111.11% -4.05%' },
  },
  {
    label: 'Cleaning',
    font: 'font-inter',
    photo: { src: a('app-cleaning.png'), l: 46.91, t: 34.39, w: 260.993, h: 247.494, crop: { w: 102.87, h: 143.84, l: 0.12, t: -14.42 }, flip: true },
    shadow: { src: a('shadow-lg.svg'), l: 46.89, t: 257.7, w: 238.777, inset: '-111.11% -4.05%' },
  },
  {
    label: 'Agriculture',
    font: 'font-geist',
    photo: { src: a('app-agriculture.png'), l: 18.69, t: 26, w: 281.537, h: 265.631, crop: { w: 103.39, h: 146.11, l: -3.57, t: -15.43 } },
    shadow: { src: a('shadow-lg.svg'), l: 46.53, t: 253.83, w: 238.777, inset: '-111.11% -4.05%' },
  },
  {
    label: 'Drone',
    font: 'font-geist',
    photo: { src: a('app-drone.png'), l: 1.26, t: 16.02, w: 330.187, h: 315.006, crop: { w: 104.02, h: 145.38, l: -1.72, t: -24.2 } },
  },
]

export const manufacturing = {
  title: 'Inside Our Manufacturing',
  cta: 'Know about us',
  image: a('manufacturing.png'),
  // Figma marks this frame as a video placeholder. Drop the factory film URL here to enable playback.
  videoSrc: '',
}

export const deployment = {
  title: 'Engineered Here, Deployed Everywhere',
  subtitle: 'High-Performance Electric Motor For Global Applications.',
  tabs: ['Design', 'Performance', 'Technology'],
  images: [
    { src: a('deploy-drone.png'), alt: 'Agricultural spraying drone over a paddy field' },
    { src: a('deploy-repair.png'), alt: 'Technician servicing an electric motorcycle drivetrain' },
    { src: a('deploy-charging.png'), alt: 'Electric car being charged', imageClass: '-scale-x-100' },
  ],
}

export const products = [
  {
    brand: 'Antarix',
    series: 'RF Series',
    mobileSeries: 'RF Series',
    desc: 'Main description point',
    descClass: 'left-141 top-121 text-left',
    image: {
      src: a('product-rf.png'),
      box: { l: -51, t: 58, w: 660.666, h: 589.562 },
      inner: { w: 576.236, h: 485.439, rotate: -168.62 },
      crop: { w: 102.94, h: 68.73, l: 0.7, t: 12.77 },
    },
    mobile: {
      src: a('product-rf.png'),
      box: { l: 151, t: -31, w: 234.592, h: 209.344 },
      inner: { w: 204.612, h: 172.372, rotate: -168.62 },
      crop: { w: 102.94, h: 68.73, l: 0.7, t: 12.77 },
    },
  },
  {
    brand: 'Antarix',
    series: 'AF58',
    mobileSeries: 'AF Series',
    desc: 'Main description point',
    descClass: 'left-141 top-131 text-center',
    image: {
      src: a('product-af58.png'),
      box: { l: -60, t: 58, w: 635.949, h: 640.945 },
      inner: { w: 498.9, h: 404.6, rotate: 47.15 },
      fit: 'object-cover',
    },
    mobile: {
      src: a('m/product-af.png'),
      box: { l: 176, t: -18, w: 191.413, h: 192.727 },
      inner: { w: 148.301, h: 123.519, rotate: 47.15 },
      fit: 'object-fill',
    },
  },
  {
    brand: 'PT',
    series: '500',
    mobileSeries: '500',
    desc: 'Main description point',
    descClass: 'left-141 top-121 text-left',
    image: {
      src: a('product-pt500.png'),
      box: { l: -59.3, t: 89, w: 686.76, h: 694.593 },
      inner: { w: 530.2, h: 448.9, rotate: 48.91 },
      fit: 'object-fill',
    },
    mobile: {
      src: a('m/product-pt500.png'),
      box: { l: 165.86, t: -13.58, w: 207.543, h: 206.369 },
      inner: { w: 140.595, h: 152.767, rotate: 48.91 },
      fit: 'object-fill',
    },
  },
]

const testimonial = {
  quote:
    'This is a dummy testimonial sentence. Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
  name: 'Name',
  role: 'Designation',
  logo: 'LOGO',
}

export const testimonials = Array.from({ length: 4 }, (_, i) => ({ id: i, ...testimonial }))

/*
 * Timeline entries. `cover` draws a plain square photo; `inset` draws the product-shot treatment
 * (faded square + full-width photo) and `objectPosition` reproduces off-centre crops from Figma.
 */
export const journey = [
  { year: '2020', title: 'Born to Disrupt', text: 'Naxatra Labs takes flight with a mission to revolutionize hybrid drones.', image: a('journey-01.png') },
  { year: '2020', title: 'Electric Dreams Take Shape', text: 'Ventured into Axial Flux Motors for EVs, bringing cutting-edge hub and mid-drive technology to life.', image: a('journey-02.png') },
  { year: '2020', title: 'Gaining Recognition', text: 'Became a Finalist at Evangelise 2021, proving our innovation potential.', image: a('journey-03.png') },
  { year: '2022', title: 'Engineering the Future', text: 'In-House developed advanced magnet tech, cooling methods and electromagnetic designs for next-gen efficiency.', image: a('journey-04.png') },
  { year: '2022', title: 'Building Smarter, Faster Motors', text: 'Developed our first Radial Hub Motor, setting the stage for high-performance EVs.', image: a('journey-05.png'), inset: { fade: 'opacity-12', aspect: 'aspect-[222/148]', top: 40, fit: 'object-fill' }, titleLeading: 'leading-40' },
  { year: '2022', title: 'Evangelise 2022', text: 'Finalist at Evangelise 2022 by iCreate. Recognized for groundbreaking innovation in electric mobility.', image: a('journey-06.png'), inset: { fade: 'opacity-12', aspect: 'aspect-[226/160]', top: 35, fit: 'object-cover' }, titleLeading: 'leading-40' },
  { year: '2023', title: 'Pushing Boundaries', text: 'Began Radial Flux Motor development, refining performance and efficiency.', image: a('journey-07.png') },
  { year: '2023', title: 'From Idea to Industry', text: 'Established our first factory, turning prototypes into real-world solutions.', image: a('journey-08.png') },
  { year: '2023', title: 'Fueling the Vision', text: 'Secured Pre-Seed Funding to accelerate innovation.', image: a('journey-09.png'), inset: { fade: 'opacity-5', aspect: 'aspect-[222/148]', top: 40, fit: 'object-cover' } },
  { year: '2023', title: 'Powering Progress', text: 'Deployed motors in the agricultural industry, making farming more sustainable.', image: a('journey-10.png'), objectPosition: '71% 50%' },
  { year: '2024', title: 'Taking Flight', text: 'Expanded into aviation motors, bringing electric power to the skies.', image: a('journey-11.png') },
  { year: '2024', title: 'Scaling for Impact', text: 'Announced our Seed Round to drive the next wave of breakthroughs.', image: a('journey-12.png') },
  { year: '2025', title: 'Supercharging Growth', text: 'Expanding production capacity to 100K motors per year to meet global demand.', image: a('journey-13.png') },
  { year: '2025', title: 'Leading the Charge', text: 'Showcasing at Bharat Mobility Expo, cementing our role as an industry pioneer.', image: a('journey-14.png'), objectPosition: '11.8% 50%' },
  { year: '2025', title: 'Another Production Facility', text: 'Inaugurated our another state-of-the-art production unit in August 2025, enabling higher production capacity and precision manufacturing for next-generation motors.', image: a('journey-15.png') },
  { year: '2025', title: 'Showcasing Innovation', text: 'Exhibited at EV India Expo 2025, presented our advancements in motor technologies and forging key international collaborations.', image: a('journey-16.png') },
  { year: '2025', title: 'Pre-Series A ($3M)', text: 'Motor & Controllers: Efficient Motors, Better Performance, Greener Future', image: a('journey-17.png'), inset: { fade: 'opacity-5', aspect: 'aspect-[222/148]', top: 40, fit: 'object-cover' } },
]

export const ideas = [
  { date: 'May 11, 2023', title: 'National Technology Week', image: a('idea-1.png'), mark: a('idea-mark-1.svg'), mobileImageClass: 'object-[3.5%_50%]' },
  { date: 'May 11, 2023', title: 'National Technology Week', image: a('idea-2.png'), mark: a('idea-mark-2.svg') },
  { date: 'May 11, 2023', title: 'National Technology Week', image: a('idea-3.png'), mark: a('idea-mark-3.svg') },
].map((item, id) => ({
  id,
  ...item,
  text: 'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
}))

export const footer = {
  offices: [
    { title: 'Corporate Office', lines: ['Sector 44, Gurugram,', 'Haryana 122003'] },
    { title: 'Manufacturing Facility', lines: ['Paldi-Kankaj, Dakroi Ahmedabad,', 'Gujarat 382425'] },
  ],
  quickLinks: ['Home', 'Products', 'About Us', 'Blogs And Insights', 'Career', 'Contact Us'],
  contact: [
    { label: '+91 9266030266', href: 'tel:+919266030266' },
    { label: 'Enquiry@Naxatralabs.Com', href: 'mailto:enquiry@naxatralabs.com' },
    { label: 'Careers@Naxatralabs.Com', href: 'mailto:careers@naxatralabs.com' },
  ],
  newsletter: {
    title: 'Join The Newsletter',
    text: ['Get articles on the innovative projects', 'Lockheed Martin scientists and engineers', 'are working on right now.'],
  },
  legal: ['Privacy Policy', 'Terms of Use'],
  copyright: '© 2024 Naxatra Labs. All Rights Reserved.',
}

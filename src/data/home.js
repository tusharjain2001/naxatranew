const a = (file) => `/assets/${file}`

// `wide` items sit in the artboard's fixed 160px slots; the rest are padded 32px each side.
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products', wide: true },
  { label: 'Industry', href: '/#industry', hasMenu: true },
  { label: 'Technology', href: '/technology', wide: true },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers', wide: true },
]

// Menu order follows the Figma dropdown (node 15440:4948): 2 wheeler, 3 wheeler / Cleaning, Agriculture /
// Drone, Others. With nothing hovered (and off the industry pages) the photo box shows `mosaic`, all six photos; a
// hovered or current industry shows its own photo there. `activeIcon` is the blue variant.
export const industryMenu = {
  mosaic: a('others/nav-mosaic.webp'),
  links: [
    {
      label: '2 wheeler',
      href: '/industry/2-wheeler',
      image: a('nav/2-wheeler.webp'),
      icon: a('icon-scooter.svg'),
      activeIcon: a('nav/icon-scooter-active.svg'),
      iconClass: 'h-23 w-32 -scale-x-100',
      mobileIconClass: 'h-[calc(var(--spacing)*14.4)] w-20 -scale-x-100',
    },
    {
      label: '3 wheeler',
      href: '/industry/3-wheeler',
      image: a('nav/3-wheeler.webp'),
      icon: a('icon-3wheeler.svg'),
      activeIcon: a('nav/icon-3wheeler-active.svg'),
      iconClass: 'h-28 w-32',
      mobileIconClass: 'h-[calc(var(--spacing)*17.5)] w-20',
    },
    {
      label: 'Cleaning',
      href: '/industry/cleaning',
      image: a('nav/cleaning.webp'),
      tint: true,
      icon: a('icon-cleaning.svg'),
      activeIcon: a('nav/icon-cleaning-active.svg'),
      iconClass: 'size-48',
      mobileIconClass: 'size-30',
    },
    {
      label: 'Agriculture',
      href: '/industry/agriculture',
      image: a('nav/agriculture.webp'),
      icon: a('icon-agriculture.svg'),
      activeIcon: a('nav/icon-agriculture-active.svg'),
      iconClass: 'size-48',
      mobileIconClass: 'size-30',
    },
    {
      label: 'Drone',
      href: '/industry/drone',
      image: a('nav/drone.webp'),
      icon: a('icon-drone.svg'),
      activeIcon: a('nav/icon-drone-active.svg'),
      mobileIcon: a('m/icon-drone.svg'),
      mobileActiveIcon: a('m/icon-drone-active.svg'),
      iconClass: 'size-48',
      mobileIconClass: 'size-30',
    },
    {
      label: 'Others',
      href: '/industry/others',
      image: a('others/nav-others.webp'),
      icon: a('icon-robot.svg'),
      activeIcon: a('nav/icon-robot-active.svg'),
      iconClass: 'size-48',
      mobileIconClass: 'size-30',
    },
  ],
}

// Slide order follows the Figma home page (hero 1-5). `top` is the headline offset from the top of the
// 880px image area on the 1920px artboard.
export const heroSlides = [
  {
    id: 'made-in-india',
    image: a('hero-bridge.webp'),
    mobileImage: a('m/hero-bridge.webp'),
    // The phone artboard breaks this headline after “India's” rather than letting it wrap.
    mobileLines: true,
    title: ['Powering India’s', 'Electric Motion.'],
    subtitle: ['Engineered. Tested. Proven.'],
    subtitleGap: 'gap-48',
    overlay: 'bridge',
    titleClass: 'h-176',
    top: 122,
    left: 100,
  },
  {
    id: 'mobility',
    image: a('hero-vehicles.webp'),
    mobileImage: a('m/hero-vehicles.webp'),
    title: ['Engineering Electric Mobility,', 'End To End.'],
    overlay: 'vehicles',
    top: 120,
  },
  {
    id: 'cleaning',
    image: a('hero-sweeper.webp'),
    mobileImage: a('m/hero-sweeper.webp'),
    title: ['Powerful Motors For', 'Spotless Results.'],
    // The phone artboard sets this headline in a narrower box, so it breaks onto three lines.
    mobileTitleClass: 'w-347',
    top: 120,
  },
  {
    id: 'agriculture',
    image: a('hero-agri.webp'),
    // Phone crops are composed from the 402px artboards, each framed on its subject.
    mobileImage: a('m/hero-agri.webp'),
    title: ['Powering Agriculture’s Next', 'Generation'],
    top: 120,
  },
  {
    id: 'drone',
    image: a('hero-drone.webp'),
    // The phone crop is already mirrored.
    mobileImage: a('m/hero-drone.webp'),
    imageClass: 'xl:-scale-x-100 xl:object-top',
    title: ['Precision Motors,', 'Engineered To Fly.'],
    top: 120,
  },
]

export const commitment = {
  title: 'Our Commitment To Innovation, Precision, And Sustainability Drives Every Decision We Make',
  body: 'At Naxatra Labs, we engineer motors and controllers around your application, not the other way around. Every product is tailored, tested, and optimized for real-world performance and efficiency.',
  // The phone artboard (15421:61298) words the paragraph differently.
  mobileBody: "At Naxatra Labs, we understand that every application has unique requirements. They're engineered to fit your needs. We customize every detail to ensure optimal performance and efficiency.",
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
  subtitle: 'High-performance electric motor for global applications.',
  tabs: ['Design', 'Performance', 'Technology'],
  images: [
    { src: a('deploy-repair.png'), alt: 'Technician servicing an electric motorcycle drivetrain' },
    { src: a('deploy-charging.png'), alt: 'Electric car being charged' },
    { src: a('deploy-drone.png'), alt: 'Agricultural spraying drone over a paddy field' },
  ],
}

// Featured motors (Figma 15421:31775 desktop, 15421:61693 phone). `image` places the desktop render in its
// 416.5x478.6 card, `mobile` in the 370x160 phone card; `descTop`/`descWidth` centre the desktop description.
export const products = [
  {
    brand: 'Antarix',
    series: 'RF Series',
    // The RF card opens the full product listing; the others open their motor's page.
    href: '/products',
    desc: 'Radial Flux Motors for Enhanced Efficiency and Power Output in Electric Vehicles.',
    descTop: 110.12,
    descWidth: 355.965,
    image: {
      src: a('product-rf.png'),
      box: { l: -29.17, t: 134.8, w: 471.321, h: 327.857 },
      inner: { w: 430.924, h: 247.727, rotate: -168.62 },
      crop: { w: 102.94, h: 100.73, l: 0.7, t: 0.34 },
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
    series: 'AF Series',
    href: '/products/af58',
    desc: 'Efficient Axial Flux Motors for Superior Performance',
    descTop: 113.67,
    descWidth: 293.896,
    image: {
      src: a('product-af58.png'),
      box: { l: -44.86, t: 66.37, w: 475.579, h: 479.315 },
      inner: { w: 373.07, h: 302.6, rotate: 47.15 },
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
    series: 'Series',
    joiner: ' ',
    href: '/products/pt500',
    desc: 'Power Tool motor designed for industrial tools.',
    descTop: 111.43,
    descWidth: 247.53,
    image: {
      src: a('product-pt500.png'),
      box: { l: -32.03, t: 93.67, w: 488.95, h: 511.189 },
      inner: { w: 396.45, h: 335.7, rotate: 60 },
      fit: 'object-fill',
    },
    mobile: {
      src: a('m/product-pt500.png'),
      box: { l: 165.86, t: -13.58, w: 207.543, h: 206.369 },
      inner: { w: 140.595, h: 152.767, rotate: 48.91 },
      fit: 'object-fill',
    },
  },
  {
    brand: 'Drone',
    series: 'Motor',
    joiner: ' ',
    href: '/products/drone',
    desc: 'High performance motor Built for continuous agri duty.',
    descTop: 111.25,
    descWidth: 247,
    // product-drone.webp is the artboard's crop of the render, so it fills its rotated box.
    image: {
      src: a('product-drone.webp'),
      box: { l: 49.62, t: 153.77, w: 317.908, h: 306.812 },
      inner: { w: 263.774, h: 248.258, rotate: -14.62 },
      fit: 'object-fill',
    },
    mobile: {
      src: a('product-drone.webp'),
      box: { l: 212, t: 20.75, w: 131.523, h: 126.932 },
      inner: { w: 109.127, h: 102.708, rotate: -14.62 },
      fit: 'object-fill',
    },
  },
]

// Client quotes (home slide 15421:31796), shared with the Others page.
export const clientTestimonials = [
  {
    id: 'xmatic',
    header: a('others/testimonial-1.webp'),
    quote: "At Xmatic Innovations, we rely on Naxatra Labs' PMSM motors for our unmanned ground vehicles. Their performance and quality are consistently reliable, and their team has been supportive throughout the process. We highly recommend Naxatra Labs.",
    name: 'Mithun S K',
    role: 'Managing Director & CEO, Xmatic Innovations Pvt. Ltd.',
  },
  {
    id: 'cleanland',
    header: a('others/testimonial-2.webp'),
    quote: 'It has been a great experience working with Naxatra Labs. The team has been professional, supportive, and responsive to our requirements throughout the project. We truly appreciate their cooperation and look forward to working together on future projects.',
    name: 'Aditya Patel',
    role: 'R&D Lead, Cleanland - Sweeping Machine Manufacturer',
  },
  {
    id: 'harvtech',
    header: a('others/testimonial-3.webp'),
    quote: 'This is a dummy testimonial sentence. Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
    name: 'Mohamed Imran',
    role: 'Co-Founder & COO at Harvtech',
  },
  {
    id: 'greenway',
    header: a('others/testimonial-4.webp'),
    quote: 'This is a dummy testimonial sentence. Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
    name: 'Harsh Raval',
    role: 'Founder & COO, Greenway Mobility',
  },
]

// The home page's "Don't see your application here?" banner (node 15421:60709).
export const engineerBanner = {
  title: ["Don't see your application here?", "We'll engineer it."],
  cta: 'Talk To Our Engineers',
  href: '/contact',
}

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
  { year: '2022', title: 'Engineering the Future', text: 'In-House developed advanced magnet tech, cooling methods and electromagnetic designs for next-gen efficiency.', image: a('journey-04b.webp') },
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
  { year: '2026', title: 'Certified For The Road', text: "Our motors cleared NATRAX certification, proving their performance, safety and reliability to India's automotive testing standards.", image: a('journey-18.webp') },
  { year: '2026', title: 'Taking Flight', text: "Launched our drone motor range, taking Naxatra's motion technology from the road into the sky.", image: a('journey-19.webp') },
]

// The old site's home "Our Blogs" cards (C:\Users\Intel\Desktop\naxatra, BlogsSection.jsx), with its images.
export const ideas = [
  {
    id: 'national-technology-week',
    date: 'May 11, 2023',
    title: 'National Technology Week',
    text: 'A proud moment as we presented our innovative motor and controller technology to industry leaders and policymakers, reinforcing our commitment...',
    image: a('idea-ntw.webp'),
    alt: 'Naxatra Labs stand at National Technology Week',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_nationaltechnologyday2023-startupindia-sustainibility-share-7064079426128363520-6C7k/?utm_source=share&utm_medium=member_desktop&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
  },
  {
    id: 'efficiency-is-the-new-fuel',
    date: 'October 13, 2025',
    title: 'Efficiency is the new fuel: Rethinking motors for a sustainable future',
    text: 'Motors have become a ubiquitous part of our modern life, silently existing in almost everything that makes motion possible. However, on the flip...',
    image: a('idea-efficiency.webp'),
    alt: 'Science Behind Application Specific Motor Design, EVreporter',
    href: 'https://evreporter.com/efficiency-is-the-new-fuel-rethinking-motors-for-a-sustainable-future/',
  },
  {
    id: 'bharat-mobility-global-expo',
    date: 'Jan 21, 2025',
    title: 'Bharat Mobility Global Expo',
    text: 'A defining moment where we unveiled a groundbreaking mobility solutions, setting new benchmarks in sustainable and high-performance transportation...',
    image: a('idea-bharat.webp'),
    alt: 'Naxatra Labs stand at Bharat Mobility Global Expo',
    href: 'https://www.linkedin.com/posts/abhilashmaurya_naxatralabs-bharatmobilityexpo-autoexpo2025-share-7286605063093972993-E4-B/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAACO14VQB5vnmxkT3Aaf0vGvf3_Thtn5MaXg',
  },
]

export const footer = {
  offices: [
    { title: 'Corporate Office', lines: ['Sector 44, Gurugram,', 'Haryana 122003'] },
    { title: 'Manufacturing Facility', lines: ['Paldi-Kankaj, Dakroi Ahmedabad,', 'Gujarat 382425'] },
  ],
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About Us', href: '/about' },
    { label: 'Blogs And Insights', href: '/blogs' },
    { label: 'Career', href: '/careers' },
    { label: 'Contact Us', href: '/contact' },
  ],
  contact: [
    { label: '+91 9266030266', href: 'tel:+919266030266' },
    { label: 'Enquiry@Naxatralabs.Com', href: 'mailto:enquiry@naxatralabs.com' },
    { label: 'Careers@Naxatralabs.Com', href: 'mailto:careers@naxatralabs.com' },
  ],
  newsletter: {
    title: 'Join The Newsletter',
    text: ['Get articles on the innovative projects', 'Lockheed Martin scientists and engineers', 'are working on right now.'],
  },
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Use', href: '/terms-of-use' },
  ],
  copyright: '© 2026 Naxatra Labs. All Rights Reserved.',
}

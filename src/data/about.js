const a = (file) => `/assets/about/${file}`

export const aboutHero = {
  title: 'We Design, Develop and Build Smarter Motor Technology',
  subtitle: 'Discover what drives us.',
  background: a('hero-bg.png'),
  team: a('hero-team.png'),
  // The mobile artboard has its own portrait crop and a cut-out of the founders.
  mobileBackground: a('m-hero-bg.png'),
  mobileTeam: a('m-hero-team.png'),
}

// Icons are layered exactly as in Figma: `box` places the icon inside its 80px tile,
// each layer is a vector positioned by its inset within that box.
// Mobile lists the cards in `mobileOrder` and gives every other one a grey `mobileTint`.
export const values = {
  eyebrow: 'why naxatra labs exists',
  title: 'Our commitment to innovation, precision, and sustainability drives every decision we make',
  items: [
    {
      title: 'Relentless innovation',
      text: 'We pioneer cutting-edge electric motor technology.',
      mobileOrder: 'order-1',
      mobileTint: true,
      icon: { src: a('icon-bulb.svg') },
    },
    {
      title: 'Sustainability with purpose',
      text: 'We engineer for a cleaner, more sustainable future.',
      mobileOrder: 'order-4',
      icon: {
        box: 'top-[19em] left-[23.75%] right-[23.75%] aspect-square',
        layers: [
          { src: a('sustain-1.svg'), inset: '12.5% 29.91% 3.12% 3.12%' },
          { src: a('sustain-2.svg'), inset: '28.13% 21.88% 15.63% 21.88%' },
          { src: a('sustain-3.svg'), inset: '3.12% 3.12% 12.5% 29.91%' },
        ],
      },
    },
    {
      title: 'collaboration for impact',
      text: 'We collaborate to accelerate the future of electric mobility.',
      mobileOrder: 'order-2',
      icon: {
        box: 'top-[15em] left-[18.75%] right-[20%] aspect-square',
        layers: [{ src: a('icon-collab.svg'), inset: '4.16% 8.33% 4.17% 8.33%' }],
      },
    },
    {
      title: 'Simplicity in excellence',
      text: 'Simplifying complexity. Scaling performance.',
      mobileOrder: 'order-3',
      mobileTint: true,
      icon: {
        box: 'inset-y-1/4 inset-x-[33.33%]',
        layers: [{ src: a('icon-quality.svg'), inset: '-3.75% -5.62% -3.75% -5.63%' }],
      },
    },
  ],
}

export const goal = {
  title: 'Our goal is to build smarter motors for a cleaner future.',
  text: ['The future of mobility needs better motors.', 'We’re here to build them.'],
  image: a('goal.png'),
  mobileImage: a('m-goal.png'),
}

export const founders = {
  title: 'Built by people who build.',
  subtitle: 'Meet the minds behind Naxatra',
  people: [
    { name: 'Abhilash Maurya', role: 'Co-founder & CEO', image: a('founder-abhilash.png'), fit: 'object-bottom' },
    { name: 'Piyush Verma', role: 'Co-founder & CTO', image: a('founder-piyush.png'), fit: 'object-center' },
    { name: 'Arnav Biswas', role: 'Co-founder & COO', image: a('founder-arnav.png'), fit: 'object-top' },
  ],
}

export const recognition = {
  title: 'Taking Indian Engineering to the World',
  subtitle: 'Global recognition for technology built with purpose.',
  statement:
    'We’ve built Naxatra from India into a globally recognised technology company, taking homegrown motor innovation beyond borders and into international markets.',
  stat: { value: '10', unit: '%', label: 'Higher Average Efficiency' },
  // Grid order, left to right and top to bottom. `statement` spans two columns, `stat` is a tile.
  // Mobile moves the stat tile after gallery-8, so it and the final photo go last there.
  tiles: [
    { src: a('gallery-1.png') },
    { src: a('gallery-2.png') },
    { src: a('gallery-3.png'), fit: 'object-bottom' },
    { src: a('gallery-4.png'), fit: 'object-bottom' },
    { type: 'statement' },
    { src: a('gallery-5.png'), fit: 'object-bottom' },
    { src: a('gallery-6.png'), fit: 'object-bottom' },
    { src: a('gallery-7.png'), fit: 'object-bottom' },
    { type: 'stat' },
    { src: a('gallery-8.png'), fit: 'object-bottom' },
    { src: a('gallery-9.png'), fit: 'object-bottom', mobileLast: true },
  ],
}

export const vision = {
  title: 'A vision for tomorrow',
  text: 'Founded in 2021 by Abhilash Maurya, Arnav Biswas, and Piyush Verma, Naxatra Labs develops advanced axial and radial flux motors for electric mobility. From Ahmedabad, we build lightweight, power-dense solutions for vehicles and industries.',
  image: a('vision.png'),
  mobileImage: a('m-vision.png'),
}

export const investors = {
  title: 'Our Investors',
  lead: { name: 'Rainmatter by Zerodha', src: a('logo-rainmatter.png') },
  // Logos are cropped out of larger exports: `box` is the logo frame in design px, `crop` places the image inside it in %.
  partners: [
    {
      name: 'GVFL',
      src: a('logo-gvfl.png'),
      box: { t: 21, w: 198, h: 107 },
      crop: { w: 109.61, h: 204.23, l: -9.63, t: -52.24 },
      mobile: { dx: 15.3, w: 73.972, h: 43.489, crop: { w: 119.25, h: 204.23, l: -10.48, t: -52.24 } },
    },
    {
      name: 'Giraffe Studios',
      src: a('logo-giraffe.png'),
      box: { t: 16, w: 179, h: 117 },
      crop: { w: 178.51, h: 165.72, l: -41.64, t: -33.4 },
      mobile: { dx: 15.35, w: 68.564, h: 48.915, crop: { w: 194.83, h: 165.72, l: -45.45, t: -33.4 } },
    },
  ],
  people: [
    { name: 'Mohit Tandon', role: 'Founder Delhivery', image: a('investor-mohit.png') },
    { name: 'Himanshu Aggarwal', role: 'Founder Aspiring Minds', image: a('investor-himanshu.png') },
    { name: 'Vijay Shekhar Sharma', role: 'Founder Paytm', image: a('investor-vijay.png') },
    { name: 'Aloke Bajpai', role: 'Co-founder Ixigo', image: a('investor-aloke.png') },
    { name: 'Rajnish Kumar', role: 'Founder Ixigo', image: a('investor-rajnish.png') },
    { name: 'Sunil Kalra', role: 'Angel Investor', image: a('investor-sunil.png') },
    { name: 'Narayan', role: 'Ather', image: a('investor-narayan.png') },
    { name: 'Anupam Jalote', role: 'GMDC Official', image: a('investor-anupam.png') },
    { name: 'Soumitra Sharma', role: 'Operators Studio', image: a('investor-soumitra.png') },
  ],
}

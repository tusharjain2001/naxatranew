const a = (file) => `/assets/others/${file}`

// "Other applications" page (Figma node 15421:59799), reached from the Industry menu's OTHERS tile.
export default {
  title: 'Other Applications | Naxatra Labs',

  hero: {
    title: 'Every Other Machine That Moves',
    heading: 'Don’t See Your Application Listed? We Still Build For It.',
    text: 'We’re a solution provider, not just a motor manufacturer. If it needs torque, precision, and reliability - we can engineer a motor for it, even if it isn’t one of our named categories yet.',
    image: a('hero.webp'),
    mobileImage: a('m/hero.webp'),
    alt: 'A workboat, a tracked robot arm and a compact excavator on a lakeshore at sunset',
  },

  emerging: {
    title: 'Emerging Applications',
    paragraphs: [
      'We didn’t start by building for five categories. Two-wheelers, three-wheelers, commercial cleaning, agriculture, and drones are where we’ve built the deepest expertise. But the underlying capability - design, simulation, testing, and production, all in-house - isn’t limited to those five. If your equipment needs a motor, we can build it.',
      'We’re actively expanding into new domains. Marine is one of them - our axial flux motor platform is already suited to high-torque, compact marine propulsion, built for continuous duty in demanding, corrosive environments. We’re actively developing more applications to add here. If yours isn’t listed yet, don’t worry—it just means we haven’t announced it yet.',
    ],
    cta: 'Know about your application',
    image: a('emerging.webp'),
    mobileImage: a('m/emerging.webp'),
    alt: 'Transparent render of a robotic arm joint with its motor inside',
  },

  // Each card is the artboard's photo, callout and arrow exported as one image; the phone shows the first
  // four at a smaller size and its own wide crop of the last.
  challenges: {
    title: 'Typical Customer challenges',
    cards: [
      { src: a('challenge-1.webp'), quote: 'We can’t find a motor manufacturer who understands our specific use case.' },
      { src: a('challenge-2.webp'), quote: 'Off-the-shelf motors don’t fit our equipment’s voltage, mounting, or duty cycle.' },
      { src: a('challenge-3.webp'), quote: 'Every vendor treats us like a one-off, with no real engineering support.' },
      { src: a('challenge-4.webp'), quote: 'We need a custom solution, but the lead times from import-based suppliers are too long.' },
      { src: a('challenge-5.webp'), mobile: a('m/challenge-5.webp'), quote: 'Nobody wants to take on a new application without existing volume.' },
    ],
  },

  // `image` is the artboard's 860×800 product panel (backdrop, shadow and render) exported as one picture.
  whereElse: {
    title: 'Where Else We Can Build',
    text: 'A sample of the applications our motor platforms are suited for. This list will keep growing.',
    items: [
      { title: 'Marine & Aquaculture Support', text: 'Compact, high-torque marine propulsion systems designed for continuous duty in tough conditions. Includes pumps, winches, and auxiliary equipment for seamless marine operations.', icon: a('icon-ship.svg'), image: a('app-marine.webp') },
      { title: 'Robotics', text: 'Robotic actuators and motion systems - precision torque in a small envelope.', icon: a('icon-robot.svg'), image: a('app-robotics.webp') },
      { title: 'Construction Equipment', text: 'Compactors, mixers, and site machinery - built for dust, vibration, and heavy-duty cycles.', icon: a('icon-tractor.svg'), image: a('app-construction.webp') },
      { title: 'Material Handling', text: 'Conveyors, hoists, and automated handling systems.', icon: a('icon-crane.svg'), image: a('app-material.webp') },
      { title: 'Specialty Mobility', text: 'Wheelchairs, mobility aids, and other low-speed, high-reliability applications.', icon: a('icon-wheelchair.svg'), image: a('app-mobility.webp') },
      { title: 'Defense & Surveillance', text: 'Indigenous, sovereign motor solutions for tactical and reconnaissance use.', icon: a('icon-tank.svg'), image: a('app-defense.webp') },
    ],
  },

  rightFit: {
    title: 'Get the right fit for your Application',
    text: 'Depending on your application’s torque, voltage, and environmental requirements, your solution is likely built on one of our existing platforms',
    cta: 'Share your Application Spec',
    // Each panel is the artboard's backdrop, motor and callout exported as one picture.
    series: [
      { title: 'Antarix RF series', image: a('fit-rf.webp'), mobileImage: a('m/fit-rf.webp'), alt: 'Antarix RF series motor, for standard rotary applications' },
      { title: 'Antarix AF Series', image: a('fit-af.webp'), alt: 'Antarix AF series motor, for compact, high-torque, continuous-duty use' },
    ],
  },

  whyUs: {
    title: 'Why Naxatra?',
    items: [
      { title: 'One engineering team, Every application.', text: 'Design, simulation, testing, and production all happen under one roof - so a new application doesn’t mean assembling a new supply chain. It means applying the same process we already use.', image: a('why-1.webp') },
      { title: 'Built from first principles, not off a shelf.', text: 'We don’t adapt someone else’s motor to fit your equipment. We design around your actual torque, voltage, mounting, and duty-cycle requirements from the start.', image: a('why-2.webp') },
      { title: 'Speed that comes from experience, not shortcuts.', text: 'Our first motor took four years to build. A new custom application today takes weeks — because the hard problems were already solved once.', image: a('why-3.webp') },
      { title: 'We don’t need existing volume to say yes.', text: 'If the engineering problem is real, we’re interested in solving it - whether that’s one prototype or eventual scale production.', image: a('why-4.webp') },
    ],
  },

  // `header` is the card's photo and company logo exported as one picture.
  testimonials: {
    title: 'What our clients say about us?',
    subtitle: 'What our partners say about working with us.',
    items: [
      {
        id: 'xmatic',
        header: a('testimonial-1.webp'),
        quote: "At Xmatic Innovations, we rely on Naxatra Labs' PMSM motors for our unmanned ground vehicles. Their performance and quality are consistently reliable, and their team has been supportive throughout the process. We highly recommend Naxatra Labs.",
        name: 'Mithun S K',
        role: 'Managing Director & CEO, Xmatic Innovations Pvt. Ltd.',
      },
      {
        id: 'cleanland',
        header: a('testimonial-2.webp'),
        quote: 'It has been a great experience working with Naxatra Labs. The team has been professional, supportive, and responsive to our requirements throughout the project. We truly appreciate their cooperation and look forward to working together on future projects.',
        name: 'Aditya Patel',
        role: 'R&D Lead, Cleanland - Sweeping Machine Manufacturer',
      },
      {
        id: 'harvtech',
        header: a('testimonial-3.webp'),
        quote: 'This is a dummy testimonial sentence. Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
        name: 'Mohamed Imran',
        role: 'Co-Founder & COO at Harvtech',
      },
      {
        id: 'greenway',
        header: a('testimonial-4.webp'),
        quote: 'This is a dummy testimonial sentence. Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.',
        name: 'Harsh Raval',
        role: 'Founder & COO, Greenway Mobility',
      },
    ],
  },
}

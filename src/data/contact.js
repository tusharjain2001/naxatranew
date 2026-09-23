const a = (file) => `/assets/contact/${file}`

export const contactHero = {
  title: ['Let’s Build What', 'Moves Next'],
  subtitle: 'Have a project, partnership, or idea in mind? Let’s talk about how Naxatra can help bring it to life.',
  background: a('hero-bg.png'),
  // Cut-out of the vehicles, drone and robot arm, layered above the blue wash.
  foreground: a('hero-front.png'),
}

export const enquiry = {
  topics: ['Motors Enquiry', 'Investment', 'Partnership', 'Others'],
  title: 'If you’re here, We need to talk',
  subtitle: 'What are you looking for?',
  // Fields exactly as on the Figma artboard, which reuses the careers form.
  fields: {
    role: 'Applying for which role?',
    file: 'Attach Resume',
    link: 'Linkedin Link',
  },
}

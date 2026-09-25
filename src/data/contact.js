const a = (file) => `/assets/contact/${file}`

export const contactHero = {
  title: ['Let’s Build What', 'Moves Next'],
  subtitle: 'Have a project, partnership, or idea in mind? Let’s talk about how Naxatra can help bring it to life.',
  background: a('hero-bg.png'),
  // Cut-out of the vehicles, drone and robot arm, layered above the blue wash.
  foreground: a('hero-front.png'),
  // The phone artboard frames one photo on the delivery vehicle and field robot.
  mobileImage: a('m/hero.jpg'),
}

export const enquiry = {
  topics: ['Motors Enquiry', 'Investment', 'Partnership', 'Others'],
  title: 'If you’re here, We need to talk',
  subtitle: 'What are you looking for?',
  // Figma leaves the list empty; these are the application areas named on the home page.
  applications: ['2 Wheelers', '3 Wheelers & L5', 'Cleaning', 'Agriculture', 'Drone', 'Other'],
}

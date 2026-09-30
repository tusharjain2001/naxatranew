const a = (file) => `/assets/contact/${file}`

export const contactHero = {
  title: ['Let’s Build What', 'Moves Next'],
  subtitle: 'Have a project, partnership, or idea in mind? Let’s talk about how Naxatra can help bring it to life.',
  // One flattened desktop picture: the park photo, the blue sky wash and the vehicles, drone and robot arm.
  image: a('hero.webp'),
  // The phone artboard frames one photo on the delivery vehicle and field robot.
  mobileImage: a('m/hero.jpg'),
}

export const enquiry = {
  topics: ['Motors Enquiry', 'Investment', 'Partnership', 'Others'],
  // Desktop label above the form for the selected tab (Figma shows the Motors Enquiry one).
  formLabels: { 'Motors Enquiry': 'For Motor Enquiry', Investment: 'For Investment', Partnership: 'For Partnership', Others: 'For Other Enquiries' },
  // Desktop breaks the title after the comma.
  title: ['If you’re here,', 'We need to talk'],
  subtitle: 'What are you looking for?',
  // Figma leaves the list empty; these are the application areas named on the home page.
  applications: ['2 Wheelers', '3 Wheelers & L5', 'Cleaning', 'Agriculture', 'Drone', 'Other'],
}

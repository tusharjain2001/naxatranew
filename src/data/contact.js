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
  // What changes per tab (Figma: Motors 15421:39809, Investment 15985:1845, Partnership 15985:1897, Others
  // 15985:1949): the company field (required only for motors), the dropdown and the message box. The other
  // three boards reuse the motor dropdown's "Choose your application type" placeholder and the
  // "Enter Company Name" one; kept as designed.
  forms: {
    'Motors Enquiry': {
      company: { label: 'Company Name', required: true },
      type: {
        label: 'Application Type',
        // Figma leaves the list empty; these are the application areas named on the home page.
        options: ['2 Wheelers', '3 Wheelers & L5', 'Cleaning', 'Agriculture', 'Drone', 'Other'],
      },
      message: { label: 'Tell us about your requirements', placeholder: 'Write your requirements here...' },
    },
    Investment: {
      company: { label: 'Organization / Fund Name' },
      type: { label: 'Investment type', options: ['VC', 'Angel Investor', 'Family Office', 'Corporate / Strategic Investor', 'Other'] },
      message: { label: 'Tell us about your investment interest', placeholder: 'Write your interests here...' },
    },
    Partnership: {
      company: { label: 'Company / Organization' },
      type: {
        label: 'Partnership type',
        options: ['OEM Collaboration', 'Technology / R&D', 'Manufacturing', 'Distribution / Channel', 'Supply Chain', 'Strategic Alliance', 'Other'],
      },
      message: { label: 'Tell us about your proposal', placeholder: 'Write your message here...' },
    },
    Others: {
      company: { label: 'Company Name' },
      type: { label: 'Enquiry type', options: ['General Question', 'Media / Press', 'Careers', 'Supplier Enquiry', 'Technical Support', 'Other'] },
      message: { label: 'Any Message', placeholder: 'Write your message here...' },
    },
  },
}

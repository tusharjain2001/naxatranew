const a = (file) => `/assets/careers/${file}`

export const careersHero = {
  title: ['Build What Moves', 'the World Forward'],
  subtitle: 'Join a team turning bold ideas into smarter motor technology.',
  // One flattened desktop picture: the factory roof photo, the blue sky wash and the team.
  image: a('hero.webp'),
  // The phone artboard's photo, wash and team cut-out, composed into one image.
  mobileImage: a('m/hero.jpg'),
}

export const openings = {
  title: 'Be part of a team pushing the boundaries of motor technology.',
  subtitle: 'We’re actively hiring.',
  // `summary` is shown when a card is expanded and `jd` links the job description file; both await the real copy.
  jobs: [
    {
      title: 'Design And Development Engineer',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: 'x years',
      summary: '',
      jd: '',
    },
    {
      title: 'Marketing And Content Associate',
      location: 'Gurugram (Onsite)',
      type: 'Full Time',
      experience: 'x years',
      summary: '',
      jd: '',
    },
    {
      title: 'Mechanical Simulation Engineer',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: 'x years',
      summary: '',
      jd: '',
    },
    {
      title: 'Testing And Validation Engineer',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: 'x years',
      summary: '',
      jd: '',
    },
  ],
  sortOptions: [
    { value: 'default', label: 'Most Recent' },
    { value: 'title', label: 'Role (A–Z)' },
    { value: 'location', label: 'Location' },
  ],
}

export const applyForm = {
  title: 'Share your details with us. we will get back to you.',
  note: 'marked fields are mandatory',
}

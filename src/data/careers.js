const a = (file) => `/assets/careers/${file}`

export const careersHero = {
  title: ['Build What Moves', 'the World Forward'],
  subtitle: 'Join a team turning bold ideas into smarter motor technology.',
  cta: { label: 'Apply now', href: '#apply' },
  // The hiring film beside the headline. Cloudinary compresses it (`q_auto`) and scales it down for phones;
  // the posters are the still Figma shows until it starts.
  video: 'https://res.cloudinary.com/dccp724cq/video/upload/q_auto/v1781799033/Updated_Hiring_Focused_Narrative_Video_V6_bbbnd6.mp4',
  mobileVideo: 'https://res.cloudinary.com/dccp724cq/video/upload/q_auto,w_720/v1781799033/Updated_Hiring_Focused_Narrative_Video_V6_bbbnd6.mp4',
  poster: a('video-poster.webp'),
  mobilePoster: a('m/video-poster.webp'),
}

export const openings = {
  title: 'Be part of a team pushing the boundaries of motor technology.',
  subtitle: 'We’re actively hiring.',
  // `summary` and `compensation` show when a card is expanded; `jd` links the job description file once there is one.
  jobs: [
    {
      title: 'Design Engineer',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: '5 YOE',
      summary:
        'Responsible for designing and developing engineering components and systems, preparing technical drawings and CAD models, and supporting prototyping, testing, and design validation in coordination with engineering teams.',
      compensation: 'Upto 12 LPA',
      jd: '',
    },
    {
      title: 'Supply Chain Manager',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: '15 YOE',
      summary:
        'Responsible for managing end-to-end supply chain activities, including sourcing, inventory management, material planning, and coordination with relevant internal and external stakeholders. The role will ensure smooth material flow and support efficient supply chain operations across the organization.',
      compensation: 'Upto 22 LPA',
      jd: '',
    },
    {
      title: 'Testing Engineer',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: '3+ YOE',
      summary:
        'Responsible for managing and executing testing activities for the RF Series, including homologation and laboratory testing. The role will involve coordinating test activities, supporting quality control, managing test data and documentation, and overseeing laboratory operations and requirements.',
      compensation: 'Upto 10 LPA',
      jd: '',
    },
    {
      title: 'Service Engineer',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: '3+ YOE',
      summary:
        'Responsible for managing customer support and service-related activities, ensuring timely resolution of customer queries and service requirements. The role will involve coordinating with internal teams, following up on service issues, and maintaining effective communication with customers throughout the support process.',
      compensation: 'Upto 6 LPA',
      jd: '',
    },
    {
      title: 'Sales Manager',
      location: 'Ahmedabad (Onsite)',
      type: 'Full Time',
      experience: '5+ YOE',
      summary:
        "Responsible for driving sales growth, identifying new business opportunities, managing client relationships, preparing proposals, negotiating commercial terms, and expanding the company's customer base across relevant industries.",
      compensation: 'Upto 20 LPA',
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
  title: 'Share your details. we will get back to you.',
  // The phone artboard words it differently and breaks after "details".
  mobileTitle: ['Share your details', 'with us. we will get back to you.'],
  note: 'marked fields are mandatory',
}

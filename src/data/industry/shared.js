// Content that every industry page shares: the banner, the engagement timeline and the spec form.
const s = (file) => `/assets/industry/shared/${file}`

export const differentApplication = {
  title: 'Running a different application?',
  text: "Share your duty cycle, operating environment, and voltage spec - we'll come back with a motor recommendation in 3 working days.",
  cta: 'Contact Us',
}

export const process = {
  title: 'How we work with you',
  image: s('work.png'),
  steps: [
    { week: 'Week 00', title: 'Discovery', text: 'Application brief, duty cycle, voltage, mounting spec', icon: s('step-discovery.svg'), iconBox: 'size-24' },
    { week: 'Week 01', title: 'Proposal', text: 'Motor recommendation, datasheet, quote', icon: s('step-proposal.svg'), iconBox: 'h-24 w-18 -rotate-90' },
    { week: 'Week 03', title: 'Sample', text: 'Motors delivered for your integration and bench testing', icon: s('step-sample.svg'), iconBox: 'h-22 w-26' },
    { week: 'Week 04', title: 'Validation', text: 'Customer-site testing, firmware and tuning iteration', icon: s('step-validation.svg'), iconBox: 'h-20 w-20' },
    { week: 'Week 06', title: 'Freeze & PPAP', text: 'Spec locked', icon: s('step-freeze.svg'), iconBox: 'size-24' },
    { week: 'Week 07', title: 'SOP', text: 'Serial production, scheduled delivery', icon: s('step-sop.svg'), iconBox: 'h-15 w-27' },
  ],
}

export const specForm = {
  title: ['Share your', 'application spec.'],
  text: "We'll come back with a drive system proposal in 3 working days.",
  email: 'enquiry@naxatralabs.com',
  cta: 'Contact Us',
}

export const sharedAssets = {
  check: s('check.svg'),
  dotBlue: s('dot-blue.svg'),
  dotBlack: s('dot-black.svg'),
  line: s('work-line.svg'),
  mail: s('mail.svg'),
  chevron: s('select-chevron.svg'),
}

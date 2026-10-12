const a = (file) => `/assets/media-kit/${file}`

// The brand kit PDF both buttons download (the browser saves it under `filename`).
export const mediaKitPdf = { href: '/pdfs/naxatra-media-kit.pdf', filename: 'Naxatra-Labs-Media-Kit-2026.pdf' }

// Figma "media kit" (desktop 15886:9456, phone 15886:9363).
export const mediaKitHero = {
  title: ['Naxatra', 'Media Kit 2026'],
  subtitle: 'Find guidelines about publishing and various media content.',
  cta: 'Download Kit',
  // The tilted glass render on the right (phone: along the foot), with Figma's fade into the black baked in.
  image: a('hero-glass.webp'),
  mobileImage: a('m-hero-glass.webp'),
}

export const mediaKitDownload = {
  title: ['Download', 'Media Kit'],
  note: 'Note: Always follow these Branding Guidelines while publishing information relevant to Naxatra Labs. Download the Branding Kit below.',
  cta: 'Download Kit',
}

const a = (file) => `/assets/blogs/${file}`

export const blogsHero = {
  title: 'Get the latest updates and innovations from Naxatra Labs',
  subtitle: 'Join and follow us on LinkedIn to stay ahead!',
  background: a('hero-bg.png'),
  // Cut-out of the riders and the auto-rickshaw, layered above the blue wash.
  foreground: a('hero-front.png'),
}

const excerpt =
  'Designed to tackle Indian conditions, diverse terrains, and tough environmental conditions, our motors deliver unmatched durability and performance wherever the journey takes you.'

export const articles = {
  title: 'All Articles',
  tabs: ['All', 'Latest', 'Events', 'Blogs'],
  // `category` drives the Events and Blogs tabs; `thumbLeft` is the sidebar crop from Figma, in design px.
  posts: [
    {
      id: 'fund-raise',
      title: 'Fund raise',
      date: '2026-05-11',
      category: 'blog',
      excerpt: 'Naxatra Labs raises $3M in a Pre-Series A round to accelerate motor and controller innovation for electric mobility.',
      image: a('post-fundraise.png'),
      alt: 'Naxatra Labs raises $3M pre-Series A led by Rainmatter, with participation from angel investors',
    },
    {
      id: 'national-technology-week-1',
      title: 'National technology week',
      date: '2026-05-11',
      category: 'event',
      excerpt,
      image: a('post-ntw-1.png'),
      thumbLeft: -69,
      alt: 'Naxatra Labs stand at National Technology Week',
    },
    {
      id: 'national-technology-week-2',
      title: 'National technology week',
      date: '2026-05-11',
      category: 'event',
      excerpt,
      image: a('post-ntw-2.png'),
      thumbLeft: -75,
      alt: 'Naxatra Labs stand at National Technology Week',
    },
    {
      id: 'national-technology-week-3',
      title: 'National technology week',
      date: '2026-05-11',
      category: 'event',
      excerpt,
      image: a('post-ntw-2.png'),
      thumbLeft: -75,
      alt: 'Naxatra Labs stand at National Technology Week',
    },
  ],
}

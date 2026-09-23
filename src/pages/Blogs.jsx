import { useEffect } from 'react'
import BlogsHero from '../sections/blogs/BlogsHero'
import Articles from '../sections/blogs/Articles'

export default function Blogs() {
  useEffect(() => {
    document.title = 'Blogs & Insights | Naxatra Labs'
  }, [])

  return (
    <main className="flex flex-col">
      <BlogsHero />
      <Articles />
    </main>
  )
}

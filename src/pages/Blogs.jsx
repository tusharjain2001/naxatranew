import BlogsHero from '../sections/blogs/BlogsHero'
import Articles from '../sections/blogs/Articles'
import { usePageTitle } from '../lib/pageTitle'

export default function Blogs() {
  usePageTitle('Blogs & Insights | Naxatra Labs')

  return (
    <main className="flex flex-col">
      <BlogsHero />
      <Articles />
    </main>
  )
}

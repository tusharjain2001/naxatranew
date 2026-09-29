import { useState } from 'react'
import { articles } from '../../data/blogs'
import TabBar from '../../components/ui/TabBar'

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()

function Featured({ post }) {
  return (
    <article className="flex flex-col gap-[calc(var(--spacing)*22.7)] xl:w-978 xl:shrink-0 xl:gap-32">
      <div className="relative aspect-[978/594] w-full overflow-hidden rounded-8 bg-[#e0e0e0]">
        <img src={post.image} alt={post.alt} className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[calc(var(--spacing)*8.701)] font-light xl:gap-20">
        <div className="flex flex-col gap-px">
          <h3 className="flex h-28 items-center text-24 leading-[calc(var(--spacing)*18.916)] capitalize xl:h-54 xl:text-[length:calc(var(--spacing)*52)] xl:leading-50">{post.title}</h3>
          <time dateTime={post.date} className="flex h-20 items-center text-12 leading-[calc(var(--spacing)*12.106)] tracking-display text-grey xl:block xl:h-auto xl:text-24 xl:leading-32">
            {formatDate(post.date)}
          </time>
        </div>
        <p className="text-12 leading-16 tracking-display xl:w-705 xl:text-24 xl:leading-35">{post.excerpt}</p>
      </div>
    </article>
  )
}

function SidePost({ post }) {
  return (
    <article className="group flex flex-col gap-12 xl:flex-row xl:items-center xl:gap-23">
      <div className="relative h-108 w-full shrink-0 overflow-hidden rounded-[calc(var(--spacing)*6.8)] bg-[#e0e0e0] xl:h-144 xl:w-238 xl:rounded-8">
        {/* Figma frames a wider photo inside the thumbnail and shifts it left. */}
        <div
          className="absolute top-0 h-full w-[157.56%] overflow-hidden rounded-[calc(var(--spacing)*2.739)] border-[calc(var(--spacing)*0.685)] border-[#d7d7d7]"
          style={{ left: `${((post.thumbLeft ?? -69) / 238) * 100}%` }}
        >
          <img
            src={post.image}
            alt={post.alt}
            loading="lazy"
            className="absolute inset-0 size-full object-cover grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
          />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-8 font-light xl:gap-16">
        <div className="flex flex-col gap-px">
          <h4 className="text-20 leading-24 capitalize xl:text-28 xl:leading-36">{post.title}</h4>
          <time dateTime={post.date} className="text-12 leading-16 tracking-display text-grey xl:text-16 xl:leading-28">
            {formatDate(post.date)}
          </time>
        </div>
        <p className="text-10 leading-14 tracking-display xl:text-16 xl:leading-21">{post.excerpt}</p>
      </div>
    </article>
  )
}

export default function Articles() {
  const [tab, setTab] = useState(articles.tabs[0])
  // The tabs only mark a selection; every tab lists the same posts.
  const [featured, ...others] = articles.posts

  return (
    <section className="mx-auto flex w-full max-w-1920 flex-col gap-60 px-16 py-56 xl:gap-100 xl:px-100 xl:py-100">
      <h2 className="text-32 leading-36 tracking-display capitalize xl:text-64 xl:leading-80">{articles.title}</h2>

      <div className="flex flex-col gap-60">
        <TabBar tabs={articles.tabs} active={tab} onChange={setTab} label="Article categories" controls="articles" />

        <div id="articles" role="tabpanel" aria-label="Articles" className="flex flex-col gap-60 xl:flex-row xl:items-start xl:gap-25">
          {featured ? <Featured post={featured} /> : <p className="text-16 text-grey xl:text-24">No articles here yet.</p>}
          {others.length > 0 && (
            <aside className="flex flex-col gap-24 xl:min-w-0 xl:flex-1 xl:gap-32 xl:py-16 xl:pl-16">
              <h3 className="text-24 leading-40 tracking-display capitalize xl:text-40 xl:leading-44">Other blogs</h3>
              {/* Phone: a two-column grid of cards; desktop: a stacked list. */}
              <div className="grid grid-cols-2 gap-x-12 gap-y-24 xl:flex xl:flex-col xl:gap-32">
                {others.slice(0, 4).map((post) => (
                  <SidePost key={post.id} post={post} />
                ))}
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}

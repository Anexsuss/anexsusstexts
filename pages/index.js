import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return { props: { allPostsData } }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Anexsuss Affiliate Blog</title>
        <meta name="description" content="Domain, hosting ve affiliate rehberleri" />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Anexsuss Affiliate Blog</h1>
        <div className="space-y-6">
          {allPostsData.map(({ slug, title, description, date }) => (
            <div key={slug} className="border p-4 rounded hover:shadow transition">
              <Link href={`/posts/${slug}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {title}
              </Link>
              <p className="text-sm text-gray-500">{date}</p>
              <p className="text-gray-700 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
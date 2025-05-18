import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Anexsuss Blog</title>
        <meta name="description" content="Domain, hosting ve affiliate marketing üzerine bilgiler." />
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Anexsuss Blog</h1>
        <p className="mb-6 text-gray-600">Domain, hosting ve affiliate dünyasında kazandıran içerikler.</p>
        <div className="grid gap-6">
          {allPostsData.map(({ slug, title, description, date }) => (
            <div key={slug} className="p-4 border rounded hover:shadow">
              <Link href={`/posts/${slug}`}>
                <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
              </Link>
              <p className="text-sm text-gray-500">{date}</p>
              <p className="mt-2 text-gray-700">{description}</p>
              <Link href={`/posts/${slug}`} className="text-sm text-blue-500 mt-2 block">Devamını oku →</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
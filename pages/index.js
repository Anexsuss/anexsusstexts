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
        <title>Anexsuss Affiliate Blog</title>
        <meta name="description" content="Affiliate marketing, domain ve hosting üzerine rehberler ve öneriler." />
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Anexsuss Affiliate Blog</h1>
        <p className="text-gray-600 mb-8">Domain, hosting ve affiliate marketing ile ilgili kazandıran rehberler.</p>
        <div className="grid gap-6">
          {allPostsData.map(({ slug, date, title, description }) => (
            <div key={slug} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-xl font-semibold text-blue-700">
                <Link href={`/posts/${slug}`}>{title}</Link>
              </h2>
              <p className="text-sm text-gray-500">{date}</p>
              <p className="text-gray-700 mt-2">{description || '...'}</p>
              <Link href={`/posts/${slug}`} className="text-sm text-blue-500 hover:underline mt-2 inline-block">
                Yazıyı oku →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

// Gerçek, modern ana ekran tasarımı
// TailwindCSS ve Next.js kullanılır
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Anexsuss Affiliate Blog</title>
        <meta
          name="description"
          content="Domain, hosting ve affiliate marketing rehberleri"
        />
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6">Anexsuss Blog</h1>
        <p className="text-gray-600 mb-6">
          Affiliate marketing ile kazanmaya başlamak için en iyi ipuçları ve rehberler.
        </p>
        <div className="grid gap-6">
          {allPostsData.map(({ slug, title, description, date }) => (
            <div
              key={slug}
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-2xl font-semibold text-blue-700">
                <Link href={`/posts/${slug}`}>{title}</Link>
              </h2>
              <p className="text-sm text-gray-500">{date}</p>
              <p className="text-gray-700 mt-2">{description || '...'}</p>
              <Link
                href={`/posts/${slug}`}
                className="text-sm text-blue-500 hover:underline mt-2 inline-block"
              >
                Yazıyı oku →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

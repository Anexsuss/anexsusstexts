import { getAllPostSlugs, getPostData } from '../../lib/posts'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

export async function getStaticPaths() {
  return { paths: getAllPostSlugs(), fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug)
  return { props: { postData } }
}

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.description} />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">{postData.title}</h1>
        <p className="text-sm text-gray-500 mb-6">{postData.date}</p>
        <ReactMarkdown className="prose">{postData.content}</ReactMarkdown>
      </main>
    </>
  )
}
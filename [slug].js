import { getAllPostSlugs, getPostData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  return { paths: getAllPostSlugs(), fallback: false };
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug);
  return { props: { postData } };
}

export default function Post({ postData }) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>{postData.title}</h1>
      <p><em>{postData.date}</em></p>
      <hr />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
  );
}

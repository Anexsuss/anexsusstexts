import { getAllPostSlugs, getPostData } from '../../lib/posts';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  return { paths: getAllPostSlugs(), fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { postData: getPostData(params.slug) } };
}

export default function Post({ postData }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{postData.title}</h1>
      <small>{postData.date}</small>
      <hr />
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
  );
}

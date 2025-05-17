import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return { props: { allPostsData } };
}

export default function Blog({ allPostsData }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Blog Yazıları</h1>
      <ul>
        {allPostsData.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>
              <strong>{title}</strong> ({date})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import getPosts, { getPost } from '@/lib/blog/get-posts';
import { PostBody } from './components/PostBody';
import { notFound } from 'next/navigation';

import Link from 'next/link';

import styles from '../blog.module.css';

// Adapted from https://github.com/MaxLeiter/maxleiter.com/blob/master/app/mdx/components/index.tsx

export default async function PostPage({
  params,
}) {
  const post = await getPost(params.slug)
  // notFound is a Next.js utility
  if (!post) return notFound()
  // Pass the post contents to MDX
  return (
    <div className={'page-content content-width'}>
      <Link className={'link'} href="/blog">← Return</Link>

      <h1 className={styles.blogHeading}>{post.title}</h1>
      <p className={styles.subHeading}>{post.date}{ post.description ? ' — ' + post.description : ''}</p>
      <PostBody>
        {post?.body}
      </PostBody>
    </div>
  );

}
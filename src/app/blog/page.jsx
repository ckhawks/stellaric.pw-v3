
import styles from './blog.module.css';

import Link from 'next/link';
import getPosts, { getPost } from '@/lib/blog/get-posts'

export default async function About() {
  const posts = await getPosts();
  console.log("posts: ", posts);

  return (
    <main className={[styles.maine, styles.column, 'content-width', 'page-content'].join(' ')}>
      {/* <div className={styles.h1}>
        stellaric design
      </div> */}
      {/* <h1 className={styles.h1}>Blog</h1>
      <p>I am not a good writer, but I want somewhere to do some thought-spitting. Read at your own will.</p> */}

      <div className={styles.blogList}>
        
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={"/blog/"+post.slug}>
                <div className={styles.blogListingWrapper}><div className={styles.blogListingTitle}>{post.title}</div><div className={styles.blogListingDate}>{post.date}</div></div>
                
              </Link>
            // <li >
            //   <Link href={"/blog/"+post.slug}>
            //     <div className={styles.blogListingWrapper}><div>{post.title}</div><div className={styles.blogListingDate}>{post.date}</div></div>
                
            //   </Link>
            // </li>
          )
        })}
      </div>
      
    </main>
  )
}




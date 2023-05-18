import Link from 'next/link';

import styles from './about.module.css';

export default function About() {
  return (
    <main className={[styles.maine, styles.column, 'content-width', 'page-content'].join(' ')}>
      {/* <div className={styles.h1}>
        stellaric design
      </div> */}

      <h1 className={styles.h1}>About</h1>
      <p>I'm a designer, developer, photographer, and broadcaster.</p>
      <p>I commonly struggle to describe myself because I feel like I do too many things and have too much nuance about it in my head. Bear with me as I try to organize my thoughts.</p>
      <div className={'content-spacer'}></div>
      <h2 className={styles.h2}>Site Inspirations</h2>
      <p>I thought for a while about what I wanted this site to look like, be, do, and many other things. It's not perfect by far, but it's another iteration of expressing myself.</p>
      <ul>
        <li>
          <Link href="https://swr.vercel.app/" className={'link'}>SWR</Link> by Vercel
        </li>
        <li>
          <Link href="https://leerob.io/" className={'link'}>Lee Robinson</Link>
        </li>
        <li>
          <Link href="https://shud.in/posts" className={'link'}>Shu Ding</Link>
        </li>
        <li>
          <Link href="https://diagram.com/" className={'link'}>Diagram</Link>
        </li>
      </ul>
      <p>Additionally, I used these to help with what I didn't know during this project. Thank you to tutorial/resource authors!</p>
      <ul>
        <li>
          <Link href="https://maxleiter.com/blog/build-a-blog-with-nextjs-13" className={'link'}>https://maxleiter.com/blog/build-a-blog-with-nextjs-13</Link>
        </li>
        <li>
          <Link href="https://getcssscan.com/css-box-shadow-examples" className={'link'}>https://getcssscan.com/css-box-shadow-examples</Link>
        </li>
        <li>
          <Link href="https://theodorusclarence.com/blog/spotify-now-playing" className={'link'}>https://theodorusclarence.com/blog/spotify-now-playing</Link>
        </li>
      </ul>

      
    </main>
  )
}




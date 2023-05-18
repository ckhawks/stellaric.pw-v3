import matter from 'gray-matter'
import path from 'path'
// import type { Post } from './types'
import fs from 'fs/promises'
import { cache } from 'react'
import { DateTime } from 'Luxon';

const POSTS_PATH = 'src/posts/';

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const posts = await fs.readdir(POSTS_PATH);
  // console.log("posts files: ", posts)

  const unsortedPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')  
      .map(async (file) => {
        const filePath = `${POSTS_PATH}${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const { data, content } = matter(postContent)

        if (data.published === false) {
          return null
        }

        // console.log(data.numberDate);

        return { ...data, body: content }
      })  
  )

  const sortedPosts = unsortedPosts.sort((a, b) => {
    // console.log("aNumberdate: ", a.numberDate);
    const beforeDate = DateTime.fromFormat(a.numberDate, 'MM-dd-yyyy');
    const afterDate = DateTime.fromFormat(b.numberDate, 'MM-dd-yyyy');
    return afterDate - beforeDate
  })

  return sortedPosts;
})

export async function getPost(slug) {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

export default getPosts

// Usage:
// const posts = await getPosts()
// const post = await getPost('my-post')
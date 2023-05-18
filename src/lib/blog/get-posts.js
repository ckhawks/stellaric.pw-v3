import matter from 'gray-matter'
import path from 'path'
// import type { Post } from './types'
import fs from 'fs'
import { default as fs2 } from 'fs/promises';
import { cache } from 'react'
import { DateTime } from 'luxon';

const POSTS_PATH = 'src/posts/';

// import fs from 'fs'
// import path from 'path'

// export default (req, res) => {
//   const dirRelativeToPublicFolder = 'img'

//   const dir = path.resolve('./public', dirRelativeToPublicFolder);

//   const filenames = fs.readdirSync(dir);

//   const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

//   res.statusCode = 200
//   res.json(images);
// }

// `cache` is a React 18 feature that allows you to cache a function for the lifetime of a request.
// this means getPosts() will only be called once per page build, even though we may call it multiple times
// when rendering the page.
export const getPosts = cache(async () => {
  const dir = path.resolve('./src/', 'posts'); // this line apparently tells vercel scanner that we need those files

  const posts = fs.readdirSync(dir);

  // const posts = await fs.readdir(POSTS_PATH);
  // console.log("posts files: ", posts)

  const unsortedPosts = await Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')  
      .map(async (file) => {
        const filePath = `${dir}/${file}`
        const postContent = await fs2.readFile(filePath, 'utf8')
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
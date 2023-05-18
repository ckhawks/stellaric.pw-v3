// app/(subpages)/blog/[slug]/components/markdown-components.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Code } from 'bright';

export const mdxComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    )
  },
  img: ({ children, props }) => {
    // You need to do some work here to get the width and height of the image.
    // See the details below for my solution.

    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} />
  },
  pre: Code, // from Bright
  Image: Image,
  // any other components you want to use in your markdown
  
}
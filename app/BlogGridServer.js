import Box from "./Box";
import Link from "next/link";
import { routingUrl } from "./utils/routing";

export const revalidate = 0 // disable cache

async function getData() {
  const res = await fetch(`${routingUrl}/blog/get-all-posts`, { cache: "no-store"});
  if (!res.ok) { throw new Error('Failed to fetch data')}
  return res.json();
} 

export default async function BlogGridServer() {
  const allBlogs = await getData();
  return (
    <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-3">
      {allBlogs.map((post, i) => {
        return (
          <Box key={`${i}-${post}-bottom`}>
            <Link href={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
              <p><small>{post.postDate}</small></p>
            </Link>  
          </Box>
        )
      })}
    </div>
  )
}
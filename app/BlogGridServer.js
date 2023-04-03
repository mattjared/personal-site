import Box from "./Box";
import Link from "next/link";
import { route } from "./utils/routing";

export const revalidate = 0 // disable cache

async function getData() {
  const res = await fetch("https://mattjared.vercel.app/blog/get-all-posts");
  // console.log(route, res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
} 

export default async function BlogGridServer() {
  const allBlogs = await getData();
  console.log(allBlogs.allPosts[7]);
  return (
    <div>
      {route}
      {allBlogs.allPosts[7].title}
      <div className="grid gap-1 grid-cols-10">
        {allBlogs.allPosts.map((p, i) => {
          return (
            <div className="border" key={`${i}-${p}-top`}>
              <p>{p.slug}</p>
              <p>{p.title}</p>
              <p>{p.postDate}</p>
              <p>{p.published && "published"}</p>
            </div>
          )
        })}
      </div>
      <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-3">
        {/* {allBlogs.map((post, i) => {
          return (
            <Box key={`${i}-${post}-bottom`}>
              <Link href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
                <p><small>{post.postDate}</small></p>
                {post.published && "published"}
              </Link>  
            </Box>
          )
        })} */}
      </div>
    </div>
  )
}
import Box from "./Box";
import Link from "next/link";
// import { route } from "./utils/routing";

export const revalidate = 0 // disable cache

async function getData() {
  // const route = process.env.NODE_ENV === "development"
  // ? ""
  // : "https://mattjared.vercel.app/blog/get-all-posts/";
  let res;
  if (process.env.NODE_ENV === "development") {
    res = await fetch("http://localhost:3000/blog/get-all-posts/");
  } else {
    res = await fetch("https://mattjared.vercel.app/blog/get-all-posts/");
  }
  if (!res.ok) { throw new Error('Failed to fetch data')}
  return res.json();
} 

export default async function BlogGridServer() {
  const allBlogs = await getData();
  console.log(allBlogs);
  return (
    <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-3">
      {allBlogs.map((post, i) => {
        return (
          <Box key={`${i}-${post}-bottom`}>
            <Link href={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
              <p><small>{post.postDate}</small></p>
              {post.published && "published"}
            </Link>  
          </Box>
        )
      })}
    </div>
  )
}
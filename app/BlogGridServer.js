import Box from "./Box";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/get-all-posts`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
} 

export default async function BlogGridServer() {
  const allBlogs = await getData();
  return (
    <div>
      <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-3">
        {allBlogs.map((post, i) => {
          return (
            <Box key={i}>
              <Link href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
                <p><small>{post.postDate}</small></p>
              </Link>  
            </Box>
          )
        })}
      </div>
    </div>
  )
}
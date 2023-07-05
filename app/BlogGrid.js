'use client';
import Box from "./Box";
import { useEffect, useState } from "react";
import { route } from "./utils/routing";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${route}/blog/get-all-posts`, { cache: "no-store"});
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
} 

export default function BlogGrid() {
  const [allBlogs, setAllBlogs] = useState([])
  useEffect(() => {
    async function getBlogs() {
      const blogs = await getData();
      setAllBlogs(blogs);
    }
    getBlogs();
  }, [])

  return (
    <Box>
      <h2 className="text-2xl font-semibold mb-2">Client Blogs</h2>
      {allBlogs.map((post, i) => {
        return (
          <>
            {post.published &&
              <Box key={i}>
                <Link href={`/blog/${post.slug}`}>
                  <h3>{post.title}</h3>
                  <p><small>{post.postDate}</small></p>
                  {post.published && "published"}
                </Link>  
              </Box>
            }
          </>
        )
      })}
    </Box>
  )
}


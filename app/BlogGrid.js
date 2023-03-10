'use client';
import Box from "./Box";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}}/blog/get-all-posts`);
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
          <div key={i} className="mb-3">
            <h3>{post.title}</h3>
            <p>{post.postDate}</p>
          </div>
        )
      })}
    </Box>
  )
}
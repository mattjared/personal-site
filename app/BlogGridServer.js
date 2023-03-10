import Box from "./Box";

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
    <Box>
      <h2 className="text-2xl font-semibold mb-2">ServerBlogs</h2>
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
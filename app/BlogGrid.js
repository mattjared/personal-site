import Box from "./Box";

async function getData() {
  const route = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "https://mattjared.vercel.app/";
  const res = await fetch(`${route}/blog/get-all-posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}


export default async function BlogGrid() {
  const allPosts = await getData();
  return (
    <Box>
      <h2 className="text-2xl font-semibold mb-2">Blog</h2>
      {allPosts && allPosts.map((post, i) => {
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
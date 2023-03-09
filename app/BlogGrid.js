
import Box from "./Box";

export default async function BlogGrid() {
  let route;
  if (process.env.NODE_ENV === "development") {
    route = "http://localhost:3000"
  } else {
    route = "https://mattjared.vercel.app/"
  }
  const allPosts = await fetch(`${route}/blog/get-all-posts`).then((res) => {
    return res.json();
  })
  console.log(allPosts);
  return (
    <Box>
      <h3>blogs and shit</h3>
      {allPosts.map((post, i) => {
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
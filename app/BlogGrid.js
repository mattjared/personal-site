
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
  .catch((e) => {
    console.log("error", e.toString())
  });
  console.log(allPosts);
  return (
    <Box>
      <h2 className="text-2xl font-semibold mb-2">Blog</h2>
      {allPosts.map((post, i) => {
        return (
          <div key={i} className="mb-3">
            <h3>{post.title}</h3>
            <p>{post.postDate && post.postDate}</p>
          </div>
        )
      })}
    </Box>
  )
}
import Box from "./Box";

// async function getData() {
//   const route = process.env.NODE_ENV === "development"
//   ? "http://localhost:3000"
//   : "https://mattjared.vercel.app/";
//   const res = await fetch(`${route}/blog/get-all-posts`);
//   if (!res.ok) {
//     throw new Error('Failed to fetch data');
//   }
//   return res.json();
// }

export default async function BlogGrid() {
  // const allPosts = await getData();
  let route;
  let content = [];
  if (process.env.NODE_ENV === "development") {
    route = "http://localhost:3000"
  } else {
    route = "https://mattjared.vercel.app/"
  }
  await fetch(`${route}/blog/get-all-posts`)
  .then((res) => {
    return res.json();
  })
  .then((html) => {
    content = html;
  })
  .catch((e) => {
    console.log("error", e.toString())
  });
  console.log(content);
  return (
    <Box>
      <h2 className="text-2xl font-semibold mb-2">Blog</h2>
      {/* {content.map((post, i) => {
        return (
          <div key={i} className="mb-3">
            <h3>{post.title}</h3>
            <p>{post.postDate}</p>
          </div>
        )
      })} */}
    </Box>
  )
}
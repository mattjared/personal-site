
export default async function PostPage({params}: { params: { id: string}}) {
  const id = params.id;
  let content = "";
  let route;
  if (process.env.NODE_ENV === "development") {
    route = "http://localhost:3000"
  } else {
    route = "https://mattjared.vercel.app/"
  }
  await fetch(`${route}/blog/get-post?${id}`)
  .then((res) => {
    return res.text();
  })
  .then((html) => {
    content = html;
  })
  .catch((e) => {
    console.log("error", e.toString())
  });
  return (
    <div className='mx-auto prose prose-stone'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      asdf
    </div>
  );
}
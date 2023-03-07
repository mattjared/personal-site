
// async function getPost(id: string) {
//   const res = await fetch(`http://localhost:3000/api/get-post?${id}`);
//   if (!res.ok) return undefined;
//   return res;
// }

export default async function PostPage({params}: { params: { id: string}}) {
  const id = params.id;
  let content = "";
  const post = await fetch(`http://localhost:3002/blog/get-post?${id}`)
  .then((res) => {
    return res.text();
  })
  .then((html) => {
    console.log(html);
    content = html;
  })
  .catch((e) => {
    console.log("error", e.toString())
  });
  return (
    <div className='mx-auto'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      asdf
    </div>
  );
}
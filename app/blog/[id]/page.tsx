import { routingUrl } from "../../utils/routing";

export default async function PostPage({params}: { params: { id: string}}) {
  let content = "";
  const id = params.id;
  await fetch(`${routingUrl}/blog/get-post?${id}`, { cache: "no-store"})
  .then((res) => {
    return res.text();
  })
  .then((html) => {
    content = html; 
  })
  .catch((e) => {
    console.error("error", e.toString())
  });
  return (
    <div className='mx-auto prose prose-stone max-w-none'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
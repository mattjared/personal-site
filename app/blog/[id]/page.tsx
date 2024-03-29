// import { routingUrl } from "../../utils/routing";
import fs from "fs";
import { join } from "path";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
const postsDirectory = join(process.cwd(), "_posts");

export default async function PostPage({params}: { params: { id: string}}) {
  const fullPath = join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return (
    <div className='mx-auto prose prose-slate max-w-none'>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
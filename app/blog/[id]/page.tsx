import fs from "fs";
import { join } from "path";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
const postsDirectory = join(process.cwd(), "_posts");
import Image from "next/image";

export const dynamicParams = false;


export default async function BlogPost(props: { params: Promise<{ id: string}>}) {
  const params = await props.params;
  const fullPath = join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const title = matterResult.data.title;
  const date = matterResult.data.date;
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 mt-24">{title}</h1>
      <h4 className="text-slate-500 text-xs mb-12">{date}</h4>
      <div className='prose tracking-tighter prose-img:max-w-full prose-pre:overflow-x-auto max-w-none w-full mx-auto px-4 md:px-0'>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
}

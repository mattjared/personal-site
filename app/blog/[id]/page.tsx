import fs from "fs";
import { join } from "path";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
const postsDirectory = join(process.cwd(), "_posts");
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export const dynamicParams = false;


export default async function BlogPost(props: { params: Promise<{ id: string}>}) {
  const params = await props.params;
  const fullPath = join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const title = matterResult.data.title;
  const date = matterResult.data.date;
  const updated = matterResult.data.updated;
  const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
  const contentHtml = processedContent.toString();
  return (
    <>
      <Navbar />
      <div className="prose dark:prose-invert prose-img:max-w-full prose-pre:overflow-x-auto mx-auto px-4 md:px-0">
        <h1 className="font-headline text-4xl font-semibold mb-4 mt-12 dark:text-white">{title}</h1>
        <h4 className="text-slate-500 dark:text-slate-400 text-sm">Published: {date}</h4>
        {updated && <h4 className="text-slate-500 dark:text-slate-400 text-sm">Updated: {updated}</h4>}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </>
  );
}

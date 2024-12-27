import fs from "fs";
import { join } from "path";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
const postsDirectory = join(process.cwd(), "_posts");
import Image from "next/image";

export default async function PostPage(props: { params: Promise<{ id: string}>}) {
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
      <main className='container px-4 mt-12 mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* <Image
              src="/images/profilepic.png"
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-3xl"
            /> */}
            <h2 className="text-5xl font-serif mt-8 mb-2">{title}</h2>
            <p className="text-xl mb-4">{date}</p>
          </div>
          <div className='prose prose-slate prose-img:max-w-full prose-pre:overflow-x-auto max-w-none w-full mx-auto px-4 md:px-0'>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </div>
      </main>
    </>
  );
}
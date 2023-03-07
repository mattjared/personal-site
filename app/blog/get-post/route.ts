import { type NextRequest } from 'next/server'
import fs from "fs";
import { join } from "path";
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), "__posts");

export async function GET(request: NextRequest) {
  const slug = request ? request.nextUrl.search.substring(1) : undefined;
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  // console.log(contentHtml);
  return new Response(contentHtml, {
    status: 200,
  });
}
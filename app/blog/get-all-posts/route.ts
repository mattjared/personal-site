import fs from "fs";
import { join } from "path";
import graymatter from "gray-matter";
const postsDirectory = join(process.cwd(), "__posts");

export async function GET() {
  const slugs =  fs.readdirSync(postsDirectory);
  let allPosts: { title: string; slug: string; postDate: graymatter.GrayMatterFile<string>; published: boolean; }[]= [];
  slugs.map((slug) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const frontMatter = graymatter(fileContents);
    const title = realSlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const postDate = frontMatter.data.date;
    const published = frontMatter.data.published;
    allPosts.push({
      title,
      slug: slug.replace(/\.md$/, ""),
      postDate,
      published
    })
  });
  const options = { status: 200 }
  return new Response(JSON.stringify(allPosts), options);
}
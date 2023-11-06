import { type NextRequest } from 'next/server'
import fs from "fs";
import { join } from "path";
import graymatter from "gray-matter";
const postsDirectory = join(process.cwd(), "_posts");

export const revalidate = 0 // disable cache

export async function GET(request: NextRequest) {
  const allSlugs = fs.readdirSync(postsDirectory);
  const slugs = allSlugs.filter(file => file !== '.DS_Store');
  let allPosts: { title: string; slug: string; postDate: graymatter.GrayMatterFile<string>; published: boolean; }[]= [];
  slugs.map((slug) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const frontMatter = graymatter(fileContents);
    const title = realSlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    const postDate = frontMatter.data.date;
    const published = frontMatter.data.published;
    if (published) {
      allPosts.push({
        title,
        slug: slug.replace(/\.md$/, ""),
        postDate,
        published
      })
    }
  });
  return new Response(JSON.stringify(allPosts));
}
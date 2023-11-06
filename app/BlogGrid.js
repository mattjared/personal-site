import Box from "./Box";
import Link from "next/link";
import fs from "fs";
import { join } from "path";
import graymatter from "gray-matter";
const postsDirectory = join(process.cwd(), "_posts");

async function getData() {
  const allSlugs = fs.readdirSync(postsDirectory);
  const slugs = allSlugs.filter(file => file !== '.DS_Store');
  let allPosts = [];
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
  return allPosts;
} 

export default async function BlogGrid() {
  const allBlogs = await getData();
  return (
    <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-3">
      {allBlogs.map((post, i) => {
        return (
          <Box key={`${i}-${post}-bottom`}>
            <Link href={`/blog/${post.slug}`}>
              <h3>{post.title}</h3>
              <p><small>{post.postDate}</small></p>
            </Link>  
          </Box>
        )
      })}
    </div>
  )
}
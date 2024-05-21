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

const BlogBox = function({post, i}) {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white" key={`post-${i}`}>
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600">
        {post.postDate}
      </p>
      <Link className="text-blue-600 hover:text-blue-800 mt-4 inline-block" href={`/blog/${post.slug}`}>
        Read More
      </Link>
    </div>  
  )
} 

export default async function BlogGrid({isHome}) {
  const allBlogs = await getData();
  return (
    <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-3">
      {allBlogs.map((post, i) => {
        return (
          <div key={`${i}-post`}>
            {isHome ? (
              <>{i <=2 && (<BlogBox post={post} />)}</>
            ) : (
              <BlogBox post={post} />
            )}
          </div>
        )
      })}
    </div>
  )
}
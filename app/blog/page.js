import Link from "next/link";
import fs from "fs";
import { join } from "path";
import graymatter from "gray-matter";
const postsDirectory = join(process.cwd(), "_posts");
import { Card, CardContent } from "@/components/ui/card"
import MugShot from "../components/MugShot";
import { site } from "../../siteData";

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

export default async function BlogPage() {
  const allBlogs = await getData();
  return (
    <>
      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MugShot heading={site.about.heading} subheading="Blog posts" />
          <div>
            {allBlogs.map((post, i) => {
                return (
                <div key={`${i}-post`}>
                  <Card className="mb-4" key={i}>
                    <CardContent className="flex items-center p-4">
                      <span className="text-2xl mr-4">✍🏻</span>
                      <div>
                        <h5 className="font-semibold">{post.title}</h5>
                        <Link href={`/blog/${post.slug}`} className="text-sm text-gray-500">Read more</Link>
                      </div>
                      <span className="ml-auto text-sm text-gray-500">{post.postDate}</span>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </>
  );
}
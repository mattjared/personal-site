import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import MugShot from "../components/MugShot";
import { site } from "../../siteData";
import { getBlogData } from "../lib/actions";

export default async function BlogPage() {
  const allBlogs = await getBlogData({ allPosts: true, recentPost: false });

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
                      <span className="text-2xl mr-4">{post.icon}</span>
                      <div>
                        <h5 className="font-semibold">{post.title}</h5>
                        <Link href={`/blog/${post.slug}`} className="text-sm text-gray-500">Read more</Link>
                      </div>
                      <span className="ml-auto text-sm text-gray-500">{post.date}</span>
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
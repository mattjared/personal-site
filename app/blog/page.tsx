import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getBlogData } from "../lib/actions";
import { Pen } from "lucide-react";

export default async function BlogPage() {
  const allBlogs = await getBlogData({ allPosts: true, recentPost: false });

  return (
    <> 
      <h1 className="text-2xl font-semibold mb-12 mt-24">Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allBlogs.map((post, i) => {
          return (
            <Card className="mb-4" key={`${i}-post`}>
              <Link href={`/blog/${post.slug}`}>
                <CardHeader className="mb-12">
                  <Pen className="w-6 h-6 mr-auto" />
                </CardHeader>
                <CardContent>
                  <h4 className="text-md">{post.title}</h4>
                  <p className="text-slate-500 text-xs">{post.date}</p>
                </CardContent>
              </Link>
            </Card>
          )
        })}
      </div>
    </>
  );
}
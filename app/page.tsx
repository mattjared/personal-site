import { site } from "../siteData";
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getBlogData } from "./lib/actions";
import { Pen, Rocket, CodeXml } from "lucide-react";
export default async function Home() {
  const latestBlogs = await getBlogData({ allPosts: false, recentPost: true });
  return (
    <>
      <h3 className="text-4xl font-medium mb-6 mt-24">{site.about.mission}</h3>
      <p className="text-md font-sans mb-6">{site.about.bio}</p>
      <div className="my-4 space-x-4">
        <Button className="bg-black text-white hover:bg-gray-800"><Link href="/contact">Talk with me</Link></Button>
      </div>
      <div className="mt-12 my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <Link href="/blog">
            <CardHeader className="mb-12">
              <Pen className="w-6 h-6 mr-auto" />
            </CardHeader>
            <CardContent>
              <h4 className="text-md">Articles</h4>
              <p className="text-slate-500 text-sm">I write about my experiences and learnings as a developer and sales engineer.</p>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <CardHeader className="mb-12">
            <Rocket className="w-6 h-6 mr-auto" />
          </CardHeader>
          <CardContent>
            <h4 className="text-md ">Projects</h4>
            <p className="text-slate-500 text-sm">A list of projects I&apos;ve worked on and some I&apos;m working on.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="mb-12">
            <CodeXml className="w-6 h-6 mr-auto" />
          </CardHeader>
          <CardContent>
            <h4 className="text-md">Build</h4>
            <p className="text-slate-500 text-sm">Learn to rebuild this site with Next.js and Tailwind CSS together on a call.</p>
          </CardContent>
        </Card>

      </div>
      

      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* <MugShot subheading={site.about.subheading} heading={site.about.heading} /> */}
          <div>
            <hr className="my-8" />
            
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="col-start-2">
            <hr className="my-8" />
            <div>
              <h4 className="text-2xl font-serif mb-4">Recent Appearances</h4>
              {site.recentAppearances.map((appearance, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="flex items-center p-4">
                    <span className="text-2xl mr-4">{appearance.icon}</span>
                    <div>
                      <h5 className="font-semibold">{appearance.title}</h5>
                      <p className="text-sm">{appearance.description}</p>
                    </div>
                    <Link href={appearance.url} className="ml-auto text-sm text-gray-500">{appearance.cta}</Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <hr className="my-8" />
            <div>
              <h4 className="text-2xl font-serif mb-4">Latest Post</h4>
              {latestBlogs.map((post, i) => {
                return (
                <Card key={i} className="mb-4">
                  <CardContent className="flex items-center p-4">
                    <span className="text-2xl mr-4">{post.icon}</span>
                    <div>
                      <h5 className="font-semibold">{post.title}</h5>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="ml-auto text-sm text-gray-500">Read now</Link>
                  </CardContent>
                </Card>
              )})}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}


import { site } from "../siteData";
import MugShot from "./components/MugShot";
import PicGrid from "./components/PicGrid";
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getBlogData } from "./lib/actions";

export default async function Home() {
  const latestBlogs = await getBlogData({ allPosts: false, recentPost: true });
  return (
    <>
      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MugShot subheading={site.about.subheading} heading={site.about.heading} />
          <div>
            <h3 className="text-4xl font-serif mb-6">{site.about.mission}</h3>
            <p className="text-md font-sans mb-6">{site.about.bio}</p>
            <div className="mt-4 space-x-4">
              <Button className="bg-black text-white hover:bg-gray-800" asChild><Link href="/contact">Talk with me</Link></Button>
              <Button variant="outline" asChild><Link href="/projects" className="text-black">See my work</Link></Button>
            </div>
            <hr className="my-8" />
            <div>
              <h4 className="text-2xl font-serif mb-4">Work experience</h4>
              {site.careerCards.map((job, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="flex items-center p-4">
                    <span className="text-2xl mr-4">{job.icon}</span>
                    <div>
                      <h5 className="font-semibold">{job.title}</h5>
                      <p className="text-sm">{job.company}</p>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">{job.date}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <PicGrid />
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


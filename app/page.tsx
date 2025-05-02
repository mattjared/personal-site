import { site } from "../siteData";
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { getBlogData } from "./lib/actions";
import { Pen, Rocket, CodeXml, MicVocal, UserRound, File } from "lucide-react";
import Typewriter from "./components/TypeWriter";
export default async function Home() {
const latestBlogs = await getBlogData({ allPosts: false, recentPost: true });
  
  return (
    <>
      <Typewriter />
      <p className="text-sm my-6 tracking-tight">{site.about.bio}</p>
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <Link href="/blog">
            <CardHeader className="mb-12">
              <Pen className="w-6 h-6 mr-auto" />
            </CardHeader>
            <CardContent>
              <h4 className="text-md">Blog</h4>
              <p className="text-slate-500 text-xs">I write about my experiences and learnings as a developer and sales engineer.</p>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/projects">
            <CardHeader className="mb-12">
              <Rocket className="w-6 h-6 mr-auto" />
            </CardHeader>
            <CardContent>
              <h4 className="text-md ">Projects</h4>
              <p className="text-slate-500 text-xs">A list of projects I&apos;ve worked on and some I&apos;m working on.</p>
              </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/contact">
            <CardHeader className="mb-12">
              <UserRound className="w-6 h-6 mr-auto" />
            </CardHeader>
            <CardContent>
              <h4 className="text-md">Contact</h4>
              <p className="text-slate-500 text-xs">Get in touch with me to chat about anything.</p>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/about#appearances">
            <CardHeader className="mb-12">
              <MicVocal className="w-6 h-6 mr-auto" />
            </CardHeader>
            <CardContent>
              <h4 className="text-md">Public Appearances</h4>
              <p className="text-slate-500 text-xs">Where I&apos;ve spoken at conferences, online events or been interviewed.</p>
            </CardContent>
          </Link>
        </Card>
        <Card>
          <Link href="/about#experience">
            <CardHeader className="mb-12">
              <File className="w-6 h-6 mr-auto" />
            </CardHeader>
            <CardContent>
              <h4 className="text-md">Experience</h4>
              <p className="text-slate-500 text-xs">Career timeline and work experience including my resume.</p>
            </CardContent>
          </Link>
        </Card>
        <Card className="bg-purple-100">
          <Link href="/about#deploy">
          <CardHeader className="mb-12">
            <CodeXml className="w-6 h-6 mr-auto" />
          </CardHeader>
          <CardContent>
            <h4 className="text-md">Build</h4>
            <p className="text-slate-500 text-xs">Learn to rebuild this site with Next.js and Tailwind CSS together on a call.</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </>
  )
}


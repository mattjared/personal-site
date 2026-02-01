import Link from "next/link"
import { getBlogData, getProjects } from "./lib/blog";
import Contact from "./components/Contact";
import PicGrid from "./components/PicGrid";

export default async function Home() {
  const allBlogs = getBlogData({ allPosts: true });
  const projects = await getProjects();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-1 md:col-span-2 p-10 py-20 border border-slate-200 dark:border-slate-800">
        <div className="font-headline mb-12">
          <h1 className="text-8xl font-bold mb-2 tracking-tighter">Matt Jared </h1>
          <h4 className="font-semibold text-xl tracking-tight">👋🏻 Sales Leader & Developer based in Austin, Texas USA.</h4>
        </div>
        <div className="font-mono">
          <p className="text-sm my-6 tracking-tight"><span className="font-bold">About me:</span> I&apos;m a marketer turned self-taught developer turned sales engineer turned sales leader. I’ve worked at and alongside startups and scale-ups including Cratejoy, Techstars, Atlassian, and now Vercel, where I lead sales and field engineering efforts to help teams ship faster websites with happier teams. I’m a builder at heart. On the code side that means Next.js, React, Postgres, and Supabase. More broadly, it means building products, teams, projects, and companies and sharing what I learn along the way.</p>
          <p className="text-sm my-6 tracking-tight"><span>What I&apos;m focused on:</span> I&apos;m deeply interested in the intersection of engineering, business, and go-to-market. Especially sales, positioning, and distribution when technical credibility is what creates trust. This site is my attempt to share everything I know. I&apos;m available on a project basis to help startups bring products to market, improve how they sell, or think through strategy. I post here and on LinkedIn. Long term goal: learn, build, and have fun.</p>
        </div>
        <PicGrid />
      </div>
      <div className="lg:col-span-2 hidden lg:block border border-slate-200 dark:border-slate-800">&nbsp;</div>
      <div className="col-span-1 md:col-span-2 lg:col-span-3 p-10 border border-slate-200 dark:border-slate-800">
        <h2 className="text-4xl font-semibold mb-6 pb-3 font-headline">Blog Posts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 tracking-tighter">
          {allBlogs.map((post, i) => (
            <div key={`${i}-project`} className="mb-2">
              <Link href={`/blog/${post.slug}`}>
                <h4 className="font-semibold font-headline">{post.title}</h4>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{post.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-1 p-10 border border-slate-200 dark:border-slate-800">
        <h2 className="text-4xl font-semibold mb-6 pb-3 font-headline">Appearances</h2>
        <div className="grid grid-cols-1 gap-2 tracking-tighter">
          <div className="mb-2">
            <Link href="https://www.youtube.com/watch?v=5ECzvKmOiMg">
              <h4 className="font-semibold font-headline">The WordPress Edge</h4>
              <p className="font-mono text-sm text-slate-500 dark:text-slate-400">A look at the future of Headless WordPress</p>
            </Link>
          </div>
          <div className="mb-2">
            <Link href="https://www.youtube.com/watch?v=9h_dFCNSiQ4">
              <h4 className="font-semibold font-headline">How to scale your business with AI</h4>
              <p className="font-mono text-sm text-slate-500 dark:text-slate-400">A look at how AI can help scale your business</p>
            </Link>
          </div>
          <div className="mb-2">
            <Link href="https://www.youtube.com/watch?v=cPLmB3PRMCY">
              <h4 className="font-semibold font-headline">Ship 2025 Anatomy of a Fast Site</h4>
              <p className="font-mono text-sm text-slate-500 dark:text-slate-400">What does a FAST site look like? How do you make one?</p>
            </Link>
          </div>
          <div className="mb-2">
            <Link href="/blog/public-vercel-ships">
              <h4 className="font-semibold font-headline">Public Vercel Appearances</h4>
              <p className="font-mono text-sm text-slate-500 dark:text-slate-400">Everything I&apos;ve done that&apos;s publicly available while at Vercel</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 p-10 border border-slate-200 dark:border-slate-800">
        <h2 className="text-4xl font-semibold mb-6 pb-3 font-headline">Contact</h2>
        <p className="text-sm my-6 tracking-tight font-mono">Get in touch with me and I will get back to you as soon as possible.</p>
        <Contact />
      </div>
      <div className="col-span-1 md:col-span-2 p-10 border border-slate-200 dark:border-slate-800">
        <h2 className="text-4xl font-semibold mb-6 pb-3 font-headline">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-tighter">
          {projects.map((project, i) => (
            <div key={`${i}-project`} className="mb-2">
              <h4 className="font-semibold font-headline">{project.title}</h4>
              <div
                className="font-mono text-sm text-slate-500 dark:text-slate-400 [&_a]:text-[#00bfff] [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


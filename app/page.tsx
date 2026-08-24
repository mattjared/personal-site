import Link from "next/link"
import { getBlogData, getProjects } from "./lib/blog";
import Contact from "./components/Contact";
import PicGrid from "./components/PicGrid";

export default async function Home() {
  const allBlogs = getBlogData({ allPosts: true });
  const projects = await getProjects();
  return (
    <div>
      {/* hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 md:col-span-3 p-10 py-20 border border-slate-200 dark:border-slate-800">
          <div className="font-headline mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tighter">Matt Jared</h1>
            <p className="font-semibold text-xl md:text-2xl tracking-tight">👋🏻 Sales Leader & Developer in Austin, Texas, USA!</p>
          </div>
          <div className="text-base md:text-lg leading-relaxed">
            <p className="my-6 font-mono tracking-tighter"><span className="font-bold">About me:</span> I&apos;m a marketer turned self-taught developer turned sales engineer turned sales leader. I’ve worked at and alongside startups and scale-ups including Cratejoy, Techstars, Atlassian, and now Vercel, where I lead sales and field engineering efforts to help teams ship faster websites, reliable agents, and more with happier teams.</p>
            <p className="my-6 font-mono tracking-tighter">I&apos;m always sharing what I learn about sales, building with AI, web development, and having fun. On this site you&apos;ll find my writing on those topics, the projects I&apos;ve built, my public appearances, and a way to get in touch.</p>
          </div>
          <PicGrid />
        </div>
        <div className=" hidden lg:block lg:col-span-1 border border-slate-200 dark:border-slate-800">&nbsp;</div>
      </div>

      {/* spacer */}
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
      </div>
      
      {/* blog section */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-1 hidden lg:block border border-slate-200 dark:border-slate-800">&nbsp;</div>
        {/* <div className="lg:col-span-1 hidden lg:block border border-slate-200 dark:border-slate-800">&nbsp;</div> */}
        <div className="col-span-1 lg:col-span-3 p-10 border border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 pb-3 font-headline">Blog Posts</h2>
          <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
            Writing on sales, building with AI, web development, and the things I learn along the way. Each post is
            also available as markdown at <code>/blog/&lt;slug&gt;.md</code> or by sending{' '}
            <code>Accept: text/markdown</code> to the post URL.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 tracking-tighter">
            {allBlogs.map((post, i) => (
              <div key={`${i}-project`} className="pb-6">
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-semibold font-headline tracking-tighter">{post.title}</h3>
                  <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{post.date}</p>
                </Link>
                {post.excerpt && (
                  <p className="font-mono text-sm mt-2 leading-relaxed">{post.excerpt}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    
      {/* spacer */}
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
      </div>

      {/* contact / appearances */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-2 border border-slate-200 dark:border-slate-800 p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 pb-3 font-headline">Contact</h2>
          <p className="text-sm md:text-base my-6 tracking-tighter font-mono">Get in touch about projects, sales, web development, or just to say hi. Fill out the form below and it sends straight to my inbox — I read everything and will get back to you as soon as possible.</p>
          <Contact />
        </div>
        <div className="hidden lg:block col-span-1 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 border border-slate-200 dark:border-slate-800 p-10">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 pb-3 font-headline">Appearances</h2>
          <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
            Talks, webinars, and videos where I&apos;ve shared what I know about the web platform, selling, and
            building with AI.
          </p>
          <div className="grid grid-cols-1 gap-2 tracking-tighter">
            <div className="mb-2">
              <Link href="https://www.youtube.com/watch?v=5ECzvKmOiMg">
                <h3 className="font-semibold font-headline">The WordPress Edge</h3>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">A look at the future of Headless WordPress</p>
              </Link>
            </div>
            <div className="mb-2">
              <Link href="https://www.youtube.com/watch?v=9h_dFCNSiQ4">
                <h3 className="font-semibold font-headline">How to scale your business with AI</h3>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">A look at how AI can help scale your business</p>
              </Link>
            </div>
            <div className="mb-2">
              <Link href="https://www.youtube.com/watch?v=cPLmB3PRMCY">
                <h3 className="font-semibold font-headline">Ship 2025 Anatomy of a Fast Site</h3>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">What does a FAST site look like? How do you make one?</p>
              </Link>
            </div>
            <div className="mb-2">
              <Link href="/blog/public-vercel-ships">
                <h3 className="font-semibold font-headline">Public Vercel Appearances</h3>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">Everything I&apos;ve done that&apos;s publicly available while at Vercel</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* spacer */}
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-2 p-10 border border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 pb-3 font-headline">Projects</h2>
          <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
            Side projects and experiments built with Next.js, React, Supabase, and whatever else seemed fun at the
            time. Most are open source on GitHub.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 tracking-tighter">
            {projects.map((project, i) => (
              <div key={`${i}-project`} className="mb-2">
                <h3 className="font-semibold font-headline">{project.title}</h3>
                <div
                  className="font-mono text-sm"
                  dangerouslySetInnerHTML={{ __html: project.descriptionHtml }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block col-span-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
      </div>

      {/* spacer */}
      <div className="grid grid-cols-4">
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
        <div className="col-span-1 p-2 border border-slate-200 dark:border-slate-800">&nbsp;</div>
      </div>
    </div>
  )
}


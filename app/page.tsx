import { site } from "../siteData";
import Link from "next/link"
import { getBlogData } from "./lib/actions";
import Contact from "./components/Contact";
import PicGrid from "./components/PicGrid";

export default async function Home() {
  const allBlogs = await getBlogData({ allPosts: true, recentPost: false });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <div className="col-span-1 md:col-span-2 p-10 py-20 border border-slate-200 dark:border-slate-800">
        <div className="font-headline mb-12">
          <h1 className="text-8xl font-bold mb-2 tracking-tighter">Matt Jared </h1>
          <h4 className="font-semibold text-xl tracking-tight">👋🏻 {site.about.subheading}</h4>
        </div>
        <div className="font-mono">
          <p className="text-sm my-6 tracking-tight">{site.about.bio}</p>
          <p className="text-sm my-6 tracking-tight">{site.about.howtowork}</p>
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
          {site.recentAppearances.map((project, i) => (
            <div key={`${i}-project`} className="mb-2">
              <Link href={project.url}>
                <h4 className="font-semibold font-headline">{project.title}</h4>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 p-10 border border-slate-200 dark:border-slate-800">
        <h2 className="text-4xl font-semibold mb-6 pb-3 font-headline">Contact</h2>
        <p className="text-sm my-6 tracking-tight">If you are interested in bringing a product to market, learning how to sell or want general advice feel free to contact me. I post relevant content to on this site and on <Link href="https://www.linkedin.com/in/mattjared9">LinkedIn</Link>.</p>
        <Contact />
      </div>
      <div className="col-span-1 md:col-span-2 p-10 border border-slate-200 dark:border-slate-800">
        <h2 className="text-4xl font-semibold mb-6 pb-3 font-headline">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 tracking-tighter">
          {site.projects.map((project, i) => (
            <div key={`${i}-project`} className="mb-2">
              <Link href={project.url}>
                <h4 className="font-semibold font-headline">{project.title}</h4>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


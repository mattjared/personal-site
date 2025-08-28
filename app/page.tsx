import { site } from "../siteData";
import Link from "next/link"
import { getBlogData } from "./lib/actions";
import Contact from "./components/Contact";
export default async function Home() {
  const allBlogs = await getBlogData({ allPosts: true, recentPost: false });
  return (
    <>
      <div className="mb-4 mt-12">
        <h1 className="text-4xl font-semibold mb-2">Welcome! 👋🏻</h1>
        <h4 className="font-bold text-xl">{site.about.subheading}</h4>
      </div>
      <div>
        <p className="text-sm my-6">{site.about.bio}</p>
        <p className="text-sm my-6">{site.about.howtowork}</p>
      </div>
      <div className="py-10">
        <h1 className="text-xl font-semibold mb-6 pb-3 border-b-blue-100 border-b-2">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {allBlogs.map((post, i) => (
            <div key={`${i}-project`} className="mb-2">
              <Link href={`/blog/${post.slug}`}>
                <h4 className="text-sm font-semibold">{post.title}</h4>
                <p className="text-xs text-slate-500">{post.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-xl font-semibold mb-6 pb-3 border-b-blue-100 border-b-2">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2er">
          {site.projects.map((project, i) => (
            <div key={`${i}-project`} className="mb-2">
              <Link href={project.url}>
                <h4 className="text-sm font-semibold">{project.title}</h4>
                <p className="text-xs text-slate-500">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-xl font-semibold mb-6 pb-3 border-b-blue-100 border-b-2">Talks and Podcasts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2er">
          {site.recentAppearances.map((project, i) => (
            <div key={`${i}-project`} className="mb-2">
              <Link href={project.url}>
                <h4 className="text-sm font-semibold">{project.title}</h4>
                <p className="text-xs text-slate-500">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-xl font-semibold mb-6 pb-3 border-b-blue-100 border-b-2">Career</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2er">
          {site.career.map((project, i) => (
            <div key={`${i}-project`} className="mb-2">
              <h4 className="text-sm font-semibold">{project.organization}</h4>
              <p className="text-xs text-slate-500">{project.role}</p>
              {project.role2 && <p className="text-xs text-slate-500">{project.role2}</p>}
            </div>
          ))}
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-xl font-semibold mb-6 pb-3 border-b-blue-100 border-b-2">Contact</h1>
        <Contact />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-1er mt-4">
          {site.socials.map((social, i) => (
            <p key={`${i}-social`} className="mb-2">
              <Link href={social.url}>
                <span className="text-sm font-semibold">{social.service}</span>
              </Link>
            </p>
          ))}
        </div>
        
      </div>
    </>
  )
}


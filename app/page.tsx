import Link from "next/link"
import { getBlogData, getProjects } from "./lib/blog";
import Contact from "./components/Contact";
import PicGrid from "./components/PicGrid";

export default async function Home() {
  const allBlogs = getBlogData({ allPosts: true });
  const projects = await getProjects();
  const logos = [
    {
      src: "/images/logo_vercel.svg",
      alt: "Vercel",
      width: 300,
      height: 300,
    },
    {
      src: "/images/logo_atlassian.svg",
      alt: "Atlassian",
      width: 300,
      height: 300,
    },
    {
      src: "/images/logo_the_zebra.svg",
      alt: "The Zebra",
      width: 300,
      height: 300,
    },
    {
      src: "/images/logo_techstars.svg",
      alt: "Techstars",
      width: 300,
      height: 300,
    },
    {
      src: "/images/logo_ou.svg",
      alt: "Ohio University",
      width: 300,
      height: 300,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 py-4 mb-2">
        <div className="col-span-1">
        <p className="text-sm mb-2 font-bold">[about]</p>
          <p className="text-sm"> I&apos;m a marketer turned self-taught developer turned sales engineer turned sales leader. I’ve worked at and alongside startups and scale-ups including Cratejoy, Techstars, Atlassian, and now Vercel, where I lead sales and field engineering efforts to help teams ship faster websites, reliable agents, and more with happier teams.</p>
          <p className="text-sm">On this site you&apos;ll find my writing on things I've learned about sales, going to market, building web applications, AI and the projects I've built along the way.</p>
        </div>
      </div>

      <div className="grid grid-cols-3 py-4 mb-5">
        <div className="col-span-2">
          <PicGrid images={logos} variant="logos" />
        </div>
      </div>

      <div className="grid grid-cols-2 py-4 mb-2 text-sm">
        <div className="col-span-1">
        <p className="text-sm mb-2 font-bold">[blogs]</p>
          {allBlogs.map((post, i) => (
            <div key={`${i}-project`} className="mb-2">
              <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                <h3 className="font-semibold tracking-tighter">{post.title}</h3>
                <p className="font-mono text-sm text-amber-600 dark:text-amber-200">{post.date}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}


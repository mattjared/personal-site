import Box from "../app/Box"
import { site } from "../siteData";

export default function Home() {
  return (
    <div className="mb-8 prose">
      <h2 className="text-2xl font-semibold mb-2">Hey! I&amp;m Matt Jared. I work as a Sales Engineer for Vercel. I&amp;m interested in web development, SaaS businesses, product marketing and a bunch of other </h2>
      <h2 className="text-2xl font-semibold mb-2">About</h2>
      <p>{site.about.bio}</p>
      <blockquote className="pl-8 ml-0 my-11 w-full border-l-4 border-current">
        <p className="text-3xl mb-4 font-semibold">
          What if you stopped trying to think your way through it
          and started to act your way through it?
        </p>
        <p className="opacity-60 text-sm">- James Clear</p>
      </blockquote> 
    </div>
  )
}
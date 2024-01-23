import Box from "../app/Box"
import { site } from "../siteData";

export default function Home() {
  return (
    <div className="mb-8 prose">
      <h2 className="text-[3rem] font-bold mb-2 tracking-tighter">👋🏻 Hey! I&apos;m Matt Jared.</h2>
      {/* <h2 className="text-2xl font-semibold mb-2">About</h2> */}
      <p className="text-md tracking-tight font-semibold">I&apos;m interested in web development, SaaS, product marketing and a bunch of other stuff</p>
      <p className="font-mono tracking-tight text-sm">{site.about.bio}</p>
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
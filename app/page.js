import Contact from "./Contact";
import Box from "../app/Box"
import BlogGridServer from "./BlogGridServer";
import Link from "next/link";

const site = {
  about: { 
    heading: "About",
    bio: "I am a self-taught software engineer who loves solving problems and delivering high impact solutions. After starting my career in marketing I taught myself to code and spent years working on engineering teams at startups and most recently at Atlassian. I recently transitioned to Sales Engineering at Vercel where I live at the  cross section between sales and web development helping companies and developers build the future of the web."
  },
}

export const revalidate = 0 // disable cache

export default function Home() {
  return (
    <div>
        <section className="mb-8">
          <Box headline={site.about.heading} text={site.about.bio}/>
        </section>
        {/* <section>
          <BlogGridServer />
        </section> */}
        <blockquote className="pl-8 ml-0 my-11  w-full border-l-4 border-current">
          <p className="text-3xl mb-4 font-semibold">
            What if you stopped trying to think your way through it <br />
            and started to act your way through it?
          </p>
          <p className="opacity-60 text-sm">- James Clear</p>
        </blockquote>  
        <article className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-2">
          <Box>
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
              <ul>
                <li>Vercel <small>(Sales Engineer)</small></li>
                <li>Atlassian <small>(Senior Developer)</small></li>
                <li>The Zebra <small>(Front End Developer)</small></li>
                <li>Techstars <small>(Hackstar)</small></li>
                <li>Ohio University <small>(BBA Marketing)</small></li>
              </ul>
          </Box>
          <Box>
            <h2 className="text-2xl font-semibold mb-2">Socials</h2>
            <div className="mb-8 grid gap-8 grid-cols-1 md:grid-cols-2">
              <div>
                <p><Link href="https://bento.me/mattjared">Bento</Link></p>
                <p><Link href="https://codepen.io/matt_jared">CodePen</Link></p>
                <p><Link href="https://github.com/mattjared">GitHub</Link></p>
                <p><Link href="https://www.linkedin.com/in/mattjared9">LinkedIn</Link></p>
                <p><Link href="https://dev.to/mattjared">dev.to</Link></p>
                <p><Link href="https://twitter.com/matt_jared">Twitter</Link></p>
              </div>
              <div>
                <p><Link href="https://dribbble.com/matt_jared">Dribbble</Link></p>
                <p><Link href="https://www.npmjs.com/~mattjared">npm</Link></p>
                <p><Link href="https://codesandbox.io/u/mattjared">Code Sandbox</Link></p>
                <p><Link href="https://www.polywork.com/mattjared">Polywork</Link></p>
                <p><Link href="https://stackoverflow.com/users/2658883/matt-jared">Stack Overflow</Link> </p> 
              </div>
            </div>
          </Box>
        </article>
        <Contact />
      </div>
  )
}
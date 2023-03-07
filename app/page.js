// import fs, { read } from 'fs';
// import matter from 'gray-matter';
// import Link from 'next/link';
import Contact from "./Contact";
import Box from "../app/Box"
// import { site } from "../utils/data";

const site = {
  about: { 
    heading: "About",
    bio: "I am a self taught software engineer who loves solving problems and delivering high impact solutions. After starting my career in marketing I taught myself to code and spent years working on engineering teams at startups and most recently at Atlassian. I recently transitioned to Sales Engineering at Vercel where I live at the  cross section between sales and web development helping companies and developers build the future of the web."
  },
}

export default function Home() {
  return (
    <div>
        <section>
          <Box headline={site.about.heading} text={site.about.bio}/>
        </section>
        <section className="blog-grid">
          {/* {posts.map(({slug, frontmatter}) => (
            (frontmatter.published === true && 
              <Link href={`/post/${slug}`} key={slug} className="blog-card">
                <h2 className="text-2xl font-semibold mb-2">{frontmatter.title}</h2>
                <p className="opacity-60 text-sm">Published: {frontmatter.post_date}</p>
              </Link>
            )            
          ))} */}
        </section>
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
            <div className="label-card-col">
              <ul>
                <li>Vercel</li>
                <li>Atlassian</li>
                <li>The Zebra</li>
                <li>Techstars</li>
                <li>Ohio University</li>
              </ul>
            </div>
          </Box>
          <Box>
            <h2 className="text-2xl font-semibold mb-2">Socials</h2>
            <div className="label-card-row">
              <div className="label-card-col">
                <p className="label-card-item"><a href="https://bento.me/mattjared">Bento</a></p>
                <p className="label-card-item"><a href="https://codepen.io/matt_jared">CodePen</a></p>
                <p className="label-card-item"><a href="https://github.com/mattjared">GitHub</a></p>
                <p className="label-card-item"><a href="https://www.linkedin.com/in/mattjared9">LinkedIn</a></p>
                <p className="label-card-item"><a href="https://dev.to/mattjared">dev.to</a></p>
                <p className="label-card-item"><a href="https://twitter.com/matt_jared">Twitter</a></p>
              </div>
              <div className="label-card-col">
                <p className="label-card-item"><a href="https://dribbble.com/matt_jared">Dribbble</a></p>
                <p className="label-card-item"><a href="https://www.npmjs.com/~mattjared">npm</a></p>
                <p className="label-card-item"><a href="https://codesandbox.io/u/mattjared">Code Sandbox</a></p>
                <p className="label-card-item"><a href="https://www.polywork.com/mattjared">Polywork</a></p>
                <p className="label-card-item"><a href="https://stackoverflow.com/users/2658883/matt-jared">Stack Overflow</a> </p> 
              </div>
            </div>
          </Box>
        </article>
        <Contact />
      </div>
  )
}
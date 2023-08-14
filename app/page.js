import Contact from "./Contact";
import Box from "../app/Box"
import BlogGridServer from "./BlogGridServer";
import Link from "next/link";

const site = {
  about: { 
    heading: "About",
    bio: "I am a self-taught software engineer who loves solving problems and delivering high impact solutions. After starting my career in marketing I taught myself to code and spent years working on engineering teams at startups and most recently at Atlassian. I recently transitioned to Sales Engineering at Vercel where I live at the  cross section between sales and web development helping companies and developers build the future of the web."
  },
  socials: [
    { service: "Bento", url: "https://bento.me/mattjared" },
    { service: 'CodePen', url: 'https://codepen.io/matt_jared' },
    { service: 'GitHub', url: 'https://github.com/mattjared' },
    { service: 'LinkedIn', url: 'https://www.linkedin.com/in/mattjared9' },
    { service: 'dev.to', url: 'https://dev.to/mattjared' },
    { service: 'Twitter', url: 'https://twitter.com/matt_jared' },
    { service: 'Dribbble', url: 'https://dribbble.com/matt_jared' },
    { service: 'npm', url: 'https://www.npmjs.com/~mattjared' },
    { service: 'Code Sandbox', url: 'https://codesandbox.io/u/mattjared' },
    { service: 'Polywork', url: 'https://www.polywork.com/mattjared' },
    { service: 'Stack Overflow', url: 'https://stackoverflow.com/users/2658883/matt-jared' },
  ],
  career: [
    { organization: "Vercel", role: "Sales Engineer" },
    { organization: "Atlassian", role: "Senior Developer" },
    { organization: "The Zebra", role: "Front End Developer" },
    { organization: "Techstars", role: "Hackstar" },
    { organization: "Cratejoy", role: "Designer / Developer" },
    { organization: "Ohio University", role: "BBA Marketing" },
  ]
}

export default function Home() {
  const halfwayIndex = Math.ceil(site.socials.length / 2);
  return (
    <div>
        <section className="mb-8">
          <Box headline={site.about.heading} text={site.about.bio}/>
        </section>
        <section>
          <BlogGridServer />
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
              {site.career.map((c,i) => (
                <p key={`${c.i}-${c.role}`}>{c.organization} <small>({c.role})</small></p>
              ))}
          </Box>
          <Box>
            <h2 className="text-2xl font-semibold mb-2">Socials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {site.socials.map((s,i)=> (
                <div className="mb-0" key={`${s.url}-${i}`}>
                  <Link key={`${s.url}-${i}`} href={s.url}>{s.service}</Link>
                </div>
              ))}
            </div>
          </Box>
        </article>
        <Contact />
      </div>
  )
}
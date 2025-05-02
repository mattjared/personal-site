import Link from "next/link";
import Contact from "../components/Contact";
import { site } from "../../siteData";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-12 mt-24">About</h1>
      <p>I&apos;m a sales engineer based in Austin, USA. I started my career in marketing and then transitioned to sales. I then transitioned to a developer and now I&apos;m back to sales. I&apos;m currently a sales engineer at Vercel. Working as a developer, enabling development teams and their customers to build fast sites and apps.</p>
      <h2 className="text-lg font-semibold mb-4 mt-12" id="appearances">Public Appearances</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          site.recentAppearances.map((s,i)=> (
            <Card key={`${s.title}-${i}`}>
              <CardContent>
                <h4 className="text-md">{s.title}</h4>
                <p className="text-sm text-gray-500">{s.description}</p>
                <Link href={s.url} className="text-sm text-gray-500">{s.cta}</Link>
              </CardContent>
            </Card>
          ))
        }
      </div>
      <h2 className="text-lg font-semibold mb-4 mt-12" id="experience">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          site.careerCards.map((s,i)=> (
            <Card key={`${s.company}-${i}`}>
              <CardContent>
                <h4 className="text-md">{s.company}</h4>
                <p className="text-sm text-gray-500">{s.title}</p>
                <p className="text-sm text-gray-500">{s.date}</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
      <h2 className="text-lg font-semibold mb-4 mt-12" id="build">Build with me</h2>
      <p>I&apos;m always looking for new projects to work on. If you have a project in mind, please reach out to me.</p>
      <Contact />
    </>
  );
}
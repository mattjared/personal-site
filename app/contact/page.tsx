import Link from "next/link";
import Contact from "../components/Contact";
import { site } from "../../siteData";
import MugShot from "../components/MugShot";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MugShot heading={site.about.heading} subheading="Contact me" />
          <div>
            <Contact />
            <hr className="my-8" />
            <div>
              <h4 className="text-2xl font-serif mb-4">Socials</h4>
              <div className="grid grid-cols-2 gap-6">
                {site.socials.map((s,i)=> (
                  <Card className="mb-4" key={`${s.url}-${i}`}>
                    <CardContent className="flex items-center p-4">
                      <span className="text-2xl mr-4">{s.logo}</span>
                      <div>
                        <h5 className="font-semibold">{s.service}</h5>
                        <Link href={s.url} className="text-sm text-gray-500">Read more</Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
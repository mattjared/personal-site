import Link from "next/link";
import { site } from "../../siteData";
import MugShot from "../components/MugShot";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <>
      <main className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <MugShot heading={site.about.heading} subheading="Relevent projects" />
          <div>
            <div className="grid grid-cols-1 gap-6">
              {site.projects.map((s,i)=> (
                <Card className="mb-4" key={`${s.url}-${i}`}>
                  <CardContent className="flex items-center p-4">
                    <span className="text-2xl mr-4">✍🏻</span>
                    <div>
                    <h5 className="font-semibold">{s.title}</h5>
                    <Link href={s.url} className="text-sm text-gray-500">Learn more</Link>
                  </div>
                </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
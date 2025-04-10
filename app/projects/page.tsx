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
            <div className="grid grid-cols-1">
              {site.projects.map((s,i)=> (
                <Card className="mb-4" key={`${s.url}-${i}`}>
                  <CardContent className="flex items-center p-4">
                    <span className="text-2xl mr-4">{s.icon}</span>
                    <Link href={s.url} className="flex flex-col">
                      <h5 className="font-semibold text-gray-900">{s.title} <span className="text-gray-900 text-xs font-black">&#8599;</span></h5>
                      <p className="text-sm text-gray-500">{s.desciption}</p>
                  </Link>
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
import Link from "next/link";
import { site } from "../../siteData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CodeXml } from "lucide-react";
export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-12 mt-24">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {site.projects.map((project, i) => (
          <Card key={`${i}-project`} className="mb-4">
            <Link href={project.url}>
              <CardHeader className="mb-12">
                <CodeXml className="w-6 h-6 mr-auto" />
              </CardHeader>
              <CardContent>
                <h4 className="text-md">{project.title}</h4>
                <p className="text-xs text-slate-500">{project.desciption}</p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </>
  );
}
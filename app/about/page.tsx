import Link from "next/link";
import Contact from "../components/Contact";
import { site } from "../../siteData";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-12 mt-24">About</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 className="text-lg font-semibold mb-4" id="experience">Experience</h2>
        {
          site.careerCards.map((s,i)=> (
            <Card key={`${s.company}-${i}`}>
              <CardContent>
                <h4 className="text-md">{s.company}</h4>
                <p className="text-sm text-gray-500">{s.date}</p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </>
  );
}
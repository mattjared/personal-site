import Link from "next/link";
import Contact from "../components/Contact";
import { site } from "../../siteData";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold mb-12 mt-24">Contact Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          site.socials.map((s,i)=> (
            <Card key={`${s.url}-${i}`}>
              <CardContent>
                <h4 className="text-md">{s.service}</h4>
              </CardContent>
            </Card>
          ))
        }
        </div>
    </>
  );
}
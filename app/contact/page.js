import Link from "next/link";
import Contact from "../Contact";
import { site } from "../../siteData";

export default function ContactPage() {
  return (
    <div className='mx-auto'>
      <h2 className="text-2xl font-semibold mb-2">Socials</h2>
      <div className="grid grid-cols-7 gap-4">
        {site.socials.map((s,i)=> (
          <div className="mb-0 p-2 shadow" key={`${s.url}-${i}`}>
            <Link key={`${s.url}-${i}`} href={s.url}>{s.service}</Link>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}
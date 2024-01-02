import Link from "next/link";
import Contact from "../Contact";
import { site } from "../../siteData";

export default function ContactPage() {
  return (
    <div className='mx-auto'>
      <h2 className="text-2xl font-semibold mb-2">Socials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {site.socials.map((s,i)=> (
          <div className="mb-0" key={`${s.url}-${i}`}>
            <Link key={`${s.url}-${i}`} href={s.url}>{s.service}</Link>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}
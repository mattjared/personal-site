import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import { SITE } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${SITE.name} — sales leader and developer in ${SITE.addressLocality}, ${SITE.addressRegion}.`,
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: `About | ${SITE.name}`,
    description: SITE.description,
    url: `${SITE.url}/about`,
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <article className="max-w-prose mx-auto px-4 md:px-0 py-8">
        <h1 className="font-headline text-4xl font-semibold mb-6 dark:text-white">About Matt Jared</h1>

        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          Matt Jared is a marketer turned self-taught developer turned sales engineer turned sales leader based in
          Austin, Texas. He currently leads sales and field engineering at Vercel, helping startups and scale-ups ship
          faster websites, reliable agents, and modern web applications with happier teams.
        </p>

        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          His career started as a front end developer at The Zebra in January 2015. From there he worked at and
          alongside startups and scale-ups including Cratejoy, Techstars, and Atlassian. Along the way he found
          product-market fit for himself by combining frontend development with sales and solutions engineering — a
          mix of technical credibility and go-to-market instinct that now defines his work at Vercel.
        </p>

        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          Matt is deeply interested in the intersection of engineering, business, and go-to-market — especially sales,
          positioning, and distribution when technical credibility is what creates trust. On the code side he works
          with Next.js, React, Postgres, and Supabase. More broadly, he builds products, teams, projects, and companies
          and shares what he learns along the way.
        </p>

        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          He is available on a project basis to help startups bring products to market, improve how they sell, or think
          through strategy. You can reach him through the <a href="/contact" className="text-[#00bfff] hover:underline">contact page</a> or
          find him on <a href="https://github.com/mattjared" className="text-[#00bfff] hover:underline">GitHub</a> and{' '}
          <a href="https://linkedin.com/in/mattjared" className="text-[#00bfff] hover:underline">LinkedIn</a>.
        </p>

        <h2 className="font-headline text-2xl font-semibold mt-10 mb-4 dark:text-white">What this site is for</h2>
        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          This is Matt&apos;s personal site. It holds his blog, a record of projects and public appearances, and a way to
          get in touch. It is also built to be friendly to AI agents and crawlers: it publishes an{' '}
          <a href="/llms.txt" className="text-[#00bfff] hover:underline">llms.txt</a> index, serves blog posts as
          markdown via Accept negotiation, and returns machine-readable 404s with recovery links.
        </p>
      </article>
    </>
  );
}

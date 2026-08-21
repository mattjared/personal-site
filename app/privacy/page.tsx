import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import { SITE } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: `Privacy policy for ${SITE.url}, the personal site of ${SITE.name}.`,
  alternates: { canonical: `${SITE.url}/privacy` },
  openGraph: {
    title: `Privacy | ${SITE.name}`,
    description: `Privacy policy for ${SITE.url}, the personal site of ${SITE.name}.`,
    url: `${SITE.url}/privacy`,
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <article className="max-w-prose mx-auto px-4 md:px-0 py-8">
        <h1 className="font-headline text-4xl font-semibold mb-6 dark:text-white">Privacy</h1>

        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          This is the personal website of Matt Jared, an individual based in Austin, Texas, USA. This page explains what
          information is collected when you visit {SITE.url} and how it is used. It is written in plain language so both
          people and AI agents can read it.
        </p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 dark:text-white">What is collected</h2>
        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          The site collects anonymous traffic analytics through Vercel Analytics and Vercel Speed Insights. These tools
          record aggregate, privacy-preserving metrics such as page views, country, and performance timings. They do
          not set cross-site tracking cookies or build individual profiles for advertising.
        </p>
        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          If you submit the contact form, your name, email address, and message are sent through Resend to a personal
          inbox so your message can be answered. That information is processed by Resend for email delivery and is not
          stored in a database on this site.
        </p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 dark:text-white">Cookies and local storage</h2>
        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          The site uses a single local-storage value to remember your light or dark theme preference. No advertising or
          tracking cookies are set by this site.
        </p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 dark:text-white">Third-party services</h2>
        <ul className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter list-disc pl-6 space-y-2">
          <li>Vercel — hosting, analytics, and speed insights.</li>
          <li>Resend — email delivery for the contact form.</li>
          <li>Google Fonts — web fonts loaded via next/font.</li>
        </ul>
        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          Each of these services processes data according to its own privacy policy.
        </p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 dark:text-white">Your choices</h2>
        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          You can block analytics scripts with a content blocker or your browser settings, and you can clear the theme
          preference by clearing local storage for this domain. If you want a message you previously sent through the
          contact form deleted from the inbox it was delivered to, email {SITE.email} and I will remove it.
        </p>

        <h2 className="font-headline text-2xl font-semibold mt-8 mb-4 dark:text-white">Contact about privacy</h2>
        <p className="font-mono text-sm md:text-base my-4 leading-relaxed tracking-tighter">
          Questions about this policy can be sent through the <a href="/contact" className="text-[#00bfff] hover:underline">contact page</a> or
          emailed to {SITE.email}.
        </p>

        <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-10">Last updated: August 2026</p>
      </article>
    </>
  );
}

import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Contact from '@/app/components/Contact';
import { SITE } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${SITE.name} — get in touch about projects, sales, and web development.`,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: `Contact | ${SITE.name}`,
    description: `Get in touch with ${SITE.name} about projects, sales, and web development.`,
    url: `${SITE.url}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-prose mx-auto px-4 md:px-0 py-8">
        <h1 className="font-headline text-4xl font-semibold mb-6 dark:text-white">Contact</h1>

        <p className="font-mono text-sm md:text-base my-6 leading-relaxed tracking-tighter">
          Get in touch and I will get back to you as soon as possible. The fastest way to reach me is the form below,
          which sends directly to my inbox. For professional inquiries, you can also find me on{' '}
          <a href="https://linkedin.com/in/mattjared" className="text-[#00bfff] hover:underline">LinkedIn</a> or{' '}
          <a href="https://github.com/mattjared" className="text-[#00bfff] hover:underline">GitHub</a>.
        </p>

        <div className="border border-slate-200 dark:border-slate-800 p-6 my-6">
          <Contact />
        </div>

        <p className="font-mono text-xs text-slate-500 dark:text-slate-400 my-6 leading-relaxed tracking-tighter">
          This site is operated by Matt Jared, an individual based in Austin, Texas, USA. The contact form is powered by
          Resend and delivers messages to a personal inbox. No messages are stored on this server beyond what Resend
          retains for delivery.
        </p>
      </div>
    </>
  );
}

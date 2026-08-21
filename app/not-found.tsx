import Link from 'next/link';

/**
 * Agent-friendly 404.
 *
 * Returns a real HTTP 404 (Next.js sets the status when this boundary renders)
 * with a short recovery body that points agents and humans at the sitemap,
 * llms.txt, and the primary sections of the site.
 */
export default function NotFound() {
  const recovery = `# 404 Not Found

The page you requested does not exist.

## Where to look next

- Sitemap: /sitemap.xml
- Agent index: /llms.txt
- Full agent content: /llms-full.txt
- Blog: /blog
- About: /about
- Contact: /contact
- Privacy: /privacy
- Home: /`;

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-prose w-full border border-slate-200 dark:border-slate-800 p-10">
        <h1 className="font-headline text-4xl font-semibold mb-4 dark:text-white">404 — Not Found</h1>
        <p className="font-mono text-sm md:text-base my-4 tracking-tighter">
          The page you requested does not exist. Here are some places to look next:
        </p>
        <ul className="font-mono text-sm tracking-tighter my-6 space-y-2">
          <li>
            <Link href="/" className="text-[#00bfff] hover:underline">Home</Link>
            <span className="text-slate-500 dark:text-slate-400"> — /</span>
          </li>
          <li>
            <Link href="/blog" className="text-[#00bfff] hover:underline">Blog</Link>
            <span className="text-slate-500 dark:text-slate-400"> — /blog</span>
          </li>
          <li>
            <Link href="/about" className="text-[#00bfff] hover:underline">About</Link>
            <span className="text-slate-500 dark:text-slate-400"> — /about</span>
          </li>
          <li>
            <Link href="/contact" className="text-[#00bfff] hover:underline">Contact</Link>
            <span className="text-slate-500 dark:text-slate-400"> — /contact</span>
          </li>
          <li>
            <Link href="/privacy" className="text-[#00bfff] hover:underline">Privacy</Link>
            <span className="text-slate-500 dark:text-slate-400"> — /privacy</span>
          </li>
          <li>
            <a href="/sitemap.xml" className="text-[#00bfff] hover:underline">Sitemap</a>
            <span className="text-slate-500 dark:text-slate-400"> — /sitemap.xml</span>
          </li>
          <li>
            <a href="/llms.txt" className="text-[#00bfff] hover:underline">llms.txt</a>
            <span className="text-slate-500 dark:text-slate-400"> — /llms.txt</span>
          </li>
          <li>
            <a href="/llms-full.txt" className="text-[#00bfff] hover:underline">llms-full.txt</a>
            <span className="text-slate-500 dark:text-slate-400"> — /llms-full.txt</span>
          </li>
        </ul>
        {/* Raw markdown body so agents parsing the 404 recover programmatically. */}
        <pre className="font-mono text-xs text-slate-500 dark:text-slate-400 whitespace-pre-wrap border-t border-slate-200 dark:border-slate-800 pt-6 mt-6">
{recovery}
        </pre>
      </div>
    </div>
  );
}

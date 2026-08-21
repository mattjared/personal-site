import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { getBlogData } from '@/app/lib/blog';
import { SITE } from '@/app/lib/site';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Blog posts by ${SITE.name} on sales, building with AI, and web development.`,
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description: `Blog posts by ${SITE.name} on sales, building with AI, and web development.`,
    url: `${SITE.url}/blog`,
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getBlogData({ allPosts: true });

  return (
    <>
      <Navbar />
      <div className="max-w-prose mx-auto px-4 md:px-0 py-8">
        <h1 className="font-headline text-4xl font-semibold mb-6 dark:text-white">Blog</h1>
        <p className="font-mono text-sm md:text-base my-6 leading-relaxed tracking-tighter">
          Writing on sales, building with AI, web development, and the things I learn along the way. Markdown versions
          of each post are available at <code>/blog/&lt;slug&gt;.md</code> or via{' '}
          <code>Accept: text/markdown</code>.
        </p>

        <ul className="divide-y divide-slate-200 dark:divide-slate-800">
          {posts.map((post) => (
            <li key={post.slug} className="py-4">
              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="font-headline text-xl font-semibold group-hover:text-[#00bfff] transition-colors">
                  {post.title}
                </h2>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-400 mt-1">{post.date}</p>
                {post.excerpt && (
                  <p className="font-mono text-sm my-2 tracking-tighter">{post.excerpt}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { getBlogData, getAdjacentPosts, getPostBySlug } from '@/app/lib/blog';

export const dynamicParams = false;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogData({ allPosts: true });
  return posts.map(post => ({ id: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    return { title: 'Post Not Found | Matt Jared' };
  }

  const description = post.excerpt || `Read ${post.title} by Matt Jared`;

  return {
    title: `${post.title} | Matt Jared`,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://mattjared.xyz/blog/${id}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Matt Jared'],
    },
    twitter: {
      card: 'summary',
      title: post.title,
      description,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { id } = await params;
  const post = await getPostBySlug(id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { prev, next } = getAdjacentPosts(id);

  return (
    <>
      <Navbar />
      <article className="max-w-prose mx-auto px-4 md:px-0 py-8">
        <Link
          href="/"
          className="font-mono text-sm text-slate-500 hover:text-[#00bfff] mb-6 inline-block transition-colors"
        >
          &larr; Back to Home
        </Link>

        <header className="mb-8">
          {post.icon && <span className="text-4xl mb-4 block">{post.icon}</span>}
          <h1 className="font-headline text-4xl font-semibold mb-4 dark:text-white">{post.title}</h1>
          <div className="font-mono text-sm text-slate-500 dark:text-slate-400">
            <span>Published: {post.date}</span>
            {post.updated && <span className="ml-4">Updated: {post.updated}</span>}
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag: string) => (
                <span key={tag} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose dark:prose-invert prose-img:max-w-full prose-pre:overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      {(prev || next) && (
        <nav className="max-w-prose mx-auto px-4 md:px-0 py-8 mt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex justify-between">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group max-w-[45%]">
                <span className="font-mono text-sm text-slate-500">&larr; Previous</span>
                <p className="font-headline font-semibold group-hover:text-[#00bfff] transition-colors truncate">
                  {prev.title}
                </p>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="group text-right max-w-[45%]">
                <span className="font-mono text-sm text-slate-500">Next &rarr;</span>
                <p className="font-headline font-semibold group-hover:text-[#00bfff] transition-colors truncate">
                  {next.title}
                </p>
              </Link>
            ) : <div />}
          </div>
        </nav>
      )}
    </>
  );
}

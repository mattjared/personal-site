import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { getBlogData, getAdjacentPosts } from "@/app/lib/actions";

const postsDirectory = join(process.cwd(), "_posts");

export const dynamicParams = false;

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = await getBlogData({ allPosts: true, recentPost: false });
  return posts.map((post) => ({
    id: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const fullPath = join(postsDirectory, `${id}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    const description = data.excerpt || `Read ${data.title} by Matt Jared`;

    return {
      title: `${data.title} | Matt Jared`,
      description,
      openGraph: {
        title: data.title,
        description,
        url: `https://mattjared.xyz/blog/${id}`,
        type: "article",
        publishedTime: data.date,
        authors: ["Matt Jared"],
      },
      twitter: {
        card: "summary",
        title: data.title,
        description,
      },
    };
  } catch {
    return { title: "Post Not Found | Matt Jared" };
  }
}

export default async function BlogPost({ params }: Props) {
  const { id } = await params;
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const { title, date, updated, icon, tags } = matterResult.data;

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  const { prev, next } = await getAdjacentPosts(id);

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
          {icon && <span className="text-4xl mb-4 block">{icon}</span>}
          <h1 className="font-headline text-4xl font-semibold mb-4 dark:text-white">{title}</h1>
          <div className="font-mono text-sm text-slate-500 dark:text-slate-400">
            <span>Published: {date}</span>
            {updated && <span className="ml-4">Updated: {updated}</span>}
          </div>
          {tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose dark:prose-invert prose-img:max-w-full prose-pre:overflow-x-auto">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </article>

      <nav className="max-w-prose mx-auto px-4 md:px-0 py-8 mt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex justify-between">
          {prev ? (
            <Link href={`/blog/${prev.slug}`} className="group max-w-[45%]">
              <span className="font-mono text-sm text-slate-500">&larr; Previous</span>
              <p className="font-headline font-semibold group-hover:text-[#00bfff] transition-colors truncate">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/blog/${next.slug}`} className="group text-right max-w-[45%]">
              <span className="font-mono text-sm text-slate-500">Next &rarr;</span>
              <p className="font-headline font-semibold group-hover:text-[#00bfff] transition-colors truncate">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  );
}

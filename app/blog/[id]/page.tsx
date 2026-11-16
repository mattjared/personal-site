import { Metadata } from 'next';
import { getBlogData, getPostBySlug } from '@/app/lib/blog';

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

  return (
    <>
      <article className="grid grid-cols-2 py-4 mb-2">
        <div className="col-span-2">
          <div className="prose text-sm dark:prose-invert prose-img:max-w-full prose-pre:overflow-x-auto" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </div>
      </article>
    </>
  );
}

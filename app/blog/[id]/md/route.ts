import { NextResponse } from 'next/server';
import fs from 'fs';
import { join } from 'path';
import { getBlogData } from '@/app/lib/blog';
import { AGENT_VARY } from '@/app/lib/negotiate';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const posts = getBlogData({ allPosts: true });
  return posts.map(post => ({ id: post.slug }));
}

export async function GET(_request: Request, { params }: Props) {
  const { id } = await params;
  const fullPath = join(process.cwd(), '_posts', `${id}.md`);

  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        // Advertise Accept negotiation so CDNs cache HTML and markdown variants
        // separately (acceptmarkdown.com compliance).
        'Vary': AGENT_VARY,
      },
    });
  } catch {
    return new NextResponse('# 404 Not Found\n\nThis blog post does not exist.\n\nSee /blog for published posts or /llms.txt for an agent index.', {
      status: 404,
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8',
        'Vary': AGENT_VARY,
      },
    });
  }
}

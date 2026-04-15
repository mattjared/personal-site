import { NextResponse } from 'next/server';
import fs from 'fs';
import { join } from 'path';
import { getBlogData } from '@/app/lib/blog';

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
      headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    });
  } catch {
    return new NextResponse('Not found', { status: 404 });
  }
}

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { wantsMarkdown } from '@/app/lib/negotiate';

/**
 * Agent-friendly content negotiation.
 *
 * When an agent requests a blog post with `Accept: text/markdown`, transparently
 * rewrite the request to the markdown route handler so the canonical URL serves
 * markdown via Accept negotiation (acceptmarkdown.com). Browsers and other
 * HTML clients are left untouched.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The `.md` URL is already rewritten to /md by next.config.js, and the
  // /md route handler serves markdown directly — no need to rewrite again.
  if (pathname.endsWith('.md') || pathname.endsWith('/md')) {
    return NextResponse.next();
  }

  if (wantsMarkdown(request.headers.get('accept'))) {
    const url = request.nextUrl.clone();
    url.pathname = `${pathname}/md`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  // Single-segment blog slugs, e.g. /blog/my-post (not /blog, /blog/my-post/md)
  matcher: ['/blog/:id'],
};

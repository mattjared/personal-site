import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { wantsMarkdown, AGENT_VARY } from '@/app/lib/negotiate';

/**
 * Agent-friendly content negotiation.
 *
 * When an agent requests a blog post with `Accept: text/markdown`, transparently
 * rewrite the request to the markdown route handler so the canonical URL serves
 * markdown via Accept negotiation (acceptmarkdown.com). Browsers and other
 * HTML clients are left untouched.
 *
 * The canonical blog URL (`/blog/{slug}`) serves a *different* representation
 * (HTML or markdown) depending on the `Accept` header, so BOTH variants must
 * advertise `Vary: Accept` — otherwise a CDN can serve the cached HTML body to
 * an agent that asked for markdown (or vice versa), depending on which variant
 * landed in the cache first. The markdown route handler sets its own Vary; here
 * we stamp the HTML variant's response with the same Vary so the cache key is
 * correct on both paths (acceptmarkdown.com compliance).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // The `.md` URL is already rewritten to /md by next.config.js, and the
  // /md route handler serves markdown directly (with its own Vary) — no need
  // to rewrite or re-stamp headers again.
  if (pathname.endsWith('.md') || pathname.endsWith('/md')) {
    return NextResponse.next();
  }

  if (wantsMarkdown(request.headers.get('accept'))) {
    const url = request.nextUrl.clone();
    url.pathname = `${pathname}/md`;
    return NextResponse.rewrite(url);
  }

  // HTML variant: advertise Accept negotiation so CDNs cache the HTML and
  // markdown representations of the same canonical URL separately.
  const response = NextResponse.next();
  response.headers.set('Vary', AGENT_VARY);
  return response;
}

export const config = {
  // Single-segment blog slugs, e.g. /blog/my-post (not /blog, /blog/my-post/md)
  matcher: ['/blog/:id'],
};

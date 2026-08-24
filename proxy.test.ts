import { describe, expect, it } from 'vitest';
import { NextRequest } from 'next/server';
import { proxy } from '@/proxy';
import { AGENT_VARY } from '@/app/lib/negotiate';

function buildRequest(path: string, accept?: string): NextRequest {
  const url = `https://mattjared.xyz${path}`;
  return new NextRequest(url, accept ? { headers: { accept } } : undefined);
}

describe('proxy (agent content negotiation middleware)', () => {
  describe('HTML variant of /blog/:id', () => {
    it('stamps Vary with Accept + Accept-Encoding for a browser request', () => {
      const req = buildRequest(
        '/blog/10-years-later',
        'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      );
      const res = proxy(req);

      expect(res.headers.get('vary')).toBe(AGENT_VARY);
      expect(res.headers.get('vary')).toContain('Accept');
      expect(res.headers.get('vary')).toContain('Accept-Encoding');
    });

    it('stamps Vary even when no Accept header is present', () => {
      const req = buildRequest('/blog/some-post');
      const res = proxy(req);

      expect(res.headers.get('vary')).toBe(AGENT_VARY);
    });

    it('does not rewrite the URL for HTML clients', () => {
      const req = buildRequest(
        '/blog/10-years-later',
        'text/html,application/xhtml+xml',
      );
      const res = proxy(req);

      // NextResponse.next() keeps the request URL intact (no rewrite).
      expect(res.headers.get('x-middleware-rewrite')).toBeNull();
    });
  });

  describe('markdown variant of /blog/:id', () => {
    it('rewrites to the /md route when an agent sends Accept: text/markdown', () => {
      const req = buildRequest('/blog/10-years-later', 'text/markdown');
      const res = proxy(req);

      // A rewrite is signalled via the x-middleware-rewrite header pointing
      // at the markdown route handler.
      const rewrite = res.headers.get('x-middleware-rewrite');
      expect(rewrite).not.toBeNull();
      expect(rewrite).toContain('/blog/10-years-later/md');
    });

    it('rewrites when markdown is one of several accepted types', () => {
      const req = buildRequest('/blog/post', 'text/markdown, text/html;q=0.8');
      const res = proxy(req);

      expect(res.headers.get('x-middleware-rewrite')).toContain('/blog/post/md');
    });
  });

  describe('already-markdown URLs', () => {
    it('passes .md URLs through without re-stamping or rewriting', () => {
      const req = buildRequest('/blog/10-years-later.md', 'text/markdown');
      const res = proxy(req);

      // The .md URL is rewritten to /md by next.config.js rewrites and served
      // by the route handler with its own Vary — middleware must not rewrite
      // again or double-stamp headers.
      expect(res.headers.get('x-middleware-rewrite')).toBeNull();
      expect(res.headers.get('vary')).toBeNull();
    });

    it('passes /md route URLs through untouched', () => {
      const req = buildRequest('/blog/10-years-later/md', 'text/markdown');
      const res = proxy(req);

      expect(res.headers.get('x-middleware-rewrite')).toBeNull();
      expect(res.headers.get('vary')).toBeNull();
    });
  });
});

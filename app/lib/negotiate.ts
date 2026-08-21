/**
 * Content-negotiation helpers for agent-friendly (acceptmarkdown.com) responses.
 *
 * Kept dependency-free and Node/Edge-safe so it can be imported from middleware
 * and unit-tested in isolation.
 */

/**
 * Return true when the given Accept header asks for markdown.
 *
 * acceptmarkdown.com compliance: agents send `Accept: text/markdown` to request
 * the raw markdown variant of a page. Browsers send `text/html` and will not
 * trip this check.
 */
export function wantsMarkdown(accept: string | null | undefined): boolean {
  if (!accept) return false;
  return accept.toLowerCase().includes('text/markdown');
}

/**
 * The Vary header value to advertise on any response that negotiates between
 * HTML and markdown by Accept. Without it, CDNs can serve the cached HTML
 * variant to an agent asking for markdown (or vice versa).
 */
export const AGENT_VARY = 'Accept, Accept-Encoding';

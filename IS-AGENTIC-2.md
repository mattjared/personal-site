Improve how ready https://www.mattjared.xyz is for agents.

Current Is Agentic score: 78/100 (Is Agentic readiness model based on Ora audit evidence).

Implement the following fixes in priority order (failures first, then warnings):

1. Agent-friendly 404s (Essential, Partial)
Evidence: Nonexistent paths return a real HTTP 404. For full credit, include a short markdown body (site map links, where to look next) so agents can recover.
Recommended fix: Return a real HTTP 404 (or 410) status for nonexistent paths - never a 200 with your app shell, which makes agents believe every path exists. For full credit, give the 404 response a short markdown body pointing agents at your sitemap, llms.txt, or docs index. Verify with `curl -s -o /dev/null -w "%{http_code}" https://yourdomain.com/some-path-that-does-not-exist` - it must print 404.
Current result: Partial (50%).

2. Content without JavaScript (Essential, Partial)
Evidence: 2891 chars with H1 but flat heading structure
Recommended fix: Server-side render your homepage so AI crawlers see meaningful content without JavaScript. Ensure an H1 and 500+ chars of text in raw HTML.
Current result: Partial (67%).

3. Markdown content negotiation (acceptmarkdown.com) (Essential, Failed)
Evidence: Not acceptmarkdown.com compliant: Accept: text/markdown returned text/html; charset=utf-8; Vary header missing Accept (got "rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch")
Recommended fix: On the responses that serve text/markdown via Accept negotiation, add Accept to the Vary header (Vary: Accept, Accept-Encoding). Without it, CDNs can serve the cached HTML variant to an agent asking for markdown (or vice versa), depending on which variant landed in cache first.
Current result: Failed.

4. Brand name discoverability (Recommended, Failed)
Evidence: "Matt Jared" search returned 9 results but domain did not appear - brand may be too generic or not indexed
Recommended fix: Make sure a clean search for your brand name returns your own domain in the top results. If it does not, your brand may be too generic, conflict with a more established term, or not yet indexed. Strengthen brand-name search by claiming consistent NAP across listings, earning press mentions that link to the canonical domain, and avoiding redirect chains that mask the apex domain in search results.
Current result: Failed.

5. Content efficiency (Recommended, Partial)
Evidence: Low content efficiency: 4.09% - most of the page is markup, not content
Recommended fix: Reduce markup overhead so readable text is at least 5% of your HTML. Strip unused inline scripts/styles, server-render content instead of shipping large JSON hydration blobs, and keep wrapper nesting shallow.
Current result: Partial (50%).

Requirements:
- Inspect the existing codebase before changing files.
- Follow each published protocol or file format exactly.
- Preserve existing product behavior and visual design.
- Add or update tests for every behavior you change.
- Verify every public endpoint and machine-readable file after implementation.
- Finish with a concise change summary, verification results, and any remaining recommendations that require product decisions or credentials.
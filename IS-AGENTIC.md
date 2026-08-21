Improve how ready https://www.mattjared.xyz is for agents.

Current Is Agentic score: 69/100 (Is Agentic readiness model based on Ora audit evidence).

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

5. JSON-LD structured data (Recommended, Failed)
Evidence: No JSON-LD structured data found on homepage
Recommended fix: Add JSON-LD structured data to your homepage using the identity type that matches your site - SoftwareApplication for products, Organization or LocalBusiness for companies, Person for personal sites, Article for blogs - with name, description, url, and type-appropriate fields (offers, sameAs, author) so AI can parse your identity programmatically.
Current result: Failed.

6. Agent instruction / when-to-use (Recommended, Failed)
Evidence: No agent instruction file with when-to-use guidance found
Recommended fix: Tell agents when to reach for you: add a 'when to use this' section to your llms.txt (or a dedicated agent-instructions file) that names your best-fit use cases and how an agent should call you. Be specific about the jobs you are right for - generic marketing copy does not read as guidance.
Current result: Failed.

7. Organization schema completeness (Recommended, Failed)
Evidence: No JSON-LD found - Organization schema missing
Recommended fix: Add Organization JSON-LD that includes both contactPoint (with email/phone and contactType) and address (PostalAddress). This lets AI verify your business legitimacy and answer contact queries.
Current result: Failed.

8. Trust anchor pages (Recommended, Failed)
Evidence: No trust anchor pages found with sufficient content (About, Contact, Privacy)
Recommended fix: Publish real /about, /contact, and /privacy pages with at least 500 characters of content each. These are the pages AI agents check to verify your business is legitimate before recommending you.
Current result: Failed.

9. Content efficiency (Recommended, Partial)
Evidence: Low content efficiency: 4.50% - most of the page is markup, not content
Recommended fix: Reduce markup overhead so readable text is at least 5% of your HTML. Strip unused inline scripts/styles, server-render content instead of shipping large JSON hydration blobs, and keep wrapper nesting shallow.
Current result: Partial (50%).

10. Metadata completeness (Recommended, Partial)
Evidence: 2/4 metadata signals present - missing: canonical URL, og:type
Recommended fix: Add all four signals to your homepage: <link rel="canonical">, <html lang="...">, <meta property="og:image">, and <meta property="og:type">. Agents use these for entity resolution and attribution.
Current result: Partial (50%).

Requirements:
- Inspect the existing codebase before changing files.
- Follow each published protocol or file format exactly.
- Preserve existing product behavior and visual design.
- Add or update tests for every behavior you change.
- Verify every public endpoint and machine-readable file after implementation.
- Finish with a concise change summary, verification results, and any remaining recommendations that require product decisions or credentials.
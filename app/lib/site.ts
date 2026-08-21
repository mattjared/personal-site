/**
 * Central site identity. Single source of truth for JSON-LD structured data,
 * metadata, and the trust-anchor pages so AI agents can verify the site and
 * the person behind it.
 */

export const SITE = {
  name: 'Matt Jared',
  domain: 'mattjared.xyz',
  url: 'https://mattjared.xyz',
  description:
    'Matt Jared is a sales leader and developer in Austin, Texas. He leads sales and field engineering at Vercel and writes about sales, building with AI, and web development.',
  email: 'mattjared9@gmail.com',
  jobTitle: 'Sales Leader & Developer',
  addressLocality: 'Austin',
  addressRegion: 'Texas',
  addressCountry: 'US',
  sameAs: [
    'https://github.com/mattjared',
    'https://linkedin.com/in/mattjared',
    'https://www.youtube.com/@mattjared',
  ],
} as const;

/**
 * JSON-LD describing Matt Jared as a Person. This is the identity type that
 * matches a personal site and gives AI agents a machine-readable name,
 * description, url, and sameAs links for entity resolution.
 */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  jobTitle: SITE.jobTitle,
  description: SITE.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    addressCountry: SITE.addressCountry,
  },
  sameAs: SITE.sameAs,
};

/**
 * Organization JSON-LD with contactPoint and PostalAddress so AI can verify
 * business legitimacy and answer contact queries.
 */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'personal',
    email: SITE.email,
    url: `${SITE.url}/contact`,
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.addressLocality,
    addressRegion: SITE.addressRegion,
    addressCountry: SITE.addressCountry,
  },
  sameAs: SITE.sameAs,
};

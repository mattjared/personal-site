import { describe, expect, it } from 'vitest';
import { SITE, personJsonLd, organizationJsonLd } from '@/app/lib/site';

describe('SITE', () => {
  it('exposes a canonical HTTPS url and email for agents', () => {
    expect(SITE.url).toMatch(/^https:\/\//);
    expect(SITE.email).toMatch(/@/);
    expect(SITE.name).toBe('Matt Jared');
  });
});

describe('personJsonLd', () => {
  it('is a schema.org Person with the identity fields agents resolve on', () => {
    expect(personJsonLd['@context']).toBe('https://schema.org');
    expect(personJsonLd['@type']).toBe('Person');
    expect(personJsonLd.name).toBe(SITE.name);
    expect(personJsonLd.url).toBe(SITE.url);
    expect(personJsonLd.email).toBe(`mailto:${SITE.email}`);
    expect(personJsonLd.jobTitle).toBeTruthy();
    expect(personJsonLd.description).toBeTruthy();
    expect(Array.isArray(personJsonLd.sameAs)).toBe(true);
    expect(personJsonLd.sameAs.length).toBeGreaterThan(0);
  });

  it('includes a PostalAddress', () => {
    expect(personJsonLd.address['@type']).toBe('PostalAddress');
    expect(personJsonLd.address.addressLocality).toBeTruthy();
    expect(personJsonLd.address.addressRegion).toBeTruthy();
    expect(personJsonLd.address.addressCountry).toBeTruthy();
  });
});

describe('organizationJsonLd', () => {
  it('includes contactPoint and address for legitimacy checks', () => {
    expect(organizationJsonLd['@type']).toBe('Organization');
    expect(organizationJsonLd.name).toBe(SITE.name);
    expect(organizationJsonLd.url).toBe(SITE.url);

    expect(organizationJsonLd.contactPoint['@type']).toBe('ContactPoint');
    expect(organizationJsonLd.contactPoint.email).toBe(SITE.email);
    expect(organizationJsonLd.contactPoint.contactType).toBeTruthy();

    expect(organizationJsonLd.address['@type']).toBe('PostalAddress');
    expect(organizationJsonLd.address.addressLocality).toBeTruthy();
    expect(organizationJsonLd.address.addressRegion).toBeTruthy();
  });
});

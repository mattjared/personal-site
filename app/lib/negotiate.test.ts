import { describe, expect, it } from 'vitest';
import { wantsMarkdown, AGENT_VARY } from '@/app/lib/negotiate';

describe('wantsMarkdown', () => {
  it('returns true for an explicit text/markdown Accept header', () => {
    expect(wantsMarkdown('text/markdown')).toBe(true);
  });

  it('returns true when markdown is one of several accepted types', () => {
    expect(wantsMarkdown('text/markdown, text/html;q=0.8')).toBe(true);
    expect(wantsMarkdown('application/json, text/markdown;q=0.9')).toBe(true);
  });

  it('is case-insensitive', () => {
    expect(wantsMarkdown('TEXT/MARKDOWN')).toBe(true);
    expect(wantsMarkdown('Text/Markdown')).toBe(true);
  });

  it('returns false for a browser HTML Accept header', () => {
    expect(
      wantsMarkdown(
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      ),
    ).toBe(false);
  });

  it('returns false for missing or empty values', () => {
    expect(wantsMarkdown(null)).toBe(false);
    expect(wantsMarkdown(undefined)).toBe(false);
    expect(wantsMarkdown('')).toBe(false);
  });
});

describe('AGENT_VARY', () => {
  it('advertises both Accept and Accept-Encoding', () => {
    expect(AGENT_VARY).toContain('Accept');
    expect(AGENT_VARY).toContain('Accept-Encoding');
  });
});

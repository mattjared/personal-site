# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Architecture Overview

This is a Next.js 15 personal portfolio and blog site using the App Router.

### Key Directories

- **app/** - Next.js App Router pages and components
  - `app/components/` - Site-specific components (Navbar, Footer, ThemeToggle, Contact, PicGrid)
  - `app/lib/actions.ts` - Server actions for email sending and blog data fetching
  - `app/blog/[id]/page.tsx` - Dynamic blog post rendering
- **components/ui/** - Base UI components (shadcn Button, Input)
- **_posts/** - Markdown blog posts with YAML frontmatter
- **siteData.ts** - Centralized site configuration (bio, projects, career, socials)

### Content System

Blog posts are markdown files in `_posts/` with frontmatter:
```yaml
---
title: Post Title
published: true
date: Month Day, Year
icon: emoji
excerpt: optional
tags: optional array
---
```

Posts are fetched via `getPostData()` in `app/lib/actions.ts` and rendered with remark.

### Styling Patterns

- Tailwind CSS with custom typography plugin for blog prose
- Dark mode via next-themes (class-based switching)
- `cn()` utility from `app/lib/utils.ts` for conditional class merging
- Custom font variables: `--font-karla` (headlines), `--font-geist-mono` (code)

### External Services

- **Resend** - Email delivery for contact form
- **Supabase** - Database
- **Vercel Analytics** - Site analytics

### Commands

- when committing code run the alias `ggo`
- when publishing blogs I will sometimes need to copy posts you will run `sync-posts` CLI command
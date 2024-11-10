# Modern Blog with Next.js 15

A sleek, performant blog built with the latest Next.js features and modern web technologies.

## Quick Start

```bash
pnpm install dev
pnpm run dev
```

Edit the `siteData.ts` file to customize the site.
Write blog posts in the `_posts` folder with the `.md` extension.


## Features

- 🚀 Built on Next.js 15 with the new App Router
- ⚡️ Server Actions for optimal performance
- 🎨 Beautiful UI components from Shadcn
- 📱 Responsive images with next/image
- 🔤 Custom typography with next/font
- 🧭 Smooth navigation with next/navigation
- 📰 Contact form with Supabase
- 🎉 Email confirmation handler with Resend
- 📄 Markdown support with remark

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Global layout
│   ├── page.tsx         # Home page
│   ├── blog/           # Blog section
│   ├── projects/       # Projects section
│   ├── about/          # About section
│   ├── contact/        # Contact section
│   └── api/            # API routes
├── components/          # Reusable components
├── lib/                 # Utility functions & actions
├── styles/             # Global styles
├── public/             # Static assets
└── siteData.ts         # Site configuration
```

Built with modern web development best practices and a focus on performance and user experience.

## Optional Features

- Contact me and I'll teach you how to deploy this to Vercel.
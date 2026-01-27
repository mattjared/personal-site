import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), '_posts');

export interface BlogPost {
  title: string;
  slug: string;
  icon: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
}

export interface BlogPostFull extends BlogPost {
  contentHtml: string;
  updated?: string;
}

export interface Project {
  title: string;
  descriptionHtml: string;
}

// Cache for posts to avoid re-reading files
let postsCache: BlogPost[] | null = null;

function getAllPosts(): BlogPost[] {
  if (postsCache) return postsCache;

  const slugs = fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md') && !file.includes('obsidian'));

  const posts = slugs
    .map(slug => {
      const realSlug = slug.replace(/\.md$/, '');
      const fullPath = join(postsDirectory, slug);
      const { data } = matter(fs.readFileSync(fullPath, 'utf8'));

      if (!data.published) return null;

      return {
        title: data.title || realSlug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
        slug: realSlug,
        date: data.date,
        excerpt: data.excerpt || '',
        tags: data.tags || [],
        icon: data.icon || '',
        published: data.published,
      };
    })
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  postsCache = posts;
  return posts;
}

export function getBlogData(options: { allPosts?: boolean; recentPost?: boolean } = {}) {
  const posts = getAllPosts();

  if (options.recentPost) return posts.slice(0, 2);
  if (options.allPosts) return posts;
  return [];
}

export function getAdjacentPosts(currentSlug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const posts = getAllPosts();
  const index = posts.findIndex(post => post.slug === currentSlug);

  if (index === -1) return { prev: null, next: null };

  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPostFull | null> {
  const fullPath = join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processed = await remark().use(html).process(content);

    return {
      title: data.title,
      slug,
      date: data.date,
      updated: data.updated,
      icon: data.icon || '',
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      published: data.published,
      contentHtml: processed.toString(),
    };
  } catch {
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  const fullPath = join(postsDirectory, 'projects.md');
  const { content } = matter(fs.readFileSync(fullPath, 'utf8'));

  const sections = content.split(/^## /m).filter(Boolean);

  return Promise.all(sections.map(async section => {
    const lines = section.trim().split('\n');
    const title = lines[0];
    const description = lines.slice(1).join('\n').trim();

    const processed = await remark().use(html).process(description);

    return { title, descriptionHtml: processed.toString() };
  }));
}

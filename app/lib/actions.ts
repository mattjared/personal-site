'use server'

import { Resend } from 'resend';

export async function sendEmail(formData: FormData) {
  try {
    const { email, name, message } = Object.fromEntries(formData);
    
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    const date = new Date();
    
    const { data, error } = await resend.emails.send({
      // For testing: use 'onboarding@resend.dev'
      // For production: use your verified domain like 'contact@yourdomain.com'
      from: 'onboarding@resend.dev',
      to: 'mattjared9@gmail.com',
      subject: `New ${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} Contact Form Submission`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
      // Optional: Add reply-to so you can reply directly to the sender
      reply_to: email as string,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: (error as Error).message };
  }
}

import fs from "fs";
import { join } from "path";
import graymatter from "gray-matter";
const postsDirectory = join(process.cwd(), "_posts");

export async function getBlogData(options: { allPosts: boolean; recentPost: boolean }) {
  const allSlugs = fs.readdirSync(postsDirectory);
  const slugs = allSlugs.filter(file => file !== '.DS_Store');
  let posts: BlogPost[] = [];

  slugs.forEach((slug) => {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    // exclude the obsidian folder
    if (fullPath.includes('obsidian')) {
      return;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontMatter } = graymatter(fileContents);
    
    if (frontMatter.published) {
      posts.push({
        title: frontMatter.title || realSlug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        slug: realSlug,
        date: frontMatter.date,
        excerpt: frontMatter.excerpt || '',
        tags: frontMatter.tags || [],
        icon: frontMatter.icon || '',
        published: frontMatter.published,
      });
    }
  });

  // Sort posts by date, most recent first
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  // Return the TWO most recent posts
  return options.recentPost ? posts.slice(0, 2) : (options.allPosts ? posts : []);
}

export interface BlogPost {
  title: string;
  slug: string;
  icon: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
}

export async function getAdjacentPosts(currentSlug: string): Promise<{ prev: BlogPost | null; next: BlogPost | null }> {
  const allPosts = await getBlogData({ allPosts: true, recentPost: false });
  const currentIndex = allPosts.findIndex(post => post.slug === currentSlug);

  if (currentIndex === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
    next: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
  };
}

export interface Project {
  title: string;
  descriptionHtml: string;
}

export async function getProjects(): Promise<Project[]> {
  const { remark } = await import('remark');
  const html = (await import('remark-html')).default;

  const fullPath = join(postsDirectory, "projects.md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = graymatter(fileContents);

  // Split by h2 headers (## )
  const sections = content.split(/^## /m).filter(Boolean);

  const projects = await Promise.all(sections.map(async (section) => {
    const lines = section.trim().split('\n');
    const title = lines[0];
    const description = lines.slice(1).join('\n').trim();

    // Convert markdown links to HTML
    const processed = await remark().use(html).process(description);
    const descriptionHtml = processed.toString();

    return { title, descriptionHtml };
  }));

  return projects;
}
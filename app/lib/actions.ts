'use server'

import { Resend } from 'resend';
export async function sendEmail(formData: FormData) {
  const { email, name, message } = Object.fromEntries(formData);
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
        from: 'Matt Jared Dot XYZ',
        to: 'mattjared9@gmail.com',
        subject: 'Contact Form Submission',
        html: `<div>Name: ${name} <br> Email: ${email} <br> Message: ${message}</div>`,
      });
  console.log(email, name, message);
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

interface BlogPost {
  title: string;
  slug: string;
  icon: string;
  date: string;
  excerpt: string;
  tags: string[];
  published: boolean;
}
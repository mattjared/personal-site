'use server'
import { createClient } from '@supabase/supabase-js'
import fs from "fs";
import { join } from "path";
import graymatter from "gray-matter";
const postsDirectory = join(process.cwd(), "_posts");

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ContactResult {
  error?: string
  success?: boolean
  message?: string
}

export async function createContact(formData: FormData): Promise<ContactResult> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { error: 'All fields are required' }
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return { error: 'Invalid email address' }
  }

  if (message.length < 1) {
    return { error: 'Message must be at least 1 characters long' }
  }

  try {
    const { error } = await supabase
      .from('personal_site_contact_form')
      .insert([{ name, email, message } as ContactFormData])

    if (error) throw error

    return { success: true, message: 'Message sent successfully. I will get back to you as soon as possible.\n\n 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️ Thank you! 🏄🏻‍♂️🏄🏻‍♂️🏄🏻‍♂️' }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { error: 'There was a problem sending your message. Please try again.' }
  }
}

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
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps( { params: { slug }}: any ) {
  const filename = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(filename);
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

type PostPageType = { 
  frontmatter: any,
  content: any
}

export default function PostPage({frontmatter, content}: PostPageType) {
  return (
    <div className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </div>
  );
}
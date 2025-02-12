import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/post-body";
import matter from "gray-matter"
import fs from "fs"
import {join} from "path"
import {unified} from 'unified'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'
import 'highlight.js/styles/github.css';
import remarkParse from "remark-parse";
import rehypeDocument from "rehype-document"
import rehypeFormat from 'rehype-format'
import MoreStories from "@/components/morestory";
import { HeroPost } from "@/components/hero-post";

const postsDirectory = join(process.cwd(), "/blog/posts/leetcode");
const slugs = fs.readdirSync(postsDirectory);

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const url = `/projects/leetcode/${realSlug}`
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: url, content };
}
export default function Leetcode() {
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return(
      <main>
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          {morePosts.length > 0 && <MoreStories morePosts={morePosts} />}
      </main>
  )
}

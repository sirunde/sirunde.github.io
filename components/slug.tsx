import matter from "gray-matter";
import fs from "fs";
import { join } from "path";

const postsDirectory = join(process.cwd(), "/blog/posts/leetcode");
interface PostData {
  title: string;
  coverImage: string;
  excerpt: string;
  date: string;
}
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const url = `/projects/leetcode/${realSlug}`;
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...(data as PostData), slug: url, content };
}
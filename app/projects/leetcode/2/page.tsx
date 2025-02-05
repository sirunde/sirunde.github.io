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
export default async function Post() {
  const postsDirectory = join(process.cwd(), "posts/leetcode");
  console.log(postsDirectory);
  const fileContents = fs.readFileSync(join(postsDirectory, "2.md"), "utf-8");
  const { data, content } = matter(fileContents);
  
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  return(
    <main>
    <PostBody content={contentHtml}/>
    </main>
  )
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};
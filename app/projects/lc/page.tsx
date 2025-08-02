import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostBody } from "@/components/post-body";
import {remark} from "remark"
import html from "remark-html"
import matter from "gray-matter"
import fs from "fs"
import {join} from "path"

export default async function Post() {
  const postsDirectory = join(process.cwd(), "/blog/posts/lc");
  console.log(postsDirectory);
  const fileContents = fs.readFileSync(join(postsDirectory, "lc.md"));
  const { data, content } = matter(fileContents);
  
  const processedContent = await remark()
    .use(html)
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
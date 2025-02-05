import { Metadata } from "next";
import { notFound } from "next/navigation";
// import { getAllPosts, getPostBySlug } from "@/lib/api";
// import { CMS_NAME } from "@/lib/constants";
// import markdownToHtml from "@/lib/markdownToHtml";
// import Alert from "@/app/_components/alert";
// import Container from "@/app/_components/container";
// import Header from "@/app/_components/header";
import { PostBody } from "@/components/post-body";
// import { PostHeader } from "@/app/_components/post-header";
import {remark} from "remark"
import html from "remark-html"
import matter from "gray-matter"
import fs from "fs"
import {join} from "path"

export default async function Post() {
  const postsDirectory = join(process.cwd(), "posts/leetcode");
  console.log(postsDirectory);
  const fileContents = fs.readFileSync(join(postsDirectory, "1.md"));
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
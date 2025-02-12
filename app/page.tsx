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

const postsDirectory = join(process.cwd(),"blog");
console.log(postsDirectory);
const morePosts = [{
  title: "PROJECTS",
  coverImage: "/assets/home/projectsCover.png",
  slug: "/projects",
  excerpt: "Shows All my projects. Still uploading my projects.",
},
  {
  title: "FILE",
  coverImage: "/assets/home/fileCover.png",
  slug: "/file",
  excerpt: "File uploading form. Used it to upload file on AWS S3",
  },
  {
  title: "PROJECTS",
  coverImage: "/assets/home/chatCover.png",
  slug: "/chat",
  excerpt: "Can chat with other. Data is stored in AWS dynamoDB."},
  {
    title: "GITHUB",
    coverImage: "github-mark.svg",
    slug: "https://github.com/sirunde/",
    excerpt: "My github link"},]

export default async function Home() {
  const fileContents = fs.readFileSync(join(postsDirectory, "home.md"), "utf-8");
  const { data, content } = matter(fileContents);
  
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content);
  const contentHtml = processedContent.toString();
  
  return(
    <main>
    {/* {morePosts.length > 0 && <MoreStories morePosts={morePosts} />} */}
    {/* <PostBody content={contentHtml}/> */}
    {morePosts.length > 0 && <MoreStories morePosts={morePosts} />}
    
    </main>
  )
}


import { PostBody } from "@/components/post-body";
import matter from "gray-matter"
import fs from "fs"
import {join} from "path"
import {unified} from 'unified'
import rehypeStringify from 'rehype-stringify'
import remarkRehype from 'remark-rehype'
import remarkParse from "remark-parse";
import rehypeDocument from "rehype-document"
import rehypeFormat from 'rehype-format'
import 'highlight.js/styles/github.css';

export default async function Home() {
  const postsDirectory = join(process.cwd(),"posts");
  console.log(postsDirectory);
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
    <PostBody content={contentHtml}/>
    </main>
  )
}

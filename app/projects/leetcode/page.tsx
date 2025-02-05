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

export default function Leetcode() {
  const postsDirectory = join(process.cwd(), "posts/leetcode");
  console.log(postsDirectory);
  const fileContents = fs.readFileSync(join(postsDirectory, "1.md"), "utf-8");
  const { data, content } = matter(fileContents);
  return(
    <ul>
    <li>
      <Link href="leetcode/1">1</Link>
    </li>
    <li>
      <Link href="leetcode/2">2</Link>
    </li>
    </ul>
  )
}

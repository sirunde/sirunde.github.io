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

  export function Example() {
    let a = 2
    console.log(a)
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-90 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="group-hover:scale-110 duration-300 h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link href={{pathname:`detail/${encodeURIComponent(product.href)}`}}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const url = `/projects/leetcode/${realSlug}`
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { ...data, slug: url, content };
}

// export function Leetcode() {
//   const heroPost = 
//   const morePosts = posts.slice(1);

//   return(
//       <main>
//           <HeroPost
//             title={heroPost.title}
//             coverImage={heroPost.coverImage}
//             slug={heroPost.slug}
//             excerpt={heroPost.excerpt}
//           />
//           {morePosts.length > 0 && <MoreStories morePosts={morePosts} />}
//       </main>
//   )
// }

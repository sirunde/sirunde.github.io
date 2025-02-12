import matter from "gray-matter"
import fs from "fs"
import {join} from "path"
import 'highlight.js/styles/github.css';
import MoreStories from "@/components/morestory";
import { HeroPost } from "@/components/hero-post";
import { getPostBySlug } from "@/components/slug";
const postsDirectory = join(process.cwd(), "/blog/posts/leetcode");
const slugs = fs.readdirSync(postsDirectory);

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

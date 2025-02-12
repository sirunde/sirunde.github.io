import Link from "next/link";
import CoverImage from "@/components/cover-image";
type Post = {
  title:string,
  coverImage:string,
  slug:string,
  excerpt:string,
  };

function PostPreview({
  title,
  excerpt,
  slug,
  coverImage
}: {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage title={title} slug={slug} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={slug} className="hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: Post[] }) {
  return (
    
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            coverImage={post.coverImage}
          />
        ))}
      </div>
    </section>
  );
}
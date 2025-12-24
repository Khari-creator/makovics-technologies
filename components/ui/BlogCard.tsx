import Link from "next/link";

export interface BlogPostSummary {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
}

interface BlogCardProps {
  post: BlogPostSummary;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition">
      <div className="p-6">
        <p className="text-sm text-gray-500">{post.date}</p>

        <h2 className="mt-2 text-xl font-bold text-gray-900">
          {post.title}
        </h2>

        <p className="mt-4 text-gray-600">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-block mt-6 text-blue-600 font-semibold"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}

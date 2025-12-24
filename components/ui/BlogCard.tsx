import Link from "next/link";
import { BlogPost } from "@/components/data/blogPosts";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-2xl border border-gray-200 p-8 bg-white shadow-sm hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-bold text-gray-900">
        {post.title}
      </h2>

      <p className="mt-3 text-gray-600">
        {post.excerpt}
      </p>

      <div className="mt-6 text-sm font-semibold text-blue-600">
        Read article →
      </div>
    </Link>
  );
}

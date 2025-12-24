import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/components/data/blogPosts";

/**
 * Blog Page
 * ------------
 * Thought leadership & technical insights.
 */

export default function BlogPage() {
  return (
    <main>
      {/* Intro */}
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Blog & Insights
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300">
            Insights, best practices, and technical perspectives from
            Makovics Technologies.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}


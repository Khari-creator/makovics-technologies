import { notFound } from "next/navigation";
import { blogPosts } from "@/components/data/blogPosts";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <main>
      <section className="bg-gray-950 text-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-400">
            {post.date}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-lg text-gray-700">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
}

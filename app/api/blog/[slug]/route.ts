import { NextResponse } from "next/server";
import { blogPosts } from "@/components/data/blogPosts";

interface Params {
  params: {
    slug: string;
  };
}

/**
 * GET /api/blog/[slug]
 * Returns a single blog post
 */
export async function GET(
  _req: Request,
  { params }: Params
) {
  const post = blogPosts.find(
    (p) => p.slug === params.slug
  );

  if (!post) {
    return NextResponse.json(
      { message: "Post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

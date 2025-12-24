import { NextRequest, NextResponse } from "next/server";
import { blogPosts } from "@/components/data/blogPosts";

/**
 * GET /api/blog/[slug]
 * Returns a single blog post
 */
export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const post = blogPosts.find(
    (p) => p.slug === slug
  );

  if (!post) {
    return NextResponse.json(
      { message: "Post not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(post);
}

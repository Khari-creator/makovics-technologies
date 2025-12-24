import { NextResponse } from "next/server";
import { blogPosts } from "@/components/data/blogPosts";

/**
 * GET /api/blog
 * Returns all blog posts (summary list)
 */
export async function GET() {
  return NextResponse.json(blogPosts);
}

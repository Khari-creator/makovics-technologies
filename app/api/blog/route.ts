import { NextResponse } from "next/server";
import { blogPosts } from "@/components/data/blogPosts";


export async function GET() {
  return NextResponse.json(blogPosts);
}

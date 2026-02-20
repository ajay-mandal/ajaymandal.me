import { getSupabase, type BlogPost } from "./supabase";

/** Fetch all published posts, newest first */
export async function getAllPosts(): Promise<BlogPost[]> {
  const db = getSupabase();
  if (!db) return [];
  const { data, error } = await db
    .from("posts")
    .select("*")
    .eq("published", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("[blog] getAllPosts error:", error.message);
    return [];
  }
  return data as BlogPost[];
}

/** Fetch posts by category */
export async function getPostsByCategory(
  category: BlogPost["category"],
): Promise<BlogPost[]> {
  const db = getSupabase();
  if (!db) return [];
  const { data, error } = await db
    .from("posts")
    .select("*")
    .eq("published", true)
    .eq("category", category)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("[blog] getPostsByCategory error:", error.message);
    return [];
  }
  return data as BlogPost[];
}

/** Fetch a single post by slug */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const db = getSupabase();
  if (!db) return null;
  const { data, error } = await db
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) {
    console.error("[blog] getPostBySlug error:", error.message);
    return null;
  }
  return data as BlogPost;
}

/** Fetch n most recent posts (for homepage preview) */
export async function getRecentPosts(limit = 3): Promise<BlogPost[]> {
  const db = getSupabase();
  if (!db) return [];
  const { data, error } = await db
    .from("posts")
    .select(
      "id, title, slug, excerpt, category, tags, published_at, cover_image",
    )
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("[blog] getRecentPosts error:", error.message);
    return [];
  }
  return data as BlogPost[];
}

/** Format date for display */
export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

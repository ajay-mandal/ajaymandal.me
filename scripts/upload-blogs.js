/**
 * Script to upload blog posts from markdown files to Supabase
 * 
 * Usage:
 *   1. Place your markdown files in a 'blog-posts' folder at the root
 *   2. Set SUPABASE environment variables in .env.local
 *   3. Run: npm run upload-blogs
 */

import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import {
  parseMarkdown,
  processImagePaths,
  determineCategoryFromTags,
} from "../lib/markdown.js";

// Load environment variables from .env.local
config({ path: ".env.local" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Supabase client with service role key for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// Use service role key for uploads (bypasses RLS), fall back to anon key
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Error: Supabase credentials not found in environment variables");
  console.error("Make sure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set in .env.local");
  console.error("Or add an insert policy to allow anon key uploads");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadBlogPost(filePath) {
  try {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);

    // Read markdown file
    const markdownContent = fs.readFileSync(filePath, "utf-8");

    // Parse markdown
    const { frontmatter, htmlContent, excerpt } = await parseMarkdown(markdownContent);

    // Process image paths
    const processedContent = processImagePaths(htmlContent);

    // Determine category from frontmatter or auto-detect from tags
    const category =
      frontmatter.category || determineCategoryFromTags(frontmatter.tags || []);

    // Prepare blog post data
    const blogPost = {
      title: frontmatter.title,
      slug: frontmatter.slug,
      excerpt: frontmatter.description || excerpt,
      content: processedContent,
      category: category,
      tags: frontmatter.tags || [],
      published: !frontmatter.draft,
      published_at: frontmatter.modDatetime || frontmatter.pubDatetime,
    };

    // Check if post already exists
    const { data: existingPost } = await supabase
      .from("posts")
      .select("id")
      .eq("slug", blogPost.slug)
      .single();

    if (existingPost) {
      // Update existing post
      const { error } = await supabase
        .from("posts")
        .update({
          ...blogPost,
          updated_at: new Date().toISOString(),
        })
        .eq("slug", blogPost.slug);

      if (error) {
        console.error(`❌ Error updating post "${blogPost.title}":`, error.message);
        return { success: false, error };
      }
      console.log(`✅ Updated: ${blogPost.title}`);
    } else {
      // Insert new post
      const { error } = await supabase.from("posts").insert([blogPost]);

      if (error) {
        console.error(`❌ Error inserting post "${blogPost.title}":`, error.message);
        return { success: false, error };
      }
      console.log(`✅ Inserted: ${blogPost.title}`);
    }

    return { success: true };
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error);
    return { success: false, error };
  }
}

async function uploadAllBlogs() {
  console.log("🚀 Starting blog upload process...\n");

  // Get all markdown files from blog-posts directory
  const blogPostsDir = path.join(process.cwd(), "blog-posts");

  if (!fs.existsSync(blogPostsDir)) {
    console.error(`❌ Error: blog-posts directory not found at ${blogPostsDir}`);
    console.log("Please create a 'blog-posts' folder and add your markdown files");
    process.exit(1);
  }

  const files = fs
    .readdirSync(blogPostsDir)
    .filter((file) => file.endsWith(".md"));

  if (files.length === 0) {
    console.log("⚠️  No markdown files found in blog-posts directory");
    process.exit(0);
  }

  console.log(`Found ${files.length} markdown file(s)\n`);

  let successCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const filePath = path.join(blogPostsDir, file);
    const result = await uploadBlogPost(filePath);

    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }
  }

  console.log("\n" + "=".repeat(50));
  console.log("📊 Upload Summary:");
  console.log(`   ✅ Success: ${successCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log("=".repeat(50));
}

// Run the upload process
uploadAllBlogs().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

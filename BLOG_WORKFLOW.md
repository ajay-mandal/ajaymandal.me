# Blog Workflow Guide

Complete guide for managing your blog posts with Markdown and Supabase.

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Writing Blog Posts](#writing-blog-posts)
- [Uploading to Supabase](#uploading-to-supabase)
- [Managing Images](#managing-images)
- [Troubleshooting](#troubleshooting)

---

## Overview

Your blog system works as follows:

1. **Write** posts in Markdown with frontmatter
2. **Upload** to Supabase using the upload script
3. **Render** automatically on your website

### Technology Stack

- **Markdown**: For writing content
- **Gray-Matter**: Parse frontmatter
- **Marked**: Convert Markdown to HTML
- **Highlight.js**: Code syntax highlighting
- **Supabase**: Database storage
- **Next.js**: Frontend framework

---

## Setup

### 1. Supabase Configuration

First, ensure your Supabase database has the `posts` table created. Run this SQL in your Supabase SQL Editor:

```sql
create table if not exists posts (
  id            uuid primary key default gen_random_uuid(),
  title         text not null,
  slug          text not null unique,
  excerpt       text not null default '',
  content       text not null default '',
  cover_image   text,
  category      text not null check (category in ('project', 'findings')),
  tags          text[] not null default '{}',
  published     boolean not null default false,
  published_at  timestamptz,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Row-level security: public read for published posts only
alter table posts enable row level security;

create policy "Public can read published posts"
  on posts for select
  using (published = true);

-- (Optional) Full access for authenticated users (you as admin)
create policy "Authenticated full access"
  on posts for all
  using (auth.role() = 'authenticated');
```

### 2. Environment Variables

Ensure your `.env.local` has:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=your_anon_key
```

### 3. Install Dependencies

Already installed for you:

```bash
npm install marked gray-matter highlight.js @types/marked
```

---

## Writing Blog Posts

### Frontmatter Structure

Every blog post must start with YAML frontmatter:

```markdown
---
title: Your Blog Post Title
author: Ajay Mandal
pubDatetime: 2024-11-09T18:09:47.201Z
modDatetime: 2024-12-10T06:29:08.126Z # optional
slug: your-blog-post-slug
featured: true
draft: false
tags:
  - nextjs
  - typescript
  - authentication
ogImage: ../../assets/images/your-image.png # optional
description: Brief description of your post (used as excerpt)
---

# Your Content Starts Here

Write your blog content in Markdown...
```

### Field Descriptions

| Field         | Required | Description                                    |
| ------------- | -------- | ---------------------------------------------- |
| `title`       | ✅       | Post title (shown in listings and page header) |
| `author`      | ✅       | Author name                                    |
| `pubDatetime` | ✅       | Publication date in ISO format                 |
| `modDatetime` | ❌       | Modified date (if updated later)               |
| `slug`        | ✅       | URL-friendly identifier (must be unique)       |
| `featured`    | ✅       | Whether to feature the post                    |
| `draft`       | ✅       | If `true`, won't be published                  |
| `tags`        | ✅       | Array of tags for categorization               |
| `ogImage`     | ❌       | Social media preview image                     |
| `description` | ✅       | Short description (SEO & preview)              |

### Category Detection

Categories are automatically determined from tags:

- **Project**: Posts with tags like `nextjs`, `reactjs`, `typescript`, `honojs`, `prisma`, `api`
- **Findings**: All other posts

You can modify the logic in `/lib/markdown.ts`:

```typescript
export function determineCategoryFromTags(
  tags: string[],
): "project" | "findings" {
  const projectKeywords = [
    "nextjs",
    "reactjs",
    "typescript",
    "honojs",
    "prisma",
    "api",
  ];
  const hasProjectTag = tags.some((tag) =>
    projectKeywords.includes(tag.toLowerCase()),
  );
  return hasProjectTag ? "project" : "findings";
}
```

### Markdown Features Supported

✅ **Headings**

```markdown
# H1

## H2

### H3
```

✅ **Code Blocks with Syntax Highlighting**

````markdown
```typescript
function hello() {
  console.log("Hello World");
}
```
````

✅ **Links**

```markdown
[Link Text](https://example.com)
```

✅ **Images**

```markdown
![Alt Text](/images/blog/your-image.png)
```

✅ **Lists**

```markdown
- Bullet item
- Another item

1. Numbered item
2. Another item
```

✅ **Blockquotes**

```markdown
> This is a quote
```

✅ **Bold & Italic**

```markdown
**bold text**
_italic text_
```

---

## Uploading to Supabase

### Step 1: Organize Your Files

Create a `blog-posts` folder at the root of your project:

```
new-ajaymandal.me/
├── blog-posts/           ← Create this folder
│   ├── post-one.md
│   ├── post-two.md
│   └── post-three.md
├── app/
├── components/
└── ...
```

### Step 2: Add Your Markdown Files

Move your `.md` files from your old blog into `blog-posts/`:

```bash
# Example: Copy from your old Astro blog
cp ~/Desktop/projects/personal-blog-astro/src/content/blog/*.md ./blog-posts/
```

### Step 3: Run the Upload Script

```bash
npm run upload-blogs
```

Or with tsx directly:

```bash
npx tsx scripts/upload-blogs.ts
```

### What Happens During Upload

The script:

1. ✅ Reads all `.md` files from `blog-posts/`
2. ✅ Parses frontmatter and content
3. ✅ Converts Markdown to HTML
4. ✅ Processes image paths
5. ✅ Determines category from tags
6. ✅ Uploads to Supabase (or updates if slug exists)

### Upload Output Example

```
🚀 Starting blog upload process...

Found 6 markdown file(s)

📄 Processing: google-oauth.md
✅ Inserted: Google OAuth Service

📄 Processing: noteme-app.md
✅ Inserted: NoteMe APP

📄 Processing: zustand-for-state-management-in-reactjs.md
✅ Updated: Zustand for state management in React.js

==================================================
📊 Upload Summary:
   ✅ Success: 6
   ❌ Errors: 0
==================================================
```

---

## Managing Images

### Image Path Convention

Your old blog used `@assets/images/` paths. The script automatically converts these to `/images/blog/`.

**In your Markdown files:**

```markdown
![Alt text](@assets/images/google-oauth/oauth-consent-screen.jpeg)
```

**Converted to:**

```html
<img src="/images/blog/google-oauth/oauth-consent-screen.jpeg" alt="Alt text" />
```

### Setting Up Image Directory

Create the public images folder:

```bash
mkdir -p public/images/blog
```

Copy your images:

```bash
# From old blog
cp -r ~/Desktop/projects/personal-blog-astro/src/assets/images/* ./public/images/blog/
```

### Using Cover Images

To add a cover image to a post:

1. Place image in `public/images/blog/`
2. Add to frontmatter:

```yaml
ogImage: ../../assets/images/your-image.png
```

The system will handle the path conversion automatically.

---

## Workflow Summary

### Creating a New Blog Post

1. **Write** a new `.md` file in `blog-posts/`:

   ```bash
   touch blog-posts/my-new-post.md
   ```

2. **Add frontmatter and content**:

   ```markdown
   ---
   title: My Awesome New Post
   author: Ajay Mandal
   pubDatetime: 2024-12-15T10:00:00.000Z
   slug: my-awesome-new-post
   featured: false
   draft: false
   tags:
     - nextjs
     - typescript
   description: This is my new blog post about Next.js
   ---

   # Introduction

   Your content here...
   ```

3. **Upload to Supabase**:

   ```bash
   npm run upload-blogs
   ```

4. **Verify**: Visit `https://your-site.com/blog/my-awesome-new-post`

### Updating an Existing Post

1. **Edit** the `.md` file in `blog-posts/`
2. **Update** `modDatetime` in frontmatter (optional)
3. **Re-run** the upload script:
   ```bash
   npm run upload-blogs
   ```
4. The script will detect the existing slug and **update** the post

### Unpublishing a Post

Set `draft: true` in frontmatter and re-upload:

```yaml
draft: true
```

---

## Troubleshooting

### ❌ "Supabase credentials not found"

**Problem**: Environment variables missing

**Solution**:

```bash
# Check .env.local exists
cat .env.local

# Should contain:
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY=eyJxxx...
```

---

### ❌ "blog-posts directory not found"

**Problem**: Folder doesn't exist

**Solution**:

```bash
mkdir blog-posts
```

---

### ❌ "Error inserting post: duplicate key value violates unique constraint"

**Problem**: Post with same `slug` already exists

**Solution**:

- Change the `slug` in frontmatter to a unique value
- Or delete the existing post in Supabase dashboard

---

### ❌ Images not showing

**Problem**: Image paths incorrect

**Solution**:

1. Ensure images are in `public/images/blog/`
2. Check image paths in markdown use `@assets/images/` (will be converted)
3. Or use direct paths: `![Alt](/images/blog/your-image.png)`

---

### ❌ Code highlighting not working

**Problem**: Missing language specification

**Solution**: Always specify language in code blocks:

````markdown
```typescript ← Add language here
const x = 5;
```
````

---

### ❌ Post not showing on website

**Problem**: Post is in draft mode or not published

**Solution**:

- Check `draft: false` in frontmatter
- Check `published: true` in Supabase database
- Clear Next.js cache: `rm -rf .next && npm run dev`

---

## Advanced: Custom Styling

### Prose Styles

The individual post page uses Tailwind Typography with custom styling:

```tsx
className="prose prose-sm max-w-none
  prose-headings:font-oxanium prose-headings:text-ink
  prose-a:text-[#E8192C] prose-a:no-underline hover:prose-a:underline
  prose-code:text-[#E8192C] prose-code:bg-[rgba(232,25,44,.08)]
  prose-pre:bg-[#1A1D24] prose-pre:border-[3px]
  prose-blockquote:border-l-[3px] prose-blockquote:border-[#E8192C]"
```

Modify in `/app/blog/[slug]/page.tsx` to customize appearance.

---

## NPM Scripts

Add to your `package.json` for easier management:

```json
{
  "scripts": {
    "upload-blogs": "tsx scripts/upload-blogs.ts",
    "upload-blogs:watch": "tsx watch scripts/upload-blogs.ts"
  }
}
```

---

## Quick Reference

```bash
# Create blog post
touch blog-posts/new-post.md

# Upload all posts
npm run upload-blogs

# Copy images
cp -r old-blog/images/* public/images/blog/

# Check Supabase
# Visit: https://app.supabase.com/project/YOUR_PROJECT/editor

# Clear cache
rm -rf .next

# Restart dev server
npm run dev
```

---

## Support

For issues or questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review Supabase logs in the dashboard
3. Check browser console for frontend errors
4. Verify environment variables are set correctly

---

**Happy Blogging! 🚀**

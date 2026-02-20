import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts, formatBlogDate } from "@/lib/blog";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/supabase";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} — Ajay Mandal`,
    description: post.excerpt,
  };
}

const CATEGORY_LABEL: Record<BlogPost["category"], string> = {
  project: "Project Blog",
  findings: "Findings",
};
const CATEGORY_COLOR: Record<BlogPost["category"], string> = {
  project: "#E8192C",
  findings: "#4A5068",
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <div
        style={{
          paddingTop: "calc(72px + 3rem)",
          paddingBottom: "3rem",
          paddingLeft: "3.5rem",
          paddingRight: "3.5rem",
          borderBottom: "3px solid #0D0F14",
          background: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(232,25,44,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(232,25,44,0.04) 1px,transparent 1px)",
            backgroundSize: "62px 62px",
            animation: "gridDrift 22s linear infinite",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--space-mono)",
              fontSize: ".58rem",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#8892AA",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: ".4rem",
              marginBottom: "2rem",
              transition: "color .2s",
            }}
            className="hover:text-[#E8192C]"
          >
            ← All Posts
          </Link>

          <div style={{ display: "flex", gap: ".75rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--space-mono)",
                fontSize: ".5rem",
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: CATEGORY_COLOR[post.category],
                border: `2px solid ${CATEGORY_COLOR[post.category]}`,
                padding: ".25rem .7rem",
              }}
            >
              {CATEGORY_LABEL[post.category]}
            </span>
            {post.tags?.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--space-mono)",
                  fontSize: ".48rem",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#8892AA",
                  border: "1.5px solid #E4E7ED",
                  padding: ".2rem .5rem",
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontFamily: "var(--oxanium)",
              fontWeight: 800,
              fontSize: "clamp(2rem,4vw,3.5rem)",
              lineHeight: 1.05,
              color: "#1A1D24",
              marginBottom: "1rem",
            }}
          >
            {post.title}
          </h1>

          {post.published_at && (
            <p
              style={{
                fontFamily: "var(--space-mono)",
                fontSize: ".58rem",
                color: "#8892AA",
                letterSpacing: ".1em",
              }}
            >
              {formatBlogDate(post.published_at)}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "4rem 3.5rem",
          background: "#F0F2F5",
          borderBottom: "3px solid #0D0F14",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            fontFamily: "var(--space-mono)",
            fontSize: ".72rem",
            lineHeight: 2,
            color: "#1A1D24",
          }}
          className="prose prose-sm max-w-none
            prose-headings:font-oxanium prose-headings:text-ink
            prose-a:text-[#E8192C] prose-a:no-underline hover:prose-a:underline
            prose-code:text-[#E8192C] prose-code:bg-[rgba(232,25,44,.08)] prose-code:px-1 prose-code:py-0.5
            prose-pre:bg-[#1A1D24] prose-pre:border-[3px] prose-pre:border-[#0D0F14]
            prose-blockquote:border-l-[3px] prose-blockquote:border-[#E8192C] prose-blockquote:text-ink2
            prose-strong:text-ink"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>

      {/* Footer nav */}
      <div
        style={{
          padding: "3rem 3.5rem",
          borderBottom: "3px solid #0D0F14",
          background: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--space-mono)",
            fontSize: ".6rem",
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "#4A5068",
            textDecoration: "none",
            border: "3px solid #0D0F14",
            padding: ".75rem 1.5rem",
            transition: "all .2s",
          }}
          className="hover:bg-[#0D0F14] hover:text-white"
        >
          ← Back to Blog
        </Link>
        <Link
          href="/#contact"
          style={{
            fontFamily: "var(--space-mono)",
            fontSize: ".6rem",
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: "#fff",
            textDecoration: "none",
            background: "#E8192C",
            border: "3px solid #E8192C",
            padding: ".75rem 1.5rem",
            transition: "all .2s",
          }}
          className="hover:bg-[#0D0F14] hover:border-[#0D0F14]"
        >
          Let&apos;s Build Together →
        </Link>
      </div>
    </>
  );
}

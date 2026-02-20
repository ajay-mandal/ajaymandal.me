import Link from "next/link";
import { getAllPosts, formatBlogDate } from "@/lib/blog";
import type { BlogPost } from "@/lib/supabase";

export const metadata = {
  title: "Blog — Ajay Mandal",
  description: "Project deep-dives and engineering findings by Ajay Mandal.",
};

export const revalidate = 60; // ISR — revalidate every 60s

const CATEGORY_LABEL: Record<BlogPost["category"], string> = {
  project: "Project Blog",
  findings: "Findings",
};

const CATEGORY_COLOR: Record<BlogPost["category"], string> = {
  project: "#E8192C",
  findings: "#4A5068",
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const projectPosts = posts.filter((p) => p.category === "project");
  const findingsPosts = posts.filter((p) => p.category === "findings");

  return (
    <>
      {/* Page header */}
      <div
        style={{
          paddingTop: "calc(72px + 4rem)",
          paddingBottom: "4rem",
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
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ width: 36, height: 3, background: "#E8192C" }} />
            <span
              style={{
                fontFamily: "var(--space-mono)",
                fontSize: ".6rem",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "#E8192C",
              }}
            >
              Writing
            </span>
          </div>
          <h1
            style={{
              fontFamily: "var(--oxanium)",
              fontWeight: 800,
              fontSize: "clamp(2.8rem,5vw,5rem)",
              lineHeight: 0.95,
              color: "#1A1D24",
              marginBottom: "1rem",
            }}
          >
            The <span style={{ color: "#E8192C" }}>Blog</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--space-mono)",
              fontSize: ".68rem",
              lineHeight: 1.9,
              color: "#4A5068",
              maxWidth: 480,
            }}
          >
            Two categories: <strong style={{ color: "#E8192C" }}>Project Blogs</strong> — deep-dives
            into things I built, and{" "}
            <strong style={{ color: "#4A5068" }}>Findings</strong> — notes on interesting
            engineering discoveries.
          </p>
        </div>
      </div>

      {/* Project Blogs */}
      <BlogCategory
        title="Project"
        accent="Blogs"
        num="01"
        posts={projectPosts}
        emptyMsg="No project blogs yet."
      />

      {/* Findings */}
      <BlogCategory
        title="Engineering"
        accent="Findings"
        num="02"
        posts={findingsPosts}
        emptyMsg="No findings yet."
      />
    </>
  );
}

function BlogCategory({
  title,
  accent,
  num,
  posts,
  emptyMsg,
}: {
  title: string;
  accent: string;
  num: string;
  posts: BlogPost[];
  emptyMsg: string;
}) {
  return (
    <section
      style={{
        padding: "5rem 3.5rem",
        borderBottom: "3px solid #0D0F14",
        background: num === "01" ? "#F0F2F5" : "#FFFFFF",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "3rem" }}>
        <span
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "4rem",
            color: "rgba(232,25,44,0.07)",
            lineHeight: 1,
          }}
        >
          {num}
        </span>
        <h2
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "clamp(1.8rem,3vw,2.8rem)",
            lineHeight: 1,
            color: "#1A1D24",
          }}
        >
          {title} <span style={{ color: "#E8192C" }}>{accent}</span>
        </h2>
      </div>

      {posts.length === 0 ? (
        <p
          style={{
            fontFamily: "var(--space-mono)",
            fontSize: ".65rem",
            color: "#8892AA",
            letterSpacing: ".1em",
          }}
        >
          {emptyMsg}
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 0,
            border: "3px solid #0D0F14",
            background: "#FFFFFF",
          }}
        >
          {posts.map((post, i) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              style={{
                padding: "2.5rem",
                borderBottom: "3px solid #0D0F14",
                borderRight: "3px solid #0D0F14",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                cursor: "crosshair",
                transition: "background .35s",
              }}
              className="group hover:bg-[#0D0F14]"
            >
              <div
                style={{
                  position: "absolute",
                  inset: 7,
                  border: "2px dotted rgba(232,25,44,.15)",
                  pointerEvents: "none",
                  zIndex: 2,
                  transition: "border-color .35s",
                }}
                className="group-hover:!border-[rgba(255,255,255,.06)]"
              />

              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--space-mono)",
                  fontSize: ".5rem",
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: CATEGORY_COLOR[post.category],
                  border: `2px solid ${CATEGORY_COLOR[post.category]}`,
                  padding: ".25rem .6rem",
                  marginBottom: "1rem",
                  width: "fit-content",
                  position: "relative",
                  zIndex: 1,
                  transition: "color .35s, border-color .35s",
                }}
                className="group-hover:!text-[rgba(255,255,255,.5)] group-hover:!border-[rgba(255,255,255,.2)]"
              >
                {CATEGORY_LABEL[post.category]}
              </span>

              {post.published_at && (
                <div
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".54rem",
                    color: "#8892AA",
                    marginBottom: ".7rem",
                    position: "relative",
                    zIndex: 1,
                    transition: "color .35s",
                  }}
                  className="group-hover:!text-[rgba(255,255,255,.35)]"
                >
                  {formatBlogDate(post.published_at)}
                </div>
              )}

              <h3
                style={{
                  fontFamily: "var(--oxanium)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  lineHeight: 1.3,
                  color: "#1A1D24",
                  marginBottom: ".8rem",
                  flex: 1,
                  position: "relative",
                  zIndex: 1,
                  transition: "color .35s",
                }}
                className="group-hover:!text-white"
              >
                {post.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--space-mono)",
                  fontSize: ".58rem",
                  lineHeight: 1.85,
                  color: "#4A5068",
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                  transition: "color .35s",
                }}
                className="group-hover:!text-[rgba(255,255,255,.45)]"
              >
                {post.excerpt}
              </p>

              {post.tags?.length > 0 && (
                <div
                  style={{ display: "flex", gap: ".35rem", flexWrap: "wrap", marginBottom: "1rem", position: "relative", zIndex: 1 }}
                >
                  {post.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--space-mono)",
                        fontSize: ".46rem",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#8892AA",
                        border: "1.5px solid #E4E7ED",
                        padding: ".2rem .5rem",
                        transition: "all .35s",
                      }}
                      className="group-hover:!border-[rgba(255,255,255,.15)] group-hover:!text-[rgba(255,255,255,.4)]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <span
                style={{
                  fontFamily: "var(--space-mono)",
                  fontSize: ".55rem",
                  letterSpacing: ".15em",
                  textTransform: "uppercase",
                  color: "#8892AA",
                  display: "inline-block",
                  position: "relative",
                  zIndex: 1,
                  transition: "color .35s",
                }}
                className="group-hover:!text-[#E8192C]"
              >
                Read →
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

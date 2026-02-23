import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts, formatBlogDate } from "@/lib/blog";
import type { Metadata } from "next";
import type { BlogPost } from "@/lib/supabase";

export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({slug: p.slug }));
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
  project: "PROJECT",
  findings: "FINDINGS",
};

const CATEGORY_COLOR: Record<BlogPost["category"], string> = {
  project: "#E8192C",
  findings: "#4A5068",
};

async function getRelatedPosts(currentPost: BlogPost): Promise<BlogPost[]> {
  const allPosts = await getAllPosts();

  const related = allPosts
    .filter((p) => p.id !== currentPost.id)
    .map((p) => {
      let score = 0;
      if (p.category === currentPost.category) score += 3;
      const sharedTags =
        p.tags?.filter((tag) => currentPost.tags?.includes(tag)).length || 0;
      score += sharedTags;
      return { post: p, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ post }) => post);

  if (related.length < 3) {
    return allPosts.filter((p) => p.id !== currentPost.id).slice(0, 3);
  }

  return related;
}

async function getAdjacentPosts(currentSlug: string) {
  const allPosts = await getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === currentSlug);

  return {
    previous: currentIndex > 0 ? allPosts[currentIndex - 1] : null,
    next:
      currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = await getRelatedPosts(post);
  const { previous, next } = await getAdjacentPosts(slug);

  return (
    <article className="blog-post-editorial">
      {/* HERO SECTION */}
      <header className="relative bg-[#FAFAFA] pt-28 pb-16 overflow-hidden border-b-[6px] border-[#0D0F14]">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(0deg, #E8192C 1px, transparent 1px),
              linear-gradient(90deg, #E8192C 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "gridSlide 60s linear infinite",
          }}
        />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-[#4A5068] text-sm tracking-wider uppercase font-[family-name:var(--space-mono)] hover:text-[#E8192C] transition-colors mb-12 group"
          >
            <span className="w-12 h-[2px] bg-[#E8192C] group-hover:w-20 transition-all" />
            ALL ARTICLES
          </Link>

          <div className="grid lg:grid-cols-[1fr,400px] gap-12 items-start">
            {/* Title Section */}
            <div>
              {/* Category and Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span
                  className="px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border-[3px] font-[family-name:var(--oxanium)]"
                  style={{
                    color: CATEGORY_COLOR[post.category],
                    borderColor: CATEGORY_COLOR[post.category],
                    backgroundColor: `${CATEGORY_COLOR[post.category]}10`,
                  }}
                >
                  {CATEGORY_LABEL[post.category]}
                </span>
                {post.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-[9px] tracking-[0.15em] uppercase text-[#8892AA] border-2 border-[#E4E7ED] font-[family-name:var(--space-mono)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.95] mb-8 font-[family-name:var(--oxanium)]">
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#1A1D24] to-[#4A5068]">
                  {post.title}
                </span>
              </h1>

              {/* Meta info */}
              <div className="flex items-center gap-6 text-sm">
                <time
                  className="font-[family-name:var(--space-mono)] text-[#8892AA] tracking-wide"
                  dateTime={post.published_at}
                >
                  {formatBlogDate(post.published_at)}
                </time>
                <div className="w-2 h-2 rounded-full bg-[#E8192C]" />
                <span className="text-[#8892AA] font-[family-name:var(--space-mono)] text-xs tracking-wider">
                  {Math.ceil(post.content.split(" ").length / 200)} MIN READ
                </span>
              </div>
            </div>

            {/* Decorative sidebar element */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="relative bg-white border-[4px] border-[#0D0F14] p-8 shadow-[8px_8px_0_#E8192C]">
                  <p className="font-[family-name:var(--space-mono)] text-xs leading-relaxed text-[#4A5068]">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="relative bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20">
          <div className="grid lg:grid-cols-[1fr,340px] gap-16">
            {/* Article Content */}
            <div className="max-w-[780px]">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-[family-name:var(--oxanium)] prose-headings:font-black prose-headings:tracking-tight
                  prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b-4 prose-h2:border-[#E8192C]
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                  prose-p:font-[family-name:var(--space-mono)] prose-p:text-base prose-p:leading-[1.8] prose-p:text-[#1A1D24] prose-p:mb-6
                  prose-a:text-[#E8192C] prose-a:no-underline prose-a:font-bold prose-a:border-b-2 prose-a:border-[#E8192C] hover:prose-a:bg-[#E8192C] hover:prose-a:text-white prose-a:transition-all prose-a:px-1
                  prose-code:font-[family-name:var(--space-mono)] prose-code:text-[#E8192C] prose-code:bg-[#FFF5F6] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:border prose-code:border-[#FFE0E3]
                  prose-pre:bg-[#FAFAFA] prose-pre:border-[4px] prose-pre:border-[#0D0F14] prose-pre:rounded-none prose-pre:shadow-[4px_4px_0_#E8192C] prose-pre:my-8 prose-pre:p-0
                  prose-blockquote:border-l-[6px] prose-blockquote:border-[#E8192C] prose-blockquote:bg-[#FFF5F6] prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:italic prose-blockquote:text-[#4A5068]
                  prose-ul:my-6 prose-li:my-2 prose-li:font-[family-name:var(--space-mono)] prose-li:text-[#1A1D24]
                  prose-strong:text-[#E8192C] prose-strong:font-black
                  prose-img:border-[4px] prose-img:border-[#0D0F14] prose-img:shadow-[8px_8px_0_#E8192C] prose-img:my-12
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-8 self-start">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-[#FAFAFA] border-[4px] border-[#0D0F14] p-8">
                  <h3 className="font-[family-name:var(--oxanium)] font-black text-xl tracking-tight mb-8 flex items-center gap-3">
                    <span className="w-8 h-[3px] bg-[#E8192C]" />
                    RELATED
                  </h3>
                  <div className="space-y-6">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.id}
                        href={`/blog/${related.slug}`}
                        className="block group pb-6 border-b-2 border-[#E4E7ED] last:border-0 last:pb-0 hover:border-[#E8192C] transition-colors"
                      >
                        <span
                          className="text-[9px] font-bold tracking-[0.2em] uppercase mb-2 block font-[family-name:var(--space-mono)]"
                          style={{ color: CATEGORY_COLOR[related.category] }}
                        >
                          {CATEGORY_LABEL[related.category]}
                        </span>
                        <h4 className="font-[family-name:var(--oxanium)] font-bold text-base leading-tight mb-2 group-hover:text-[#E8192C] transition-colors">
                          {related.title}
                        </h4>
                        <time className="text-[10px] text-[#8892AA] font-[family-name:var(--space-mono)] tracking-wider">
                          {formatBlogDate(related.published_at)}
                        </time>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Links */}
              <div className="bg-[#0D0F14] text-white p-8 border-[4px] border-[#0D0F14] shadow-[6px_6px_0_#E8192C]">
                <h3 className="font-[family-name:var(--oxanium)] font-black text-sm tracking-[0.2em] uppercase mb-6">
                  QUICK LINKS
                </h3>
                <div className="space-y-3">
                  <Link
                    href="/blog"
                    className="block text-xs font-[family-name:var(--space-mono)] tracking-wider hover:text-[#E8192C] transition-colors"
                  >
                    → ALL ARTICLES
                  </Link>
                  <Link
                    href="/#contact"
                    className="block text-xs font-[family-name:var(--space-mono)] tracking-wider hover:text-[#E8192C] transition-colors"
                  >
                    → GET IN TOUCH
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      {(previous || next) && (
        <nav className="bg-[#F0F2F5] border-t-[6px] border-b-[6px] border-[#0D0F14] py-16">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Previous Post */}
              {previous ? (
                <Link
                  href={`/blog/${previous.slug}`}
                  className="group relative bg-white border-[4px] border-[#0D0F14] p-8 hover:shadow-[8px_8px_0_#E8192C] transition-all overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E8192C] to-transparent" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8892AA] font-[family-name:var(--space-mono)] mb-4 block">
                    ← PREVIOUS
                  </span>
                  <h3 className="font-[family-name:var(--oxanium)] font-bold text-2xl leading-tight group-hover:text-[#E8192C] transition-colors">
                    {previous.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}

              {/* Next Post */}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group relative bg-white border-[4px] border-[#0D0F14] p-8 hover:shadow-[8px_8px_0_#E8192C] transition-all overflow-hidden text-right"
                >
                  <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#E8192C] to-transparent" />
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#8892AA] font-[family-name:var(--space-mono)] mb-4 block">
                    NEXT →
                  </span>
                  <h3 className="font-[family-name:var(--oxanium)] font-bold text-2xl leading-tight group-hover:text-[#E8192C] transition-colors">
                    {next.title}
                  </h3>
                </Link>
              )}
            </div>
          </div>
        </nav>
      )}

      {/* CTA SECTION */}
      <section className="bg-[#0D0F14] text-white py-20 border-t-[6px] border-[#E8192C]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 text-center">
          <h2 className="font-[family-name:var(--oxanium)] font-black text-4xl sm:text-5xl mb-6">
            Let's Build Something{" "}
            <span className="text-[#E8192C]">Exceptional</span>
          </h2>
          <p className="font-[family-name:var(--space-mono)] text-sm text-[#8892AA] tracking-wide mb-10 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent border-[3px] border-white text-white font-[family-name:var(--space-mono)] text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#0D0F14] transition-all"
            >
              MORE ARTICLES
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 bg-[#E8192C] border-[3px] border-[#E8192C] text-white font-[family-name:var(--space-mono)] text-xs tracking-[0.2em] uppercase hover:bg-transparent hover:border-white transition-all shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

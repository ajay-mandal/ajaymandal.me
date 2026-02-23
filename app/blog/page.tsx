import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import BlogList from "@/components/pages/BlogList";

export const metadata = {
  title: "Blog — Ajay Mandal",
  description: "Project deep-dives and engineering findings by Ajay Mandal.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      {/* HERO SECTION */}
      <header className="relative bg-white pt-28 pb-20 overflow-hidden border-b-[6px] border-[#0D0F14]">
        {/* Animated background grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, #E8192C 1px, transparent 1px),
              linear-gradient(90deg, #E8192C 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            animation: "gridSlide 60s linear infinite",
          }}
        />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 border-[6px] border-[#E8192C] transform rotate-12 opacity-30" />
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-[#E8192C] opacity-20 transform -rotate-6" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-12">
            <span className="w-16 h-[3px] bg-[#E8192C]" />
            <span className="font-[family-name:var(--space-mono)] text-[11px] tracking-[0.25em] uppercase text-[#E8192C] font-bold">
              Technical Writing
            </span>
          </div>

          {/* Title */}
          <div className="max-w-5xl">
            <h1 className="font-[family-name:var(--oxanium)] font-black text-6xl sm:text-7xl lg:text-8xl leading-[0.9] mb-8">
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0D0F14] to-[#4A5068]">
                Engineering
              </span>
              <br />
              <span className="text-[#E8192C]">Chronicles</span>
            </h1>

            <p className="font-[family-name:var(--space-mono)] text-sm text-[#4A5068] leading-relaxed max-w-2xl mb-8">
              Deep technical explorations, project breakdowns, and engineering
              insights from the trenches of modern web development. Each article
              is a journey through code, architecture, and problem-solving.
            </p>
          </div>
        </div>
      </header>

      {/* CONTENT SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20">
        {posts.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white border-[5px] border-[#0D0F14] p-16 text-center shadow-[12px_12px_0_#E8192C]">
            <div className="w-20 h-20 border-[4px] border-[#E8192C] mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl">📝</span>
            </div>
            <h2 className="font-[family-name:var(--oxanium)] font-black text-3xl mb-4 text-[#1A1D24]">
              No Articles Yet
            </h2>
            <p className="font-[family-name:var(--space-mono)] text-sm text-[#8892AA] leading-relaxed mb-8">
              The archive is empty, but great things are coming. Check back soon
              for technical deep-dives and engineering insights.
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-[#E8192C] border-[3px] border-[#E8192C] text-white font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#E8192C] transition-all"
            >
              ← Back Home
            </Link>
          </div>
        ) : (
          <BlogList posts={posts} />
        )}
      </div>

      {/* CTA SECTION */}
      <section className="bg-[#0D0F14] text-white py-20 border-t-[6px] border-[#E8192C]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <h2 className="font-[family-name:var(--oxanium)] font-black text-4xl sm:text-5xl mb-6 leading-tight">
                Never Miss
                <br />
                <span className="text-[#E8192C]">A Post</span>
              </h2>
              <p className="font-[family-name:var(--space-mono)] text-sm text-[#8892AA] leading-relaxed mb-8">
                From deep dives into authentication systems to state management patterns,
                I share practical insights from real-world development. Get notified when
                new content drops.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://x.com/ajaymandal01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#E8192C] border-[3px] border-[#E8192C] text-white font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-transparent transition-all shadow-[6px_6px_0_rgba(232,25,44,0.3)]"
                >
                  FOLLOW ON X
                </Link>
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-transparent border-[3px] border-white text-white font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-[#0D0F14] transition-all"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>

            {/* Right - Decorative Stack */}
            <div className="hidden lg:block">
              <div className="relative h-80 flex items-center justify-center">
                {/* Stacked Article Cards Effect */}
                <div className="absolute top-0 right-12 w-72 h-40 bg-[#8892AA] opacity-10 border-[5px] border-white transform rotate-3" />
                <div className="absolute top-8 right-8 w-72 h-40 bg-white opacity-20 border-[5px] border-white transform -rotate-2" />
                <div className="absolute top-16 right-4 w-72 h-40 bg-[#E8192C] border-[5px] border-white transform rotate-1 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-16 h-1 bg-white mb-3" />
                      <div className="w-32 h-1 bg-white opacity-70 mb-2" />
                      <div className="w-24 h-1 bg-white opacity-70" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="w-20 h-1 bg-white opacity-50" />
                      <div className="w-12 h-12 border-[3px] border-white flex items-center justify-center">
                        <span className="font-[family-name:var(--oxanium)] font-black text-2xl text-white">
                          &#8594;
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

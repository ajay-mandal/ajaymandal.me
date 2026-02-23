"use client";

import Link from "next/link";
import { useState, useMemo, useEffect } from "react";
import { formatBlogDate } from "@/lib/blog";
import type { BlogPost } from "@/lib/supabase";

const CATEGORY_LABEL: Record<BlogPost["category"], string> = {
  project: "PROJECT",
  findings: "FINDINGS",
};

const CATEGORY_COLOR: Record<BlogPost["category"], string> = {
  project: "#E8192C",
  findings: "#4A5068",
};

interface BlogListProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 10;

export default function BlogList({ posts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      // Tags filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => post.tags?.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [posts, searchQuery, selectedCategory, selectedTags]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedTags]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, endIndex);
  }, [filteredPosts, currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTags([]);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchQuery || selectedTags.length > 0 || selectedCategory !== "all";

  return (
    <div className="space-y-12">
      {/* FILTERS SECTION */}
      <div className="bg-white border-[5px] border-[#0D0F14] p-8">
        {/* Search Bar */}
        <div className="mb-8">
          <label
            htmlFor="search"
            className="block font-[family-name:var(--space-mono)] text-[10px] tracking-[0.2em] uppercase text-[#8892AA] mb-3"
          >
            SEARCH ARTICLES
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, content, or tags..."
              className="w-full px-6 py-4 border-[3px] border-[#0D0F14] bg-[#FAFAFA] font-[family-name:var(--space-mono)] text-sm focus:outline-none focus:border-[#E8192C] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8892AA] hover:text-[#E8192C] font-bold text-lg"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <label className="block font-[family-name:var(--space-mono)] text-[10px] tracking-[0.2em] uppercase text-[#8892AA] mb-3">
            CATEGORY
          </label>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase border-[3px] font-[family-name:var(--oxanium)] transition-all ${
                selectedCategory === "all"
                  ? "bg-[#0D0F14] text-white border-[#0D0F14]"
                  : "bg-white text-[#0D0F14] border-[#0D0F14] hover:bg-[#0D0F14] hover:text-white"
              }`}
            >
              ALL ({posts.length})
            </button>
            <button
              onClick={() => setSelectedCategory("project")}
              className={`px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase border-[3px] font-[family-name:var(--oxanium)] transition-all ${
                selectedCategory === "project"
                  ? "bg-[#E8192C] text-white border-[#E8192C]"
                  : "bg-white text-[#E8192C] border-[#E8192C] hover:bg-[#E8192C] hover:text-white"
              }`}
            >
              PROJECTS ({posts.filter((p) => p.category === "project").length})
            </button>
            <button
              onClick={() => setSelectedCategory("findings")}
              className={`px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] uppercase border-[3px] font-[family-name:var(--oxanium)] transition-all ${
                selectedCategory === "findings"
                  ? "bg-[#4A5068] text-white border-[#4A5068]"
                  : "bg-white text-[#4A5068] border-[#4A5068] hover:bg-[#4A5068] hover:text-white"
              }`}
            >
              FINDINGS ({posts.filter((p) => p.category === "findings").length})
            </button>
          </div>
        </div>

        {/* Tags Filter */}
        {allTags.length > 0 && (
          <div>
            <label className="block font-[family-name:var(--space-mono)] text-[10px] tracking-[0.2em] uppercase text-[#8892AA] mb-3">
              FILTER BY TAGS
            </label>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 text-[9px] tracking-[0.12em] uppercase border-2 font-[family-name:var(--space-mono)] transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-[#E8192C] text-white border-[#E8192C]"
                      : "bg-white text-[#8892AA] border-[#E4E7ED] hover:border-[#E8192C] hover:text-[#E8192C]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="mt-6 pt-6 border-t-2 border-[#E4E7ED]">
            <button
              onClick={clearFilters}
              className="font-[family-name:var(--space-mono)] text-[10px] tracking-[0.15em] uppercase text-[#E8192C] hover:text-[#0D0F14] transition-colors"
            >
              ✕ CLEAR ALL FILTERS
            </button>
          </div>
        )}
      </div>

      {/* RESULTS COUNT */}
      <div className="flex items-center gap-4">
        <span className="font-[family-name:var(--space-mono)] text-xs tracking-wider text-[#8892AA]">
          Showing {filteredPosts.length === 0 ? 0 : ((currentPage - 1) * POSTS_PER_PAGE) + 1}-{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} articles
        </span>
        {hasActiveFilters && (
          <span className="px-3 py-1 bg-[#E8192C] text-white text-[9px] tracking-wider uppercase font-[family-name:var(--space-mono)]">
            FILTERED
          </span>
        )}
        {totalPages > 1 && (
          <span className="px-3 py-1 bg-[#0D0F14] text-white text-[9px] tracking-wider uppercase font-[family-name:var(--space-mono)]">
            PAGE {currentPage} / {totalPages}
          </span>
        )}
      </div>

      {/* POSTS LIST */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white border-[5px] border-[#0D0F14] p-16 text-center">
          <div className="w-20 h-20 border-[4px] border-[#E8192C] mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="font-[family-name:var(--oxanium)] font-black text-2xl mb-4 text-[#1A1D24]">
            No Articles Found
          </h3>
          <p className="font-[family-name:var(--space-mono)] text-sm text-[#8892AA] leading-relaxed mb-8">
            Try adjusting your search or filters to find what you're looking
            for.
          </p>
          <button
            onClick={clearFilters}
            className="inline-block px-8 py-4 bg-[#E8192C] border-[3px] border-[#E8192C] text-white font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#E8192C] transition-all"
          >
            CLEAR FILTERS
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {paginatedPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block relative"
            >
              <article
                className="bg-white border-[5px] border-[#0D0F14] p-8 sm:p-10 transition-all hover:shadow-[10px_10px_0_#E8192C] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="grid lg:grid-cols-[1fr,300px] gap-8 items-start">
                  {/* Main Content */}
                  <div>
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span
                        className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border-[3px] font-[family-name:var(--oxanium)]"
                        style={{
                          color: CATEGORY_COLOR[post.category],
                          borderColor: CATEGORY_COLOR[post.category],
                          backgroundColor: `${CATEGORY_COLOR[post.category]}10`,
                        }}
                      >
                        {CATEGORY_LABEL[post.category]}
                      </span>

                      <time
                        className="font-[family-name:var(--space-mono)] text-[10px] tracking-wider text-[#8892AA] uppercase"
                        dateTime={post.published_at}
                      >
                        {formatBlogDate(post.published_at)}
                      </time>

                      <span className="text-[8px] text-[#E4E7ED]">●</span>

                      <span className="font-[family-name:var(--space-mono)] text-[10px] tracking-wider text-[#8892AA] uppercase">
                        {Math.ceil(post.content.split(" ").length / 200)} MIN
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-[family-name:var(--oxanium)] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 group-hover:text-[#E8192C] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="font-[family-name:var(--space-mono)] text-sm leading-relaxed text-[#4A5068] mb-6">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1.5 text-[9px] tracking-[0.12em] uppercase border-2 font-[family-name:var(--space-mono)] transition-colors ${
                              selectedTags.includes(tag)
                                ? "bg-[#E8192C] text-white border-[#E8192C]"
                                : "text-[#8892AA] border-[#E4E7ED] group-hover:border-[#E8192C] group-hover:text-[#E8192C]"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Side indicator */}
                  <div className="hidden lg:flex items-center justify-end">
                    <div className="flex items-center gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                      <span className="font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase text-[#E8192C]">
                        READ MORE
                      </span>
                      <div className="w-16 h-[3px] bg-[#E8192C]" />
                      <div className="w-8 h-8 border-[3px] border-[#E8192C] flex items-center justify-center">
                        <span className="text-[#E8192C] text-lg">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {filteredPosts.length > POSTS_PER_PAGE && (
        <div className="flex items-center justify-center gap-4 pt-8">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`group flex items-center gap-3 px-8 py-4 border-[3px] font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase transition-all ${
              currentPage === 1
                ? "border-[#E4E7ED] text-[#E4E7ED] cursor-not-allowed"
                : "border-[#0D0F14] text-[#0D0F14] hover:bg-[#0D0F14] hover:text-white hover:shadow-[6px_6px_0_rgba(13,15,20,0.2)]"
            }`}
          >
            <span className="text-lg">←</span>
            <span>PREVIOUS</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      onClick={() => {
                        setCurrentPage(page);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-12 h-12 border-[3px] font-[family-name:var(--oxanium)] font-bold text-sm transition-all ${
                        page === currentPage
                          ? "bg-[#E8192C] text-white border-[#E8192C]"
                          : "border-[#0D0F14] text-[#0D0F14] hover:bg-[#0D0F14] hover:text-white"
                      }`}
                    >
                      {page}
                    </button>
                  );
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="text-[#8892AA] font-bold px-1">
                      ...
                    </span>
                  );
                }
                return null;
              })}
            </div>
          </div>

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`group flex items-center gap-3 px-8 py-4 border-[3px] font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase transition-all ${
              currentPage === totalPages
                ? "border-[#E4E7ED] text-[#E4E7ED] cursor-not-allowed"
                : "border-[#0D0F14] text-[#0D0F14] hover:bg-[#0D0F14] hover:text-white hover:shadow-[6px_6px_0_rgba(13,15,20,0.2)]"
            }`}
          >
            <span>NEXT</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      )}
    </div>
  );
}

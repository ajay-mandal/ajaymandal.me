"use client";

import { useState } from "react";

interface SharePostProps {
  title: string;
  url: string;
}

export function SharePost({ title, url }: SharePostProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      href: `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`,
    },
    {
      name: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "Twitter/X",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "Telegram",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      ),
      href: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      name: "LinkedIn",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      name: "Email",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`,
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="border-t border-[var(--theme-border,#E4E7ED)] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Share Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Left: Share Icons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center sm:justify-start">
              <span className="font-[family-name:var(--space-mono)] text-sm text-[var(--theme-text-secondary,#8892AA)] italic">
                Share this post on:
              </span>
              <div className="flex items-center gap-3">
                {shareLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Share on ${link.name}`}
                    className="text-[var(--theme-text-tertiary,#8892AA)] hover:text-[var(--theme-accent,#E8192C)] transition-colors duration-200"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
                
                {/* Copy Link Icon */}
                <button
                  onClick={handleCopyLink}
                  aria-label="Copy link"
                  className="text-[var(--theme-text-tertiary,#8892AA)] hover:text-[var(--theme-accent,#E8192C)] transition-colors duration-200"
                  title={copied ? "Copied!" : "Copy link"}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6"
                  >
                    {copied ? (
                      <polyline points="20 6 9 17 4 12" />
                    ) : (
                      <>
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Right: Back to Top (hidden on mobile) */}
            <button
              onClick={scrollToTop}
              className="hidden sm:flex group items-center gap-2 text-sm font-[family-name:var(--space-mono)] text-[var(--theme-text-secondary,#8892AA)] hover:text-[var(--theme-accent,#E8192C)] transition-colors duration-200"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

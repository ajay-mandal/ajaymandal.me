"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        {/* Main Error Card */}
        <div className="relative bg-white border-[6px] border-[#0D0F14] p-12 sm:p-16 shadow-[12px_12px_0_#E8192C]">
          
          {/* Error Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 border-[6px] border-[#E8192C] flex items-center justify-center mb-6">
              <span className="text-5xl">⚠️</span>
            </div>
            <div className="w-full h-[6px] bg-[#0D0F14]" />
          </div>

          {/* Error Message */}
          <h1 className="font-[family-name:var(--oxanium)] font-black text-4xl sm:text-5xl mb-6 text-[#1A1D24]">
            Something Went Wrong
          </h1>
          
          <p className="font-[family-name:var(--space-mono)] text-sm text-[#4A5068] leading-relaxed mb-6 max-w-2xl">
            An unexpected error occurred while loading this page. 
            This has been logged and we'll look into it.
          </p>

          {/* Error Details (in development) */}
          {process.env.NODE_ENV === "development" && (
            <div className="mb-8 p-4 bg-[#FFF5F6] border-[3px] border-[#E8192C]">
              <p className="font-[family-name:var(--space-mono)] text-xs text-[#E8192C] break-all">
                {error.message}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={reset}
              className="px-8 py-4 bg-[#E8192C] border-[3px] border-[#E8192C] text-white font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#E8192C] transition-all"
            >
              TRY AGAIN
            </button>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-transparent border-[3px] border-[#0D0F14] text-[#0D0F14] font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-[#0D0F14] hover:text-white transition-all"
            >
              GO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

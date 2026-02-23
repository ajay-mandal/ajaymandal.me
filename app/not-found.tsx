import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        {/* Main Error Card */}
        <div className="relative bg-white border-[6px] border-[#0D0F14] p-12 sm:p-16 shadow-[12px_12px_0_#E8192C]">
          
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="font-[family-name:var(--oxanium)] font-black text-[120px] sm:text-[180px] leading-none text-[#E8192C] tracking-tighter">
              404
            </h1>
            <div className="w-full h-[6px] bg-[#0D0F14] mt-4" />
          </div>

          {/* Error Message */}
          <h2 className="font-[family-name:var(--oxanium)] font-black text-3xl sm:text-4xl mb-6 text-[#1A1D24]">
            Page Not Found
          </h2>
          
          <p className="font-[family-name:var(--space-mono)] text-sm text-[#4A5068] leading-relaxed mb-8 max-w-2xl">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry though, there's plenty of other content to explore.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="px-8 py-4 bg-[#E8192C] border-[3px] border-[#E8192C] text-white font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#E8192C] transition-all"
            >
              ← GO HOME
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 bg-transparent border-[3px] border-[#0D0F14] text-[#0D0F14] font-[family-name:var(--space-mono)] text-[11px] tracking-[0.2em] uppercase hover:bg-[#0D0F14] hover:text-white transition-all"
            >
              READ BLOG
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

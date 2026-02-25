"use client";
import { useState, useEffect } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Only show on mobile/tablet (< 1024px) */}
      <button
        onClick={scrollToTop}
        className={`lg:hidden fixed right-4 z-[9999] border-[2px] border-[#0D0F14] bg-[#E8192C] p-2 rounded-full shadow-[3px_3px_0_#0D0F14] transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-16 opacity-0 pointer-events-none"
        } hover:shadow-[2px_2px_0_#0D0F14] hover:translate-x-[1px] hover:translate-y-[1px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]`}
        aria-label="Scroll to top"
        style={{
          bottom: "calc(3rem + env(safe-area-inset-bottom))",
          width: "44px",
          height: "44px",
        }}
      >
        <HiArrowUp className="text-lg text-white" />
      </button>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

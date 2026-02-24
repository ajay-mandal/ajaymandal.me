"use client";

import { useEffect } from "react";
import ThemeToggle from "@/components/global/ReadingModeToggle";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Apply saved theme when entering blog post
    const savedTheme = localStorage.getItem("app-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Reset to light mode when leaving the page
    return () => {
      document.documentElement.setAttribute("data-theme", "light");
    };
  }, []);

  return (
    <>
      <ThemeToggle />
      {children}
    </>
  );
}

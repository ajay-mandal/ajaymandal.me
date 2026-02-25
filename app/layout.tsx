import type { Metadata } from "next";
import { Inter, Oxanium, Space_Mono } from "next/font/google";
import "./globals.css";
import { incognito, gitlabmono } from "@/components/fonts/fonts";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import CursorGlow from "@/components/global/CursorGlow";
import ScrollToTop from "@/components/global/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
  variable: "--oxanium",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--space-mono",
});

export const metadata: Metadata = {
  title: "Ajay Mandal",
  description: "My Portfolio Website",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${incognito.variable} ${inter.className} ${gitlabmono.variable} ${oxanium.variable} ${spaceMono.variable} font-mono text-ink`}
      >
        <CursorGlow />
        <Navbar />
        <main className="pb-0">
          {children}
        </main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}

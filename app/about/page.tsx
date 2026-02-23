import Link from "next/link";

export const metadata = {
  title: "About — Ajay Mandal",
};

export default function About() {
  return (
    <main
      className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-5 pb-10 pt-24 sm:px-8"
    >
      <div
        className="relative w-full max-w-xl bg-white px-6 py-10 sm:px-12 sm:py-14"
        style={{
          border: "3px solid #0D0F14",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 10,
            border: "2px dotted rgba(232,25,44,.18)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".75rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ width: 36, height: 3, background: "#E8192C" }} />
            <span
              style={{
                fontFamily: "var(--space-mono)",
                fontSize: ".58rem",
                letterSpacing: ".28em",
                textTransform: "uppercase",
                color: "#E8192C",
              }}
            >
              Status
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--oxanium)",
              fontWeight: 800,
              fontSize: "clamp(2.2rem,5vw,3.8rem)",
              lineHeight: 1,
              color: "#1A1D24",
              marginBottom: "1.2rem",
            }}
          >
            Under <span style={{ color: "#E8192C" }}>Development</span>
          </h1>

          <p
            style={{
              fontFamily: "var(--space-mono)",
              fontSize: ".65rem",
              lineHeight: 1.9,
              color: "#4A5068",
              marginBottom: "2.5rem",
            }}
          >
            This page is currently being built. Check back soon.
          </p>

          <Link
            href="/"
            style={{
              display: "inline-block",
              fontFamily: "var(--space-mono)",
              fontSize: ".62rem",
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#E8192C",
              border: "3px solid #E8192C",
              padding: ".75rem 1.8rem",
              textDecoration: "none",
              transition: "all .25s",
            }}
            className="hover:bg-[#0D0F14] hover:border-[#0D0F14]"
          >
            ← Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}

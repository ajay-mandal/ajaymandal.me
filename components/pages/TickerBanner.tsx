const TECH = [
  "TypeScript", "NestJS", "PostgreSQL", "Redis", "Docker",
  "Kubernetes", "GCP", "AWS", "Prisma", "BullMQ", "Next.js",
  "Python", "Prompt Engineering", "Vapi", "Puppeteer", "Supabase", "Node.js",
];

const SEP = "✦";

export default function TickerBanner() {
  // interleave separators between items, then double for seamless loop
  const items = TECH.flatMap((t, i) => (i < TECH.length - 1 ? [t, SEP] : [t]));
  const doubled = [...items, SEP, ...items, SEP];

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "3px solid #0D0F14",
        borderBottom: "3px solid #0D0F14",
        background: "#E8192C",
        padding: ".7rem 0",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "tick 32s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--space-mono)",
              fontWeight: 400,
              fontSize: ".72rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: item === SEP ? "rgba(255,255,255,.45)" : "#FFFFFF",
              padding: "0 1.4rem",
              flexShrink: 0,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

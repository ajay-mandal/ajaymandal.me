import { Slide } from "@/components/ui/Slide";

// Keyframes injected once at module level via <style> in render

type SkillCard = {
  icon: string;
  name: string;
  description: string;
  level: string;
  pct: number;
};

const SKILL_CARDS: SkillCard[] = [
  {
    icon: "⬡",
    name: "Backend Engineering",
    description: "NestJS, Node.js, Express, Hono. REST. API gateways, rate limiting, versioning, and event-driven architectures.",
    level: "Expert",
    pct: 95,
  },
  {
    icon: "◈",
    name: "AI & LLM Systems",
    description: "OpenAI, Anthropic, OpenRouter. RAG pipelines, vector search, MCP servers, agent-to-agent workflows, and production LLM integration.",
    level: "Advanced",
    pct: 88,
  },
  {
    icon: "◉",
    name: "Databases & Storage",
    description: "PostgreSQL, Redis, MongoDB, Supabase. Query optimisation, vector DBs, indexing strategies, and ORM design.",
    level: "Expert",
    pct: 92,
  },
  {
    icon: "▦",
    name: "Cloud & DevOps",
    description: "GCP, AWS, Docker, Kubernetes. CI/CD pipelines, observability stacks, serverless functions, and infra-as-code.",
    level: "Advanced",
    pct: 84,
  },
  {
    icon: "⬕",
    name: "Distributed Systems",
    description: "BullMQ, pub/sub messaging. Job queues, retry logic, exactly-once semantics, and fault-tolerant service design.",
    level: "Advanced",
    pct: 86,
  },
  {
    icon: "◫",
    name: "Security & Auth",
    description: "OAuth 2.0, JWT, Auth.js, Zod. Input validation, secrets management, RBAC, and zero-trust architecture patterns.",
    level: "Advanced",
    pct: 82,
  },
];

export default function Skills() {
  return (
    <section
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14"
      style={{
        borderBottom: "3px solid #0D0F14",
        background: "#F0F2F5",
      }}
    >
      <style>{`
        .sk-card {
          position: relative;
          overflow: hidden;
          cursor: default;
        }
        .sk-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #E8192C;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform .4s cubic-bezier(.16,1,.3,1);
          z-index: 0;
        }
        .sk-card:hover::after { transform: scaleY(1); }
        .sk-card > * { position: relative; z-index: 1; }
        .sk-card:hover .sk-dot { border-color: rgba(255,255,255,.28) !important; }
        @keyframes barFill { from { width: 0; } }
        .sk-bar-fill { animation: barFill 1.2s cubic-bezier(.16,1,.3,1) both; }
        .sk-grid {
          display: grid;
        }
        .sk-cell {
          border-right: 3px solid #0D0F14;
          border-bottom: 3px solid #0D0F14;
        }
        .sk-grid .sk-cell:nth-child(1n) {
          border-right: none;
        }
        @media (min-width: 640px) {
          .sk-grid .sk-cell {
            border-right: 3px solid #0D0F14;
          }
          .sk-grid .sk-cell:nth-child(2n) {
            border-right: none;
          }
        }
        @media (min-width: 1024px) {
          .sk-grid .sk-cell:nth-child(2n) {
            border-right: 3px solid #0D0F14;
          }
          .sk-grid .sk-cell:nth-child(3n) {
            border-right: none;
          }
        }
      `}</style>
      {/* Section header */}
      <Slide delay={0.05}>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "1rem",
          marginBottom: "3.5rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "4rem",
            color: "rgba(232,25,44,0.07)",
            lineHeight: 1,
          }}
        >
          01
        </span>
        <h2
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "clamp(2rem,3.8vw,3.2rem)",
            lineHeight: 1,
            color: "#1A1D24",
          }}
        >
          Core <span style={{ color: "#E8192C" }}>Stack</span>
        </h2>
      </div>
      </Slide>

      {/* Grid */}
      <Slide delay={0.15}>
      <div
        style={{
          border: "3px solid #0D0F14",
          background: "#FFFFFF",
        }}
        className="sk-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SKILL_CARDS.map((card, i) => (
          <div
            key={i}
            style={{
              padding: "2.2rem",
              position: "relative",
              overflow: "hidden",
              cursor: "default",
              transition: "background .35s",
            }}
            className="sk-card sk-cell group"
          >
            {/* Dotted border */}
            <div
              style={{
                position: "absolute",
                inset: 7,
                border: "2px dotted rgba(232,25,44,.18)",
                pointerEvents: "none",
                zIndex: 2,
                transition: "border-color .35s",
              }}
              className="sk-dot"
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{ fontSize: "1.4rem", marginBottom: "1rem", display: "block" }}
                className="group-hover:text-white"
              >
                {card.icon}
              </span>
              <div
                style={{
                  fontFamily: "var(--oxanium)",
                  fontWeight: 700,
                  fontSize: ".95rem",
                  marginBottom: ".4rem",
                  color: "#1A1D24",
                  transition: "color .35s",
                }}
                className="group-hover:!text-white"
              >
                {card.name}
              </div>
              <p
                style={{
                  fontFamily: "var(--space-mono)",
                  fontSize: ".6rem",
                  lineHeight: 1.8,
                  color: "#4A5068",
                  marginBottom: "1.3rem",
                  transition: "color .35s",
                }}
                className="group-hover:!text-[rgba(255,255,255,.8)]"
              >
                {card.description}
              </p>
              {/* Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: ".4rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".52rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "#8892AA",
                    transition: "color .35s",
                  }}
                  className="group-hover:!text-[rgba(255,255,255,.7)]"
                >
                  {card.level}
                </span>
                <span
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".52rem",
                    color: "#8892AA",
                    transition: "color .35s",
                  }}
                  className="group-hover:!text-[rgba(255,255,255,.7)]"
                >
                  {card.pct}%
                </span>
              </div>
              <div
                style={{
                  height: 3,
                  background: "#E4E7ED",
                  transition: "background .35s",
                }}
                className="group-hover:!bg-[rgba(255,255,255,.25)]"
              >
                <div
                style={{ height: "100%", width: `${card.pct}%`, background: "#E8192C", transition: "background .35s" }}
                  className="sk-bar-fill group-hover:!bg-[rgba(255,255,255,.8)]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      </Slide>
    </section>
  );
}

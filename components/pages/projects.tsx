import Link from "next/link";
import { PROJECT } from "@/data/Projects";
import { Slide } from "@/components/animations/Slide";

const PJ_STYLE = `
  @keyframes slideFromLeft {
    from { transform: translateX(-14px); opacity: .7; }
    to   { transform: translateX(0);     opacity: 1;  }
  }
  .pj-row-inner { transition: none; }
  .group:hover .pj-row-inner {
    animation: slideFromLeft .4s cubic-bezier(.16,1,.3,1) both;
  }
  .pj-red-overlay {
    position: absolute;
    inset: 0;
    background: #E8192C;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .4s cubic-bezier(.16,1,.3,1);
    z-index: 0;
  }
  .group:hover .pj-red-overlay {
    transform: scaleX(1);
  }
`;

export default function Project() {
  const [featured, ...rest] = PROJECT;

  return (
    <section
      style={{
        padding: "5.5rem 3.5rem",
        borderBottom: "3px solid #0D0F14",
        background: "#F0F2F5",
      }}
    >
      <style>{PJ_STYLE}</style>
      {/* Section header */}
      <Slide delay={0.05}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "3.5rem" }}>
        <span
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "4rem",
            color: "rgba(232,25,44,0.07)",
            lineHeight: 1,
          }}
        >
          02
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
          Selected <span style={{ color: "#E8192C" }}>Work</span>
        </h2>
      </div>
      </Slide>

      <div style={{ border: "3px solid #0D0F14" }}>

        {/* ── FEATURED PROJECT ── */}
        <Slide delay={0.15}>
        <div
          style={{
            background: "#1A1D24",
            padding: "3rem",
            borderBottom: "3px solid #0D0F14",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "3rem",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            cursor: "crosshair",
          }}
        >
          {/* dotted inset border */}
          <div
            style={{
              position: "absolute",
              inset: 14,
              border: "2px dotted rgba(255,255,255,0.08)",
              pointerEvents: "none",
            }}
          />

          {/* Left: info */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: "1rem" }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#E8192C",
                  flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--space-mono)",
                  fontSize: ".52rem",
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.4)",
                }}
              >
                FEATURED · {featured.year}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--oxanium)",
                fontWeight: 800,
                fontSize: "clamp(1.6rem,3vw,2.6rem)",
                lineHeight: 1.1,
                color: "#FFFFFF",
                marginBottom: "1rem",
              }}
            >
              {featured.name}
            </h3>

            <p
              style={{
                fontFamily: "var(--space-mono)",
                fontSize: ".62rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,.5)",
                marginBottom: "1.5rem",
                maxWidth: 460,
              }}
            >
              {featured.tagline}
            </p>

            {/* Tech pills */}
            <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap", marginBottom: "1.8rem" }}>
              {featured.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".48rem",
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    border: "2px solid rgba(255,255,255,.14)",
                    color: "rgba(255,255,255,.55)",
                    padding: ".28rem .7rem",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {featured.blogLink && (
                <Link
                  href={featured.blogLink}
                  target="_blank"
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".56rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.4)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,.15)",
                    paddingBottom: 2,
                    transition: "color .3s, border-color .3s",
                  }}
                  className="hover:!text-white hover:!border-white"
                >
                  View Case Study →
                </Link>
              )}
              <Link
                href={featured.github}
                target="_blank"
                style={{
                  fontFamily: "var(--space-mono)",
                  fontSize: ".56rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.4)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,.15)",
                  paddingBottom: 2,
                  transition: "color .3s, border-color .3s",
                }}
                className="hover:!text-white hover:!border-white"
              >
                GitHub →
              </Link>
              {featured.live && (
                <Link
                  href={featured.live}
                  target="_blank"
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".56rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.4)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,.15)",
                    paddingBottom: 2,
                    transition: "color .3s, border-color .3s",
                  }}
                  className="hover:!text-white hover:!border-white"
                >
                  Live →
                </Link>
              )}
            </div>
          </div>

          {/* Right: metrics 2×2 grid */}
          {featured.metrics && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                border: "2px solid rgba(255,255,255,.06)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {featured.metrics.map((m, i) => (
                <div
                  key={m.label}
                  style={{
                    padding: "1.3rem 1.5rem",
                    position: "relative",
                    borderRight: i % 2 === 0 ? "2px solid rgba(255,255,255,.06)" : undefined,
                    borderBottom: i < 2 ? "2px solid rgba(255,255,255,.06)" : undefined,
                  }}
                >
                  {/* dotted inset */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 5,
                      border: "2px dotted rgba(232,25,44,.2)",
                      pointerEvents: "none",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "var(--oxanium)",
                      fontWeight: 800,
                      fontSize: "1.9rem",
                      color: "#E8192C",
                      lineHeight: 1,
                      marginBottom: ".25rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {m.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--space-mono)",
                      fontSize: ".48rem",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,.3)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        </Slide>

        {/* ── NORMAL PROJECT ROWS ── */}
        {rest.map((project, idx) => (
          <Slide key={project.name} delay={0.1 + idx * 0.1}>
          <div
            style={{
              background: "#FFFFFF",
              padding: "3rem",
              borderBottom: idx < rest.length - 1 ? "3px solid #0D0F14" : undefined,
              position: "relative",
              overflow: "hidden",
              cursor: "crosshair",
            }}
            className="group"
          >
            {/* red fill from left */}
            <div className="pj-red-overlay" />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "220px 1fr auto",
                gap: "2rem",
                alignItems: "start",
                position: "relative",
                zIndex: 1,
              }}
              className="pj-row-inner"
            >
              {/* Left col: category + name */}
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: ".6rem", marginBottom: ".6rem" }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#E8192C",
                      display: "inline-block",
                      flexShrink: 0,
                      transition: "background .3s",
                    }}
                    className="group-hover:!bg-white"
                  />
                  <span
                    style={{
                      fontFamily: "var(--space-mono)",
                      fontSize: ".5rem",
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: "#E8192C",
                      transition: "color .3s",
                    }}
                    className="group-hover:!text-white"
                  >
                    {project.category} · {project.year}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--oxanium)",
                    fontWeight: 800,
                    fontSize: "clamp(1.3rem,2vw,1.85rem)",
                    lineHeight: 1.15,
                    color: "#1A1D24",
                    transition: "color .3s",
                  }}
                  className="group-hover:!text-white"
                >
                  {project.name}
                </h3>
              </div>

              {/* Middle col: tagline + pills */}
              <div>
                <p
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".61rem",
                    lineHeight: 1.9,
                    color: "#4A5068",
                    marginBottom: "1.2rem",
                    transition: "color .3s",
                  }}
                  className="group-hover:!text-[rgba(255,255,255,.8)]"
                >
                  {project.tagline}
                </p>
                <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--space-mono)",
                        fontSize: ".48rem",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        border: "2px solid rgba(13,15,20,.18)",
                        color: "#4A5068",
                        padding: ".28rem .7rem",
                        transition: "border-color .3s, color .3s",
                      }}
                      className="group-hover:!border-[rgba(255,255,255,.35)] group-hover:!text-[rgba(255,255,255,.8)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right col: faded number */}
              <span
                style={{
                  fontFamily: "var(--oxanium)",
                  fontWeight: 800,
                  fontSize: "4.5rem",
                  color: "rgba(13,15,20,.04)",
                  lineHeight: 1,
                  transition: "color .3s",
                  userSelect: "none",
                  textAlign: "right",
                }}
                className="group-hover:!text-[rgba(255,255,255,.06)]"
              >
                0{idx + 2}
              </span>
            </div>

            {/* Links — below the row grid, matching HTML layout */}
            <div
              style={{
                display: "flex",
                gap: ".75rem",
                marginTop: "1.5rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Link
                href={project.github}
                target="_blank"
                style={{
                  fontFamily: "var(--space-mono)",
                  fontSize: ".55rem",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#8892AA",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(13,15,20,.15)",
                  paddingBottom: 2,
                  transition: "color .3s, border-color .3s",
                  display: "inline-flex",
                }}
                className="group-hover:!text-white group-hover:!border-[rgba(255,255,255,.3)]"
              >
                GitHub →
              </Link>
              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".55rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#8892AA",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(13,15,20,.15)",
                    paddingBottom: 2,
                    transition: "color .3s, border-color .3s",
                    display: "inline-flex",
                  }}
                  className="group-hover:!text-white group-hover:!border-[rgba(255,255,255,.3)]"
                >
                  Live →
                </Link>
              )}
              {project.blogLink && (
                <Link
                  href={project.blogLink}
                  target="_blank"
                  style={{
                    fontFamily: "var(--space-mono)",
                    fontSize: ".55rem",
                    letterSpacing: ".14em",
                    textTransform: "uppercase",
                    color: "#8892AA",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(13,15,20,.15)",
                    paddingBottom: 2,
                    transition: "color .3s, border-color .3s",
                    display: "inline-flex",
                  }}
                  className="group-hover:!text-white group-hover:!border-[rgba(255,255,255,.3)]"
                >
                  Blog →
                </Link>
              )}
            </div>
          </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}

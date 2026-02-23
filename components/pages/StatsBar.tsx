const STATS = [
  { value: "2+",      label: "Years Engineering", abbr: "YR"  },
  { value: "5+",     label: "Projects Shipped",  abbr: "SYS" },
  { value: "94.7%",   label: "Uptime Record",     abbr: "UP"  },
  { value: "3",       label: "Countries Served",  abbr: "GEO" },
];

export default function StatsBar() {
  return (
    <>
      <style>{`
        .stat-item {
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: background .3s;
        }
        .stat-item::before {
          content: '';
          position: absolute;
          inset: 10px;
          border: 2px dotted rgba(232,25,44,0);
          transition: border-color .3s;
          pointer-events: none;
          z-index: 1;
        }
        .stat-item:hover { background: rgba(232,25,44,0.07); }
        .stat-item:hover::before { border-color: rgba(232,25,44,.3); }
        .stat-item > * { position: relative; z-index: 2; }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        .stats-grid > .stat-item {
          border-right: 3px solid #0D0F14;
          border-bottom: 3px solid #0D0F14;
        }
        .stats-grid > .stat-item:nth-child(2n) {
          border-right: none;
        }
        .stats-grid > .stat-item:nth-last-child(-n + 2) {
          border-bottom: none;
        }
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
          .stats-grid > .stat-item {
            border-right: 3px solid #0D0F14;
            border-bottom: none;
          }
          .stats-grid > .stat-item:nth-child(4n) {
            border-right: none;
          }
        }
      `}</style>
      <div
        style={{
          background: "#FFFFFF",
          borderBottom: "3px solid #0D0F14",
        }}
        className="stats-grid"
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            style={{
              padding: "2.4rem 1.5rem",
            }}
            className="stat-item"
          >
          <span
            style={{
              fontFamily: "var(--oxanium)",
              fontWeight: 800,
              fontSize: "3.2rem",
              color: "#E8192C",
              lineHeight: 1,
              display: "block",
              marginBottom: ".4rem",
            }}
          >
            {s.value}
          </span>
          <span
            style={{
              fontFamily: "var(--space-mono)",
              fontSize: ".56rem",
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#8892AA",
            }}
          >
            {s.label}
          </span>
          <div
            style={{
              position: "absolute",
              bottom: "1.3rem",
              right: "1.3rem",
              fontFamily: "var(--oxanium)",
              fontWeight: 800,
              fontSize: "1.8rem",
              opacity: 0.05,
              color: "#0D0F14",
            }}
          >
            {s.abbr}
          </div>
        </div>
      ))}
    </div>
    </>  );
}
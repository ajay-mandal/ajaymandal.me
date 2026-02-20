export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 3.5rem",
        borderTop: "3px solid #0D0F14",
        fontSize: ".56rem",
        letterSpacing: ".14em",
        textTransform: "uppercase" as const,
        color: "#8892AA",
        background: "#FFFFFF",
        flexWrap: "wrap" as const,
        gap: "1rem",
        fontFamily: "var(--space-mono)",
      }}
    >
      <span>
        &copy; {new Date().getFullYear()}{" "}
        <strong style={{ color: "#E8192C", fontWeight: 400 }}>Ajay Mandal</strong>
      </span>
      <span>Made with <strong style={{ color: "#E8192C", fontWeight: 400 }}>&hearts;</strong> in Nepal</span>
      <span>
        Built with{" "}
        <strong style={{ color: "#E8192C", fontWeight: 400 }}>Next.js {String(16)}</strong>
        {" "}+{" "}
        <strong style={{ color: "#E8192C", fontWeight: 400 }}>Supabase</strong>
      </span>
    </footer>
  );
}

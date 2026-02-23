export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-2 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-8 lg:px-14"
      style={{
        borderTop: "3px solid #0D0F14",
        fontSize: ".56rem",
        letterSpacing: ".14em",
        textTransform: "uppercase" as const,
        color: "#8892AA",
        background: "#FFFFFF",
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

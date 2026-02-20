"use client";
import { Slide } from "@/components/animations/Slide";

// Replace with your Google Calendar appointment scheduling link
const GCAL_URL =
  "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID";

export default function ContactForm() {
  return (
    <section
      id="contact"
      style={{
        padding: "5.5rem 3.5rem",
        borderBottom: "3px solid #0D0F14",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative bg rect */}
      <div
        style={{
          position: "absolute",
          right: "-4%",
          bottom: "-8%",
          width: "42%",
          height: "88%",
          border: "3px dotted rgba(232,25,44,.2)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 16,
            border: "2px dotted rgba(232,25,44,.12)",
          }}
        />
      </div>

      {/* Section header */}
      <Slide delay={0.05}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "3rem" }}>
        <span
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "4rem",
            color: "rgba(232,25,44,0.07)",
            lineHeight: 1,
          }}
        >
          05
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
          Let&apos;s <span style={{ color: "#E8192C" }}>Build</span>
        </h2>
      </div>
      </Slide>

      {/* Email */}
      <Slide delay={0.12}>
      <a
        href="mailto:ajaymandal.work07@gmail.com"
        style={{
          fontFamily: "var(--oxanium)",
          fontWeight: 800,
          fontSize: "clamp(1.2rem,2.8vw,2.2rem)",
          textDecoration: "none",
          display: "inline-block",
          borderBottomWidth: "3px",
          borderBottomStyle: "solid",
          paddingBottom: ".3rem",
          marginBottom: "0.6rem",
          transition: "color .25s, border-color .25s, transform .2s",
          position: "relative",
          zIndex: 1,
        }}
        className="text-[#1A1D24] border-[#0D0F14] hover:text-[#E8192C] hover:border-[#E8192C] hover:scale-[1.03]"
      >
        ajaymandal.work07@gmail.com
      </a>

      {/* Subline */}
      <p
        style={{
          fontFamily: "var(--space-mono)",
          fontSize: ".72rem",
          letterSpacing: "0.04em",
          marginBottom: "2.8rem",
          position: "relative",
          zIndex: 1,
          transition: "color .25s",
        }}
        className="text-[#4A5068]  cursor-default"
      >
        → Response within 24 hours · Open to full-time &amp; freelance
      </p>
      </Slide>

      <Slide delay={0.22}>
      <div style={{ maxWidth: 560, position: "relative", zIndex: 1 }}>
        <p
          style={{
            fontFamily: "var(--space-mono)",
            fontSize: ".65rem",
            lineHeight: 2,
            color: "#4A5068",
            marginBottom: "2.2rem",
          }}
        >
          Got a project, role, or idea worth talking about?
          <br />
          Pick a time and let&apos;s connect.
        </p>

        {/* Book button */}
        <a
          href={GCAL_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: ".55rem",
            background: "#E8192C",
            color: "#FFFFFF",
            border: "3px solid #0D0F14",
            padding: ".75rem 1.7rem",
            fontFamily: "var(--space-mono)",
            fontSize: ".6rem",
            letterSpacing: ".14em",
            textTransform: "uppercase",
            textDecoration: "none",
            cursor: "crosshair",
            transition: "background .3s, transform .2s",
            marginBottom: "1.6rem",
          }}
          className="hover:bg-[#0D0F14] hover:scale-[1.04]"
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book a slot →
        </a>

        {/* Availability hint */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".45rem",
            fontFamily: "var(--space-mono)",
            fontSize: ".54rem",
            letterSpacing: ".1em",
            color: "#8892AA",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22C55E",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Available · Remote
        </div>
      </div>
      </Slide>
    </section>
  );
}


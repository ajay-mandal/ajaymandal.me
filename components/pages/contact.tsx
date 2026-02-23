"use client";
import { Slide } from "@/components/animations/Slide";
import { socialLinks } from "@/data/social";

const GCAL_URL =
  "https://calendar.app.google/w2FHffsTQ6g39feB6";

const CONTACT_CSS = `
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: .5; transform: scale(1.4); }
  }
  .contact-email-link {
    position: relative;
    text-decoration: none;
    transition: color .25s;
  }
  .contact-email-link::after {
    content: '';
    position: absolute;
    bottom: -4px; left: 0;
    width: 100%; height: 3px;
    background: #E8192C;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform .35s cubic-bezier(.16,1,.3,1);
  }
  .contact-email-link:hover::after { transform: scaleX(1); }
  .contact-email-link:hover { color: #E8192C !important; }
  .social-pill {
    display: inline-flex;
    align-items: center;
    gap: .4rem;
    font-family: var(--space-mono);
    font-size: .58rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #1A1D24;
    border: 3px solid #0D0F14;
    padding: .75rem 1.6rem;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: color .3s;
    cursor: pointer;
  }
  .social-pill::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #0D0F14;
    transform: translateY(100%);
    transition: transform .3s;
    z-index: 0;
  }
  .social-pill:hover { color: #fff; }
  .social-pill:hover::before { transform: translateY(0); }
  .social-pill > * { position: relative; z-index: 1; }
  .social-pill svg { color: inherit; }
  .resume-btn {
    display: inline-flex;
    align-items: center;
    gap: .45rem;
    font-family: var(--space-mono);
    font-size: .58rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #1A1D24;
    border: 3px solid #0D0F14;
    padding: .75rem 1.6rem;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: color .3s;
    cursor: pointer;
  }
  .resume-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #0D0F14;
    transform: translateY(100%);
    transition: transform .3s;
    z-index: 0;
  }
  .resume-btn:hover { color: #fff; }
  .resume-btn:hover::before { transform: translateY(0); }
  .resume-btn > * { position: relative; z-index: 1; }
  .resume-btn svg { color: inherit; }
  .sched-btn {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    background: #E8192C;
    color: #fff;
    border: 3px solid #0D0F14;
    padding: .75rem 1.6rem;
    font-family: var(--space-mono);
    font-size: .58rem;
    letter-spacing: .14em;
    text-transform: uppercase;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: color .3s;
    cursor: pointer;
  }
  .sched-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: #0D0F14;
    transform: translateY(100%);
    transition: transform .3s;
    z-index: 0;
  }
  .sched-btn:hover::before { transform: translateY(0); }
  .sched-btn > * { position: relative; z-index: 1; }
  .book-btn {
    display: inline-flex;
    align-items: center;
    gap: .55rem;
    background: #E8192C;
    color: #fff;
    border: 3px solid #0D0F14;
    padding: .85rem 2rem;
    font-family: var(--space-mono);
    font-size: .62rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: border-color .3s;
  }
  .book-btn::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%; height: 0;
    background: #0D0F14;
    transition: height .3s;
    z-index: 0;
  }
  .book-btn:hover::before { height: 100%; }
  .book-btn:hover { border-color: #0D0F14; }
  .book-btn-inner { position: relative; z-index: 1; display: flex; align-items: center; gap: .55rem; }
`;

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14"
      style={{
        borderBottom: "3px solid #0D0F14",
        background: "#FFFFFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{CONTACT_CSS}</style>

      {/* Two-column grid */}
      <div
        className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_minmax(0,520px)] lg:gap-20"
        style={{
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── LEFT ── */}
        <div>
          {/* Header */}
          <Slide delay={0.05}>
            <div style={{ display:"flex", alignItems:"baseline", gap:"1rem", marginBottom:"2.5rem" }}>
              <span style={{ fontFamily:"var(--oxanium)", fontWeight:800, fontSize:"4rem", color:"rgba(232,25,44,0.07)", lineHeight:1 }}>05</span>
              <h2 style={{ fontFamily:"var(--oxanium)", fontWeight:800, fontSize:"clamp(2rem,3.8vw,3.2rem)", lineHeight:1, color:"#1A1D24" }}>
                Let&apos;s <span style={{ color:"#E8192C" }}>Build</span>
              </h2>
            </div>
          </Slide>

          {/* Email */}
          <Slide delay={0.1}>
            <div style={{ marginBottom:"2.2rem" }}>
              <p style={{ fontFamily:"var(--space-mono)", fontSize:".52rem", letterSpacing:".18em", textTransform:"uppercase", color:"#8892AA", marginBottom:".7rem" }}>
                Drop a line
              </p>
              <a
                href="mailto:ajaymandal.work07@gmail.com"
                className="contact-email-link"
                style={{ fontFamily:"var(--oxanium)", fontWeight:800, fontSize:"clamp(1rem,2.2vw,1.8rem)", color:"#1A1D24", display:"inline-block", marginBottom:".5rem" }}
              >
                ajaymandal.work07@gmail.com
              </a>
              <p style={{ fontFamily:"var(--space-mono)", fontSize:".58rem", color:"#8892AA", letterSpacing:".04em" }}>
                → Response within 24 hours · Open to full-time &amp; freelance
              </p>
            </div>
          </Slide>

          <div style={{ width:"100%", height:1, background:"#E4E7ED", marginBottom:"2.2rem" }} />

          {/* Social + Resume */}
          <Slide delay={0.22}>
            <div>
              <p style={{ fontFamily:"var(--space-mono)", fontSize:".52rem", letterSpacing:".18em", textTransform:"uppercase", color:"#8892AA", marginBottom:"1rem" }}>
                Find me online
              </p>
              <div style={{ display:"flex", gap:".6rem", flexWrap:"wrap", marginBottom:"1.6rem" }}>
                {socialLinks.map((s) => (
                  <a key={s.id} href={s.url} target="_blank" rel="noreferrer" className="social-pill">
                    <span><s.icon size={13} /></span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>

              <p style={{ fontFamily:"var(--space-mono)", fontSize:".52rem", letterSpacing:".18em", textTransform:"uppercase", color:"#8892AA", marginBottom:"1rem" }}>
                Resume
              </p>
              <div style={{ display:"flex", gap:".6rem", flexWrap:"wrap" }}>
                <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1vfEh5E1RyFzNHWi-lvxLmFN7aGR2CR4iHGaz89NGRs0/export?format=pdf" target="_blank" rel="noreferrer" className="resume-btn">
                  <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg></span>
                  <span>View Resume</span>
                </a>
                <a href="https://docs.google.com/document/d/1vfEh5E1RyFzNHWi-lvxLmFN7aGR2CR4iHGaz89NGRs0/export?format=pdf" target="_blank" rel="noreferrer" className="resume-btn">
                  <span><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg></span>
                  <span>Download</span>
                </a>
              </div>
            </div>
          </Slide>
        </div>

        {/* ── RIGHT: Book a Slot card ── */}
        <Slide delay={0.28}>
          <div className="contact-sticky">
            <div
              style={{
                display:"block",
                border:"3px solid #0D0F14",
                background:"#F8F9FB",
                position:"relative",
                overflow:"hidden",
                padding:"2.8rem 2.5rem 2.4rem",
              }}
            >
              {/* Big outline Google Calendar logo — background decoration */}
              <div style={{ position:"absolute", bottom:"-18px", right:"-18px", opacity:.06, pointerEvents:"none", zIndex:0 }}>
                <svg width="260" height="260" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer rounded rect */}
                  <rect x="2" y="6" width="44" height="40" rx="4" stroke="#0D0F14" strokeWidth="2"/>
                  {/* Header bar */}
                  <rect x="2" y="6" width="44" height="12" rx="4" fill="none" stroke="#0D0F14" strokeWidth="2"/>
                  <line x1="2" y1="18" x2="46" y2="18" stroke="#0D0F14" strokeWidth="2"/>
                  {/* Hanger pins */}
                  <line x1="14" y1="2" x2="14" y2="10" stroke="#0D0F14" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="34" y1="2" x2="34" y2="10" stroke="#0D0F14" strokeWidth="2.5" strokeLinecap="round"/>
                  {/* Grid lines horizontal */}
                  <line x1="2" y1="26" x2="46" y2="26" stroke="#0D0F14" strokeWidth="1" strokeOpacity="0.5"/>
                  <line x1="2" y1="34" x2="46" y2="34" stroke="#0D0F14" strokeWidth="1" strokeOpacity="0.5"/>
                  {/* Grid lines vertical */}
                  <line x1="16" y1="18" x2="16" y2="46" stroke="#0D0F14" strokeWidth="1" strokeOpacity="0.5"/>
                  <line x1="30" y1="18" x2="30" y2="46" stroke="#0D0F14" strokeWidth="1" strokeOpacity="0.5"/>
                  {/* Centre date "22" */}
                  <text x="24" y="32" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="10" fill="#0D0F14">04</text>
                  {/* Small highlight dot on today cell */}
                  <circle cx="24" cy="29" r="7" stroke="#E8192C" strokeWidth="1.5" fill="none"/>
                </svg>
              </div>

              {/* Content */}
              <div style={{ position:"relative", zIndex:1 }}>
                {/* Google Calendar wordmark row */}
                <div style={{ display:"flex", alignItems:"center", gap:".6rem", marginBottom:"2rem" }}>
                  <svg width="22" height="22" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6" width="44" height="40" rx="4" stroke="#0D0F14" strokeWidth="3"/>
                    <rect x="2" y="6" width="44" height="12" rx="4" fill="none" stroke="#0D0F14" strokeWidth="3"/>
                    <line x1="2" y1="18" x2="46" y2="18" stroke="#0D0F14" strokeWidth="3"/>
                    <line x1="14" y1="2" x2="14" y2="10" stroke="#0D0F14" strokeWidth="3" strokeLinecap="round"/>
                    <line x1="34" y1="2" x2="34" y2="10" stroke="#0D0F14" strokeWidth="3" strokeLinecap="round"/>
                    <text x="24" y="38" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill="#E8192C">22</text>
                  </svg>
                  <span style={{ fontFamily:"var(--space-mono)", fontSize:".52rem", letterSpacing:".14em", textTransform:"uppercase", color:"#8892AA" }}>
                    Google Calendar
                  </span>
                </div>

                <div
                  style={{
                    fontFamily:"var(--oxanium)",
                    fontWeight:800,
                    fontSize:"clamp(1.5rem,2.5vw,2.1rem)",
                    lineHeight:1.05,
                    color:"#1A1D24",
                    marginBottom:"1rem",
                  }}
                >
                  Book a <span style={{ color:"#E8192C" }}>Slot</span>
                </div>

                <p
                  style={{
                    fontFamily:"var(--space-mono)",
                    fontSize:".6rem",
                    lineHeight:1.9,
                    color:"#4A5068",
                    marginBottom:"2rem",
                  }}
                >
                  No forms, no friction.<br />
                  Pick a time that works for you and let&apos;s talk.
                </p>

                {/* Availability row */}
                <div style={{ display:"flex", alignItems:"center", gap:".5rem", marginBottom:"2rem" }}>
                  <span style={{ width:7, height:7, borderRadius:"50%", background:"#22C55E", display:"inline-block", flexShrink:0, animation:"pulse-dot 1.8s infinite" }} />
                  <span style={{ fontFamily:"var(--space-mono)", fontSize:".5rem", letterSpacing:".12em", textTransform:"uppercase", color:"#22C55E" }}>
                    Available · Remote
                  </span>
                </div>

                {/* CTA row */}
                <a href={GCAL_URL} target="_blank" rel="noreferrer" className="sched-btn">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>Schedule a Meeting →</span>
                </a>

                {/* Subtle hint */}
                <p style={{ fontFamily:"var(--space-mono)", fontSize:".48rem", color:"#B0B8CC", letterSpacing:".08em", marginTop:"1.2rem" }}>
                  Opens Google Calendar · Free · 30 min
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
      <style>{`
        @media (max-width: 1023px) {
          .contact-sticky {
            position: static;
          }
        }
        @media (min-width: 1024px) {
          .contact-sticky {
            position: sticky;
            top: 100px;
          }
        }
      `}</style>
    </section>
  );
}

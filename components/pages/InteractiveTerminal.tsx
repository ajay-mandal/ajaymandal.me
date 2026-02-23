"use client";
import { useEffect, useRef, useState } from "react";

type OutputLine = {
  html: string;
  cls?: string;
};

const COMMANDS: Record<string, () => string | null> = {
  help: () =>
    `<span style="color:#FCD34D">Available commands:</span>
<span style="color:#64FFDA">  whoami</span>       → Who is Ajay?
<span style="color:#64FFDA">  about</span>        → Background &amp; bio
<span style="color:#64FFDA">  skills</span>       → Technical skill set
<span style="color:#64FFDA">  experience</span>   → Work history
<span style="color:#64FFDA">  contact</span>      → How to reach me
<span style="color:#64FFDA">  social</span>       → Social links
<span style="color:#64FFDA">  clear</span>        → Clear terminal
<span style="color:rgba(255,255,255,.28)">  // Pro tip: commands are case-insensitive</span>`,

  whoami: () =>
    `<span style="color:#C084FC">Ajay Mandal</span>
<span style="color:rgba(255,255,255,.28)">uid=1337(ajay) gid=1337(backend-eng) groups=1337(backend-eng),0(distributed-sys)</span>
<span style="color:#64FFDA">→ Backend Engineer at the intersection of performance and reliability</span>`,

  about: () =>
    `<span style="color:#FCD34D">[ About Ajay Mandal ]</span>
<span style="color:rgba(255,255,255,.28)">───────────────────────────────────</span>
<span style="color:#64FFDA">Name:</span>       Ajay Mandal
<span style="color:#64FFDA">Role:</span>       Backend Engineer
<span style="color:#64FFDA">Location:</span>   Remote (Based in Nepal)
<span style="color:#64FFDA">Status:</span>     <span style="color:#22C55E">● Available</span> for full-time &amp; freelance

<span style="color:#E2E8F0">Building distributed systems, APIs, and backend infrastructure.</span>
<span style="color:#E2E8F0">Obsession: making complex systems look effortlessly simple.</span>

<span style="color:rgba(255,255,255,.28)">When I'm not coding, I'm writing about system design</span>
<span style="color:rgba(255,255,255,.28)">on my blog and contributing to open-source tooling.</span>`,

  skills: () =>
    `<span style="color:#FCD34D">[ Technical Skills ]</span>
<span style="color:rgba(255,255,255,.28)">───────────────────────────────────────────</span>
<span style="color:#64FFDA">Languages:</span>     TypeScript, JavaScript, Python, Bash
<span style="color:#64FFDA">Backend:</span>       NestJS, Node.js, Express, Hono
<span style="color:#64FFDA">AI & LLM:</span>      Prompt Engineering, RAG pipelines, MCP, Agent Workflows
<span style="color:#64FFDA">Databases:</span>     PostgreSQL, Redis, MongoDB, Supabase
<span style="color:#64FFDA">Cloud:</span>         GCP, AWS (EC2, S3), Docker, Kubernetes
<span style="color:#64FFDA">Systems:</span>       BullMQ, Pub/Sub, Event-driven Architecture
<span style="color:#64FFDA">Security:</span>      OAuth 2.0, JWT, Auth.js, Zod
<span style="color:#64FFDA">Frontend:</span>      React, Next.js, Tailwind CSS

<span style="color:rgba(255,255,255,.28)">// See full stack at ↑ Core Stack section</span>`,

  experience: () =>
    `<span style="color:#FCD34D">[ Work Experience ]</span>
<span style="color:rgba(255,255,255,.28)">───────────────────────────────────────────</span>
<span style="color:#C084FC">Backend Engineer</span>     <span style="color:rgba(255,255,255,.28)">· JUTEQ Inc · Jun 2025–Present</span>
<span style="color:#E2E8F0">  Scaled backend with NestJS, Node.js, Docker, Redis</span>
<span style="color:#E2E8F0">  Built AI-driven features, RAG pipelines, Voice AI (Vapi)</span>
<span style="color:#E2E8F0">  Automated comms (Twilio SMS, email), cut ops effort 70%</span>

<span style="color:#C084FC">Full Stack Developer</span>  <span style="color:rgba(255,255,255,.28)">· Stealth Startup · Jan–Apr 2025</span>
<span style="color:#E2E8F0">  Developed MVP with React, FastAPI, Clerk auth</span>
<span style="color:#E2E8F0">  Built SEO-optimized website with Next.js, TypeScript</span>

<span style="color:#C084FC">Project Trainee</span>        <span style="color:rgba(255,255,255,.28)">· Kyndryl · Apr–Jul 2024</span>
<span style="color:#E2E8F0">  Optimized Python scripts for backend functionality</span>
<span style="color:#E2E8F0">  Integrated Azure and SQL for data management</span>`,

  contact: () =>
    `<span style="color:#FCD34D">[ Contact ]</span>
<span style="color:rgba(255,255,255,.28)">───────────────────────────────────────────</span>
<span style="color:#64FFDA">Email:</span>    ajaymandal.work07@gmail.com
<span style="color:#64FFDA">Status:</span>   <span style="color:#22C55E">● Available</span> for full-time &amp; freelance
<span style="color:#64FFDA">Meeting:</span>  Book via Google Calendar ↓

<span style="color:rgba(255,255,255,.28)">// Scroll down to the contact section to book a slot</span>`,

  social: () =>
    `<span style="color:#FCD34D">[ Social Links ]</span>
<span style="color:rgba(255,255,255,.28)">───────────────────────────────────────────</span>
<span style="color:#64FFDA">GitHub:</span>    github.com/ajay-mandal
<span style="color:#64FFDA">LinkedIn:</span>  linkedin.com/in/ajay-mandal
<span style="color:#64FFDA">Twitter:</span>   x.com/ajaymandal01
<span style="color:#64FFDA">YouTube:</span>   youtube.com/@zexa_yt`,

  clear: () => null,
};

const PROMPT_HTML =
  '<span style="color:#E8192C">ajay@portfolio</span><span style="color:rgba(255,255,255,.28)">:</span><span style="color:#64FFDA">~</span><span style="color:rgba(255,255,255,.28)">$</span> ';

const WELCOME_LINES: OutputLine[] = [
  { html: PROMPT_HTML + '<span style="color:#E2E8F0">./welcome.sh</span>' },
  { html: '<span style="color:#64FFDA">╔════════════════════════════╗</span>' },
  { html: '<span style="color:#64FFDA">║</span> <span style="color:#C084FC">Welcome to Ajay\'s Portfolio</span> <span style="color:#64FFDA">║</span>' },
  { html: '<span style="color:#64FFDA">╚════════════════════════════╝</span>' },
  { html: '<span style="color:rgba(255,255,255,.28)">Backend Engineer · Distributed Systems · APIs</span>' },
  { html: '<span style="color:#FCD34D">→</span> Type <span style="color:#C084FC">help</span> to see available commands' },
  { html: PROMPT_HTML },
];

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<OutputLine[]>(WELCOME_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [lines]);

  const addLines = (newLines: OutputLine[]) =>
    setLines((prev) => [...prev, ...newLines]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      if (!cmd) return;

      const newHistory = [cmd, ...history];
      setHistory(newHistory);
      setHistIdx(-1);

      // Append command to last prompt line
      setLines((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        updated[updated.length - 1] = {
          ...last,
          html: last.html + `<span style="color:#E2E8F0">${cmd}</span>`,
        };
        return updated;
      });

      setInput("");

      setTimeout(() => {
        if (cmd === "clear") {
          setLines([{ html: PROMPT_HTML }]);
        } else if (COMMANDS[cmd]) {
          const result = COMMANDS[cmd]();
          if (result) {
            const outputLines: OutputLine[] = result
              .split("\n")
              .map((l) => ({ html: l }));
            addLines([...outputLines, { html: PROMPT_HTML }]);
          } else {
            addLines([{ html: PROMPT_HTML }]);
          }
        } else {
          addLines([
            {
              html: `<span style="color:rgba(255,255,255,.28)">command not found: ${cmd}. Type <span style="color:#C084FC">help</span> for available commands.</span>`,
            },
            { html: PROMPT_HTML },
          ]);
        }
      }, 80);
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(next);
      setInput(history[next] ?? "");
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx > 0) {
        const next = histIdx - 1;
        setHistIdx(next);
        setInput(history[next] ?? "");
      } else {
        setHistIdx(-1);
        setInput("");
      }
    }
  };

  return (
    <section
      id="terminal"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-14"
      style={{
        borderBottom: "3px solid #0D0F14",
        background: "#1A1D24",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "1rem",
          marginBottom: "clamp(1.2rem, 2.5vw, 1.5rem)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "clamp(3rem, 7vw, 4rem)",
            color: "rgba(255,255,255,0.06)",
            lineHeight: 1,
          }}
        >
          04
        </span>
        <h2
          style={{
            fontFamily: "var(--oxanium)",
            fontWeight: 800,
            fontSize: "clamp(2rem,3.8vw,3.2rem)",
            lineHeight: 1,
            color: "#F0F2F5",
          }}
        >
          Interactive <span style={{ color: "#E8192C" }}>Terminal</span>
        </h2>
      </div>

      <p
        style={{
          fontFamily: "var(--space-mono)",
          fontSize: "clamp(.55rem, 1.4vw, .62rem)",
          letterSpacing: "clamp(.08em, 0.2vw, .15em)",
          textTransform: "uppercase",
          color: "rgba(255,255,255,.35)",
          marginBottom: "clamp(1.5rem, 3vw, 2rem)",
        }}
      >
        Type a command below to learn more about me — try{" "}
        <code style={{ color: "#E8192C" }}>help</code>
      </p>

      {/* Terminal window */}
      <div
        className="terminal-shell"
        style={{
          background: "#13151C",
          border: "2px solid rgba(255,255,255,.07)",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            background: "#0D0F14",
            padding: "clamp(.5rem, 1.2vw, .6rem) clamp(.8rem, 2vw, 1rem)",
            display: "flex",
            alignItems: "center",
            gap: ".45rem",
            borderBottom: "1px solid rgba(255,255,255,.05)",
          }}
        >
          <span className="terminal-title-dots" style={{ width: 9, height: 9, borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
          <span className="terminal-title-dots" style={{ width: 9, height: 9, borderRadius: "50%", background: "#FEBC2E", display: "inline-block" }} />
          <span className="terminal-title-dots" style={{ width: 9, height: 9, borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
          <div
            className="terminal-title-text"
            style={{
              fontFamily: "var(--space-mono)",
              fontSize: "clamp(.48rem, 1.1vw, .56rem)",
              color: "rgba(255,255,255,.22)",
              letterSpacing: ".1em",
              marginLeft: ".5rem",
            }}
          >
            ajay@portfolio:~ — bash
          </div>
        </div>

        <style>{`
          .terminal-shell {
            width: 100%;
            max-width: 800px;
          }
          @media (max-width: 640px) {
            .terminal-output {
              padding: 1rem !important;
              min-height: 240px !important;
              max-height: 320px !important;
              line-height: 1.8 !important;
            }
            .terminal-input-row {
              padding: .6rem 1rem !important;
              gap: .35rem !important;
            }
            .terminal-hint-bar {
              padding: .4rem 1rem !important;
              overflow-x: auto;
              white-space: nowrap;
              letter-spacing: .08em !important;
            }
            .terminal-title-dots {
              width: 7px !important;
              height: 7px !important;
            }
          }
        `}</style>
        {/* Output body */}
        <div
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
          className="terminal-output"
          style={{
            padding: "1.5rem",
            fontFamily: "var(--space-mono)",
            fontSize: "clamp(.58rem, 1.3vw, .65rem)",
            lineHeight: 1.9,
            color: "#E2E8F0",
            minHeight: 280,
            maxHeight: 380,
            overflowY: "auto",
            cursor: "text",
          }}
        >
          {lines.map((line, i) => (
            <div
              key={i}
              style={{ marginBottom: ".1rem" }}
              dangerouslySetInnerHTML={{ __html: line.html }}
            />
          ))}
        </div>

        {/* Input row */}
        <div
          className="terminal-input-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            padding: ".8rem 1.5rem",
            borderTop: "1px solid rgba(255,255,255,.05)",
            background: "#0D0F14",
          }}
        >
          <span
            style={{
              fontFamily: "var(--space-mono)",
              fontSize: "clamp(.58rem, 1.3vw, .65rem)",
              color: "#E8192C",
              flexShrink: 0,
            }}
          >
            ajay@portfolio:~$
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type a command..."
            autoComplete="off"
            spellCheck={false}
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#E2E8F0",
              fontFamily: "var(--space-mono)",
              fontSize: "clamp(.58rem, 1.3vw, .65rem)",
              flex: 1,
              caretColor: "#E8192C",
            }}
          />
        </div>

        {/* Hint bar */}
        <div
          className="terminal-hint-bar"
          style={{
            fontFamily: "var(--space-mono)",
            fontSize: "clamp(.44rem, 1.1vw, .52rem)",
            color: "rgba(255,255,255,.22)",
            letterSpacing: "clamp(.08em, 0.15vw, .12em)",
            textTransform: "uppercase",
            padding: ".5rem 1.5rem",
            borderTop: "1px solid rgba(255,255,255,.04)",
          }}
        >
          Commands: help · about · skills · experience ·  contact · whoami · social · clear
        </div>
      </div>
    </section>
  );
}

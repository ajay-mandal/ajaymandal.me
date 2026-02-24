"use client";

import { useEffect, useState } from "react";

type ThemeMode = "light" | "navy" | "sepia";

const MODES: { value: ThemeMode; label: string; icon: string }[] = [
  { value: "light", label: "LIGHT", icon: "☀" },
  { value: "navy", label: "NAVY", icon: "◆" },
  { value: "sepia", label: "SEPIA", icon: "◑" },
];

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("light");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("app-theme") as ThemeMode;
    if (saved && MODES.find((m) => m.value === saved)) {
      setMode(saved);
      applyMode(saved);
    }
  }, []);

  const applyMode = (newMode: ThemeMode) => {
    document.documentElement.setAttribute("data-theme", newMode);
  };

  const handleModeChange = (newMode: ThemeMode) => {
    setMode(newMode);
    applyMode(newMode);
    localStorage.setItem("app-theme", newMode);
    setIsOpen(false);
  };

  if (!mounted) return null;

  const currentMode = MODES.find((m) => m.value === mode) || MODES[0];

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .reading-mode-container {
          position: fixed;
          top: 90px;
          right: 20px;
          z-index: 1000;
          font-family: var(--space-mono), monospace;
        }

        .reading-mode-button {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--theme-bg);
          border: 3px solid var(--theme-border);
          padding: 10px 16px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 3px 3px 0 var(--theme-shadow);
          user-select: none;
        }

        .reading-mode-button:hover {
          box-shadow: 5px 5px 0 var(--theme-shadow);
          transform: translate(-1px, -1px);
        }

        .reading-mode-button:active {
          box-shadow: 1px 1px 0 var(--theme-shadow);
          transform: translate(1px, 1px);
        }

        .mode-icon {
          font-size: 18px;
          line-height: 1;
        }

        .mode-label {
          font-size: 10px;
          font-weight: bold;
          letter-spacing: 0.15em;
          color: var(--theme-text);
        }

        .chevron {
          font-size: 10px;
          transition: transform 0.3s;
          color: #e8192c;
        }

        .chevron.open {
          transform: rotate(180deg);
        }

        .mode-menu {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--theme-border);
          border: 3px solid var(--theme-border);
          min-width: 200px;
          box-shadow: 4px 4px 0 var(--theme-shadow);
          overflow: hidden;
        }

        .mode-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          cursor: pointer;
          transition: all 0.2s;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: var(--theme-border);
          color: #FFFFFF;
        }

        .mode-option:last-child {
          border-bottom: none;
        }

        .mode-option:hover {
          background: var(--theme-surface-alt);
          padding-left: 20px;
          color: #FFFFFF;
        }

        .mode-option.active {
          background: var(--theme-accent);
          color: #FFFFFF;
        }

        .mode-option.active .option-icon {
          animation: pulse 2s infinite;
        }

        .option-icon {
          font-size: 18px;
          line-height: 1;
        }

        .option-text {
          flex: 1;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 0.12em;
        }

        .option-check {
          font-size: 14px;
          opacity: 0;
        }

        .mode-option.active .option-check {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .reading-mode-container {
            top: 70px;
            right: 12px;
          }

          .reading-mode-button {
            padding: 8px 12px;
            gap: 6px;
          }

          .mode-icon {
            font-size: 16px;
          }

          .mode-label {
            font-size: 9px;
          }

          .mode-menu {
            min-width: 160px;
          }
        }
      `}</style>

      <div className="reading-mode-container">
        <button
          className="reading-mode-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle reading mode menu"
        >
          <span className="mode-icon">{currentMode.icon}</span>
          <span className="mode-label">{currentMode.label}</span>
          <span className={`chevron ${isOpen ? "open" : ""}`}>▼</span>
        </button>

        {isOpen && (
          <div className="mode-menu" style={{ animation: "slideIn 0.3s ease" }}>
            {MODES.map((m) => (
              <div
                key={m.value}
                className={`mode-option ${mode === m.value ? "active" : ""}`}
                onClick={() => handleModeChange(m.value)}
              >
                <span className="option-icon">{m.icon}</span>
                <span className="option-text">{m.label}</span>
                <span className="option-check">✓</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

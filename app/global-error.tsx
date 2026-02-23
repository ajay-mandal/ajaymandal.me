"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "system-ui, sans-serif" }}>
        <div
          style={{
            minHeight: "100vh",
            backgroundColor: "#FAFAFA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div style={{ maxWidth: "800px", width: "100%" }}>
            <div
              style={{
                position: "relative",
                backgroundColor: "white",
                border: "6px solid #0D0F14",
                padding: "64px 48px",
                boxShadow: "12px 12px 0 #E8192C",
              }}
            >

              {/* Error Icon */}
              <div
                style={{
                  width: "96px",
                  height: "96px",
                  border: "6px solid #E8192C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "32px",
                  fontSize: "48px",
                }}
              >
                ⚠️
              </div>

              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: 900,
                  marginBottom: "24px",
                  color: "#1A1D24",
                  lineHeight: 1.2,
                }}
              >
                Critical Error
              </h1>

              <p
                style={{
                  fontSize: "14px",
                  color: "#4A5068",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                A critical error occurred. Please try refreshing the page or
                contact support if the problem persists.
              </p>

              <button
                onClick={reset}
                style={{
                  padding: "16px 32px",
                  backgroundColor: "#E8192C",
                  border: "3px solid #E8192C",
                  color: "white",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#E8192C";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#E8192C";
                  e.currentTarget.style.color = "white";
                }}
              >
                TRY AGAIN
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

"use client";
import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        width: 350,
        height: 350,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(232,25,44,0.055) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 9997,
        transform: "translate(-50%, -50%)",
        transition: "left .08s linear, top .08s linear",
        top: "-999px",
        left: "-999px",
      }}
    />
  );
}

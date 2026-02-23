interface AMLogoProps {
  size?: number;
}

/**
 * SVG "AM" logo — uses the site's Oxanium 800 font to match the typography.
 * Fill uses currentColor so parent hover:text-white flips it automatically.
 */
export default function AMLogo({ size = 44 }: AMLogoProps) {
  const h = size;
  const w = Math.round(size * (80 / 46));

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 80 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AM"
      style={{ display: "block" }}
    >

      {/* ── AM text using Oxanium 800 to match the site font */}
      <text
        x="40"
        y="34"
        textAnchor="middle"
        fontFamily="var(--oxanium), Oxanium, sans-serif"
        fontWeight="800"
        fontSize="32"
        letterSpacing="2"
        fill="currentColor"
      >
        AM
      </text>

    </svg>
  );
}

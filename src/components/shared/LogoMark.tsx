import React from "react";

interface LogoMarkProps {
  className?: string;
}

/**
 * OnboardFlow mark: two layered document cards resolving into a checkmark —
 * "documents in, verified out." Pure SVG so it stays crisp at any size.
 */
export default function LogoMark({ className = "w-9 h-9" }: LogoMarkProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="OnboardFlow logo"
    >
      <defs>
        <linearGradient id="flow-mark-back" x1="10" y1="2" x2="34" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--logo-accent, #10b981)" />
          <stop offset="1" stopColor="var(--logo-accent-dark, #059669)" />
        </linearGradient>
        <linearGradient id="flow-mark-front" x1="2" y1="10" x2="26" y2="34" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="var(--logo-brand, #6366f1)" />
          <stop offset="1" stopColor="var(--logo-brand-dark, #4338ca)" />
        </linearGradient>
      </defs>

      {/* Back card */}
      <rect x="10" y="2" width="24" height="24" rx="7" fill="url(#flow-mark-back)" />

      {/* Front card */}
      <rect x="2" y="10" width="24" height="24" rx="7" fill="url(#flow-mark-front)" />

      {/* Checkmark */}
      <path
        d="M8.5 23.5L12.5 27.5L20.5 15.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

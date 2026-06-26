import Link from "next/link";

/** 1nflow "flow" mark — a branching workflow glyph on an aurora tile. */
export function LogoMark({ size = 30, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <defs>
        <linearGradient id="auroraLogo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="50%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="11" fill="url(#auroraLogo)" />
      <g stroke="#fff" strokeWidth="2.6" strokeLinecap="round" fill="none">
        <path d="M14 24 H23" />
        <path d="M23 24 C29 24 29 16 34 16" />
        <path d="M23 24 C29 24 29 32 34 32" />
      </g>
      <g fill="#fff">
        <circle cx="14" cy="24" r="2.6" />
        <circle cx="34" cy="16" r="2.6" />
        <circle cx="34" cy="32" r="2.6" />
      </g>
    </svg>
  );
}

/** Wordmark "1nflow" — "1n" aurora, "flow" ink. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className ?? ""}`}>
      <span className="gradient-text">1n</span>
      <span className="text-fg">flow</span>
    </span>
  );
}

export default function Logo({ size = 30, href = "/" }: { size?: number; href?: string }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5" aria-label="1nflow home">
      <LogoMark size={size} />
      <Wordmark className="text-[1.3rem]" />
    </Link>
  );
}

"use client";

export type MotifKind = "los" | "appraisal" | "collections" | "treasury" | "cdd";

const TEAL = "#b8860b"; // gold (primary accent)
const SKY = "#9aa3b2"; // gray (flow lines)
const VIOLET = "#545d6e"; // dark gray (labels)
const EMERALD = "#b8860b"; // gold (success / checks)
const INK = "#0b1220";
const MUTE = "#94a3b8";
const LINE = "#e6e8ec";

/* 01 — LOS: 5-stage origination pipeline */
function Los() {
  const stages = ["App", "KYC", "U/W", "Approve", "Disburse"];
  return (
    <svg viewBox="0 0 360 220" className="w-full">
      <line x1="34" y1="70" x2="326" y2="70" stroke={LINE} strokeWidth="2" />
      <line x1="34" y1="70" x2="326" y2="70" stroke={SKY} strokeWidth="2" className="flow-dash" opacity="0.7" />
      {stages.map((s, i) => {
        const x = 34 + i * (292 / 4);
        const done = i < 3;
        return (
          <g key={s}>
            <circle cx={x} cy="70" r="9" fill={done ? TEAL : "#fff"} stroke={done ? TEAL : MUTE} strokeWidth="2" />
            {done && <path d={`M${x - 4} 70 l3 3 l5 -6`} stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />}
            <text x={x} y="98" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={MUTE}>{s}</text>
          </g>
        );
      })}
      <rect x="34" y="124" width="292" height="64" rx="8" fill="#f4f8fb" stroke={LINE} />
      <text x="48" y="146" fontFamily="monospace" fontSize="9" fill={VIOLET} fontWeight="700">AI CREDIT NARRATIVE · 5C</text>
      <rect x="48" y="156" width="200" height="6" rx="3" fill="#e2e8f0" />
      <rect x="48" y="168" width="150" height="6" rx="3" fill="#e2e8f0" />
      <text x="312" y="170" textAnchor="end" fontFamily="monospace" fontSize="9" fill={EMERALD}>advisory ✓</text>
    </svg>
  );
}

/* 02 — Appraisal: property + GPS + valuation */
function Appraisal() {
  return (
    <svg viewBox="0 0 360 220" className="w-full">
      <rect x="30" y="40" width="150" height="120" rx="8" fill="#f4f8fb" stroke={LINE} />
      <polygon points="55,96 105,60 155,96" fill={TEAL} opacity="0.25" />
      <rect x="68" y="96" width="74" height="52" fill="#fff" stroke={TEAL} />
      <rect x="96" y="116" width="18" height="32" fill={TEAL} opacity="0.5" />
      <circle cx="150" cy="58" r="10" fill={SKY} />
      <path d="M150 52 v8 M146 56 h8" stroke="#fff" strokeWidth="1.6" />
      <g transform="translate(200 50)">
        <text fontFamily="monospace" fontSize="9" fill={VIOLET} fontWeight="700">SPI 2018 · PASAR</text>
        <rect y="14" width="130" height="40" rx="6" fill="#fff" stroke={LINE} />
        <text x="12" y="32" fontFamily="Inter,sans-serif" fontSize="11" fill={INK} fontWeight="600">Rp 1.24 bn</text>
        <text x="12" y="46" fontFamily="monospace" fontSize="8" fill={MUTE}>3 comparables · MAPPI-T</text>
        <rect y="64" width="130" height="34" rx="6" fill="#f4f8fb" stroke={LINE} />
        <text x="12" y="80" fontFamily="monospace" fontSize="8" fill={EMERALD}>● POJK-40 revaluasi</text>
        <text x="12" y="92" fontFamily="monospace" fontSize="8" fill={MUTE}>next: +18 mo</text>
      </g>
    </svg>
  );
}

/* 03 — Collections: channels → recovery */
function Collections() {
  const ch = ["WhatsApp", "SMS", "Voice"];
  return (
    <svg viewBox="0 0 360 220" className="w-full">
      {ch.map((c, i) => (
        <g key={c}>
          <rect x="24" y={44 + i * 44} width="104" height="32" rx="8" fill="#fff" stroke={LINE} />
          <text x="40" y={64 + i * 44} fontFamily="Inter,sans-serif" fontSize="11" fill={INK}>{c}</text>
          <line x1="128" y1={60 + i * 44} x2="196" y2="110" stroke={SKY} strokeWidth="1.6" className="flow-dash" opacity="0.7" />
        </g>
      ))}
      <circle cx="210" cy="110" r="22" fill="none" stroke={VIOLET} strokeWidth="2" />
      <text x="210" y="114" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={VIOLET}>NPL</text>
      <line x1="232" y1="110" x2="288" y2="110" stroke={EMERALD} strokeWidth="2" className="flow-dash" />
      <rect x="288" y="92" width="64" height="36" rx="8" fill={EMERALD} opacity="0.12" stroke={EMERALD} />
      <text x="320" y="114" textAnchor="middle" fontFamily="monospace" fontSize="9" fill={EMERALD}>recovered</text>
    </svg>
  );
}

/* 04 — Treasury: liquidity ladder + GAP */
function Treasury() {
  const bars = [40, 64, 52, 80, 60, 92, 70];
  return (
    <svg viewBox="0 0 360 220" className="w-full">
      <line x1="30" y1="170" x2="330" y2="170" stroke={LINE} strokeWidth="2" />
      {bars.map((b, i) => {
        const x = 40 + i * 42;
        return <rect key={i} x={x} y={170 - b} width="26" height={b} rx="3" fill={i % 2 ? SKY : TEAL} opacity="0.85" />;
      })}
      <line x1="30" y1="110" x2="330" y2="96" stroke={VIOLET} strokeWidth="2" className="flow-dash" />
      <text x="36" y="40" fontFamily="monospace" fontSize="9" fill={VIOLET} fontWeight="700">GAP ANALYSIS</text>
      <text x="36" y="56" fontFamily="monospace" fontSize="9" fill={MUTE}>liquidity ladder · BMPK</text>
    </svg>
  );
}

/* 05 — CDD: shield + screening */
function Cdd() {
  const rows = ["PEP screening", "Sanctions list", "AML monitoring"];
  return (
    <svg viewBox="0 0 360 220" className="w-full">
      <path d="M70 40 L116 56 V104 C116 134 96 150 70 160 C44 150 24 134 24 104 V56 Z" fill={TEAL} opacity="0.12" stroke={TEAL} strokeWidth="2" />
      <path d="M52 100 l12 12 l24 -28" stroke={EMERALD} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {rows.map((r, i) => (
        <g key={r}>
          <rect x="160" y={48 + i * 40} width="172" height="30" rx="6" fill="#fff" stroke={LINE} />
          <circle cx="178" cy={63 + i * 40} r="4" fill={[TEAL, SKY, VIOLET][i]} />
          <text x="194" y={67 + i * 40} fontFamily="Inter,sans-serif" fontSize="11" fill={INK}>{r}</text>
        </g>
      ))}
    </svg>
  );
}

export default function VerticalMotif({ kind }: { kind: MotifKind }) {
  if (kind === "los") return <Los />;
  if (kind === "appraisal") return <Appraisal />;
  if (kind === "collections") return <Collections />;
  if (kind === "treasury") return <Treasury />;
  return <Cdd />;
}

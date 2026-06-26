import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-2xl ${className ?? ""}`}>
      <Eyebrow noRule={center}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-balance text-[clamp(1.8rem,3.6vw,2.8rem)] text-fg">{title}</h2>
      {subtitle && <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">{subtitle}</p>}
    </Reveal>
  );
}

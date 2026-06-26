"use client";

import { useRef, type ReactNode } from "react";
import { useScroll, useReducedMotion, useMotionValue, type MotionValue } from "framer-motion";

/** Pinned, scroll-scrubbed stage — content sticks full-screen while you scroll `height`;
 *  exposes 0→1 progress. Under reduced-motion renders the final state statically. */
export default function ScrollStage({
  height = "240vh",
  className,
  children,
}: {
  height?: string;
  className?: string;
  children: (progress: MotionValue<number>) => ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const settled = useMotionValue(1);
  const progress = reduce ? settled : scrollYProgress;
  return (
    <div ref={ref} className={className} style={{ height: reduce ? "auto" : height }}>
      <div className={reduce ? "py-20 sm:py-28" : "sticky top-0 flex min-h-screen items-center overflow-hidden"}>
        {children(progress)}
      </div>
    </div>
  );
}

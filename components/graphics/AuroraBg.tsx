"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Blob = { hue: string; bx: number; by: number; r: number; ax: number; ay: number; phase: number };

/** Soft drifting aurora (teal/sky/violet/emerald) on a light background. */
export default function AuroraBg({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const elMaybe = ref.current;
    const gMaybe = elMaybe?.getContext("2d");
    if (!elMaybe || !gMaybe) return;
    const el = elMaybe;
    const g = gMaybe;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const colors = ["212,160,23", "11,18,32", "148,163,184", "11,18,32"];
    let blobs: Blob[] = [];

    function layout() {
      const rect = el.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      el.width = Math.floor(w * dpr);
      el.height = Math.floor(h * dpr);
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      blobs = colors.map((hue, i) => ({
        hue,
        bx: w * (0.25 + (i % 2) * 0.45),
        by: h * (0.3 + Math.floor(i / 2) * 0.4),
        r: Math.max(w, h) * (0.35 + (i % 3) * 0.08),
        ax: 60 + i * 20,
        ay: 40 + i * 16,
        phase: i * 1.7,
      }));
    }

    function draw(t: number) {
      g.clearRect(0, 0, w, h);
      for (const b of blobs) {
        const x = b.bx + (reduce ? 0 : Math.sin(t * 0.00012 + b.phase) * b.ax);
        const y = b.by + (reduce ? 0 : Math.cos(t * 0.0001 + b.phase) * b.ay);
        const grad = g.createRadialGradient(x, y, 0, x, y, b.r);
        grad.addColorStop(0, `rgba(${b.hue},0.09)`);
        grad.addColorStop(1, `rgba(${b.hue},0)`);
        g.fillStyle = grad;
        g.beginPath();
        g.arc(x, y, b.r, 0, Math.PI * 2);
        g.fill();
      }
    }

    layout();
    let raf = 0;
    const frame = (t: number) => {
      draw(t);
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    const onResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      layout();
      if (reduce) draw(0);
    };
    window.addEventListener("resize", onResize);
    if (reduce) draw(0);
    else raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [reduce]);

  return <canvas ref={ref} className={className} aria-hidden />;
}

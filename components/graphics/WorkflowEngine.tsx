"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { Check } from "lucide-react";
import ScrollStage from "@/components/motion/ScrollStage";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";

function Stage({ p, i, total, code, label }: { p: MotionValue<number>; i: number; total: number; code: string; label: string }) {
  const start = 0.12 + (i / total) * 0.72;
  const fill = useTransform(p, [start, start + 0.04], [0, 1]);
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="relative h-10 w-10">
        <div className="absolute inset-0 grid place-items-center rounded-full border border-[var(--hair-strong)] font-mono text-[11px] text-faint">
          {code}
        </div>
        <motion.div
          style={{ opacity: fill, background: "var(--aurora)" }}
          className="absolute inset-0 grid place-items-center rounded-full text-white"
        >
          <Check size={16} strokeWidth={3} />
        </motion.div>
      </div>
      <span className="text-[12px] font-medium text-muted">{label}</span>
    </div>
  );
}

function Scene({ p }: { p: MotionValue<number> }) {
  const { t } = useI18n();
  const steps = t.engine.steps;
  const railFill = useTransform(p, [0.12, 0.84], [0, 1]);
  const titleOp = useTransform(p, [0, 0.12], [0, 1]);
  const titleY = useTransform(p, [0, 0.12], [22, 0]);
  const aiOp = useTransform(p, [0.78, 0.95], [0, 1]);

  return (
    <Container className="w-full">
      <motion.div style={{ opacity: titleOp, y: titleY }} className="mx-auto mb-12 max-w-2xl text-center">
        <Eyebrow noRule>{t.engine.eyebrow}</Eyebrow>
        <h2 className="mt-4 text-balance text-[clamp(1.9rem,4vw,3rem)]">
          {t.engine.titleA}
          <span className="gradient-text">{t.engine.titleAccent}</span>
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">{t.engine.subtitle}</p>
      </motion.div>

      <div className="relative mx-auto max-w-4xl">
        {/* progress rail */}
        <div className="absolute left-0 right-0 top-5 h-[2px] bg-[var(--hair)]">
          <motion.div style={{ scaleX: railFill }} className="h-full origin-left" data-aurora>
            <div className="h-full w-full" style={{ background: "var(--aurora)" }} />
          </motion.div>
        </div>
        <div className="relative grid grid-cols-4 gap-y-8 sm:grid-cols-8">
          {steps.map((s, i) => (
            <Stage key={s} p={p} i={i} total={steps.length} code={String(i + 1).padStart(2, "0")} label={s} />
          ))}
        </div>
      </div>

      <motion.div style={{ opacity: aiOp }} className="mx-auto mt-12 max-w-2xl">
        <div className="card card-accent p-6 text-center">
          <div className="font-display text-lg font-semibold text-fg">{t.engine.aiTitle}</div>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t.engine.aiBody}</p>
        </div>
      </motion.div>
    </Container>
  );
}

export default function WorkflowEngine() {
  return <ScrollStage height="260vh" className="section-soft">{(p) => <Scene p={p} />}</ScrollStage>;
}

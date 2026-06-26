"use client";

import { Workflow, Settings2, ShieldCheck, LineChart, FileText, Plug } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { useI18n } from "@/lib/i18n";

const ICONS = [Workflow, Settings2, ShieldCheck, LineChart, FileText, Plug];

export default function ConsultingContent() {
  const { t } = useI18n();
  const cp = t.consultingPage;
  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--hair)] pt-16 pb-14 sm:pt-24">
        <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow noRule>{cp.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.2rem,5.4vw,3.6rem)] font-semibold">
              {cp.hero.titleA}
              <span className="gradient-text">{cp.hero.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted sm:text-lg">{cp.hero.subcopy}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.consulting.items.map((it, i) => {
              const Icon = ICONS[i];
              return (
                <StaggerItem key={it.t}>
                  <div className="card card-hover h-full p-7">
                    <span className="flex h-11 w-11 items-center justify-center rounded-[6px] border border-[var(--hair)] bg-[var(--color-accent-soft)] text-accent">
                      <Icon size={20} strokeWidth={1.8} />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold text-fg">{it.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{it.d}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>
    </>
  );
}

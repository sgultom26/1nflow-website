"use client";

import Link from "next/link";
import {
  FileText,
  Building2,
  MessageSquare,
  LineChart,
  ShieldCheck,
  Banknote,
  Clock,
  Workflow,
  Settings2,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal, { Stagger, StaggerItem } from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import Eyebrow from "@/components/ui/Eyebrow";
import AuroraBg from "@/components/graphics/AuroraBg";
import WorkflowEngine from "@/components/graphics/WorkflowEngine";
import ProofCounters from "@/components/graphics/ProofCounters";
import { useI18n } from "@/lib/i18n";

const V_ICONS = [FileText, Building2, MessageSquare, LineChart, ShieldCheck];
const WHY_ICONS = [Banknote, Clock, ShieldCheck, Workflow];
const CONS_ICONS = [Workflow, Settings2, ShieldCheck, LineChart, FileText, ArrowUpRight];

function StatusBadge({ status }: { status: string }) {
  const live = status.toLowerCase() === "live";
  return (
    <span
      className={`rounded-full px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
        live ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)]" : "bg-[var(--color-bg-soft)] text-faint"
      }`}
    >
      {status}
    </span>
  );
}

export default function HomeContent() {
  const { t, localize } = useI18n();

  return (
    <>
      {/* ===== HERO (aurora) ===== */}
      <section className="relative overflow-hidden border-b border-[var(--hair)]">
        <AuroraBg className="pointer-events-none absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 -z-0 grid-bg" aria-hidden />
        <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow noRule>{t.hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance text-[clamp(2.5rem,5.6vw,4.4rem)] font-semibold leading-[1.04]">
                {t.hero.titleA}
                <span className="gradient-text">{t.hero.titleAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {t.hero.subcopy}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={localize("/contact")} className="btn btn-primary">
                  {t.hero.ctaPrimary} <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
                <Link href={localize("/platform")} className="btn btn-ghost">
                  {t.hero.ctaSecondary} <ArrowUpRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Stagger className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.hero.stats.map((s) => (
              <StaggerItem key={s.v}>
                <div className="card h-full p-5">
                  <div className="font-display text-3xl font-semibold text-fg">
                    {s.k}
                    <span className="ml-1 align-baseline font-mono text-xs font-medium text-accent">{s.unit}</span>
                  </div>
                  <div className="mt-2 text-[12.5px] leading-relaxed text-muted">{s.v}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ===== ENGINE (pinned BPMN) ===== */}
      <WorkflowEngine />

      {/* ===== PLATFORM ===== */}
      <section id="platform" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.platform.eyebrow}
            title={<>{t.platform.titleA}<span className="gradient-text">{t.platform.titleAccent}</span></>}
            subtitle={t.platform.subtitle}
          />
          <Stagger className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {t.platform.verticals.map((v, i) => {
              const Icon = V_ICONS[i];
              return (
                <StaggerItem key={v.name}>
                  <div className="card card-hover h-full p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-[6px] border border-[var(--hair)] bg-[var(--color-accent-soft)] text-accent">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <StatusBadge status={v.status} />
                    </div>
                    <div className="mono-label mt-5">{v.code}</div>
                    <h3 className="mt-1 font-display text-lg font-semibold text-fg">{v.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.lede}</p>
                    <ul className="mt-4 space-y-1.5">
                      {v.points.slice(0, 3).map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-[12.5px] text-muted">
                          <Check size={14} strokeWidth={2.6} className="mt-0.5 flex-none text-accent" /> {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ===== WHY ===== */}
      <section className="section-soft py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.why.eyebrow}
            title={<>{t.why.titleA}<span className="gradient-text">{t.why.titleAccent}</span></>}
            subtitle={t.why.subtitle}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((it, i) => {
              const Icon = WHY_ICONS[i];
              return (
                <StaggerItem key={it.t}>
                  <div className="card card-hover h-full p-6">
                    <Icon size={20} className="text-accent" />
                    <h3 className="mt-4 text-[15px] font-semibold text-fg">{it.t}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{it.d}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section id="industries" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <SectionHeader
            align="center"
            className="mb-12"
            eyebrow={t.industries.eyebrow}
            title={<>{t.industries.titleA}<span className="gradient-text">{t.industries.titleAccent}</span></>}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.items.map((it) => (
              <StaggerItem key={it.name}>
                <div className="card card-hover h-full p-6">
                  <h3 className="text-[15px] font-semibold text-fg">{it.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{it.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* ===== CONSULTING teaser ===== */}
      <section className="section-soft py-20 sm:py-28">
        <Container>
          <SectionHeader
            className="mb-12"
            eyebrow={t.consulting.eyebrow}
            title={<>{t.consulting.titleA}<span className="gradient-text">{t.consulting.titleAccent}</span></>}
            subtitle={t.consulting.subtitle}
          />
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {t.consulting.items.map((it, i) => {
              const Icon = CONS_ICONS[i];
              return (
                <StaggerItem key={it.t}>
                  <div className="card h-full p-6">
                    <Icon size={18} className="text-accent" />
                    <h3 className="mt-3 text-[15px] font-semibold text-fg">{it.t}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{it.d}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
          <Reveal className="mt-8">
            <Link href={localize("/consulting")} className="btn btn-ghost">
              {t.nav.consulting} <ArrowRight size={16} />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ===== PROOF ===== */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeader align="center" className="mb-12" eyebrow={t.proof.eyebrow} title={t.proof.title} subtitle={t.proof.note} />
          <ProofCounters />
        </Container>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="card card-accent glow-aurora relative overflow-hidden p-10 text-center sm:p-16">
              <h2 className="mx-auto max-w-2xl text-balance text-[clamp(1.9rem,4vw,3rem)]">
                {t.cta.titleA}<span className="gradient-text">{t.cta.titleAccent}</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">{t.cta.subcopy}</p>
              <div className="mt-8 flex justify-center">
                <Link href={localize("/contact")} className="btn btn-primary">
                  {t.cta.button} <ArrowRight size={16} strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

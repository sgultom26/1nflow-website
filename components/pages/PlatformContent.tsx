"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import VerticalMotif, { type MotifKind } from "@/components/graphics/VerticalMotifs";
import { useI18n } from "@/lib/i18n";

const KINDS: MotifKind[] = ["los", "appraisal", "collections", "treasury", "cdd"];
const IDS = ["los", "appraisal", "collections", "treasury", "cdd"];

export default function PlatformContent() {
  const { t, localize } = useI18n();
  const pp = t.platformPage;

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--hair)] pt-16 pb-14 sm:pt-24">
        <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow noRule>{pp.hero.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-balance text-[clamp(2.2rem,5.4vw,3.6rem)] font-semibold">
              {pp.hero.titleA}
              <span className="gradient-text">{pp.hero.titleAccent}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted sm:text-lg">{pp.hero.subcopy}</p>
          </Reveal>
        </Container>
      </section>

      {t.platform.verticals.map((v, i) => (
        <section
          key={v.name}
          id={IDS[i]}
          className={`scroll-mt-24 py-16 sm:py-20 ${i % 2 ? "section-soft" : ""}`}
        >
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal className={i % 2 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="mono-label">{v.code}</span>
                  <span className="mono-label text-accent">{v.status}</span>
                </div>
                <h2 className="mt-2 font-display text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold text-fg">{v.name}</h2>
                <p className="mt-4 max-w-md leading-relaxed text-muted">{v.lede}</p>
                <div className="mono-label mt-7">{pp.capabilitiesLabel}</div>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {v.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-muted">
                      <Check size={16} strokeWidth={2.5} className="mt-0.5 flex-none text-accent" /> {pt}
                    </li>
                  ))}
                </ul>
                <Link href={localize("/contact")} className="btn btn-ghost mt-8">
                  {t.common.requestDemo} <ArrowRight size={15} strokeWidth={2.2} />
                </Link>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 ? "lg:order-1" : ""}>
                <div className="card card-accent p-6 sm:p-7">
                  <VerticalMotif kind={KINDS[i]} />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}

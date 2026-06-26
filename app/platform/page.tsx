import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import PlatformContent from "@/components/pages/PlatformContent";

export const metadata: Metadata = {
  title: "Platform",
  description: "Five vertical banking products on one BPMN/DMN engine — LOS, Appraisal, Collections, Treasury and CDD.",
  alternates: { canonical: "/platform", languages: { en: "/platform", id: "/id/platform", "x-default": "/platform" } },
};

export default function Platform() {
  return (
    <LocaleShell locale="en">
      <PlatformContent />
    </LocaleShell>
  );
}

import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import PlatformContent from "@/components/pages/PlatformContent";

export const metadata: Metadata = {
  title: "Platform",
  description: "Lima produk perbankan vertikal di atas satu mesin BPMN/DMN — LOS, Appraisal, Collections, Treasury, dan CDD.",
  alternates: { canonical: "/id/platform", languages: { en: "/platform", id: "/id/platform", "x-default": "/platform" } },
  openGraph: { locale: "id_ID" },
};

export default function PlatformId() {
  return (
    <LocaleShell locale="id">
      <PlatformContent />
    </LocaleShell>
  );
}

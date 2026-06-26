import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ConsultingContent from "@/components/pages/ConsultingContent";

export const metadata: Metadata = {
  title: "Konsultasi",
  description: "Transformasi digital, infrastruktur cloud dan on-prem, keamanan siber, dan custom engineering untuk bank di Indonesia.",
  alternates: { canonical: "/id/consulting", languages: { en: "/consulting", id: "/id/consulting", "x-default": "/consulting" } },
  openGraph: { locale: "id_ID" },
};

export default function ConsultingId() {
  return (
    <LocaleShell locale="id">
      <ConsultingContent />
    </LocaleShell>
  );
}

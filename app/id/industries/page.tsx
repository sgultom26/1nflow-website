import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import IndustriesContent from "@/components/pages/IndustriesContent";

export const metadata: Metadata = {
  title: "Industri",
  description: "1nFlow untuk BPR & BPD, bank umum (KBMI 1–4), multifinance, fintech lending, koperasi, dan pemberi pinjaman agritech.",
  alternates: { canonical: "/id/industries", languages: { en: "/industries", id: "/id/industries", "x-default": "/industries" } },
  openGraph: { locale: "id_ID" },
};

export default function IndustriesId() {
  return (
    <LocaleShell locale="id">
      <IndustriesContent />
    </LocaleShell>
  );
}

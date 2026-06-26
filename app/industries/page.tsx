import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import IndustriesContent from "@/components/pages/IndustriesContent";

export const metadata: Metadata = {
  title: "Industries",
  description: "1nFlow for BPR & BPD, commercial banks (KBMI 1–4), multifinance, fintech lending, cooperatives and agritech lenders.",
  alternates: { canonical: "/industries", languages: { en: "/industries", id: "/id/industries", "x-default": "/industries" } },
};

export default function Industries() {
  return (
    <LocaleShell locale="en">
      <IndustriesContent />
    </LocaleShell>
  );
}

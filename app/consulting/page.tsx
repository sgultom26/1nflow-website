import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ConsultingContent from "@/components/pages/ConsultingContent";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Digital transformation, cloud and on-prem infrastructure, cybersecurity and custom engineering for Indonesian banks.",
  alternates: { canonical: "/consulting", languages: { en: "/consulting", id: "/id/consulting", "x-default": "/consulting" } },
};

export default function Consulting() {
  return (
    <LocaleShell locale="en">
      <ConsultingContent />
    </LocaleShell>
  );
}

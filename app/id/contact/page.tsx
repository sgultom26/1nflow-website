import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Hubungi sales",
  description: "Lihat 1nFlow pada portofolio Anda — minta demo live platform workflow untuk pemberi pinjaman Indonesia.",
  alternates: { canonical: "/id/contact", languages: { en: "/contact", id: "/id/contact", "x-default": "/contact" } },
  openGraph: { locale: "id_ID" },
};

export default function ContactId() {
  return (
    <LocaleShell locale="id">
      <ContactContent />
    </LocaleShell>
  );
}

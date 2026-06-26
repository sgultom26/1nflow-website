import type { Metadata } from "next";
import LocaleShell from "@/components/site/LocaleShell";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Talk to sales",
  description: "See 1nFlow on your portfolio — request a live demo of the workflow platform for Indonesian lenders.",
  alternates: { canonical: "/contact", languages: { en: "/contact", id: "/id/contact", "x-default": "/contact" } },
};

export default function Contact() {
  return (
    <LocaleShell locale="en">
      <ContactContent />
    </LocaleShell>
  );
}

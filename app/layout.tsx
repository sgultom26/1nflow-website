import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";

const description =
  "1nFlow is the workflow platform Indonesian lenders run on — loan origination, collateral appraisal, collections, treasury and CDD on one BPMN/DMN engine, POJK-aligned, with AI-assisted credit analysis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "1nFlow — Banking software for Indonesian lenders", template: "%s · 1nFlow" },
  description,
  openGraph: {
    type: "website",
    siteName: "1nFlow",
    url: SITE_URL,
    title: "1nFlow — Banking software for Indonesian lenders",
    description,
  },
  twitter: { card: "summary_large_image", title: "1nFlow", description },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

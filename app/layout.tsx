import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";
import SmoothScroll from "@/components/motion/SmoothScroll";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}#org`, name: "1nFlow", url: SITE_URL, description, parentOrganization: { "@type": "Organization", name: "1nx", url: "https://1nx.io" } },
    { "@type": "WebSite", "@id": `${SITE_URL}#site`, url: SITE_URL, name: "1nFlow", publisher: { "@id": `${SITE_URL}#org` } },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

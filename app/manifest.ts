import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "1nFlow — Banking software for Indonesian lenders",
    short_name: "1nFlow",
    description: "Loan origination, appraisal, collections, treasury and CDD on one BPMN/DMN engine.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d4a017",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

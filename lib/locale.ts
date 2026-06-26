export type Locale = "en" | "id";

/** Pure locale decision used by middleware (unit-tested). */
export function decideLocale(opts: {
  cookie?: string | null;
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale | null {
  if (opts.cookie === "en") return "en";
  if (opts.cookie === "id") return "id";
  const country = opts.country || "";
  const accept = (opts.acceptLanguage || "").toLowerCase();
  if (country === "ID" || accept.startsWith("id") || /(^|[,\s])id\b/.test(accept)) return "id";
  return null;
}

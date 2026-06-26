import { expect, test } from "vitest";
import { makeLocalize } from "@/lib/i18n";

test("en is identity", () => {
  const l = makeLocalize("en");
  expect(l("/platform")).toBe("/platform");
});

test("id prefixes internal paths", () => {
  const l = makeLocalize("id");
  expect(l("/")).toBe("/id");
  expect(l("/platform")).toBe("/id/platform");
  expect(l("/#x")).toBe("/id#x");
  expect(l("/id/x")).toBe("/id/x");
  expect(l("https://1nx.io")).toBe("https://1nx.io");
});

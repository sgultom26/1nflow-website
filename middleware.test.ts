import { expect, test } from "vitest";
import { decideLocale } from "@/lib/locale";

test("cookie wins", () => {
  expect(decideLocale({ cookie: "en", country: "ID" })).toBe("en");
  expect(decideLocale({ cookie: "id" })).toBe("id");
});
test("ID geo / accept-language → id", () => {
  expect(decideLocale({ country: "ID" })).toBe("id");
  expect(decideLocale({ acceptLanguage: "id-ID,id;q=0.9" })).toBe("id");
});
test("no signal → null", () => {
  expect(decideLocale({ country: "US", acceptLanguage: "en-US" })).toBeNull();
});

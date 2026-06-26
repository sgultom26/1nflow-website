import { expect, test } from "vitest";
import { validateContact } from "@/lib/contact";

test("invalid → errors", () => {
  const r = validateContact({ email: "bad", message: "hi" });
  expect(r.ok).toBe(false);
  expect(r.errors).toContain("name");
  expect(r.errors).toContain("email");
});

test("valid → ok", () => {
  const r = validateContact({ name: "A", email: "a@b.co.id", message: "hello" });
  expect(r.ok).toBe(true);
  expect(r.errors).toHaveLength(0);
});

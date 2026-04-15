import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "uk", "ru"],
  defaultLocale: "de",
});

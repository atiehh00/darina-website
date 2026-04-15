"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "uk" | "ru") {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
      <button
        onClick={() => switchLocale("uk")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${
          locale === "uk"
            ? "bg-[#1e3a5f] text-white shadow-sm"
            : "text-gray-600 hover:text-[#1e3a5f]"
        }`}
      >
        UA
      </button>
      <button
        onClick={() => switchLocale("ru")}
        className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${
          locale === "ru"
            ? "bg-[#1e3a5f] text-white shadow-sm"
            : "text-gray-600 hover:text-[#1e3a5f]"
        }`}
      >
        RU
      </button>
    </div>
  );
}

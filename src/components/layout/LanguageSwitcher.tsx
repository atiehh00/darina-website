"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: "de" | "uk" | "ru") {
    router.replace(pathname, { locale: newLocale });
  }

  const locales = [
    { code: "uk" as const, label: "UA" },
    { code: "ru" as const, label: "RU" },
    { code: "de" as const, label: "DE" },
  ];

  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => switchLocale(code)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all cursor-pointer ${
            locale === code
              ? "bg-[#1e3a5f] text-white shadow-sm"
              : "text-gray-600 hover:text-[#1e3a5f]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

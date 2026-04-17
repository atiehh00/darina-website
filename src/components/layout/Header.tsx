"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const tContact = useTranslations("contact");
  const tHours = useTranslations("hours");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-[#f5f3ef]/95 backdrop-blur-md border-b border-[#d9d5cc]">
      {/* Top bar: hours + red contact block */}
      <div className="hidden md:flex w-full items-stretch border-b border-[#e5e1d6] text-xs">
        <div className="flex-1 flex items-center gap-6 px-6 py-2 text-[#5a5a5a]">
          <span>{tHours("weekdays")}</span>
          <span>{tHours("friday")}</span>
        </div>
        <div className="flex items-center bg-[#a12d2d] text-white px-6 py-2 gap-6">
          <span className="font-medium tracking-wide">{tContact("reachable")}</span>
          <a href={`tel:${tContact("info_phone")}`} className="flex items-center gap-2 hover:opacity-80">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {tContact("info_phone")}
          </a>
          <a href={`mailto:${tContact("info_email")}`} className="flex items-center gap-2 hover:opacity-80">
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {tContact("info_email")}
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-[#2c2c2c]">
            Darina
          </span>
          <span className="text-[0.65rem] tracking-[0.3em] text-[#5a5a5a] uppercase mt-1">
            Rechtsberatung
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-[#4a4a4a] hover:text-[#a12d2d] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#a12d2d] transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#a12d2d] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#a12d2d] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e5e1d6] bg-[#f5f3ef] px-6 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-[0.15em] uppercase text-[#4a4a4a] hover:text-[#a12d2d] py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-[#e5e1d6] space-y-2 text-sm">
            <a href={`tel:${tContact("info_phone")}`} className="flex items-center gap-2 text-[#a12d2d]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {tContact("info_phone")}
            </a>
            <a href={`mailto:${tContact("info_email")}`} className="flex items-center gap-2 text-[#a12d2d]">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              {tContact("info_email")}
            </a>
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

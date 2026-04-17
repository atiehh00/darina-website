import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();

  const primaryLinks = [
    { href: "/immigration/rwr-plus", label: t("nav.rwr_plus") },
    { href: "/immigration/settlement", label: t("nav.settlement") },
    { href: "/immigration/family-reunification", label: t("nav.family") },
    { href: "/immigration/student-visa", label: t("nav.student") },
    { href: "/legal/support", label: t("nav.legal_support") },
    { href: "/legal/certificates", label: t("nav.certificates") },
    { href: "/legal/real-estate", label: t("nav.real_estate") },
    { href: "/integration/german-rwr", label: t("nav.german_rwr") },
    { href: "/integration/legal-courses", label: t("nav.legal_courses") },
    { href: "/prices", label: t("nav.prices") },
  ];

  const bottomNav: { href?: string; label: string }[] = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/prices", label: t("nav.prices") },
    { href: "/contact", label: t("nav.contact") },
    { label: t("footer.imprint") },
    { label: t("footer.privacy") },
  ];

  return (
    <footer className="bg-[#2a2a2a] text-white">
      {/* Top - brand + info blocks */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none mb-5">
              <span className="font-serif text-2xl tracking-[0.15em] text-white uppercase">
                De Jure De Facto
              </span>
              <span className="text-[0.65rem] tracking-[0.4em] text-gray-400 uppercase mt-1.5">
                Consulting
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("meta.description")}
            </p>
          </div>

          <div>
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 mb-3">
              {t("footer.office")}
            </h4>
            <address className="not-italic text-sm text-gray-300 leading-relaxed">
              {t("contact.info_location")}
            </address>
          </div>

          <div>
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 mb-3">
              {t("footer.contact")}
            </h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>
                <span className="text-gray-500">Tel.:</span>{" "}
                <a
                  href={`tel:${t("contact.info_phone")}`}
                  className="hover:text-white transition-colors"
                >
                  {t("contact.info_phone")}
                </a>
              </p>
              <p>
                <span className="text-gray-500">E-Mail:</span>{" "}
                <a
                  href={`mailto:${t("contact.info_email")}`}
                  className="hover:text-white transition-colors"
                >
                  {t("contact.info_email")}
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[0.65rem] tracking-[0.25em] uppercase text-gray-500 mb-3">
              {t("footer.hours")}
            </h4>
            <div className="text-sm text-gray-300 space-y-1">
              <p>
                <span className="text-gray-500">Mo–Do:</span>{" "}
                {t("hours.weekdays_short")}
              </p>
              <p>
                <span className="text-gray-500">Fr:</span>{" "}
                {t("hours.friday_short")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sitemap */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h4 className="uppercase tracking-[0.25em] text-xs text-gray-400 mb-6">
            {t("footer.sitemap")}
          </h4>
          <div className="grid gap-y-3 gap-x-6 md:grid-cols-2 lg:grid-cols-4 text-sm">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors flex items-start gap-2"
              >
                <span className="text-[#a12d2d]">›</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav with · separators */}
      <div className="bg-[#1f1f1f]">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <nav className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-[0.65rem] tracking-[0.25em] uppercase text-gray-500">
            {bottomNav.map((item, idx) => (
              <span key={idx} className="flex items-center gap-3">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="hover:text-white transition-colors cursor-pointer">
                    {item.label}
                  </span>
                )}
                {idx < bottomNav.length - 1 && (
                  <span className="text-gray-700">·</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[0.65rem] tracking-wide text-gray-600">
          <p>
            © {new Date().getFullYear()} De Jure De Facto Consulting.{" "}
            {t("footer.rights")}.
          </p>
          <p>Wien, Österreich</p>
        </div>
      </div>
    </footer>
  );
}

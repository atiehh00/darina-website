import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#2a2a2a] text-white">
      {/* Top - brand / contact blocks */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none mb-4">
              <span className="font-serif text-2xl tracking-wide">Darina</span>
              <span className="text-[0.6rem] tracking-[0.3em] text-gray-400 uppercase mt-1">
                Rechtsberatung
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t("meta.description")}
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gray-300 mb-4">
              {t("footer.office")}
            </h4>
            <address className="not-italic text-sm text-gray-400 leading-relaxed">
              {t("contact.info_location")}
            </address>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-gray-300 mb-4">
              {t("footer.contact")}
            </h4>
            <div className="text-sm text-gray-400 space-y-1">
              <p>
                <span className="text-gray-500">Tel.:</span> {t("contact.info_phone")}
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
            <h4 className="text-xs tracking-[0.25em] uppercase text-gray-300 mb-4">
              {t("footer.hours")}
            </h4>
            <div className="text-sm text-gray-400 space-y-1">
              <p>
                <span className="text-gray-500">Mo–Do:</span> {t("hours.weekdays_short")}
              </p>
              <p>
                <span className="text-gray-500">Fr:</span> {t("hours.friday_short")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle - sitemap */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <h4 className="text-xs tracking-[0.25em] uppercase text-gray-300 mb-6">
            {t("footer.sitemap")}
          </h4>
          <div className="grid gap-6 md:grid-cols-4 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-white transition-colors"
            >
              › {t("nav.home")}
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              › {t("nav.about")}
            </Link>
            <Link
              href="/services"
              className="text-gray-400 hover:text-white transition-colors"
            >
              › {t("nav.services")}
            </Link>
            <Link
              href="/blog"
              className="text-gray-400 hover:text-white transition-colors"
            >
              › {t("nav.blog")}
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              › {t("nav.contact")}
            </Link>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              › {t("footer.imprint")}
            </span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
              › {t("footer.privacy")}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-[#1f1f1f]">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Darina Rechtsberatung. {t("footer.rights")}.
          </p>
          <p>Wien, Österreich</p>
        </div>
      </div>
    </footer>
  );
}

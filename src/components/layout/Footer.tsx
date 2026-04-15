import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4a843] text-white font-bold text-lg">
                D
              </div>
              <span className="text-xl font-bold">Darina</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              {t("meta.description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4a843]">
              {t("nav.home")}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                href="/services"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {t("nav.services")}
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/blog"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {t("nav.blog")}
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-[#d4a843]">
              {t("contact.info_title")}
            </h4>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <p>{t("contact.info_email")}</p>
              <p>{t("contact.info_phone")}</p>
              <p>{t("contact.info_location")}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Darina. {t("footer.rights")}.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">
              {t("footer.privacy")}
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {t("footer.imprint")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

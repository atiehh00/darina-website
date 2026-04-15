import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#16304f] text-white py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-gray-200 text-lg">{t("contact.subtitle")}</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.name_placeholder")}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  placeholder={t("contact.email_placeholder")}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.phone")}
                </label>
                <input
                  type="tel"
                  placeholder={t("contact.phone_placeholder")}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("contact.message")}
                </label>
                <textarea
                  rows={5}
                  placeholder={t("contact.message_placeholder")}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-[#1e3a5f] px-6 py-3 text-white font-semibold hover:bg-[#16304f] transition-colors cursor-pointer"
              >
                {t("contact.send")}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-8">
              {t("contact.info_title")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f]/10 text-[#1e3a5f]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t("contact.email")}</p>
                  <p className="text-gray-600">{t("contact.info_email")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f]/10 text-[#1e3a5f]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t("contact.phone")}</p>
                  <p className="text-gray-600">{t("contact.info_phone")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1e3a5f]/10 text-[#1e3a5f]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Location</p>
                  <p className="text-gray-600">{t("contact.info_location")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

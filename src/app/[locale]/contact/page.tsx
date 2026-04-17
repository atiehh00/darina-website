import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const JUSTITIA_URL =
  "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=80";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-[#ebe8e2] py-20 px-4 border-b border-[#d9d5cc]">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2c2c2c] mb-4">
            {t("contact.title")}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mx-auto mb-4" />
          <p className="text-[#5a5a5a]">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${JUSTITIA_URL})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#f5f3ef]/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-[#4a4a4a]">
              <h3 className="font-serif text-2xl text-[#2c2c2c]">
                {t("contact.info_title")}
              </h3>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#a12d2d] mb-1">
                  {t("contact.email")}
                </p>
                <a href={`mailto:${t("contact.info_email")}`} className="hover:text-[#a12d2d]">
                  {t("contact.info_email")}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#a12d2d] mb-1">
                  {t("contact.phone")}
                </p>
                <a href={`tel:${t("contact.info_phone")}`} className="hover:text-[#a12d2d]">
                  {t("contact.info_phone")}
                </a>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-[#a12d2d] mb-1">
                  {t("footer.office")}
                </p>
                <p>{t("contact.info_location")}</p>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-10 border border-[#e5e1d6]">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t("contact.name_placeholder")}
                  className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder={t("contact.address_placeholder")}
                  className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder={t("contact.phone_placeholder")}
                    className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder={t("contact.email_placeholder")}
                    className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors"
                  />
                </div>
                <textarea
                  rows={5}
                  placeholder={t("contact.message_placeholder")}
                  className="w-full border border-[#d9d5cc] bg-transparent p-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors resize-none mt-4"
                />
                <label className="flex items-start gap-2 text-xs text-[#5a5a5a]">
                  <input type="checkbox" className="mt-1" />
                  <span>{t("contact.privacy_notice")}</span>
                </label>
                <div className="flex justify-end">
                  <Button type="submit" variant="primary">
                    {t("contact.send_now")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

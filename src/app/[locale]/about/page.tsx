import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#16304f] text-white py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("about.title")}
          </h1>
          <p className="text-gray-200 text-lg">{t("about.subtitle")}</p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex items-center justify-center">
            <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-[#1e3a5f] to-[#d4a843] opacity-20" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">
              {t("about.subtitle")}
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              {t("about.text")}
            </p>
            <Button href="/contact">{t("about.cta")}</Button>
          </div>
        </div>
      </Section>

      <Section bg="dark">
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">
            {t("cta_section.title")}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {t("cta_section.subtitle")}
          </p>
          <Button href="/contact" variant="secondary">
            {t("cta_section.button")}
          </Button>
        </div>
      </Section>
    </>
  );
}

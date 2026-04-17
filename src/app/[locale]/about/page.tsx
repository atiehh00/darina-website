import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const t = useTranslations();
  const tCommon = useTranslations("common");

  const values = [
    {
      titleKey: "about.value_honest_title",
      textKey: "about.value_honest_text",
    },
    {
      titleKey: "about.value_personal_title",
      textKey: "about.value_personal_text",
    },
    {
      titleKey: "about.value_multilingual_title",
      textKey: "about.value_multilingual_text",
    },
    {
      titleKey: "about.value_punctual_title",
      textKey: "about.value_punctual_text",
    },
  ];

  return (
    <>
      <section className="relative bg-[#f5f3ef] overflow-hidden">
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse at right center, rgba(95,25,40,0.12) 0%, rgba(245,243,239,0) 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 md:py-28">
          <h1 className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#2c2c2c] mb-6 max-w-4xl">
            {t("about.title")}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mb-8" />
          <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-3xl">
            {t("about.lead")}
          </p>
        </div>
      </section>

      <Section bg="white">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#4a4a4a] leading-relaxed text-lg mb-6">
            {t("about.text")}
          </p>
          <p className="text-[#4a4a4a] leading-relaxed text-lg mb-6">
            {t("about.text_second")}
          </p>
          <p className="text-[#4a4a4a] leading-relaxed text-lg">
            {t("about.body")}
          </p>
        </div>
      </Section>

      <Section bg="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-3">
            {t("about.values_title")}
          </h2>
          <div className="w-12 h-px bg-[#a12d2d] mb-10" />
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.titleKey}
                className="bg-white p-6 border-l-4 border-[#a12d2d]"
              >
                <h3 className="font-serif text-lg text-[#a12d2d] mb-2 uppercase tracking-wide">
                  {t(v.titleKey)}
                </h3>
                <p className="text-[#4a4a4a] leading-relaxed">{t(v.textKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section bg="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-4">
            {t("cta_section.title")}
          </h2>
          <p className="text-[#5a5a5a] mb-8 max-w-xl mx-auto">
            {t("cta_section.subtitle")}
          </p>
          <Button href="/contact" variant="primary">
            {tCommon("book_consultation")}
          </Button>
        </div>
      </Section>
    </>
  );
}

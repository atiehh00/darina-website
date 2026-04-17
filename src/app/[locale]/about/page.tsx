import Image from "next/image";
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
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#2c2c2c] mb-6">
                {t("about.title")}
              </h1>
              <div className="w-16 h-px bg-[#a12d2d] mb-8" />
              <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed">
                {t("about.lead")}
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
              <Image
                src="/images/about/business-woman-coffee.jpg"
                alt={t("about.title")}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
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

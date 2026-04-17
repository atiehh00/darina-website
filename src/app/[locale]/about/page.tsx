import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const JUSTITIA_URL =
  "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=80";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-[#ebe8e2] py-20 px-4 border-b border-[#d9d5cc]">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2c2c2c] mb-4">
            {t("about.title")}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mx-auto mb-4" />
          <p className="text-[#5a5a5a]">{t("about.subtitle")}</p>
        </div>
      </section>

      <Section bg="cream">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="aspect-[3/4] bg-cover bg-center"
            style={{ backgroundImage: `url(${JUSTITIA_URL})` }}
            aria-hidden="true"
          />
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-2">
              <span className="font-serif text-6xl text-[#a12d2d] align-middle mr-1">
                D
              </span>
              arina
            </h2>
            <p className="text-sm tracking-[0.2em] uppercase text-[#a12d2d] mb-6 ml-14">
              {t("about.subtitle")}
            </p>
            <p className="text-[#4a4a4a] leading-relaxed mb-4">{t("about.text")}</p>
            <p className="text-[#4a4a4a] leading-relaxed mb-8">
              {t("about.text_second")}
            </p>
            <Button href="/contact" variant="primary">
              {t("about.cta")}
            </Button>
          </div>
        </div>
      </Section>

      <Section bg="dark">
        <div className="text-center py-8">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            {t("cta_section.title")}
          </h2>
          <div className="w-16 h-px bg-[#a12d2d] mx-auto mb-6" />
          <p className="text-gray-300 mb-8">{t("cta_section.subtitle")}</p>
          <Button href="/contact" variant="primary">
            {t("cta_section.button")}
          </Button>
        </div>
      </Section>
    </>
  );
}

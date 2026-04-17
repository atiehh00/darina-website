import { useTranslations } from "next-intl";
import Section from "./Section";
import Button from "./Button";

type ServicePageProps = {
  /** Translation key prefix, e.g. "pages.rwr_plus" */
  pageKey: string;
  /** Show services list (array from messages.services) */
  showServices?: boolean;
  /** Show typical cases block (single string from messages.typical_cases) */
  showTypicalCases?: boolean;
  /** Show topics block (single string from messages.topics) */
  showTopics?: boolean;
  /** Show important note (string from messages.note) */
  showNote?: boolean;
};

export default function ServicePage({
  pageKey,
  showServices = false,
  showTypicalCases = false,
  showTopics = false,
  showNote = false,
}: ServicePageProps) {
  const t = useTranslations();
  const tCommon = useTranslations("common");

  const services = showServices
    ? (t.raw(`${pageKey}.services`) as string[])
    : [];
  const typicalCases = showTypicalCases ? t(`${pageKey}.typical_cases`) : "";
  const topics = showTopics ? t(`${pageKey}.topics`) : "";
  const note = showNote ? t(`${pageKey}.note`) : "";

  return (
    <>
      {/* Hero */}
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
            {t(`${pageKey}.title`)}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mb-8" />
          <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-3xl">
            {t(`${pageKey}.lead`)}
          </p>
        </div>
      </section>

      {/* Services list */}
      {showServices && services.length > 0 && (
        <Section bg="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-3">
              {tCommon("services_included")}
            </h2>
            <div className="w-12 h-px bg-[#a12d2d] mb-8" />
            <ul className="space-y-4">
              {services.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 pb-4 border-b border-[#e5e1d6] last:border-b-0"
                >
                  <span className="font-serif text-lg text-[#a12d2d] leading-none pt-1 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#4a4a4a] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {/* Typical cases */}
      {showTypicalCases && typicalCases && (
        <Section bg="cream">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-3">
              {tCommon("typical_cases")}
            </h2>
            <div className="w-12 h-px bg-[#a12d2d] mb-6" />
            <p className="text-[#4a4a4a] leading-relaxed text-lg">
              {typicalCases}
            </p>
          </div>
        </Section>
      )}

      {/* Topics */}
      {showTopics && topics && (
        <Section bg="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-3">
              {tCommon("topics")}
            </h2>
            <div className="w-12 h-px bg-[#a12d2d] mb-6" />
            <p className="text-[#4a4a4a] leading-relaxed text-lg">{topics}</p>
          </div>
        </Section>
      )}

      {/* Note */}
      {showNote && note && (
        <Section bg="cream">
          <div className="max-w-4xl mx-auto bg-white border-l-4 border-[#a12d2d] p-8">
            <h3 className="font-serif text-lg text-[#a12d2d] mb-2 uppercase tracking-wide">
              {tCommon("important_note")}
            </h3>
            <p className="text-[#4a4a4a] leading-relaxed">{note}</p>
          </div>
        </Section>
      )}

      {/* CTA */}
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

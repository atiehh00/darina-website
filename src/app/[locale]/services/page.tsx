import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const services = [
  {
    key: "visa" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.727-3.56" />
      </svg>
    ),
  },
  {
    key: "residence" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    key: "documents" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    key: "legal" as const,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#16304f] text-white py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("services.title")}
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      <Section bg="gray">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.key}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#1e3a5f]/10 text-[#1e3a5f] mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(`services.${service.key}.description`)}
              </p>
            </div>
          ))}
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

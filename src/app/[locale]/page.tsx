import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

function VisaIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.727-3.56" />
    </svg>
  );
}

function ResidenceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function DocumentsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function LegalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
    </svg>
  );
}

const JUSTITIA_URL =
  "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=80";

export default function HomePage() {
  const t = useTranslations();

  const services = [
    { key: "visa" as const, num: "01", icon: <VisaIcon /> },
    { key: "residence" as const, num: "02", icon: <ResidenceIcon /> },
    { key: "documents" as const, num: "03", icon: <DocumentsIcon /> },
    { key: "legal" as const, num: "04", icon: <LegalIcon /> },
  ];

  const areas = t.raw("areas.list") as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f5f3ef] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${JUSTITIA_URL})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(245,243,239,0.95) 0%, rgba(245,243,239,0.8) 45%, rgba(245,243,239,0.15) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36 lg:py-44">
          <div className="max-w-2xl text-center md:text-left md:ml-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2c2c2c] mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-base md:text-lg text-[#5a5a5a] leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/contact" variant="primary">
                {t("hero.cta")}
              </Button>
              <Button href="/services" variant="ghost">
                {t("hero.secondary_cta")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services - numbered cards */}
      <Section bg="cream">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-4">
            {t("services.title")}
          </h2>
          <div className="w-16 h-px bg-[#a12d2d] mx-auto mb-4" />
          <p className="text-[#5a5a5a] max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.key}
              className="group bg-white p-8 border border-[#e5e1d6] hover:border-[#a12d2d]/40 transition-all duration-300 relative"
            >
              <span className="absolute top-6 right-6 font-serif text-2xl text-[#a12d2d]/70">
                {service.num}
              </span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center text-[#a12d2d] group-hover:text-[#7d1f1f] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-[#2c2c2c]">
                {t(`services.${service.key}.title`)}
              </h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                {t(`services.${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* About with drop cap */}
      <Section bg="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-2">
            <span className="font-serif text-6xl md:text-7xl text-[#a12d2d] align-middle mr-1">
              D
            </span>
            arina
          </h2>
          <p className="text-sm tracking-[0.2em] uppercase text-[#a12d2d] mb-10 ml-14">
            {t("about.subtitle")}
          </p>
          <div className="grid md:grid-cols-2 gap-10 text-[#4a4a4a] leading-relaxed">
            <p>{t("about.text")}</p>
            <p>{t("about.text_second")}</p>
          </div>
          <div className="mt-10">
            <Button href="/about" variant="outline">
              {t("about.cta")}
            </Button>
          </div>
        </div>
      </Section>

      {/* Areas of practice - two columns with red underlined links */}
      <Section bg="gray">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          <div className="bg-white p-10 border-l-4 border-[#a12d2d]">
            <h3 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] leading-snug mb-6">
              <span className="font-serif text-5xl text-[#a12d2d] align-top mr-1">
                S
              </span>
              {t("areas.heading")}
            </h3>
            <p className="text-sm text-[#5a5a5a] leading-relaxed">
              {t("areas.lead")}
              <span className="text-[#a12d2d] font-medium"> {t("areas.focus")}</span> →
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
            {areas.map((area: string) => (
              <li key={area} className="flex items-start gap-3 text-[#4a4a4a]">
                <span className="text-[#a12d2d] mt-0.5">»</span>
                <span className="border-b border-[#a12d2d] pb-0.5">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Contact with Justitia image */}
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${JUSTITIA_URL})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#f5f3ef]/70" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div />
            <div className="bg-white/95 backdrop-blur-sm p-10 border border-[#e5e1d6]">
              <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-2">
                {t("contact.title")}
              </h2>
              <p className="text-[#5a5a5a] mb-8">{t("contact.online_form")}</p>
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
                  rows={4}
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

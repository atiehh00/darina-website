import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

function ImmigrationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A8.966 8.966 0 013 12c0-1.264.26-2.467.727-3.56" />
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

function IntegrationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

const JUSTITIA_URL =
  "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1400&q=80";

export default function HomePage() {
  const t = useTranslations();

  const areas = [
    {
      key: "immigration",
      href: "/immigration",
      icon: <ImmigrationIcon />,
      num: "01",
    },
    {
      key: "legal",
      href: "/legal",
      icon: <LegalIcon />,
      num: "02",
    },
    {
      key: "integration",
      href: "/integration",
      icon: <IntegrationIcon />,
      num: "03",
    },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#f5f3ef] overflow-hidden">
        {/* Justitia background image — covers right half on desktop, full bg with overlay on mobile */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right opacity-30 md:opacity-60"
          style={{ backgroundImage: `url(${JUSTITIA_URL})` }}
          aria-hidden="true"
        />
        {/* Cream fade: hides image behind text column */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(245,243,239,0.95) 0%, rgba(245,243,239,0.85) 40%, rgba(245,243,239,0.3) 65%, rgba(245,243,239,0) 85%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="max-w-3xl text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-[#a12d2d] mb-5">
              {t("hero.eyebrow")}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#2c2c2c] mb-6">
              {t("hero.title")}
            </h1>
            <div className="w-16 h-px bg-[#a12d2d] mb-6 mx-auto md:mx-0" />
            <p className="text-base md:text-lg text-[#5a5a5a] leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button href="/contact" variant="primary">
                {t("hero.cta")}
              </Button>
              <Button href="/prices" variant="ghost">
                {t("hero.secondary_cta")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three areas */}
      <Section bg="cream">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-4">
            {t("home_areas.title")}
          </h2>
          <div className="w-16 h-px bg-[#a12d2d] mx-auto" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {areas.map((area) => (
            <Link
              key={area.key}
              href={area.href}
              className="group bg-white p-8 border border-[#e5e1d6] hover:border-[#a12d2d]/40 transition-all duration-300 relative block"
            >
              <span className="absolute top-6 right-6 font-serif text-2xl text-[#a12d2d]/70">
                {area.num}
              </span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center text-[#a12d2d] group-hover:text-[#7d1f1f] transition-colors duration-300">
                {area.icon}
              </div>
              <h3 className="mb-3 font-serif text-xl text-[#2c2c2c] group-hover:text-[#a12d2d] transition-colors">
                {t(`home_areas.${area.key}.title`)}
              </h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed">
                {t(`home_areas.${area.key}.description`)}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why me */}
      <Section bg="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-2">
            <span className="font-serif text-6xl md:text-7xl text-[#a12d2d] align-middle mr-1">
              W
            </span>
            {t("why_me.title").replace(/^W/, "")}
          </h2>
          <div className="w-16 h-px bg-[#a12d2d] mb-8 ml-14" />
          <p className="text-[#4a4a4a] leading-relaxed text-lg">
            {t("why_me.text")}
          </p>
          <div className="mt-10">
            <Button href="/about" variant="outline">
              {t("about.cta")}
            </Button>
          </div>
        </div>
      </Section>

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
            {t("cta_section.button")}
          </Button>
        </div>
      </Section>
    </>
  );
}

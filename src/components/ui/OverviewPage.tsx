import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Section from "./Section";
import Button from "./Button";

type ChildLink = {
  /** Translation key for label, e.g. "nav.rwr_plus" */
  labelKey: string;
  /** Translation key for description, e.g. "pages.rwr_plus.lead" */
  descKey: string;
  /** Target route */
  href: string;
};

type OverviewPageProps = {
  /** Translation key prefix for title/lead, e.g. "pages.immigration" */
  pageKey: string;
  children: ChildLink[];
};

export default function OverviewPage({ pageKey, children }: OverviewPageProps) {
  const t = useTranslations();
  const tCommon = useTranslations("common");

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
          <h1 className="font-serif text-3xl md:text-5xl leading-[1.15] text-[#2c2c2c] mb-6">
            {t(`${pageKey}.title`)}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mb-8" />
          <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-3xl">
            {t(`${pageKey}.lead`)}
          </p>
        </div>
      </section>

      <Section bg="white">
        <div className="grid gap-6 md:grid-cols-2">
          {children.map((child, idx) => (
            <Link
              key={child.href}
              href={child.href}
              className="group block bg-white p-8 border border-[#e5e1d6] hover:border-[#a12d2d]/50 transition-all duration-300 relative"
            >
              <span className="absolute top-6 right-6 font-serif text-2xl text-[#a12d2d]/60">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-[#2c2c2c] mb-3 pr-10 group-hover:text-[#a12d2d] transition-colors">
                {t(child.labelKey)}
              </h3>
              <p className="text-[#5a5a5a] text-sm leading-relaxed mb-4 line-clamp-4">
                {t(child.descKey)}
              </p>
              <span className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase text-[#a12d2d]">
                {tCommon("learn_more")}
                <svg
                  className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
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

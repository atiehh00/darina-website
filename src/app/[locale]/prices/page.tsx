import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

type PriceItem = { name: string; price: string };

export default function PricesPage() {
  const t = useTranslations();
  const tCommon = useTranslations("common");
  const items = t.raw("pages.prices.items") as PriceItem[];

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
            {t("pages.prices.title")}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mb-8" />
          <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-3xl">
            {t("pages.prices.lead")}
          </p>
        </div>
      </section>

      <Section bg="white">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden border border-[#e5e1d6]">
            <table className="w-full">
              <thead className="bg-[#f5f3ef] border-b border-[#e5e1d6]">
                <tr>
                  <th className="text-left font-serif text-sm uppercase tracking-[0.15em] text-[#a12d2d] px-6 py-4">
                    {t("pages.prices.service_col")}
                  </th>
                  <th className="text-right font-serif text-sm uppercase tracking-[0.15em] text-[#a12d2d] px-6 py-4">
                    {t("pages.prices.price_col")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-[#e5e1d6] last:border-b-0 hover:bg-[#f5f3ef]/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-[#2c2c2c]">{item.name}</td>
                    <td className="px-6 py-4 text-right font-medium text-[#4a4a4a]">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 bg-[#f5f3ef] border-l-4 border-[#a12d2d] p-6">
            <p className="text-sm text-[#4a4a4a] leading-relaxed">
              {t("pages.prices.note")}
            </p>
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

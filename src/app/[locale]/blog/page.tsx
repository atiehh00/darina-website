import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";

export default function BlogPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#16304f] text-white py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t("blog.title")}
          </h1>
          <p className="text-gray-200 text-lg">{t("blog.subtitle")}</p>
        </div>
      </section>

      <Section>
        <div className="text-center py-16">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1e3a5f]/10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          </div>
          <p className="text-xl text-gray-500">{t("blog.coming_soon")}</p>
        </div>
      </Section>
    </>
  );
}

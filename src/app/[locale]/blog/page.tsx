import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";

export default function BlogPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-[#ebe8e2] py-20 px-4 border-b border-[#d9d5cc]">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-[#2c2c2c] mb-4">
            {t("blog.title")}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mx-auto mb-4" />
          <p className="text-[#5a5a5a]">{t("blog.subtitle")}</p>
        </div>
      </section>

      <Section bg="cream">
        <div className="text-center py-16">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center text-[#a12d2d]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          </div>
          <p className="font-serif text-xl text-[#5a5a5a]">{t("blog.coming_soon")}</p>
        </div>
      </Section>
    </>
  );
}

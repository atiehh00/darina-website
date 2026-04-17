import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/Button";
import HeroFeaturedCard from "@/components/home/HeroFeaturedCard";

type AreaItem = { name: string; href: string };

export default function HomePage() {
  const t = useTranslations();
  const areas = t.raw("home_areas_new.items") as AreaItem[];

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-[#f5f3ef] overflow-hidden min-h-[720px] md:min-h-[760px]">
        {/* Justitia background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/legal/justitia-silver.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right [filter:grayscale(85%)_contrast(1.1)] opacity-20 md:opacity-100"
          />
        </div>
        {/* Cream gradient fade from left — wider on desktop so image is more visible */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, #f5f3ef 0%, rgba(245,243,239,0.95) 30%, rgba(245,243,239,0.4) 50%, rgba(245,243,239,0) 70%)",
          }}
          aria-hidden="true"
        />

        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-28 pb-32 md:pb-40">
          <div className="max-w-[620px] lg:max-w-[720px]">
            <h1 className="font-serif font-normal leading-[1.05] text-[#2c2c2c] text-4xl md:text-5xl lg:text-[3.5rem] mb-8">
              <span className="block">{t("hero.title_line1")}</span>
              <span className="block">{t("hero.title_line2")}</span>
            </h1>
            <p className="text-base md:text-lg text-[#5a5a5a] leading-relaxed mb-10 max-w-xl">
              {t("hero.subtitle")}
            </p>
            <Button href="/contact" variant="primary">
              {t("hero.cta")}
            </Button>
          </div>
        </div>

        {/* Floating featured card */}
        <HeroFeaturedCard />
      </section>

      {/* ================= ABOUT — Drop-Cap D ================= */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="font-serif text-5xl leading-none text-[#2c2c2c] overflow-hidden">
                <span className="font-serif text-7xl md:text-8xl text-[#a12d2d] float-left leading-[0.8] mr-2 -mt-1">
                  {t("home_about.name").charAt(0)}
                </span>
                {t("home_about.name").slice(1)}
              </h2>
              <p className="text-sm tracking-[0.2em] uppercase text-[#5a5a5a] mt-6">
                {t("home_about.subtitle")}
              </p>
            </div>
            <div className="space-y-5 text-[#4a4a4a] leading-relaxed text-base">
              <p>{t("about.text")}</p>
              <p>{t("about.text_second")}</p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-xs font-medium tracking-[0.2em] uppercase text-[#a12d2d] hover:text-[#7d1f1f] transition-colors"
                >
                  {t("about.cta")}
                  <svg
                    className="ml-2 h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AREAS — Drop-Cap S + list ================= */}
      <section className="bg-[#f5f3ef] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[auto_1fr] gap-12">
            {/* Left: Drop-Cap S box */}
            <div className="bg-white border border-[#e5e1d6] p-8 max-w-xs">
              <p className="font-serif text-base leading-relaxed text-[#2c2c2c] overflow-hidden">
                <span className="font-serif text-7xl text-[#a12d2d] float-left leading-none mr-3 mt-1">
                  {t("home_areas_new.intro_text").charAt(0)}
                </span>
                {t("home_areas_new.intro_text").slice(1)}
              </p>
              <p className="text-xs text-[#5a5a5a] mt-4 leading-relaxed">
                {t("home_areas_new.intro_sub")}
              </p>
            </div>

            {/* Right: two-column areas list */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-base self-start">
              {areas.map((area) => (
                <li key={area.name} className="flex items-start gap-2">
                  <span className="text-[#a12d2d] shrink-0">›</span>
                  <Link
                    href={area.href}
                    className="text-[#2c2c2c] hover:text-[#a12d2d] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CONTACT TEASER ================= */}
      <section className="relative bg-[#2c2c2c] min-h-[580px]">
        <div className="grid md:grid-cols-2 min-h-[580px]">
          {/* Left: Justitia waage image */}
          <div className="relative min-h-[300px] md:min-h-full">
            <Image
              src="/images/legal/justitia-silver.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover [filter:grayscale(50%)_brightness(0.9)]"
            />
            <div
              className="absolute inset-0 bg-[#2c2c2c]/40"
              aria-hidden="true"
            />
          </div>

          {/* Right: Dark form */}
          <div className="bg-[#2c2c2c] p-10 md:p-14 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-2">
              {t("contact_teaser.title")}
            </h2>
            <p className="text-sm text-gray-400 mb-8">
              {t("contact_teaser.subtitle")}
            </p>
            <form className="space-y-5">
              <input
                type="text"
                placeholder={t("contact.name_placeholder")}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 px-1 py-3 focus:border-[#a12d2d] outline-none transition-colors"
              />
              <input
                type="text"
                placeholder={t("contact.address_placeholder")}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 px-1 py-3 focus:border-[#a12d2d] outline-none transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder={t("contact.phone_placeholder")}
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 px-1 py-3 focus:border-[#a12d2d] outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder={t("contact.email_placeholder")}
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 px-1 py-3 focus:border-[#a12d2d] outline-none transition-colors"
                />
              </div>
              <textarea
                rows={4}
                placeholder={t("contact.message_placeholder")}
                className="w-full bg-transparent border border-white/30 text-white placeholder-white/50 p-3 focus:border-[#a12d2d] outline-none transition-colors resize-none mt-2"
              />
              <label className="flex items-start gap-2 text-xs text-gray-400">
                <input type="checkbox" className="mt-1" />
                <span>{t("contact.privacy_notice")}</span>
              </label>
              <div className="flex justify-end pt-2">
                <Button type="submit" variant="primary">
                  {t("contact.send_now")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

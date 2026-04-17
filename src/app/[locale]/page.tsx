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
      <section className="relative bg-[#f5f3ef] overflow-hidden min-h-[860px] md:min-h-[760px]">
        {/* Justitia background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/legal/justitia-silver.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right [filter:grayscale(85%)_contrast(1.1)]"
          />
        </div>
        {/* Mobile overlay: fade from left so image shows full on right side */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to right, rgba(245,243,239,0.96) 0%, rgba(245,243,239,0.85) 35%, rgba(245,243,239,0.4) 65%, rgba(245,243,239,0) 95%)",
          }}
          aria-hidden="true"
        />
        {/* Desktop gradient: cream fade from left */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, #f5f3ef 0%, rgba(245,243,239,0.95) 30%, rgba(245,243,239,0.4) 50%, rgba(245,243,239,0) 70%)",
          }}
          aria-hidden="true"
        />

        {/* Content container */}
        <div className="relative mx-auto max-w-7xl px-6 md:px-10 pt-16 md:pt-28 pb-10 md:pb-40">
          <div className="max-w-[620px] lg:max-w-[720px]">
            <h1 className="font-serif font-normal leading-[1.05] text-[#2c2c2c] text-4xl md:text-5xl lg:text-[3.5rem] mb-6 md:mb-8">
              <span className="block">{t("hero.title_line1")}</span>
              <span className="block">{t("hero.title_line2")}</span>
            </h1>
            <p className="text-base md:text-lg text-[#5a5a5a] leading-relaxed mb-8 md:mb-10 max-w-xl">
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
      <section className="bg-white py-16 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-none text-[#2c2c2c] overflow-hidden">
                <span className="font-serif text-[5.5rem] md:text-8xl text-[#a12d2d] float-left leading-[0.75] mr-2 mt-1">
                  {t("home_about.name").charAt(0)}
                </span>
                {t("home_about.name").slice(1)}
              </h2>
              <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-[#5a5a5a] mt-5 md:mt-6">
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
      <section className="bg-[#f5f3ef] py-16 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12">
            {/* Left: Drop-Cap S box */}
            <div className="bg-white border border-[#e5e1d6] p-6 md:p-8 w-full max-w-md md:max-w-xs mx-auto md:mx-0">
              <p className="font-serif text-base leading-relaxed text-[#2c2c2c] overflow-hidden">
                <span className="font-serif text-[4.5rem] md:text-7xl text-[#a12d2d] float-left leading-[0.8] mr-3 mt-1">
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
      <section className="relative bg-[#ededea] min-h-[640px]">
        <div className="grid md:grid-cols-2 min-h-[640px]">
          {/* Left: Gavel + scales grayscale image */}
          <div className="relative min-h-[320px] md:min-h-full">
            <Image
              src="/images/legal/gavel-marble.jpg"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover [filter:grayscale(100%)_brightness(1.02)]"
            />
          </div>

          {/* Right: Light form */}
          <div className="bg-[#ededea] px-6 py-12 md:p-16 lg:p-20 flex flex-col justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2c2c2c] mb-2">
              {t("contact_teaser.title")}
            </h2>
            <p className="text-sm text-[#8a8a8a] mb-8 md:mb-10">
              {t("contact_teaser.subtitle")}
            </p>
            <form className="space-y-6">
              <input
                type="text"
                placeholder={t("contact.name_placeholder")}
                className="w-full bg-transparent border-b border-[#c9c7c0] text-[#2c2c2c] placeholder-[#9a9a9a] px-1 py-2 focus:border-[#a12d2d] outline-none transition-colors"
              />
              <input
                type="text"
                placeholder={t("contact.address_placeholder")}
                className="w-full bg-transparent border-b border-[#c9c7c0] text-[#2c2c2c] placeholder-[#9a9a9a] px-1 py-2 focus:border-[#a12d2d] outline-none transition-colors"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder={t("contact.phone_placeholder")}
                  className="w-full bg-transparent border-b border-[#c9c7c0] text-[#2c2c2c] placeholder-[#9a9a9a] px-1 py-2 focus:border-[#a12d2d] outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder={t("contact.email_placeholder")}
                  className="w-full bg-transparent border-b border-[#c9c7c0] text-[#2c2c2c] placeholder-[#9a9a9a] px-1 py-2 focus:border-[#a12d2d] outline-none transition-colors"
                />
              </div>
              <textarea
                rows={5}
                placeholder={t("contact.message_placeholder")}
                className="w-full bg-white/40 border border-[#c9c7c0] text-[#2c2c2c] placeholder-[#9a9a9a] p-3 focus:border-[#a12d2d] outline-none transition-colors resize-none mt-4"
              />
              <label className="flex items-start gap-2 text-xs text-[#5a5a5a]">
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

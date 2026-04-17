import { useTranslations } from "next-intl";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const t = useTranslations();
  const tContact = useTranslations("contact");

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
            {tContact("title")}
          </h1>
          <div className="w-16 h-px bg-[#a12d2d] mb-8" />
          <p className="text-base md:text-lg text-[#4a4a4a] leading-relaxed max-w-3xl">
            {tContact("lead")}
          </p>
        </div>
      </section>

      <Section bg="white">
        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          {/* Form */}
          <div className="bg-[#f5f3ef] p-8 md:p-10 border border-[#e5e1d6]">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2c2c2c] mb-3">
              {tContact("online_form")}
            </h2>
            <div className="w-12 h-px bg-[#a12d2d] mb-6" />
            <form className="space-y-4">
              <input
                type="text"
                placeholder={tContact("name_placeholder")}
                className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder={tContact("phone_placeholder")}
                  className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder={tContact("email_placeholder")}
                  className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select
                  className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] focus:border-[#a12d2d] outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {tContact("language_label")}
                  </option>
                  <option value="de">Deutsch</option>
                  <option value="uk">Українська</option>
                </select>
                <select
                  className="w-full border-b border-[#d9d5cc] bg-transparent px-1 py-3 text-[#2c2c2c] focus:border-[#a12d2d] outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {tContact("topic_label")}
                  </option>
                  <option value="rwr">{tContact("topic_rwr")}</option>
                  <option value="family">{tContact("topic_family")}</option>
                  <option value="real_estate">
                    {tContact("topic_real_estate")}
                  </option>
                  <option value="contract">{tContact("topic_contract")}</option>
                  <option value="other">{tContact("topic_other")}</option>
                </select>
              </div>
              <textarea
                rows={5}
                placeholder={tContact("message_placeholder")}
                className="w-full border border-[#d9d5cc] bg-white p-3 text-[#2c2c2c] placeholder-[#9a9a9a] focus:border-[#a12d2d] outline-none transition-colors resize-none mt-4"
              />
              <label className="flex items-start gap-2 text-xs text-[#5a5a5a]">
                <input type="checkbox" className="mt-1" />
                <span>{tContact("privacy_notice")}</span>
              </label>
              <div className="flex justify-end pt-2">
                <Button type="submit" variant="primary">
                  {tContact("send_now")}
                </Button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-[#a12d2d] mb-2">
                {tContact("info_address_label")}
              </h3>
              <p className="text-[#2c2c2c] leading-relaxed">
                {tContact("info_address")}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-[#a12d2d] mb-2">
                {tContact("phone")}
              </h3>
              <a
                href={`tel:${tContact("info_phone")}`}
                className="text-[#2c2c2c] hover:text-[#a12d2d] transition-colors"
              >
                {tContact("info_phone")}
              </a>
            </div>
            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-[#a12d2d] mb-2">
                {tContact("email")}
              </h3>
              <a
                href={`mailto:${tContact("info_email")}`}
                className="text-[#2c2c2c] hover:text-[#a12d2d] transition-colors"
              >
                {tContact("info_email")}
              </a>
            </div>
            <div>
              <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-[#a12d2d] mb-2">
                {tContact("info_hours_label")}
              </h3>
              <p className="text-[#2c2c2c] leading-relaxed">
                {tContact("info_hours")}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

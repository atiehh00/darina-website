"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type Featured = {
  key: string;
  image: string;
  href: string;
};

const featured: Featured[] = [
  {
    key: "rwr_plus",
    image: "/images/legal/signing-document.jpg",
    href: "/immigration/rwr-plus",
  },
  {
    key: "real_estate",
    image: "/images/legal/house-keys.jpg",
    href: "/legal/real-estate",
  },
  {
    key: "family",
    image: "/images/about/people-meeting-table.jpg",
    href: "/immigration/family-reunification",
  },
  {
    key: "german_rwr",
    image: "/images/integration/bookstore-interior.jpg",
    href: "/integration/german-rwr",
  },
];

export default function HeroFeaturedCard() {
  const t = useTranslations("home_featured");
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = featured[active];

  return (
    <>
      {/* Desktop floating card */}
      <div className="hidden md:block absolute bottom-10 lg:bottom-16 left-[5%] right-auto z-10 max-w-xl w-[90%]">
        <div className="relative bg-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] border border-[#e5e1d6]">
          <div className="grid grid-cols-[auto_1fr_auto]">
            {/* Image thumb */}
            <Link href={current.href} className="block">
              <div className="relative w-24 h-full min-h-[120px] overflow-hidden">
                <Image
                  src={current.image}
                  alt={t(`${current.key}.title`)}
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
            </Link>

            {/* Middle: number + title + teaser */}
            <Link href={current.href} className="block p-5">
              <div className="flex items-start gap-4">
                <span className="font-serif text-5xl text-[#d9d5cc] leading-none shrink-0">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-[#2c2c2c] leading-tight mb-1.5">
                    {t(`${current.key}.title`)}
                  </h3>
                  <p className="text-sm text-[#5a5a5a] leading-snug line-clamp-2">
                    {t(`${current.key}.teaser`)}
                  </p>
                </div>
              </div>
            </Link>

            {/* Right: number tabs */}
            <div className="flex flex-col border-l border-[#e5e1d6]">
              {featured.map((item, idx) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(idx)}
                  className={`w-12 h-[30px] font-serif text-sm flex items-center justify-center transition-colors cursor-pointer ${
                    idx < featured.length - 1 ? "border-b border-[#e5e1d6]" : ""
                  } ${
                    active === idx
                      ? "bg-[#a12d2d] text-white"
                      : "bg-[#f5f3ef] text-[#5a5a5a] hover:bg-[#ebe8e2]"
                  }`}
                  aria-label={`Select ${t(`${item.key}.title`)}`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile static block — rotates with active index */}
      <div className="md:hidden mx-6 mt-10 relative z-10">
        <Link
          href={current.href}
          className="block bg-white shadow-[0_6px_20px_-8px_rgba(0,0,0,0.18)] border border-[#e5e1d6]"
        >
          <div className="flex items-stretch">
            <div className="relative w-24 shrink-0 overflow-hidden">
              <Image
                src={current.image}
                alt={t(`${current.key}.title`)}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-4 flex items-start gap-3 min-w-0">
              <span className="font-serif text-3xl text-[#d9d5cc] leading-none shrink-0">
                {String(active + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-base text-[#2c2c2c] leading-tight mb-1 truncate">
                  {t(`${current.key}.title`)}
                </h3>
                <p className="text-xs text-[#5a5a5a] leading-snug line-clamp-2">
                  {t(`${current.key}.teaser`)}
                </p>
              </div>
            </div>
          </div>
        </Link>
        {/* Mobile number tabs row below card (01 02 03 04) */}
        <div className="flex justify-center mt-0 border-t-0">
          {featured.map((item, idx) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActive(idx)}
              className={`flex-1 py-3 font-serif text-sm border border-t-0 transition-colors ${
                idx > 0 ? "border-l-0" : ""
              } ${
                active === idx
                  ? "bg-[#a12d2d] text-white border-[#a12d2d]"
                  : "bg-white text-[#5a5a5a] border-[#e5e1d6] hover:bg-[#f5f3ef]"
              }`}
              aria-label={`Select ${t(`${item.key}.title`)}`}
            >
              {String(idx + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

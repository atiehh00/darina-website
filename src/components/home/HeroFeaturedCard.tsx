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
    <div
      className="
        relative mx-6 mt-8 z-10 max-w-xl
        md:absolute md:bottom-10 md:left-[5%] md:mx-0 md:mt-0 md:w-[90%] lg:bottom-16
      "
    >
      <div className="relative bg-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.18)] border border-[#e5e1d6]">
        <div className="grid grid-cols-[auto_1fr_auto]">
          {/* Image thumb */}
          <Link href={current.href} className="block">
            <div className="relative w-20 md:w-24 h-full min-h-[110px] md:min-h-[120px] overflow-hidden">
              <Image
                src={current.image}
                alt={t(`${current.key}.title`)}
                fill
                sizes="(max-width: 768px) 80px, 96px"
                className="object-cover"
              />
            </div>
          </Link>

          {/* Middle: number + title + teaser */}
          <Link href={current.href} className="block p-4 md:p-5 min-w-0">
            <div className="flex items-start gap-3 md:gap-4">
              <span className="font-serif text-4xl md:text-5xl text-[#d9d5cc] leading-none shrink-0">
                {String(active + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-serif text-base md:text-lg text-[#2c2c2c] leading-tight mb-1 md:mb-1.5">
                  {t(`${current.key}.title`)}
                </h3>
                <p className="text-xs md:text-sm text-[#5a5a5a] leading-snug line-clamp-2">
                  {t(`${current.key}.teaser`)}
                </p>
              </div>
            </div>
          </Link>

          {/* Right: vertical number tabs */}
          <div className="flex flex-col border-l border-[#e5e1d6]">
            {featured.map((item, idx) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(idx)}
                className={`w-10 md:w-12 flex-1 font-serif text-xs md:text-sm flex items-center justify-center transition-colors cursor-pointer ${
                  idx < featured.length - 1
                    ? "border-b border-[#e5e1d6]"
                    : ""
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
  );
}

"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import languageSVG from "@public/language.svg";
import { Locale } from "@declarations/locale/local.enum";
import { Link, usePathname } from "@i18n/routing";

export const LanguageSwitcher = () => {
  const locale = useLocale();

  const pathname = usePathname();

  const nextLocale = locale === Locale.ARABIC ? Locale.ENGLISH : Locale.ARABIC;

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className="ml-5 flex gap-1 text-base font-normal text-indigo-950 hover:text-blue-600"
    >
      {locale === "en" ? "عربي" : "English"}
      <Image src={languageSVG} alt="" unoptimized height={20} />
    </Link>
  );
};

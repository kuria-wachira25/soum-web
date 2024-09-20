import { Link } from "@i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";
import languageSVG from "@public/language.svg";

export const LanguageSwitcher = () => {
  const locale = useLocale();

  return (
    <Link
      className="ml-5 flex gap-1 text-base font-normal text-indigo-950 hover:text-blue-600"
      href={"#"}
    >
      {locale === "en" ? "عربي" : "English"}
      <Image src={languageSVG} alt="" unoptimized height={20} />
    </Link>
  );
};

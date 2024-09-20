import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { Locale } from "@declarations/locale/local.enum";

export default getRequestConfig(async ({ locale }: { locale: unknown }) => {
  if (!routing.locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../translations/${locale}.json`)).default,
  };
});

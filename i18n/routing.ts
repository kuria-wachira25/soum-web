import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { Locale } from "@declarations/locale/local.enum";

export type Locales = Locale[];

export const routing = defineRouting<Locales>({
  locales: [Locale.ARABIC, Locale.ENGLISH],
  defaultLocale: Locale.ARABIC,
  localePrefix: "as-needed",
});

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

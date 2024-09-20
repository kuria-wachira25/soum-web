import { routing } from "@i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  matcher:
    "/((?!api|.*\\.png|.*\\.jpg|.*\\.ico|.*\\.txt|.*\\.svg|site.webmanifest|browserconfig.xml|_next).*)",
};

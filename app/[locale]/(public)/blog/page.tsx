import { Locale } from "@declarations/locale/local.enum";
import { unstable_setRequestLocale } from "next-intl/server";

export const revalidate = 3600;

export const dynamic = "force-static";

export type PageProps = {
  params: { locale: Locale };
};

export default ({ params: { locale } }: PageProps): JSX.Element => {
  unstable_setRequestLocale(locale);
  return <>Blog Page</>;
};

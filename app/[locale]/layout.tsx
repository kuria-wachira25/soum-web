import { routing } from "@i18n/routing";
import { Locale } from "@declarations/locale/local.enum";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import "./global.css";

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export const generateStaticParams = (): Array<LayoutProps["params"]> => {
  return routing.locales.map((locale) => ({ locale }));
};

export default async ({
  children,
  params: { locale },
}: LayoutProps): Promise<JSX.Element> => {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

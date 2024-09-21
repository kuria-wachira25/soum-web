import Image from "next/image";
import logoSVG from "@public/logo.svg";
import { Button } from "@components/Button";
import { LanguageSwitcher } from "@components/LanguageSwitcher";
import { SearchBar } from "@components/Header/components/HeaderTop/components/SearchBar";
import { fetchSettings } from "@libs/http/settings";
import { getSettingByNameFromFetchSettingsResponse } from "@util/settings/settings";
import { SettingName } from "@declarations/settings/settings.enum";
import { Nullable } from "@declarations/nullable/nullable.type";
import { ErrorView } from "@components/ErrorView";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { Suspense } from "react";
import { Link } from "@i18n/routing";

export const HeaderTop = async (): Promise<Nullable<JSX.Element>> => {
  const fetchSettingsResult = await fetchSettings();

  const setting = getSettingByNameFromFetchSettingsResponse<string>(
    fetchSettingsResult,
    SettingName.TYPESENSE_SUGGEST_INDEX
  );

  return (
    <div className="w-full">
      <div className="flex flex-row gap-5 max-w-screen-xl mx-auto p-5 items-center justify-between">
        <div className="block md:hidden">
          <IoMenu className="text-2xl" />
        </div>
        <div className="flex gap-1">
          <Link href="/" className="flex gap-3 items-center">
            <Image src={logoSVG} height={49} width={49} alt="" />
            <span className="text-2xl font-medium">Soum</span>
          </Link>
        </div>
        <div className="flex-1 hidden md:block">
          <ErrorView errors={[setting]}>
            <Suspense fallback={<div>Loading ...</div>}>
              <SearchBar indexName={setting.forceToRight().value} />
            </Suspense>
          </ErrorView>
        </div>
        <div className="gap-5 items-center hidden md:flex">
          {[
            {
              text: "Blog",
              href: "/blog",
            },
            {
              text: "Sell",
              href: "/sell",
            },
          ].map((item, index) => {
            return (
              <Link
                key={index}
                className="text-sm text-gray-600 hover:text-blue-600 hidden lg:block"
                href={item.href}
              >
                {item.text}
              </Link>
            );
          })}
          <Button>Login</Button>
          <LanguageSwitcher />
        </div>
        <div className="block md:hidden">
          <CiSearch className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

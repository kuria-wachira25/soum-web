import Image from "next/image";
import logoSVG from "@public/logo.svg";
import { Button } from "@components/Button";
import { LanguageSwitcher } from "@components/LanguageSwitcher";
import { Link } from "@i18n/routing";
import { SearchBar } from "@components/SearchBar";

export default (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-2 max-w-screen-xl  mx-auto py-5 items-center">
        <div className="flex gap-1">
          <div className="flex gap-3 items-center">
            <Image src={logoSVG} height={49} width={49} alt="" />
            <span className="text-2xl font-medium">Soum</span>
          </div>
        </div>
        <div className="flex-1">
          <SearchBar />
        </div>
        <div className="flex gap-5 items-center">
          {[
            {
              text: "Blog",
              href: "#",
            },
            {
              text: "Sell",
              href: "#",
            },
          ].map((item, index) => {
            return (
              <Link
                key={index}
                className="text-sm text-gray-600 hover:text-blue-500"
                href="#"
              >
                {item.text}
              </Link>
            );
          })}
          <Button>Login</Button>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

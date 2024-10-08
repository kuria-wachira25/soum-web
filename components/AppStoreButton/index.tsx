import Image from "next/image";
import appStoreIconSVG from "@public/app-store-icon.svg";
import { Link } from "@i18n/routing";

export const AppStoreButton = (): JSX.Element => {
  return (
    <Link
      href="#"
      className="flex p-5 gap-1 justify-between text-white border border-white rounded w-[176px] h-[69px] items-center"
    >
      <Image unoptimized src={appStoreIconSVG} alt="" width={32} height={32} />
      <div className="flex flex-col gap-1 w-[88px]">
        <span className="text-xs font-normal">Get it now</span>
        <span className="text-sm font-medium">App Store</span>
      </div>
    </Link>
  );
};

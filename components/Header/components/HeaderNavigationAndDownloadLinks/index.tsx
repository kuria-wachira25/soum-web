import { Nullable } from "@declarations/nullable/nullable.type";
import { fetchCategories } from "@libs/http/category";
import { SocialLinks } from "@components/SocialLinks";
import downloadSVG from "@public/download.svg";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { Link } from "@i18n/routing";

export const HeaderNavigationAndDownloadLinks = async (): Promise<
  Nullable<JSX.Element>
> => {
  const result = await fetchCategories();

  if (result.isLeft()) {
    return null;
  }

  return (
    <div className="w-full bg-indigo-950 text-white">
      <div className="max-w-screen-xl mx-auto flex justify-between gap-3 py-7 px-3">
        <div className="flex gap-3 items-center">
          <IoMenu className="text-xl" />
          <span className="font-bold text-xl">All Categories</span>
        </div>
        <div className="flex gap-20">
          <Link href="#" target="_blank" className="flex gap-3 items-center">
            <Image unoptimized src={downloadSVG} alt="" />
            <span className="text-sm font-normal ">Download App</span>
          </Link>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

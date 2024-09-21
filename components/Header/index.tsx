import { HeaderCategoryCarousel } from "./components/HeaderCategoryCarousel";
import { HeaderNavigationAndDownloadLinks } from "./components/HeaderNavigationAndDownloadLinks";
import { HeaderTop } from "./components/HeaderTop";

export const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <HeaderTop />
      <HeaderNavigationAndDownloadLinks />
      <HeaderCategoryCarousel />
    </div>
  );
};

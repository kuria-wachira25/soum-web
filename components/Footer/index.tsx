import { InView } from "react-intersection-observer";
import { FooterHeader } from "./components/FooterHeader";
import { FooterInfo } from "./components/FooterInfo";
import { FooterTopCategory } from "./components/FooterTopCategory";
import { FooterQuckActions } from "./components/FooterQuckActions";
import { FooterDownloadApp } from "./components/FooterDownloadApp";
import { FooterPaymentMethodsAndSocialLinks } from "./components/FooterPaymentMethodsAndSocialLinks";
import { FooterCopyright } from "./components/FooterCopyright";

export const Footer = (): JSX.Element => {
  return (
    <InView as="div" className="flex flex-col">
      <div className="w-full bg-blue-50">{<FooterHeader />}</div>
      <div className="bg-indigo-950 w-full text-white flex flex-col">
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-5 grid-flow-row m-auto gap-10 md:gap-5 py-20 px-10 md:px-5">
          <FooterInfo />
          <FooterTopCategory />
          <FooterQuckActions />
          <FooterDownloadApp />
          <FooterPaymentMethodsAndSocialLinks />
        </div>
        <div className="w-full border-t border-neutral-700 flex justify-center">
          <FooterCopyright />
        </div>
      </div>
    </InView>
  );
};

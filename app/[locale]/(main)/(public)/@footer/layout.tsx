import { InView } from "react-intersection-observer";

type LayoutProps = {
  footerHeader: React.ReactNode;
  footerInfo: React.ReactNode;
  footerTopCategory: React.ReactNode;
  footerQuckActions: React.ReactNode;
  footerDownloadApp: React.ReactNode;
  footerPaymentMethodsAndSocialLinks: React.ReactNode;
  footerCopyright: React.ReactNode;
};

export default ({
  footerHeader,
  footerInfo,
  footerTopCategory,
  footerQuckActions,
  footerDownloadApp,
  footerPaymentMethodsAndSocialLinks,
  footerCopyright,
}: LayoutProps): JSX.Element => {
  return (
    <InView as="div" className="flex flex-col">
      <div className="w-full bg-blue-50">{footerHeader}</div>
      <div className="bg-indigo-950 w-full text-white flex flex-col">
        <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-5 grid-flow-row m-auto gap-10 md:gap-5 py-20 px-10 md:px-5">
          {footerInfo}
          {footerTopCategory}
          {footerQuckActions}
          {footerDownloadApp}
          {footerPaymentMethodsAndSocialLinks}
        </div>
        <div className="w-full border-t border-neutral-700 flex justify-center">
          {footerCopyright}
        </div>
      </div>
    </InView>
  );
};

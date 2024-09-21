import Image from "next/image";
import paymentMethodsSVG from "@public/payment-methods.svg";
import { SocialLinks } from "@components/SocialLinks";

export const FooterPaymentMethodsAndSocialLinks = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 font-light text-sm mx-0 md:mx-auto">
      <div className="flex flex-col gap-3">
        <span className="font-medium mb-1 text-base">Payment Methods</span>
        <Image src={paymentMethodsSVG} alt="" height={30} width={273.17} />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium mb-1 text-base">Follow Us</span>
        <SocialLinks />
      </div>
    </div>
  );
};

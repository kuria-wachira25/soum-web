import Image from "next/image";
import paymentMethodsSVG from "@public/payment-methods.svg";
import facebookIconSVG from "@public/facebook-icon.svg";
import xIconSVG from "@public/x-icon.svg";
import instagramIconSVG from "@public/instagram-icon.svg";
import tiktokIconSVG from "@public/tiktok-icon.svg";
import linkedinIconSVG from "@public/linkedin-icon.svg";

export default (): JSX.Element => {
  return (
    <div className="flex flex-col gap-10 font-light text-sm mx-0 md:mx-auto">
      <div className="flex flex-col gap-3">
        <span className="font-medium mb-1 text-base">Payment Methods</span>
        <Image src={paymentMethodsSVG} alt="" height={30} width={273.17} />
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-medium mb-1 text-base">Follow Us</span>
        <div className="flex justify-between gap-3">
          {[
            facebookIconSVG,
            xIconSVG,
            instagramIconSVG,
            tiktokIconSVG,
            linkedinIconSVG,
          ].map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                alt=""
                height={24}
                width={24}
                className="scale-100 hover:scale-150 duration-300 delay-50"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

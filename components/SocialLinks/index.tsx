import Image from "next/image";
import facebookIconSVG from "@public/facebook-icon.svg";
import xIconSVG from "@public/x-icon.svg";
import instagramIconSVG from "@public/instagram-icon.svg";
import tiktokIconSVG from "@public/tiktok-icon.svg";
import linkedinIconSVG from "@public/linkedin-icon.svg";

export type SocialLinksProps = {
  size?: number;
};

export const SocialLinks = ({ size = 24 }: SocialLinksProps): JSX.Element => {
  return (
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
            height={size}
            width={size}
            className="scale-100 hover:scale-150 duration-300 delay-50"
            unoptimized
          />
        );
      })}
    </div>
  );
};

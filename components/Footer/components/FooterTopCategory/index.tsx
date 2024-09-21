import Image from "next/image";
import arrowRightSVG from "@public/arrow-right.svg";

export const FooterTopCategory = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-3 font-light text-sm mx-0 md:mx-auto">
      <span className="font-medium mb-1 text-base">Top Category</span>
      {[
        "Laptops",
        "Mobiles",
        "Headphone",
        "Accessories",
        "Camera",
        "iPads",
        "Cars",
      ].map((item, index) => {
        return (
          <span key={index} className="font-medium text-neutral-400">
            {item}
          </span>
        );
      })}
      <div className="flex gap-3">
        <span className="font-medium">Browse All Product</span>
        <Image src={arrowRightSVG} alt="" width={20} height={20} />
      </div>
    </div>
  );
};

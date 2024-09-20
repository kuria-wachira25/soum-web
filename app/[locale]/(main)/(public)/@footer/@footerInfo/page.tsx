import Image from "next/image";
import logoSVG from "@public/logo.svg";
import vatSVG from "@public/vat.svg";

export default (): JSX.Element => {
  return (
    <div className="flex flex-col gap-5 md:gap-7 font-light text-sm mx-0 md:mx-auto ">
      <div className="flex flex-col gap-5">
        <div className="flex gap-3 items-center">
          <Image src={logoSVG} height={49} width={49} alt="" />
          <span className="text-2xl font-medium">Soum</span>
        </div>
        <span className="text-base text-justify">
          Soum ensures your right to buy and sell used devices, with trust &
          security
        </span>
      </div>
      <div className="flex gap-2 flex-col">
        <span className="font-medium">Tax Number</span>
        <div className="flex gap-3 items-center">
          <Image src={vatSVG} alt="" width={12} height={16} />
          <span>310985751500003</span>
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        <span className="font-medium">Registered by Ministry of Commerce</span>
        <span>Maroof No: 221919</span>
      </div>
    </div>
  );
};

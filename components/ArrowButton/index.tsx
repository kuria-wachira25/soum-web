import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
export type ArrowButtonProps = {
  variation: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
};

export const ArrowButton = ({
  variation,
  onClick,
  disabled,
}: ArrowButtonProps): JSX.Element => {
  return (
    <button
      className={`text-base p-5 rounded-full ${
        disabled
          ? "text-black bg-gray-50"
          : "bg-blue-500 text-white hover:bg-blue-700"
      }`}
      onClick={onClick}
    >
      {variation === "right" ? <FaArrowRight /> : <FaArrowLeft />}
    </button>
  );
};

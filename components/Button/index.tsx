export type ButtonProps = {
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  disabled,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`text-base py-3 px-10 rounded-xl ${
        disabled
          ? "text-black bg-gray-50"
          : "bg-blue-600 text-white hover:bg-blue-700"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

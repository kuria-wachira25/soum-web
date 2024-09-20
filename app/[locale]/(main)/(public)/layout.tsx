import { Locale } from "@declarations/locale/local.enum";

type LayoutProps = {
  children: React.ReactNode;
  footer: React.ReactNode;
  header: React.ReactNode;
  params: { locale: Locale };
};

export default ({ header, children, footer }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <div>{header}</div>
      <div>{children}</div>
      <div>{footer}</div>
    </div>
  );
};

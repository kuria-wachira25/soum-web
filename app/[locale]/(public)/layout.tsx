import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Locale } from "@declarations/locale/local.enum";

type LayoutProps = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export default (props: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <div>
        <Header />
      </div>
      <div>{props.children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

import { Nullable } from "@declarations/nullable/nullable.type";
import { fetchCategories } from "@libs/http/category";
import { CategoryCarousel } from "@components/CategoryCarousel";
import { unstable_setRequestLocale } from "next-intl/server";
import { Locale } from "@declarations/locale/local.enum";

export type PageProps = {
  params: { locale: Locale };
};

export default async ({
  params: { locale },
}: PageProps): Promise<Nullable<JSX.Element>> => {
  unstable_setRequestLocale(locale);

  const result = await fetchCategories();

  if (result.isLeft()) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto">
        <CategoryCarousel categories={result.value.responseData} />
      </div>
    </div>
  );
};

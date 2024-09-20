import { fetchCategories } from "@libs/http/category";
import { Nullable } from "@declarations/nullable/nullable.type";

type LayoutProps = {
  headerTop: React.ReactNode;
  headerCategoryCarousel: React.ReactNode;
};

export default async ({
  headerTop,
  headerCategoryCarousel,
}: LayoutProps): Promise<Nullable<JSX.Element>> => {
  const result = await fetchCategories();

  if (result.isLeft()) {
    return null;
  }

  return (
    <div className="flex flex-col w-full">
      {headerTop}
      {headerCategoryCarousel}
    </div>
  );
};

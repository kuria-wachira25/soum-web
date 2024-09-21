import { Nullable } from "@declarations/nullable/nullable.type";
import { fetchCategories } from "@libs/http/category";
import { CategoryCarousel } from "@components/CategoryCarousel";

export const HeaderCategoryCarousel = async (): Promise<
  Nullable<JSX.Element>
> => {
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

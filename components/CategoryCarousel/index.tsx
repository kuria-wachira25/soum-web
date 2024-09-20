"use client";

import Image from "next/image";
import { GetCategoriesResponse } from "@libs/http/category/type";
import { useScroll } from "@hooks/useScroll";
import { InView } from "react-intersection-observer";
import { ArrowButton } from "@components/ArrowButton";

export type CategoryCarouselProps = {
  categories: GetCategoriesResponse["responseData"];
};

export const CategoryCarousel = ({
  categories,
}: CategoryCarouselProps): JSX.Element => {
  const { ref, onScrollToStart, onScrollToEnd, isAtTheBeginning, isAtTheEnd } =
    useScroll<HTMLDivElement>({});

  return (
    <div className="flex flex-row items-center gap-5 py-3">
      <ArrowButton
        variation="left"
        onClick={onScrollToStart}
        disabled={isAtTheBeginning}
      />
      <div ref={ref} className="flex-1 overflow-x-hidden scroll-smooth">
        <div className="flex gap-3 max-w-full">
          {categories.map((category, index) => {
            return (
              <InView
                as="div"
                className="flex flex-col gap-3 items-center p-5 border hover:border-blue-500 border-white rounded"
                key={index}
              >
                <Image
                  src={category.mini_category_icon}
                  alt=""
                  width={48}
                  height={48}
                  unoptimized
                  className="h-[24px] w-[35px]"
                />
                <span className="font-medium text- text-nowrap">
                  {category.category_name}
                </span>
              </InView>
            );
          })}
        </div>
      </div>
      <ArrowButton
        variation="right"
        onClick={onScrollToEnd}
        disabled={isAtTheEnd}
      />
    </div>
  );
};

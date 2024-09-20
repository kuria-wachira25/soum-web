import React from "react";
import { GetCategoriesResponse } from "./type";
import { composeAPIUrl } from "@util/http";
import { Either, left, right } from "@util/either";
import { Service } from "@declarations/service/service.enum";

export const fetchCategories = React.cache(
  async (): Promise<Either<Error, GetCategoriesResponse>> => {
    try {
      const result: GetCategoriesResponse = await fetch(
        composeAPIUrl(Service.V2, "category"),
        {
          next: {
            revalidate: 3600,
          },
        }
      ).then((result) => result.json());

      return right(result);
    } catch (error) {
      return left(error as Error);
    }
  }
);

import React from "react";
import { composeAPIUrl } from "@util/http";
import { Either, left, right } from "@util/either";
import { Service } from "@declarations/service/service.enum";
import { axiosServerAPIClient } from "@providers/axios/axios.server";
import { AppError } from "@util/app.error/app.error";
import { AppErrorType } from "@util/app.error/app.error.enum";
import { FetchCategoriesResponse } from "@declarations/category/category.type";

export const fetchCategories = React.cache(
  async (): Promise<Either<AppError, FetchCategoriesResponse>> => {
    try {
      const result: FetchCategoriesResponse = await axiosServerAPIClient
        .get<FetchCategoriesResponse>(composeAPIUrl(Service.V2, "category"))
        .then((result) => result.data);

      return right(result);
    } catch (error) {
      return left(
        AppError.fromError(
          "Failed to fetch categories",
          "fetch-categories-from-api",
          AppErrorType.API_ERROR,
          {
            sourceError: error,
          }
        )
      );
    }
  }
);

import React from "react";
import { composeAPIUrl } from "@util/http";
import { Either, left, right } from "@util/either";
import { Service } from "@declarations/service/service.enum";
import { axiosServerAPIClient } from "@providers/axios/axios.server";
import { AppError } from "@util/app.error/app.error";
import { AppErrorType } from "@util/app.error/app.error.enum";
import { FetchSettingsResponse } from "@declarations/settings/settings.type";

export const fetchSettings = React.cache(
  async (): Promise<Either<AppError, FetchSettingsResponse>> => {
    try {
      const result = await axiosServerAPIClient
        .get<FetchSettingsResponse>(composeAPIUrl(Service.V2, "setting"))
        .then((result) => result.data);

      return right(result);
    } catch (error) {
      return left(
        AppError.fromError(
          "Failed to fetch settings",
          "fetch-settings-from-api",
          AppErrorType.API_ERROR,
          {
            sourceError: error,
          }
        )
      );
    }
  }
);

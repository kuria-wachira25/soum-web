"use client";

import { typesenseInstantSearchAdapter } from "@providers/typesense/typesense.client";
import { AppError } from "@util/app.error/app.error";
import { AppErrorType } from "@util/app.error/app.error.enum";
import { useCallback, useEffect, useState } from "react";

export type useTypesenseSearchProps = {
  query?: string;
  indexName: string;
};

export const useTypesenseSearch = <Hit extends Record<string, unknown>>({
  query,
  indexName,
}: useTypesenseSearchProps): {
  loading: boolean;
  hits: Hit[];
  error?: AppError;
  onReset: () => void;
} => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hits, setHits] = useState<Hit[]>([]);
  const [error, setError] = useState<AppError>();

  const onReset = useCallback((): void => {
    setHits([]);

    setLoading(false);

    setError(undefined);
  }, [setHits, setLoading, setError]);

  const onSearch = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);

      const result =
        await typesenseInstantSearchAdapter.typesenseClient.multiSearch.perform<
          Hit[]
        >(
          {
            searches: [
              {
                collection: indexName,
                q: query,
              },
            ],
          },
          {
            query_by: "*",
          }
        );

      setHits(
        result.results.flatMap((result) =>
          (result.hits ?? []).map(({ document }) => document)
        )
      );

      setError(undefined);
    } catch (error) {
      setError(
        AppError.fromError(
          "failed to perform typesense search",
          "use.typesense.search",
          AppErrorType.TYPESENSE_ERROR,
          {
            sourceError: error,
            query,
            indexName,
          }
        )
      );
    } finally {
      setLoading(false);
    }
  }, [query, setLoading, setError, setHits]);

  useEffect(() => {
    if (!query) {
      return;
    }

    onSearch();
  }, [query, onSearch]);

  return {
    loading,
    hits,
    error,
    onReset,
  };
};

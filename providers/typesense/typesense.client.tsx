"use client";

import { typesenseConfig } from "./typesense.config";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {
  InstantSearchNext,
  InstantSearchNextProps,
} from "react-instantsearch-nextjs";

const typesenseInstantSearchAdapter = new TypesenseInstantSearchAdapter({
  server: typesenseConfig,
  additionalSearchParameters: {
    preset: "default-search",
  },
});

export type TypenseProviderProps = {
  indexName: string;
  children?: React.ReactNode;
} & Omit<InstantSearchNextProps, "indexName" | "searchClient" | "routing">;

export const TypenseProvider = ({
  children,
  indexName,
}: TypenseProviderProps): JSX.Element => {
  return (
    <InstantSearchNext
      indexName={indexName}
      searchClient={typesenseInstantSearchAdapter.searchClient}
      routing={true}
    >
      {children}
    </InstantSearchNext>
  );
};

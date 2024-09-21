"use client";

import { useTypesenseSearch } from "@hooks/useTypesenseSearch";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { SearchResults } from "./components/SearchResults";

export type SearchBarProps = {
  indexName: string;
};

export const SearchBar = ({ indexName }: SearchBarProps) => {
  const searchParams = useSearchParams();
  const [focused, setFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>(
    searchParams.get("query")?.toString() ?? ""
  );
  const { hits, onReset } = useTypesenseSearch<{ q: string }>({
    query,
    indexName,
  });

  useEffect(() => {
    if (query) {
      return;
    }

    onReset();
  }, [query, onReset]);

  const onSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setQuery(event.target.value);
  };

  return (
    <div className="w-full h-[48px] flex px-10">
      <div className="relative h-full flex-1">
        {!(focused || !!query) && (
          <div className="absolute left-0 top-0 h-full opacity-95 pointer-events-none">
            <div className="flex flex-col justify-center h-full ml-5">
              <span className="text-sm font-medium">
                Search by product name
              </span>
              <span className="text-xs">
                Search within 14000+ products on Soum
              </span>
            </div>
          </div>
        )}
        {!!hits.length && focused && <SearchResults hits={hits} />}
        <input
          className="flex gap-0 bg-gray-100 h-full rounded-l-lg px-5 w-full"
          onFocus={setFocused.bind(null, true)}
          onBlur={setFocused.bind(null, false)}
          value={query}
          onChange={onSearch}
          placeholder={focused && !query ? "Search by product name" : ""}
          aria-label="Search by product name"
        />
      </div>
      <div className="bg-blue-500 text-white w-[64px] h-full text-4xl rounded-r-lg flex items-center">
        <CiSearch className="m-auto" />
      </div>
    </div>
  );
};

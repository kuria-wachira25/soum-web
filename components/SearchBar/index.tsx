"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const SearchBar = () => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="w-full h-[48px] flex px-10">
      <div className="relative h-full flex-1">
        {!focused && (
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
        <input
          className="flex gap-0 bg-gray-100 h-full rounded-l-lg px-5 w-full"
          onFocus={setFocused.bind(null, true)}
          onBlur={setFocused.bind(null, false)}
        />
      </div>

      <div className="bg-blue-500 text-white w-[64px] h-full text-4xl rounded-r-lg flex items-center">
        <CiSearch className="m-auto" />
      </div>
    </div>
  );
};

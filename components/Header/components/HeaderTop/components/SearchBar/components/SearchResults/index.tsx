import { Link } from "@i18n/routing";

type Extends = {
  q: string;
};

export type SearchResults<Hit extends Extends> = {
  hits: Hit[];
};

export const SearchResults = <Hit extends Extends>({
  hits,
}: SearchResults<Hit>): JSX.Element => {
  return (
    <div className="absolute top-0 left-0 w-full bg-transparent">
      <div className="drop-shadow-md flex flex-col mt-[55px] bg-white w-full z-10">
        {hits.map((hit, index) => {
          return (
            <Link
              href={`/search?query=${hit.q}`}
              key={index}
              className="text-base border-b p-5 hover:bg-blue-600 w-full text-black hover:text-white"
            >
              {hit.q}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

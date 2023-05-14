import Image from "next/image";
import { useContext } from "react";
import { AppData } from "~/context/AppData";
import { type CardData } from "~/interface";

interface SearchProps {
  props: {
    search: string;
    setSearch: (search: string) => void;
  };
}

const Results = ({ props }: SearchProps) => {
  const { search } = props;
  const { setDisplay, results, setReapply, setCurrent } = useContext(AppData);

  const handleResults = () => {
    setDisplay([...results]);
    setReapply(true);
  };

  const handleResult = (card: CardData) => {
    setCurrent(card);
  };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box w-80 bg-base-100 p-4 shadow"
    >
      {results.slice(0, 5).map((item) => (
        <li
          key={`search-result,${item.name}`}
          tabIndex={0}
          onClick={() => handleResult(item)}
        >
          <label className="flex w-full" htmlFor="my-modal-4">
            <Image
              loader={() => "https://www.offeroptimist.com/" + item.imageUrl}
              src={"https://www.offeroptimist.com/" + item.imageUrl}
              width={50}
              height={50}
              alt={item.name}
              unoptimized
            />
            {item.name}
          </label>
        </li>
      ))}
      {results.length > 5 && (
        <li tabIndex={0}>
          <label
            className="w-full justify-center text-xs"
            htmlFor="my-drawer-3"
            onClick={() => handleResults()}
          >
            See more results
          </label>
        </li>
      )}
      {!results.length && search && (
        <li>
          <sub className="pointer-events-none justify-start text-xs">
            No results found
          </sub>
        </li>
      )}
    </ul>
  );
};

export default Results;

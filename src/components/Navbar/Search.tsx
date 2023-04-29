import Image from 'next/image';
import type { CardData } from '~/interface';

interface SearchProps {
  props: {
    results: CardData[];
    search: string;
  };
}

const Search = ({ props }: SearchProps) => {
  const { search, results, setDisplay, setResults } = props;

  // const handleChange = () => {

  //   setDisplay([...results])
  //   setResults([f])
  // }
  return (
    <ul
      tabIndex={0}
      className="dropdown-content menu rounded-box w-80 bg-base-100 p-4 shadow"
    >
      {results.slice(0, 5).map((item) => (
        <li key={item.name}>
          <div>
            <Image
              loader={() => 'https://www.offeroptimist.com/' + item.imageUrl}
              src={'https://www.offeroptimist.com/' + item.imageUrl}
              width={50}
              height={50}
              alt={item.name}
            />
            <a>{item.name}</a>
          </div>
        </li>
      ))}
      {results.length > 5 && (
        //button?
        <li>
          <a
            className="justify-center text-xs"
            //  onChange={handleChange}
          >
            See more results
          </a>
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

export default Search;

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import LogoButton from "../../shared/LogoButton";

function SearchHeader({ term, setTerm, location, setLocation, onSearch }) {
  return (
    <div className="bg-white h-20 border-b top-0 sticky border-red-300 z-20 flex items-center justify-center">
      <LogoButton />
      <div className="flex flex-row border items-center border-red-300 rounded-lg">
        <input
          placeholder="Restaurants"
          value={term}
          onChange={(e) => setTerm(e.currentTarget.value)}
          className="bg-transparent h-10 px-3 outline-none w-[300px]"
        />
        <div className="h-5 w-px bg-red-300" />
        <input
          placeholder="San Francisco"
          value={location}
          onChange={(e) => setLocation(e.currentTarget.value)}
          className="bg-transparent px-3 h-10 outline-none w-[300px]"
        />
      </div>
      <button
        onClick={onSearch}
        className="ml-2 h-10 w-10 rounded-lg bg-red-300 flex items-center justify-center hover:opacity-80"
      >
        <MagnifyingGlassIcon className="h-5 w-5 text-white outline-none" />
      </button>
    </div>
  );
}

export default SearchHeader;

import FilterContainer from "./FilterContainer";
import FilterTitle from "./FilterTitle";

function PriceFilter({ priceFilter, onClickPriceFilter }) {
  return (
    <FilterContainer>
      <FilterTitle title="Price" />
      <div className="flex flex-row rounded-xl border w-full border-red-300">
        {["$", "$$", "$$$", "$$$$"].map((price, index) => (
          <button
            onClick={() => onClickPriceFilter(index + 1)}
            key={Math.random()}
            className={`w-full p-2 flex justify-center text-sm  hover:bg-red-300 hover:text-white ${
              price !== "$" && "border-l"
            } ${
              index === 0
                ? "rounded-l-[0.6rem]"
                : index === 3
                ? "rounded-r-[0.6rem]"
                : ""
            }
                ${
                  priceFilter.includes(index + 1)
                    ? "bg-red-300 border-white text-white"
                    : "bg-transparent border-red-300 hover:border-white"
                }
                `}
          >
            {price}
          </button>
        ))}
      </div>
    </FilterContainer>
  );
}

export default PriceFilter;

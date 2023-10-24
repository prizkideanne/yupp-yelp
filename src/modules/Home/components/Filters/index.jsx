import PriceFilter from "./PriceFilter";
import SortByFilter from "./SortByFilter";

function Filters({
  priceFilter,
  onClickPriceFilter,
  sortBy,
  setSortBy,
  onApplyFilters,
}) {
  return (
    <div className="h-fit w-[250px] flex flex-col space-y-5 sticky top-[153px]">
      <p className="font-bold">Filters</p>
      <PriceFilter
        priceFilter={priceFilter}
        onClickPriceFilter={onClickPriceFilter}
      />
      <SortByFilter sortBy={sortBy} setSortBy={setSortBy} />
      <button
        onClick={onApplyFilters}
        className="bg-red-300 py-2 text-white font-medium rounded-lg hover:opacity-80"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default Filters;

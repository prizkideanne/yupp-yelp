import BusinessCard from "./BusinessCard";
import Pagination from "./Pagination";

function BusinessList({
  businesses,
  offset,
  totalPages,
  handleNext,
  handlePrevious,
  isLoading,
}) {
  return (
    <div className="relative min-h-screen pb-5">
      <Pagination
        offset={offset}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
      <div className="flex flex-1 flex-col space-y-4 mt-4">
        {!isLoading ? (
          businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))
        ) : (
          <div className="min-h-[50vh]  flex flex-1 w-[550px] items-center justify-center">
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BusinessList;

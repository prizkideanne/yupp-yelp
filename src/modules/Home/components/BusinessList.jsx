import BusinessCard from "./BusinessCard";
import Pagination from "./Pagination";

function BusinessList({
  businesses,
  offset,
  totalPages,
  handleNext,
  handlePrevious,
  isLoading,
  errorMessage,
}) {
  const renderBusinesses = () => {
    return businesses?.length > 0 ? (
      businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))
    ) : (
      <div className=" mt-8 p-2 flex flex-row space-x-4 w-[550px] grow-0 justify-center">
        <p>Sorry, no result match.</p>
      </div>
    );
  };

  const renderErrorMessage = () => {
    return (
      <div className=" mt-8 p-2 flex flex-row space-x-4 w-[550px] grow-0 justify-center">
        <p>{errorMessage}</p>
      </div>
    );
  };
  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="min-h-[50vh]  flex flex-1 w-[550px] items-center justify-center">
          <p>Loading...</p>
        </div>
      );
    } else {
      if (errorMessage) {
        return renderErrorMessage();
      } else {
        return renderBusinesses();
      }
    }
  };

  return (
    <div className="relative min-h-screen pb-5">
      <Pagination
        offset={offset}
        totalPages={totalPages}
        onNext={handleNext}
        onPrevious={handlePrevious}
        err={errorMessage}
        isLoading={isLoading}
      />
      <div className="flex flex-1 flex-col space-y-4 mt-4">
        {renderContent()}
      </div>
    </div>
  );
}

export default BusinessList;

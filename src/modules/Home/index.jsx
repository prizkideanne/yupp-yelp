import { useEffect, useState } from "react";
import api from "../../api/api";
import BusinessList from "./components/BusinessList";
import Filters from "./components/Filters";
import Maps from "./components/Maps/Index";
import SearchHeader from "./components/SearchHeader";

function Home() {
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [businesses, setBusinesses] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [sortBy, setSortBy] = useState({
    title: "Best Match",
    value: "best_match",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [region, setRegion] = useState({ longitude: 0, latitude: 0 });
  const [location, setLocation] = useState("San Francisco");
  const [term, setTerm] = useState("Restaurant");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const getInitialData = async () => {
      return api.get(
        `/businesses/search?&location=${encodeURI(location)}&term=${encodeURI(
          term
        )}&limit=10&offset=${offset}&sort_by=${sortBy.value}${
          priceFilter.length > 0 ? `&price=${priceFilter.join(",")}` : ""
        }`
      );
    };

    getInitialData()
      .then(({ data }) => {
        setBusinesses(data.businesses);
        setTotalPages(Math.ceil(data.total / 10));
        setRegion(data.region.center);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("error initial data", err);
        setIsLoading(false);
      });
  }, [offset]);

  const onClickPriceFilter = (price) => {
    if (priceFilter.includes(price)) {
      const newPrice = [...priceFilter];
      const priceIndex = newPrice.findIndex((value) => value === price);
      newPrice.splice(priceIndex, 1);
      setPriceFilter(newPrice);
    } else {
      setPriceFilter((previousPrice) => [...previousPrice, price]);
    }
  };

  const onApplyFilters = async () => {
    setIsLoading(true);

    await api
      .get(
        `/businesses/search?&location=${encodeURI(location)}&term=${encodeURI(
          term
        )}&limit=10&offset=0&sort_by=${sortBy.value}${
          priceFilter.length > 0 ? `&price=${priceFilter.join(",")}` : ""
        }`
      )
      .then(({ data }) => {
        setOffset(0);
        setBusinesses(data.businesses);
        setTotalPages(Math.ceil(data.total / 10));
        setRegion(data.region.center);

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("error apply filter", err);
        setIsLoading(false);
      });
  };

  const onHandleNext = () => setOffset((prevOffset) => prevOffset + 10);
  const onHandlePrevious = () =>
    setOffset((prevOffset) => Math.max(0, prevOffset - 10));

  const onSearch = async () => {
    setIsLoading(true);
    await api
      .get(
        `/businesses/search?limit=10&offset=0&location=${encodeURI(
          location
        )}&term=${encodeURI(term)}`
      )
      .then(({ data }) => {
        console.log(data);
        setErrorMessage("");
        setOffset(0);
        setBusinesses(data.businesses);
        setTotalPages(Math.ceil(data.total / 10));
        setRegion(data.region.center);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("error search", err);
        if (err.response.data.error.code === "LOCATION_NOT_FOUND") {
          setErrorMessage(
            "Sorry, we don't cover the location you are looking for."
          );
        }
        setIsLoading(false);
      });
  };

  return (
    <div>
      <SearchHeader
        onSearch={onSearch}
        location={location}
        setLocation={setLocation}
        setTerm={setTerm}
        term={term}
      />
      <div className="ml-5 flex flex-row space-x-4 relative ">
        <Filters
          onApplyFilters={onApplyFilters}
          onClickPriceFilter={onClickPriceFilter}
          priceFilter={priceFilter}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        <BusinessList
          isLoading={isLoading}
          businesses={businesses}
          offset={offset}
          totalPages={totalPages}
          handleNext={onHandleNext}
          handlePrevious={onHandlePrevious}
          errorMessage={errorMessage}
        />
        <div className="h-[calc(100vh-80px)] flex-1 sticky top-20">
          <Maps businesses={businesses} region={region} />
        </div>
      </div>
    </div>
  );
}

export default Home;

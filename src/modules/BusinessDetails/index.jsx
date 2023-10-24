import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../api/api";
import ImageSlider from "./components/ImageSlider";
import BusinessInfo from "./components/BusinessInfo";
import ReviewCard from "./components/ReviewCard";

function BusinessDetails() {
  let { alias } = useParams();
  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInitialData = async () => {
      return api.get("/businesses/" + alias);
    };

    const getReviews = async () => {
      return api.get(
        "/businesses/" + alias + "/reviews?limit=10&offset=0&sort_by=newest"
      );
    };

    getReviews()
      .then(({ data }) => {
        console.log("data", data.reviews);
        setReviews(data.reviews);
        getInitialData()
          .then(({ data }) => {
            setBusiness(data);
            setIsLoading(false);
          })
          .catch((err) => console.error("error initial data", err));
      })
      .catch((err) => console.error("error review data", err));
  }, [alias]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="h-20 border-b border-red-300 w-full flex items-center justify-center">
        <h1 className="font-bold text-3xl">{business.name}</h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full flex flex-row space-x-5 relative">
          <div className="flex flex-col space-y-5 w-[700px] sticky top-0 pt-5">
            <ImageSlider photos={business.photos} />
            <BusinessInfo business={business} />
          </div>
          <div className="flex flex-col mt-5 w-full">
            <p className="font-medium text-xl mb-5">Reviews</p>
            <div className="flex flex-col space-y-5">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessDetails;

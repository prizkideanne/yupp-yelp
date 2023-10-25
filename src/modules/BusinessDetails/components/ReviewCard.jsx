import dayjs from "dayjs";
import StarRating from "../../Home/components/BusinessCard/StarRating";

function ReviewCard({ review }) {
  const user = review.user;

  return (
    <div className="border border-red-300 rounded-lg p-4">
      {/* user info */}
      <div className="flex flex-row justify-between items-center border-b border-red-300">
        <div className="flex flex-row space-x-4 items-center pb-3">
          <img
            src={user.image_url}
            alt="Profile"
            className="w-12 h-12 object-fill  border border-red-300 rounded-full text-xs"
          />
          <p>{user.name}</p>
        </div>
        <p>{dayjs(review.time_created).format("DD MMMM YYYY")}</p>
      </div>
      {/* review */}
      <div className="flex flex-col space-y-2 mt-2">
        <StarRating rating={review.rating} />
        <p>{review.text}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
